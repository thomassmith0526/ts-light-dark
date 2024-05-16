 

let blogArray = JSON.parse(localStorage.getItem('blogtext'));



function creattext(object) {
  console.log(object)
  

  const blogText  = document.querySelector('#blogText')
  let contentElement = document.createElement('section')

  let p0 = document.createElement('p')
  let p1 = document.createElement('p')
  let p2 = document.createElement('p')
  
  p0.textContent = object.username
  p1.textContent = object.title
  p2.textContent = object.content
  // contentElement.appendChild(p0).textContent = userObject.usernameInput
  // contentElement.appendChild(p1).textContent = userObject.contentInput
  // contentElement.appendChild(p2).textContent = userObject.titleInput

  p0.setAttribute('class','title')
  p1.setAttribute('class','content')
  p2.setAttribute('class', 'username')

  contentElement.appendChild(p0)
  contentElement.appendChild(p1)
  contentElement.appendChild(p2)
  blogText.appendChild(contentElement);



  // for (let i = 0; i< blogArray.length; i++) {
  //   createPost(blogArray[i])
//   }
}
creattext(blogArray)