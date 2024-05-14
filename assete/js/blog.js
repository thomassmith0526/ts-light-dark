 

let blogArray = JSON.parse(localStorage.getItem('formArray'));
console.log(blogArray)


function creattext(object) {
  console.log(object)
  let userObject = JSON.parse(object);

  const blogText  = document.querySelector('#blogText')
  let contentElement = document.createElement('section')

  let p0 = document.createElement('p')
  let p1 = document.createElement('p')
  let p2 = document.createElement('p')
  blogText.appendChild(contentElement);

  contentElement.appendChild(p0).textContent = userObject.usernameInput
  contentElement.appendChild(p1).textContent = userObject.contentInput
  contentElement.appendChild(p2).textContent = userObject.titleInput

  p0.setAttribute('class','title')
  p1.setAttribute('class','content')
  p2.setAttribute('class', 'nameUser')


  for (let i = 0; i< blogArray.length; i++) {
    createPost(blogArray[i])
  }
}