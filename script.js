function openMenu() {
  const nav = document.querySelector("nav");
  nav.classList.toggle("open");
}

const scriptURL =
  "https://script.google.com/macros/s/AKfycbwm51bPhaZAkluH9ymecAVbmVCX1b9O_yAj-nuUQNAtew0rOLv-hXq2dDjvZblZk5lk/exec";
const form = document.forms["submit-to-google-sheet"];
const msg = document.getElementById("msg");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      msg.innerHTML = "Message sent Succesfully";
      setTimeout(function () {
        msg.innerHTML = "";
      }, 5000);
      form.reset();
    })
    .catch((error) => console.error("Error!", error.message));
});
