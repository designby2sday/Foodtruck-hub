// ✅ Global Fake User Data for Testing
let userData = {
    currentPlan: localStorage.getItem("currentPlan") || "Pro",
    isLoggedIn: true,
    isPaid: true
};

// ✅ Manage Find Events Nav Links (Fake Login/Paywall Logic)
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("a.find-events-link").forEach(link => {
    if (!userData.isLoggedIn) {
      link.href = "login.html";
    } else if (userData.isLoggedIn && !userData.isPaid) {
      link.href = "paywall.html";
    } else {
      link.href = "find-events.html";
    }
  });
});
