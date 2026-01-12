const btn = document.getElementById("btn");
const box = document.getElementById("animation-box");

btn.addEventListener("click", myMove);

function myMove() {
  let pos = 0;
  const id = setInterval(frame, 5);

  function frame() {
    if (pos >= 350) {
      clearInterval(id);
    } else {
      pos++;
      box.style.top = pos + "px";
      box.style.left = pos + "px";
    }
  }
}


const btnn = document.getElementById("btnn");
const text = document.getElementById("text");

btn.addEventListener("click", () => {


  text.style.display = "none";

  setTimeout(() => {
    text.style.display = "block";
    text.innerText = "Launched 🚀";
  }, 3000);
});

const form = document.getElementById("myForm");
const error = document.getElementById("error");

form.addEventListener("submit", function (e) {
  e.preventDefault(); // form submit roknay

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;

  if (name === "") {
    error.innerText = "Name is required";
    return;
  }

  if (email === "") {
    error.innerText = "Email is required";
    return;
  }

  error.innerText = "Form submitted successfully ✅";
});


const formm = document.getElementById("myFormm");
const msg = document.getElementById("msg");

form.addEventListener("submit", function (e) {
  e.preventDefault(); // ❗ submit stop

  const nameValue = document.getElementById("name").value;

  if (nameValue === "") {
    msg.innerText = "Name field empty cha ❌";
    msg.style.color = "red";
  } else {
    msg.innerText = "Form OK ✅";
    msg.style.color = "green";
  }
});