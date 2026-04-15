// Form Validation & Interactivity
const loginForm = document.getElementById('loginForm');

// Email or Phone validation
function isValidEmailOrPhone(input) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phoneRegex = /^[6-9]\d{9}$/;
  const cleanInput = input.replace(/[\s\-\+]/g, '');
  return emailRegex.test(input) || phoneRegex.test(cleanInput);
}

// Show error message
function showLoginError(fieldId, message) {
  const errorElement = document.getElementById(`error-${fieldId}`);
  if (errorElement) {
    errorElement.textContent = message;
    errorElement.classList.add('show');
  }
}

// Clear error message
function clearLoginError(fieldId) {
  const errorElement = document.getElementById(`error-${fieldId}`);
  if (errorElement) {
    errorElement.textContent = '';
    errorElement.classList.remove('show');
  }
}

// Toggle password visibility
function toggleLoginPassword() {
  const password = document.getElementById('password');
  const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
  password.setAttribute('type', type);
}

// Form submission
loginForm?.addEventListener('submit', function(e) {
  e.preventDefault();

  // Clear all previous errors
  const allErrors = document.querySelectorAll('.error-msg');
  allErrors.forEach(e => {
    e.textContent = '';
    e.classList.remove('show');
  });

  let isValid = true;

  // Validate Email or Phone
  const email = document.getElementById('email').value.trim();
  if (!email) {
    showLoginError('email', 'Email or phone number is required');
    isValid = false;
  } else if (!isValidEmailOrPhone(email)) {
    showLoginError('email', 'Please enter a valid email or phone number');
    isValid = false;
  } else {
    clearLoginError('email');
  }

  // Validate Password
  const password = document.getElementById('password').value;
  if (!password) {
    showLoginError('password', 'Password is required');
    isValid = false;
  } else {
    clearLoginError('password');
  }

  // If all validations pass
  if (isValid) {
    // Check if user exists in registered users
    const registeredUser = JSON.parse(localStorage.getItem('rentifyUser'));
    
    if (!registeredUser) {
      showLoginError('email', 'No account found. Please sign up first.');
      isValid = false;
      return;
    }

    // Check if email/phone matches
    const userEmail = registeredUser.email;
    const userPhone = registeredUser.phone;
    const inputIsEmail = email.includes('@');
    
    const emailMatches = inputIsEmail && email === userEmail;
    const phoneMatches = !inputIsEmail && email.replace(/\D/g, '') === userPhone.replace(/\D/g, '');

    if (!emailMatches && !phoneMatches) {
      showLoginError('email', 'Email or phone number not found in our records.');
      return;
    }

    // For demo purposes, accept any password (in production, this would verify against a hashed password)
    // Store the current login session
    const rememberMe = document.getElementById('remember').checked;
    
    if (rememberMe) {
      localStorage.setItem('rememberMe', 'true');
      localStorage.setItem('userEmail', email);
    } else {
      localStorage.removeItem('rememberMe');
      localStorage.removeItem('userEmail');
    }

    // Set last login
    registeredUser.lastLogin = new Date().toISOString();
    localStorage.setItem('rentifyUser', JSON.stringify(registeredUser));
    
    showLoginSuccess();
  }
});

// Show login success message
function showLoginSuccess() {
  const toast = document.createElement('div');
  toast.className = 'toast show';
  toast.textContent = '✓ Login successful! Redirecting...';
  document.body.appendChild(toast);

  setTimeout(() => {
    setTimeout(() => {
      window.location.href = 'profile.html';
    }, 1500);
  }, 500);
}

// Real-time validation on blur
document.getElementById('email')?.addEventListener('blur', function() {
  if (!this.value.trim()) {
    showLoginError('email', 'Email or phone number is required');
  } else if (!isValidEmailOrPhone(this.value.trim())) {
    showLoginError('email', 'Please enter a valid email or phone number');
  } else {
    clearLoginError('email');
  }
});

document.getElementById('password')?.addEventListener('blur', function() {
  if (!this.value) {
    showLoginError('password', 'Password is required');
  } else {
    clearLoginError('password');
  }
});

// Check if user was previously remembered
window.addEventListener('DOMContentLoaded', function() {
  const rememberMe = localStorage.getItem('rememberMe');
  const userEmail = localStorage.getItem('userEmail');
  
  if (rememberMe === 'true' && userEmail) {
    document.getElementById('email').value = userEmail;
    document.getElementById('remember').checked = true;
  }
});

// Social login buttons (placeholder)
document.querySelectorAll('.social-btn')?.forEach(btn => {
  btn.addEventListener('click', function(e) {
    e.preventDefault();
    const provider = this.classList.contains('google') ? 'Google' : 'Apple';
    alert(`Sign in with ${provider} would be implemented here with OAuth.`);
  });
});

// Forgot password handler
document.querySelector('.forgot-link')?.addEventListener('click', function(e) {
  e.preventDefault();
  alert('Password reset feature would be implemented here. You would receive an email with a reset link.');
});
