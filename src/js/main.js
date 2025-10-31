const form = document.getElementById('signup');
const message = document.getElementById('message');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  
  const firstname = document.getElementById('firstname').value.trim();
  const lastname = document.getElementById('lastname').value.trim();
  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value.trim();
  const confirmPassword = document.getElementById('confirmpassword').value.trim();

  if(password !== confirmPassword) {
    message.textContent = "Passwords do not match";
    return;
  }

});