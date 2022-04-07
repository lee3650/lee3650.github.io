const body = document.querySelector("body");

function toggleMode() {
  const toggle = document.getElementById("toggle"); 
  var text = toggle.textContent; 
  console.log("Clicked with contents " + toggle.textContent); 
  if (text == "Dark Mode") {
    body.className = "dark"; 
    toggle.textContent = "Light Mode"; 
  }
  else {
    body.className = "light"; 
    toggle.textContent = "Dark Mode"; 
  }
}