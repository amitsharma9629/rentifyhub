 
window.addEventListener('DOMContentLoaded', function() {
  const user = JSON.parse(localStorage.getItem('rentifyUser'));
  
  if (!user || !user.name) {
  
    window.location.href = 'login.html';
    return;
  }

  
  loadUserProfile(user);
 
  updateNavigation();
});

 
function loadUserProfile(user) {
 
  document.getElementById('displayName').textContent = user.name || 'User';
  document.getElementById('userType').textContent = user.usertype || 'Renter';
  document.getElementById('userCity').textContent = '📍 ' + (user.city || 'City');
  
 
  document.getElementById('displayEmail').textContent = user.email || 'N/A';
  document.getElementById('displayPhone').textContent = user.phone || 'N/A';
  
 
  const joinDate = new Date(user.joinDate);
  document.getElementById('joinDate').textContent = 'Member since ' + joinDate.toLocaleDateString('en-US', { year: 'numeric', month: 'short' });
  document.getElementById('joinDateFull').textContent = joinDate.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
   
  const initials = user.name.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2);
  document.getElementById('avatarInitial').textContent = initials;
  
  
  document.getElementById('edit-name').value = user.name || '';
  document.getElementById('edit-email').value = user.email || '';
  document.getElementById('edit-phone').value = user.phone || '';
  document.getElementById('edit-usertype').value = user.usertype || '';
  document.getElementById('edit-city').value = user.city || '';
  document.getElementById('edit-bio').value = user.bio || '';
}
 
function updateNavigation() {
  const user = JSON.parse(localStorage.getItem('rentifyUser'));
  const navCta = document.getElementById('navCta');
  
  if (user && user.name) {
    const profileLink = document.createElement('div');
    profileLink.className = 'nav-user-menu';
    profileLink.innerHTML = `
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
    `;
    navCta.innerHTML = '';
    navCta.appendChild(profileLink);
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

 
document.addEventListener('click', function(event) {
  const userMenu = document.querySelector('.nav-user-menu');
  const dropdown = document.getElementById('userDropdown');
  
  if (userMenu && !userMenu.contains(event.target) && dropdown) {
    dropdown.classList.remove('show');
  }
});
 
function switchTab(tabName) {
 
  const tabs = document.querySelectorAll('.tab-content');
  tabs.forEach(tab => tab.classList.remove('active'));
  
 
  const menuItems = document.querySelectorAll('.menu-item');
  menuItems.forEach(item => item.classList.remove('active'));
  
 
  const selectedTab = document.getElementById(tabName);
  if (selectedTab) {
    selectedTab.classList.add('active');
  }
  
 
  event.target.classList.add('active');
  
   
  window.scrollTo(0, 0);
}

 
const editProfileForm = document.getElementById('editProfileForm');
if (editProfileForm) {
  editProfileForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
   
    const allErrors = document.querySelectorAll('.error-msg');
    allErrors.forEach(e => {
      e.textContent = '';
      e.classList.remove('show');
    });
    
    let isValid = true;
    
    const name = document.getElementById('edit-name').value.trim();
    if (!name) {
      showProfileError('name', 'Full name is required');
      isValid = false;
    } else if (name.length < 3) {
      showProfileError('name', 'Full name must be at least 3 characters');
      isValid = false;
    }
    
 
    const email = document.getElementById('edit-email').value.trim();
    if (!email || !isValidProfileEmail(email)) {
      showProfileError('email', 'Please enter a valid email');
      isValid = false;
    }
 
    const phone = document.getElementById('edit-phone').value.trim();
    if (!phone || !isValidProfilePhone(phone)) {
      showProfileError('phone', 'Please enter a valid phone number');
      isValid = false;
    }
    
   
    const city = document.getElementById('edit-city').value.trim();
    if (!city) {
      showProfileError('city', 'City is required');
      isValid = false;
    }
     
    const usertype = document.getElementById('edit-usertype').value;
    if (!usertype) {
      showProfileError('usertype', 'Please select user type');
      isValid = false;
    }
    
    if (isValid) {
       
      const user = JSON.parse(localStorage.getItem('rentifyUser'));
      user.name = name;
      user.email = email;
      user.phone = phone;
      user.city = city;
      user.usertype = usertype;
      user.bio = document.getElementById('edit-bio').value.trim();
      
      localStorage.setItem('rentifyUser', JSON.stringify(user));
     
      loadUserProfile(user);
      updateNavigation();
      
      
      showProfileSuccess('Changes saved successfully!');
      
     
      setTimeout(() => {
        switchTab('overview');
      }, 1500);
    }
  });
}

 
function isValidProfileEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function isValidProfilePhone(phone) {
  const phoneRegex = /^[6-9]\d{9}$/;
  return phoneRegex.test(phone.replace(/\s+/g, ''));
}

function showProfileError(fieldId, message) {
  const errorElement = document.getElementById(`error-${fieldId}`);
  if (errorElement) {
    errorElement.textContent = message;
    errorElement.classList.add('show');
  }
}

function showProfileSuccess(message) {
  const toast = document.createElement('div');
  toast.className = 'toast show';
  toast.textContent = '✓ ' + message;
  document.body.appendChild(toast);
  
  setTimeout(() => {
    toast.remove();
  }, 3000);
}

 
function changeAvatar() {
  alert('Avatar upload feature would be implemented here.');
}
 
document.querySelector('.btn-change-password')?.addEventListener('click', function() {
  alert('Password change form would be shown here.');
});

 
document.querySelector('.btn-enable-2fa')?.addEventListener('click', function() {
  alert('Two-factor authentication setup would be shown here.');
});
 
function logout() {
  if (confirm('Are you sure you want to logout?')) {
    localStorage.removeItem('rentifyUser');
    window.location.href = 'login.html';
  }
}

 
const urlParams = new URLSearchParams(window.location.search);
const tabParam = urlParams.get('tab');
if (tabParam) {
  const tabContent = document.getElementById(tabParam);
  if (tabContent) {
    setTimeout(() => {
      document.querySelectorAll('.tab-content').forEach(t => t.classList.remove('active'));
      tabContent.classList.add('active');
      
      document.querySelectorAll('.menu-item').forEach(item => item.classList.remove('active'));
      document.querySelector(`[onclick="switchTab('${tabParam}')"]`)?.classList.add('active');
    }, 100);
  }
}
