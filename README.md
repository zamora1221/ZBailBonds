# Z Bail Bonds — Redesign

A static, multi-page redesign of the Z Bail Bonds Wix site. Plain HTML/CSS/JS —
no build step, no framework. Open `index.html` in a browser, or open the whole
folder as a project in PyCharm and use its built-in browser preview (click the
browser icon in the gutter of any `.html` file).

## Structure

```
index.html            Home
contact.html          Contact form (Jotform embed)
check-in.html         Bond check-in form (Jotform embed)
post-a-bond.html      Steps to post a bond
cosigner-forms.html   Cosigner / indemnitor application
defendant-forms.html  Defendant intake form
bond-payment.html     Payment info + placeholder "Pay Now" button
policies.html         Accordion of agency policies
css/style.css         Shared stylesheet (all design tokens live at the top)
js/main.js            Shared behavior: policies accordion
```

## About the content

The homepage copy is scraped directly from the live site. The Wix site renders
its inner pages (Check-In, Cosigner Forms, etc.) via JavaScript, which blocks
scraping, so those pages were rebuilt using the same structure/fields as the
sister-site template Z Bail Bonds is built on, restyled to match. If you have
the exact original copy for any of those pages, replace the placeholder text —
the HTML structure will hold.

## Forms

Every form on the site is now a Jotform embed — including Contact.

**Contact** (`contact.html`) uses Jotform's script-based "jsform" embed,
which injects the form directly into the page:

```html
<div class="jotform-embed" style="padding:8px;">
  <script type="text/javascript" src="https://form.jotform.com/jsform/261846831712056"></script>
</div>
```

**Check-In, Cosigner Forms, Defendant Forms, and Bond Payment** use
Jotform's iframe embed instead, each with a placeholder ID:

```html
<div class="jotform-embed">
  <iframe id="JotFormIFrame-YOUR_JOTFORM_ID"
          title="Check-In Form"
          src="https://form.jotform.com/YOUR_JOTFORM_ID"
          style="width:100%; min-width:100%; height:539px; border:none;"
          scrolling="no">
  </iframe>
</div>
<script src="https://cdn.jotfor.ms/s/umd/latest/for-form-embed-handler.js"></script>
<script>window.jotformEmbedHandler("iframe[id='JotFormIFrame-YOUR_JOTFORM_ID']", "https://form.jotform.com/");</script>
```

To wire up a real form on those pages:

1. Build the form in Jotform.
2. Open it → **Publish** → **Embed** → copy the form ID out of the embed
   snippet Jotform gives you (it's the string after `form.jotform.com/`).
3. Replace every `YOUR_JOTFORM_ID` in that page with your real ID (there are
   three places it appears: the iframe `id`, the `src`, and the handler
   script at the bottom).
4. Adjust the iframe `height` if Jotform's auto-resize doesn't quite match —
   the embed handler script normally handles this for you.

The Bond Payment page is set up the same way, since Jotform can build
payment forms directly (card fields, Stripe/Square/PayPal integrations,
etc.) — just build that as a Jotform payment form instead of a regular one.

`js/main.js` now only powers the Policies accordion — no form-handling
JavaScript is needed anywhere since Jotform handles submissions itself.

## Editing the design

Every color, font, and spacing token lives at the top of `css/style.css`
under `:root`. Change a value there and it updates across all pages.

## SEO (added)
- Every page has a unique title, meta description, canonical URL and Open Graph tags (domain: https://zbailbonds.com).
- index.html contains LocalBusiness JSON-LD (name, phone, address, 24/7 hours, service counties). faq.html contains FAQPage JSON-LD.
- sitemap.xml and robots.txt are in the site root. Submit https://zbailbonds.com/sitemap.xml in Google Search Console.
- When you change the phone, address, hours or counties, update the JSON-LD in index.html too.
