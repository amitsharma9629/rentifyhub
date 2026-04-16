 
const form = document.getElementById('signupForm');
const passwordInput = document.getElementById('password');
const confirmPasswordInput = document.getElementById('confirmpassword');
const strengthBar = document.getElementById('strengthBar');
const strengthText = document.getElementById('strengthText');

 
function checkPasswordStrength(password) {
  let strength = 0;
  if (password.length >= 8) strength++;
  if (password.length >= 12) strength++;
  if (/[a-z]/.test(password) && /[A-Z]/.test(password)) strength++;
  if (/[0-9]/.test(password)) strength++;
  if (/[^a-zA-Z0-9]/.test(password)) strength++;
  return strength;
}

 
passwordInput?.addEventListener('input', function() {
  const strength = checkPasswordStrength(this.value);
  const fillWidth = (strength / 5) * 100;
  
  if (strengthBar) {
    strengthBar.style.width = fillWidth + '%';
    
    if (strength <= 1) {
      strengthBar.style.backgroundColor = '#C0392B';
      strengthText.textContent = 'Weak';
    } else if (strength <= 2) {
      strengthBar.style.backgroundColor = '#F39C12';
      strengthText.textContent = 'Fair';
    } else if (strength <= 3) {
      strengthBar.style.backgroundColor = '#F1C40F';
      strengthText.textContent = 'Good';
    } else if (strength <= 4) {
      strengthBar.style.backgroundColor = '#3498DB';
      strengthText.textContent = 'Strong';
    } else {
      strengthBar.style.backgroundColor = '#2E7D57';
      strengthText.textContent = 'Very Strong';
    }
  }
});

 
function togglePassword() {
  const password = document.getElementById('password');
  const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
  password.setAttribute('type', type);
}
 
