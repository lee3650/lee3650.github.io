const body = document.querySelector("body");
let bg = 0; 
let classes = ["code", "dark", "light"];
const content = document.getElementById("about"); 
const welcome = document.getElementById("welcome-text"); 

function aboutClicked() { 
  hideAll(); 
  makeVisible(content); 
}

function specificProject(sender) {
  console.log("clicked button with text " + sender.innerText); 
  let search = sender.innerText.split(" "); 
  const e = document.getElementById(search[0]); 
  hideAll(); 
  makeVisible(e); 
}

function makeHidden(item) {
  item.classList.remove("visible"); 
  item.classList.add("hidden"); 
}

function makeVisible(item) {
  item.classList.remove("hidden"); 
  item.classList.add("visible"); 
}

function hideAll() {
  const tohide = document.getElementsByClassName("visible"); 
  for (let i = tohide.length - 1; i >= 0; i--) {
    let item = tohide[i];
    makeHidden(item); 
  }
  welcome.className = "hidden"; 
}

function projectsClicked() {
  const projects = document.getElementById("project-intro"); 
  hideAll();
  makeVisible(projects); 
}

function showWelcome() {
  hideAll();
  welcome.className = "welcome-shown"; 
}

function toggleMode() {
  const toggle = document.getElementById("toggle"); 
  bg = (bg + 1) % classes.length; 
  body.className = classes[bg];
}