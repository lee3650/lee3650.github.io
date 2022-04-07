const body = document.querySelector("body");
let bg = 0; 
let classes = ["light", "dark", "code"];
const content = document.getElementById("content"); 
const welcome = document.getElementById("welcome-text"); 

function aboutClicked() { 
  content.className = "visible"; 
  welcome.className = "hidden"; 
}

function showWelcome() {
  welcome.className = "welcome-shown"; 
  const tohide = document.getElementsByClassName("visible"); 
  for (let i = tohide.length - 1; i >= 0; i--) {
    tohide[i].className = "hidden"; 
  }
}

function toggleMode() {
  const toggle = document.getElementById("toggle"); 
  bg = (bg + 1) % classes.length; 
  body.className = classes[bg];
}