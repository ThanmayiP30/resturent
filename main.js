// /js/main.js
// /js/main.js
document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.getElementById('loginForm');
    const signupForm = document.getElementById('signupForm');
  
    loginForm.addEventListener('submit', function (event) {
      event.preventDefault();
  
      const loginUsername = document.getElementById('loginUsername').value;
      const loginPassword = document.getElementById('loginPassword').value;
  
      // For simplicity, just display an alert
      alert(`Login successful!\nUsername: ${loginUsername}`);
    });
  
    signupForm.addEventListener('submit', function (event) {
      event.preventDefault();
  
      const signupUsername = document.getElementById('signupUsername').value;
      const signupPassword = document.getElementById('signupPassword').value;
  
      // For simplicity, just display an alert
      alert(`Sign up successful!\nUsername: ${signupUsername}`);
    });
  });
  
document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('form');
  
    form.addEventListener('submit', function (event) {
      event.preventDefault();
  
      // Get form data
      const name = document.getElementById('name').value;
      const date = document.getElementById('date').value;
      const time = document.getElementById('time').value;
  
      // Display confirmation message
      window.location.href = `reservation.html?name=${name}&date=${date}&time=${time}`;
    });
  });
  