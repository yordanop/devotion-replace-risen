const blogpostId = window.location.pathname.split('/').pop();

const updatePostFormHandler = async (event) => {
    event.preventDefault();

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
          alert('Blog post updated successfully!');
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

  const deletePostHandler = async (event) =>{
    event.preventDefault();

    try {
      const response = await fetch(`/api/blogposts/delete/${blogpostId}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        alert('Blog post deleted successfully!');
        window.location.href = '/dashboard'; 
      } else {
        const data = await response.json();
        alert(`Error: ${data.message}`);
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred while deleting the blog post.');
    }



  }
  


document.querySelector('.post-form').addEventListener('submit', updatePostFormHandler);
document.querySelector('.delete').addEventListener('click', deletePostHandler);