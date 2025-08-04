// scripts/app.js

fetch('http://localhost:5000/api/events')
  .then(response => response.json())
  .then(events => {
    const container = document.getElementById('event-list');
    container.innerHTML = events.map(evt => `
      <div class="event-card">
        <h2>${evt.name}</h2>
        <p>${evt.date} – ${evt.location}</p>
      </div>
    `).join('');
  })
  .catch(err => {
    console.error('Failed to load events:', err);
  });
