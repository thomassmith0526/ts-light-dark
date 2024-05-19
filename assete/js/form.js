const submitButton = document.getElementById("submit");
const blogpost = document.getElementById("blog-post");
const usernameInput = document.getElementById("username");
const titleInput = document.getElementById("title");
const contentInput = document.getElementById("content");

submitButton.addEventListener("click", function () {
  event.preventDefault();
  if (username.value == "" || title.value == "" || content.value == "") {
    alert(`Must fill out the form`);
    return;
  }
});

let formArray = [localStorage.getItem("formArray")];

if (formArray[0] == null) {
  formArray = [];
  console.log(null);
} else {
  formArray = JSON.parse([localStorage.getItem("formArray")]);
}

const handleFormSubmit = function (event) {
  event.preventDefault();
  const username = usernameInput.value;
  const title = titleInput.value;
  const content = contentInput.value;

  const formObject = {
    username: username,
    title: title,
    content: content,
  };

  savetoLocalStorage(formObject);
  redirectUrl();
};

const savetoLocalStorage = function (data) {
  formArray.push(JSON.stringify(data));
  const blogstring = JSON.stringify(data);
  localStorage.setItem("formArray", JSON.stringify(formArray));
};
submitButton.addEventListener("click", handleFormSubmit);

const redirectUrl = function () {
  location.href = "./blog.html";
};
