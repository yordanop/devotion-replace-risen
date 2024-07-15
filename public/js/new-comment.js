const newCommentFormHandler = async (event) => {
    event.preventDefault();
  
    const content = document.querySelector('#content').value.trim();
  
    if (content) {
      try {
        const response = await fetch('/api/comments', {
          method: 'POST',
          body: JSON.stringify({ content }),
          headers: { 'Content-Type': 'application/json' },
        });
        console.log(response)
        if (response.ok) {
        console.log(response)
        
          document.location.reload();
        } else {
          const errorText = await response.text();
          console.error('Failed to create new comment:', errorText);
          alert('Failed to create new post..');
        }
      } catch (error) {
        console.error('Error:', error);
        alert('Failed to create new comment.');
      }
    }
  };
  


document.querySelector('.new-comment-form').addEventListener('submit', newCommentFormHandler);