fetch('http://localhost:5000/api/events')
  .then(res => res.json())
  .then(data => {
    const list = document.getElementById('event-list');
    list.innerHTML = data.map(evt => `
      <div class="event-card">
        <h2>${evt.name}</h2>
        <p>${evt.date} – ${evt.location}</p>
        <p>Status: ${evt.status}</p>
      </div>
    `).join('');
  })
  .catch(err => {
    console.error('Error fetching events:', err);
  });
