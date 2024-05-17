 

let blogArray = JSON.parse(localStorage.getItem('blogtext'));



function createtext(object) {
  console.log(object)
  

  const blogText  = document.querySelector('#blogText')
  let contentEl = document.createElement('section')
  // const newDiv = document.createElement('div')
  // newDiv.textContent = p0, p1, p2
  // newDiv.style.border = "2px solid red"

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

  contentEl.appendChild(p0)
  contentEl.appendChild(p1)
  contentEl.appendChild(p2)
  blogText.appendChild(contentEl);
  blogText.style.border = "5px solid red"
  blogText.style.marginTop = "1%"
  p0.style.margin = "1%"
  p1.style.margin = "1%"
  p2.style.margin = "1%"
  p0.style.borderBottom = "2px solid red"

  

  // for (let i = 0; i< blogArray.length; i++) {
  //   createPost(blogArray[i])
  // }
}
createtext(blogArray)

// let blogArraytwo = JSON.parse(localStorage.getItem('blogtext'))

// function createblog(object){
  

//   const blogtwo = document.querySelector('#blogtwo')
//   let contenttwo = document.createElement('section')

//   let p3 = document.createElement('p') 
//   let p4 = document.createElement('p')
//   let p5 = document.createElement('p')

//   p3.textContent = object.username
//   p4.textContent = object.title
//   p5.textContent = object.content

//   contenttwo.appendChild(p3)
//   contenttwo.appendChild(p4)
//   contenttwo.appendChild(p5)
//   blogtwo.appendChild(contenttwo)
// }
// createblog(blogArraytwo)