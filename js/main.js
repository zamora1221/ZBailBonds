/* =========================================================
   Z BAIL BONDS — shared behavior
   Forms are handled by Jotform embeds directly on each page now,
   so the only shared behavior left here is the Policies accordion.
   ========================================================= */

document.querySelectorAll('.acc-trigger').forEach(function (trigger) {
  trigger.addEventListener('click', function () {
    const item = trigger.closest('.acc-item');
    const panel = item.querySelector('.acc-panel');
    const isOpen = item.classList.contains('open');

    document.querySelectorAll('.acc-item.open').forEach(function (openItem) {
      if (openItem !== item) {
        openItem.classList.remove('open');
        openItem.querySelector('.acc-panel').style.maxHeight = null;
      }
    });

    if (isOpen) {
      item.classList.remove('open');
      panel.style.maxHeight = null;
    } else {
      item.classList.add('open');
      panel.style.maxHeight = panel.scrollHeight + 'px';
    }
  });
});
