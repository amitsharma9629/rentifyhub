 

window.addEventListener('DOMContentLoaded', function() {
  updateNavigationForAllPages();
});

function updateNavigationForAllPages() {
  const user = JSON.parse(localStorage.getItem('rentifyUser'));
  const navCta = document.querySelector('.nav-cta');
  
  if (!navCta) return;
  
  if (user && user.name) {
    
    navCta.innerHTML = `
      <div class="nav-user-menu">
        <button class="btn-user-profile" onclick="toggleUserMenu()">
          <span class="user-avatar">${user.name.charAt(0).toUpperCase()}</span>
          <span class="user-name">${user.name.split(' ')[0]}</span>
          <span class="dropdown-arrow">▼</span>
        </button>
        <div class="user-dropdown" id="userDropdown">
          <a href="profile.html" class="dropdown-item">View Profile</a>
          <a href="profile.html?tab=edit" class="dropdown-item">Edit Profile</a>
          <a href="profile.html?tab=saved" class="dropdown-item">Saved Properties</a>
          <hr>
          <button onclick="logout()" class="dropdown-item logout">Logout</button>
        </div>
      </div>
    `;
  } else {
 
    navCta.innerHTML = `
      <button class="btn-ghost" onclick="window.location.href='login.html'">Sign In</button>
      <button class="btn-primary" onclick="window.location.href='signup.html'">Sign Up</button>
    `;
  }
}

function toggleUserMenu() {
  const dropdown = document.getElementById('userDropdown');
  if (dropdown) {
    dropdown.classList.toggle('show');
  }
}

function logout() {
  if (confirm('Are you sure you want to logout?')) {
    localStorage.removeItem('rentifyUser');
    localStorage.removeItem('isLoggedIn');
    window.location.href = 'login.html';
  }
}

 
document.addEventListener('click', function(event) {
  const userMenu = document.querySelector('.nav-user-menu');
  const dropdown = document.getElementById('userDropdown');
  
  if (userMenu && !userMenu.contains(event.target) && dropdown) {
    dropdown.classList.remove('show');
  }
});
