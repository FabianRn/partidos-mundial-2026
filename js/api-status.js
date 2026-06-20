document.addEventListener('DOMContentLoaded', () => {
  renderApiStatus();
});

function renderApiStatus() {
  const container = document.getElementById('api-status');
  if (!container) return;

  const today = new Date();
  const updateDate = new Date(fifaData.today + "T12:00:00");
  const diffMinutes = Math.floor((today - updateDate) / (1000 * 60));

  let statusClass, statusText;

  if (diffMinutes < 5) {
    statusClass = 'status-live';
    statusText = 'En vivo';
  } else if (diffMinutes < 60) {
    statusClass = 'status-recent';
    statusText = `Actualizado hace ${diffMinutes} min`;
  } else if (diffMinutes < 1440) {
    const hours = Math.floor(diffMinutes / 60);
    statusText = `Actualizado hace ${hours}h`;
    statusClass = 'status-ok';
  } else {
    const days = Math.floor(diffMinutes / 1440);
    statusText = `Actualizado hace ${days}d`;
    statusClass = 'status-old';
  }

  container.innerHTML = `<span class="status-dot ${statusClass}"></span> ${statusText}`;
}
