
const submitButton = document.getElementById('submit')
const blogpost = document.getElementById('blog-post')
const usernameInput = document.getElementById('username')
const titleInput = document.getElementById('title')
const contentInput = document.getElementById('content')


const handleFormSubmit = function (event) {
     event.preventDefault();
   const username = usernameInput.value
   const title = titleInput.value
   const content = contentInput.value

        const formObject = {
            username: username,
            title: title,
            content: content, 

        }
       
        if(!username || !title || !content) {
            const errorMes = document.getElementById('error');
            errorMes.textContent= 'Please fill out the fields'
        }
        savetoLocalStorage(formObject)
        redirectUrl()
   
}





 
const savetoLocalStorage = function(data) {
    const blogstring =JSON.stringify(data)
    localStorage.setItem('blogtext', blogstring)
}
submitButton.addEventListener('click', handleFormSubmit)
// formArray.push(JSON.stringify(formObject));

// localStorage.setItem('formArray', JSON.stringify(formArray));

const redirectUrl = function(){
        location.href= "./blog.html"


    }