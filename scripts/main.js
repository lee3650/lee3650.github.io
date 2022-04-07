const body = document.querySelector("body");
let bg = 0; 
let classes = ["light", "dark", "code"];

function toggleMode() {
  const toggle = document.getElementById("toggle"); 
  bg = (bg + 1) % 3; 
  body.className = classes[bg];
  toggle.textContent = "Background"; 
  //var text = toggle.textContent; 
  //console.log("Clicked with contents " + toggle.textContent); 
  //if (text == "Dark Mode") {
  //body.className = "dark"; 
  //toggle.textContent = "Light Mode"; 
  //}
  //else {
  //body.className = "light"; 
  //toggle.textContent = "Dark Mode"; 
  //}
  //else 
}