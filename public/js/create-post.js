const newpostFormHandler = async (event) => {
    event.preventDefault();
  
    const title = document.querySelector('#title').value.trim();
    const content = document.querySelector('#content').value.trim();

    // Send content to create new post
    if (title && content) {
      try {
        const response = await fetch('/api/blogposts', {
          method: 'POST',
          body: JSON.stringify({ title, content }),
          headers: { 'Content-Type': 'application/json' },
        });
  
        if (response.ok) {
          document.location.replace('/dashboard');
        } else {
          const errorText = await response.text();
          console.error('Failed to create new post:', errorText);
          alert('Failed to create new post.');
        }
      } catch (error) {
        console.error('Error:', error);
        alert('Failed to create new post.');
      }
    }
  };
  


document.querySelector('.new-post-form').addEventListener('submit', newpostFormHandler);
