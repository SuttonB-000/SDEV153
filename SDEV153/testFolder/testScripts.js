//idnetify elment i want to target
let menuButton = document.querySelector("menuButton"); //sets image/button


//function for what I want the thing to do
function openMenu() {
    var menuVisibility = document.getElementById("menu");
    menuVisibility.style.display = "block";
    var closeMenu = document.getElementById("buttonImage");
    closeMenu.setAttribute("src","closeIcon.svg");
}

//new function to close the menu
function closeMenu (){
    var closeMenu = document.getElementById("buttonImage");
    closeMenu.setAttribute("src","menuIcon.svg");
    var menuVisibility = document.getElementById("menu");
    menuVisibility.style.display = "none";
}

// add even listener on click
//current issue to listeners for the same action and different functions

menuButton.addEventListener("click", openMenu);
menuButton.addEventListener("click",closeMenu);






//test button - successsssss  
let myButton = document.getElementById("button1"); //selecting the element I want to interact with
            
//function for what I want the thing to do
function buttonClick() {
    var text = document.getElementById("dont"); //make the element available to JS
    text.style.display = "block";
}
myButton.addEventListener("click", buttonClick);