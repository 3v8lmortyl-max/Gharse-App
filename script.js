
const app = document.getElementById('app');
const ADMIN_USERNAME = "yourUsername";
const ADMIN_PASSWORD = "yourPassword";

function navigateTo(page) {
  if (page === 'home') {
    app.innerHTML = `<h2>Welcome to GharSe</h2><p>Find or offer hyperlocal services near you.</p>`;
  } else if (page === 'services') {
    app.innerHTML = `<h2>🛠️ Services</h2><p>Post or find services like tuition, electricians, etc.</p>`;
  } else if (page === 'rentals') {
    app.innerHTML = `<h2>🏡 Rentals</h2><p>List or discover rental properties or items.</p>`;
  } else if (page === 'profile') {
    app.innerHTML = `<h2>👤 Your Profile</h2><p>View and update your profile, contact details, and photos.</p>`;
  } else if (page === 'admin') {
    promptAdminLogin();
  }
}

function promptAdminLogin() {
  const user = prompt("Enter Admin Username:");
  const pass = prompt("Enter Admin Password:");
  if (user === ADMIN_USERNAME && pass === ADMIN_PASSWORD) {
    app.innerHTML = `<h2>⚙️ Admin Panel</h2>
      <p>Welcome, admin! Here you can manage themes, content, and users.</p>`;
  } else {
    alert("Access Denied");
  }
}

document.getElementById('search').addEventListener('input', function(e) {
  const query = e.target.value.toLowerCase();
  app.innerHTML = `<p>Showing results for: <strong>${query}</strong></p>`;
});
