let form = document.getElementById('form');
let input = document.getElementById('input');
let msg = document.getElementById('message');
let posts = document.getElementById('posts');

form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("button clicked");

  formValidation();
});

function formValidation() {
  if(input.value == "") {
    msg.innerHTML = "Post cannot be blank"
    console.log("failure");
  } else {
    console.log("success");
    msg.innerHTML = "";
    acceptData();
  }
};

let data = {};
function acceptData() {
  data["text"] = input.value;
  console.log(data);

  createPost();
};

function createPost() {
  posts.innerHTML += `
  <div>
    <p>${data.text}</p>
    <span class="options">
      <i onClick="editPost(this)" class="fas fa-edit"></i>
      <i onClick="deletePost(this)" class="fas fa-trash-alt"></i>
    </span>
  </div>`;
  input.value = "";
};

function deletePost(targetPost) {
  targetPost.parentElement.parentElement.remove();
};

let editPost = (oldPost) => {
  input.value = oldPost.parentElement.previousElementSibling.innerHTML;
  oldPost.parentElement.parentElement.remove();
};
