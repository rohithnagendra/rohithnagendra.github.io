document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.collapsible').forEach(function(button, i) {
    const content = button.nextElementSibling;
    const idx = i + 1;
    const id = 'content-' + idx;
    const btnId = 'btn-' + idx;

    if (!button.id) button.id = btnId;
    if (!content.id) content.id = id;

    button.setAttribute('aria-expanded', button.getAttribute('aria-expanded') || 'false');
    button.setAttribute('aria-controls', id);
    content.setAttribute('role', 'region');
    content.setAttribute('aria-labelledby', btnId);

    // Initialize collapsed state for any pre-opened content
    if (button.getAttribute('aria-expanded') === 'true') {
      content.style.maxHeight = content.scrollHeight + 'px';
    } else {
      content.style.maxHeight = null;
    }

    button.addEventListener('click', function() {
      const expanded = this.getAttribute('aria-expanded') === 'true';
      this.setAttribute('aria-expanded', String(!expanded));
      if (expanded) {
        content.style.maxHeight = null;
      } else {
        content.style.maxHeight = content.scrollHeight + 'px';
      }
    });
  });
});
