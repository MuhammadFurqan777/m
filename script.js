// Function for Login Validation
function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('errorMessage');
  
    // Basic Example Validation
    if (username === 'F24CSC040' && password === 'password123') {
      alert('Login Successful!');
      window.location.href = 'dashboard.html'; // Redirect to dashboard page
    } else {
      errorMessage.textContent = 'Invalid Username or Password. Please try again.';
      errorMessage.classList.remove('hidden');
    }
  }


  