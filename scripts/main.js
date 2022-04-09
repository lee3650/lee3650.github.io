const body = document.querySelector("body");
let bg = 0; 
let classes = ["code", "dark", "light"];
const content = document.getElementById("about"); 
const welcome = document.getElementById("welcome-text"); 
const contentBg = document.getElementById("content-bg"); 
const navBar = document.getElementById("nav-bar"); 
navBar.style.backgroundColor = "rgba(0, 0, 0, 0.8)";
bg = Math.floor(Math.random() * classes.length); 
toggleMode(); 

function aboutClicked() { 
  hideAll(); 
  makeContentVisible(content); 
}

function specificProject(sender) {
  console.log("clicked button with text " + sender.innerText); 
  let search = sender.innerText.split(" "); 
  const e = document.getElementById(search[0]); 
  hideAll(); 
  makeContentVisible(e); 
}

function makeHidden(item) {
  item.classList.remove("visible"); 
  item.classList.add("hidden"); 
}

function makeVisible(item) {
  item.classList.remove("hidden"); 
  item.classList.add("visible"); 
}

function makeContentVisible(item) {
  contentBg.className = "bg-visible"; 
  navBar.style.backgroundColor = "rgba(0, 0, 0, 1)";
  makeVisible(item); 
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
  makeContentVisible(projects); 
}

function showWelcome() {
  hideAll();
  contentBg.className = "hidden"; 
  navBar.style.backgroundColor = "rgba(0, 0, 0, 0.8)"; 
  welcome.className = "welcome-shown"; 
}

function toggleMode() {
  bg = (bg + 1) % classes.length; 
  body.className = classes[bg];
}