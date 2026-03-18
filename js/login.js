const loginForm = document.getElementById('loginForm');
const loginBtn = document.getElementById('loginBtn');
const loginEmail = document.getElementById('loginEmail');
const loginPassword = document.getElementById('loginPassword');

function updateLoginButton() {
  const filled = loginEmail.value.trim() !== '' && loginPassword.value.trim() !== '';

  loginBtn.disabled = !filled;
  loginBtn.classList.toggle('btn-primary', filled);
  loginBtn.classList.toggle('btn-secondary', !filled);
}

loginEmail.addEventListener('input', updateLoginButton);
loginPassword.addEventListener('input', updateLoginButton);

loginForm.addEventListener('submit', (event) => {
  event.preventDefault();

  // TODO: Replace with real authentication logic / API call
  window.location.href = 'account.html';
});
