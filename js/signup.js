// Simple signup form handling
const signupForm = document.getElementById('signupForm');

signupForm?.addEventListener('submit', (event) => {
  event.preventDefault();

  const data = {
    fullName: document.getElementById('fullName')?.value.trim(),
    phone: document.getElementById('phone')?.value.trim(),
    email: document.getElementById('email')?.value.trim(),
    password: document.getElementById('password')?.value,
    company: document.getElementById('company')?.value.trim(),
    agency: document.querySelector('input[name="agency"]:checked')?.value,
  };

  // TODO: Replace this with real form submission logic (API call, validation, etc.)

  // Redirect to account page after signup
  window.location.href = 'account.html';
});
