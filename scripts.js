// Highlight active nav item
document.addEventListener('DOMContentLoaded', () => {
  const path = location.pathname.split('/').pop();
  document.querySelectorAll('.nav-link').forEach(a => {
    if (a.getAttribute('href') === path) a.classList.add('active');
  });
});

// Optional welcome modal hook (remove if not used)
document.addEventListener('DOMContentLoaded', function () {
  const welcome = document.getElementById('welcomeModal');
  if (welcome) {
    const m = new bootstrap.Modal(welcome, { backdrop: 'static', keyboard: false });
    if (!sessionStorage.getItem('shownWelcome')) { m.show(); sessionStorage.setItem('shownWelcome','1'); }
  }
});

// Mock donation receipt helper
window.showReceipt = function (text) { alert(text); }