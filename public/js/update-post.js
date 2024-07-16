const newCommentFormHandler = async (event) => {
    event.preventDefault();

    const blogpostId = window.location.pathname.split('/').pop();
    const title = document.querySelector('#title').value.trim();
    const content = document.querySelector('#content').value.trim();
  
    // Send content to update specific post
    if (title && content) {
      try {
        const response = await fetch(`/api/blogposts/${blogpostId}`, {
            method: 'PUT',
            body: JSON.stringify({ title, content }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8'
            }
        });

        if (response.ok) {
          document.location.replace('/dashboard');
        } else {
          const errorText = await response.text();
          console.error('Failed to update comment:', errorText);
          alert('Failed to update post..');
        }
      } catch (error) {
        console.error('Error:', error);
        alert('Failed to update comment.');
      }
    }
  };
  


document.querySelector('.post-form').addEventListener('submit', newCommentFormHandler);