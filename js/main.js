AOS.init({ disable: 'mobile' });

let toggleIcon = document.getElementById("toggle-icon");
let closeIcon = document.getElementById("modal-close");
let toggleButton = document.getElementById("toggle-button");
// let deepDrop = document.getElementById("deep-drop");
// let deepMenu = document.getElementById("deep-menu");
toggleButton.onclick = hideToggle;
closeIcon.onclick = showToggle;
// deepDrop.onclick = showDeepMenu;
function hideToggle() {
    toggleIcon.style.display = "none"
}

function showToggle() { 
    toggleIcon.style.display = "block"

}
function showDeepMenu() {
    console.log("done");
    
}


