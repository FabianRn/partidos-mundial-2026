document.addEventListener('DOMContentLoaded', () => {
  initUpdateBanner();
  initNavigation();
  initPage();
});

function initUpdateBanner() {
  const banner = document.getElementById('update-banner');
  if (!banner) return;

  const today = new Date();
  const updateDate = new Date(fifaData.today + "T12:00:00");
  const diffDays = Math.floor((today - updateDate) / (1000 * 60 * 60 * 24));

  if (diffDays > 0) {
    banner.className = 'update-banner outdated';
    const dateStr = updateDate.toLocaleDateString('es', { day: 'numeric', month: 'long', year: 'numeric' });
    banner.innerHTML = `Última actualización: ${dateStr} (hace ${diffDays} día${diffDays > 1 ? 's' : ''}). Usa <code>bash update.sh</code> para actualizar marcadores.`;
  } else if (diffDays === 0) {
    banner.className = 'update-banner up-to-date';
    banner.textContent = 'Marcadores actualizados al día de hoy.';
    banner.style.display = 'none';
  } else {
    banner.style.display = 'none';
  }
}

function initNavigation() {
  const current = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.header-nav a').forEach(a => {
    const href = a.getAttribute('href');
    if (href === current || (current === '' && href === 'index.html')) {
      a.classList.add('active');
    }
  });
}

function initPage() {
  const page = document.body.dataset.page;

  if (page === 'groups') {
    GroupRenderer.render();
  }

  if (page === 'knockout') {
    BracketRenderer.render();
  }
}
