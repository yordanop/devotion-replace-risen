const signupFormHandler = async (event) => {
    event.preventDefault();
  
    const username = document.querySelector('#username-signup').value.trim();
    const email = document.querySelector('#email-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();

    // Send content to create new user (signup)
    if (username && email && password) {
      const response = await fetch('/api/users', {
        method: 'POST',
        body: JSON.stringify({ username, email, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        alert('BNew account created successfully!');
        document.location.replace('/');
      } else {
        alert('Failed to sign up.');
      }
    }
  };
  


document.querySelector('.signup-form').addEventListener('submit', signupFormHandler);