function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

 
function isValidPhone(phone) {
  const phoneRegex = /^[6-9]\d{9}$/;
  return phoneRegex.test(phone.replace(/\s+/g, ''));
}

 
function showError(fieldId, message) {
  const errorElement = document.getElementById(`error-${fieldId}`);
  if (errorElement) {
    errorElement.textContent = message;
    errorElement.classList.add('show');
  }
}

 
function clearError(fieldId) {
  const errorElement = document.getElementById(`error-${fieldId}`);
  if (errorElement) {
    errorElement.textContent = '';
    errorElement.classList.remove('show');
  }
}

 
form?.addEventListener('submit', function(e) {
  e.preventDefault();

 
  const allErrors = document.querySelectorAll('.error-msg');
  allErrors.forEach(e => {
    e.textContent = '';
    e.classList.remove('show');
  });

  let isValid = true;

 
  const fullname = document.getElementById('fullname').value.trim();
  if (!fullname) {
    showError('fullname', 'Full name is required');
    isValid = false;
  } else if (fullname.length < 3) {
    showError('fullname', 'Full name must be at least 3 characters');
    isValid = false;
  } else {
    clearError('fullname');
  }

   
  const email = document.getElementById('email').value.trim();
  if (!email) {
    showError('email', 'Email is required');
    isValid = false;
  } else if (!isValidEmail(email)) {
    showError('email', 'Please enter a valid email address');
    isValid = false;
  } else {
    clearError('email');
  }

 
  const phone = document.getElementById('phone').value.trim();
  if (!phone) {
    showError('phone', 'Phone number is required');
    isValid = false;
  } else if (!isValidPhone(phone)) {
    showError('phone', 'Please enter a valid phone number');
    isValid = false;
  } else {
    clearError('phone');
  }

 
  const usertype = document.getElementById('usertype').value;
  if (!usertype) {
    showError('usertype', 'Please select user type');
    isValid = false;
  } else {
    clearError('usertype');
  }
 
  const city = document.getElementById('city').value.trim();
  if (!city) {
    showError('city', 'City is required');
    isValid = false;
  } else if (city.length < 2) {
    showError('city', 'City name is too short');
    isValid = false;
  } else {
    clearError('city');
  }

 
  const password = document.getElementById('password').value;
  if (!password) {
    showError('password', 'Password is required');
    isValid = false;
  } else if (password.length < 8) {
    showError('password', 'Password must be at least 8 characters');
    isValid = false;
  } else {
    clearError('password');
  }

 
  const confirmPassword = document.getElementById('confirmpassword').value;
  if (!confirmPassword) {
    showError('confirmpassword', 'Please confirm your password');
    isValid = false;
  } else if (confirmPassword !== password) {
    showError('confirmpassword', 'Passwords do not match');
    isValid = false;
  } else {
    clearError('confirmpassword');
  }

 
  const terms = document.getElementById('terms').checked;
  if (!terms) {
    showError('terms', 'You must agree to the terms and conditions');
    isValid = false;
  } else {
    clearError('terms');
  }

  
  if (isValid) {
    showSuccessMessage();
    
    console.log('Form is valid, sending data:', {
      fullname,
      email,
      phone,
      usertype,
      city,
      password: '***'
    });
    
   
    setTimeout(() => {
      form.reset();
      strengthBar.style.width = '0%';
      strengthText.textContent = '';
    }, 2000);
  }
});

 
function showSuccessMessage() {
 
  const user = {
    name: document.getElementById('fullname').value.trim(),
    email: document.getElementById('email').value.trim(),
    phone: document.getElementById('phone').value.trim(),
    usertype: document.getElementById('usertype').value,
    city: document.getElementById('city').value.trim(),
    bio: '',
    joinDate: new Date().toISOString(),
    createdAt: new Date().toISOString()
  };
  
  localStorage.setItem('rentifyUser', JSON.stringify(user));
  localStorage.setItem('isLoggedIn', 'true');

  const toast = document.createElement('div');
  toast.className = 'toast show';
  toast.textContent = '✓ Account created successfully! Redirecting...';
  document.body.appendChild(toast);

  setTimeout(() => {
    setTimeout(() => {
      window.location.href = 'profile.html';
    }, 1500);
  }, 500);
}

 
document.getElementById('fullname')?.addEventListener('blur', function() {
  if (!this.value.trim()) {
    showError('fullname', 'Full name is required');
  } else if (this.value.trim().length < 3) {
    showError('fullname', 'Full name must be at least 3 characters');
  } else {
    clearError('fullname');
  }
});

document.getElementById('email')?.addEventListener('blur', function() {
  if (!this.value.trim()) {
    showError('email', 'Email is required');
  } else if (!isValidEmail(this.value.trim())) {
    showError('email', 'Please enter a valid email address');
  } else {
    clearError('email');
  }
});

document.getElementById('phone')?.addEventListener('blur', function() {
  if (!this.value.trim()) {
    showError('phone', 'Phone number is required');
  } else if (!isValidPhone(this.value.trim())) {
    showError('phone', 'Please enter a valid phone number');
  } else {
    clearError('phone');
  }
});

document.getElementById('city')?.addEventListener('blur', function() {
  if (!this.value.trim()) {
    showError('city', 'City is required');
  } else if (this.value.trim().length < 2) {
    showError('city', 'City name is too short');
  } else {
    clearError('city');
  }
});

document.getElementById('password')?.addEventListener('blur', function() {
  if (!this.value) {
    showError('password', 'Password is required');
  } else if (this.value.length < 8) {
    showError('password', 'Password must be at least 8 characters');
  } else {
    clearError('password');
  }
});

document.getElementById('confirmpassword')?.addEventListener('blur', function() {
  const password = document.getElementById('password').value;
  if (!this.value) {
    showError('confirmpassword', 'Please confirm your password');
  } else if (this.value !== password) {
    showError('confirmpassword', 'Passwords do not match');
  } else {
    clearError('confirmpassword');
  }
});

 
document.querySelectorAll('.social-btn')?.forEach(btn => {
  btn.addEventListener('click', function(e) {
    e.preventDefault();
    const provider = this.classList.contains('google') ? 'Google' : 'Apple';
    alert(`Sign up with ${provider} would be implemented here with OAuth.`);
  });
});
