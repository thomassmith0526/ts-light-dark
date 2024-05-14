
const submitButton = document.getElementById('submit')
const blogpost = document.getElementById('blog-post')

const handleFormSubmit =function (event) {
    const usernameInput = document.getElementsByClassName('username').value.trim()
    const titleInput = document.getElementsByClassName('Title').value.trim()
    const contentInput = document.getElementById('content').value.trim()


        // let formArray = [localStorage.getItem('formArray')]
        // if (formArray[0] == null) {
        //     formArray= []
        //     console.log(null)
        // } else {
        //     formArray = JSON.parse([localStorage.getItem('formArray')])
        // }    

        event.preventDefault();

        const formObject = {
            usernameInput: usernameInput,
            titleInput: titleInput,
            contentInput: contentInput, 

        }
        console.log(formObject)
        if(!usernameInput || !titleInput || !contentInput) {
            const errorMes = document.getElementById('error');
            errorMes.textContent= 'Please fill out the fields'
        }
        savetoLocalStorage(formObject)
        redirectUrl()
   
}





 const redirectUrl = function(){
        location.href= "./blog.html"


    }
const savetoLocalStorage = function(data) {
    const blogstring =JSON.stringify()
    localStorage.setItem('blogtext', blogstring)
}
submitButton.addEventListener('click', handleFormSubmit)
// formArray.push(JSON.stringify(formObject));

// localStorage.setItem('formArray', JSON.stringify(formArray));

