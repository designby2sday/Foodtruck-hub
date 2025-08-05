// TEMP: Simulated user state
const user = {
  isLoggedIn: true,
  isPremium: false
};

function handleFindEventsClick(e) {
  e.preventDefault();

  if (!user.isLoggedIn) {
    window.location.href = 'login.html';
  } else if (!user.isPremium) {
    window.location.href = 'find-events-upgrade.html';
  } else {
    window.location.href = 'find-events.html';
  }
}
