const usernameInput = document.getElementsByClassName('username')
const titleInput = document.getElementsByClassName('Title')
const contentInput = document.getElementById('content')
const blogpost = document.getElementById('blog-post')
const submitButton = document.getElementById('submit')

console.log(submitButton,blogpost)
submitButton.addEventListener('click', function (event) {
    event.preventDefault();
    const blogtext = {
        username: usernameInput.value,
        title: titleInput.value,
        content: contentInput.value,
    };
    localStorage.setItem('blogtext', JSON.stringify(blogtext));
   
    renderMessage();
});

function renderMessage() {
    const lastpost = JSON.parse(localStorage.getItem('blogtext'));
    console.log(lastpost.contentInput)
    if(lastpost !== null) {
        document.getElementById('#First').textContent = 'fsdkljhsd'
        
    }


} 
 
// document.addEventListener('DOMContentLoaded', function() {
//     document.getElementById('blogpost').addEventListener('submit', function(event) {
//       event.preventDefault();
//     })
// })

