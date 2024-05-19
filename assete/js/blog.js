let blogArray = JSON.parse(localStorage.getItem("formArray"));
console.log(blogArray);

function createtext(object) {
  console.log(object);
  let userObject = JSON.parse(object);

  const blogText = document.querySelector("#blogText");
  let contentEl = document.createElement("section");

  let p0 = document.createElement("p");
  let p1 = document.createElement("p");
  let p2 = document.createElement("p");

  contentEl.appendChild(p0).textContent = userObject.title
  contentEl.appendChild(p1).textContent = userObject.content;
  contentEl.appendChild(p2).textContent = userObject.username

  p0.setAttribute("class", "title");
  p1.setAttribute("class", "content");
  p2.setAttribute("class", "username");

  blogText.appendChild(contentEl);
  blogText.style.border = "5px solid green";
  blogText.style.marginTop = "1%";
  p0.style.margin = "1%";
  p1.style.margin = "1%";
  p2.style.margin = "1%";
  p0.style.borderBottom = "2px solid blue";
}

for (let i = 0; i < blogArray.length; i++) {
  createtext(blogArray[i]);
  console.log(blogArray);
}
