async function newFormHandler(event) {
    event.preventDefault();
  
    const title = document.querySelector('input[name="post-title"]').value;
    const text = document.querySelector('textarea[name="description"]').value;
    const country_id = document.querySelector('select[name="country"]').value;
  
    const response = await fetch(`/api/posts`, {
      method: 'POST',
      body: JSON.stringify({
        title,
        text,
        country_id
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
  
    if (response.ok) {
      document.location.replace('/');
    } else {
      alert(response.statusText);
    }
  }
  
  // change to what the post form will be on handlebars 
  document.querySelector('.new-post-form').addEventListener('submit', newFormHandler);