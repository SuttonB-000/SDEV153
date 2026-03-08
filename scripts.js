// // when the user clicks on the button toggle between hiding and showing content 
// function dropDownMenu() {
//     document.getElementById("myDropDown").classList.toggle("show");
// }



// // close the drop down menu if the user clicks outside of it 
// window.onclick = function(event) {
//     if (!event.target.matches('.menuIcon')) {
//         var dropDowns = this.document.getElementsByClassName("menuContent");
//         var i;
//         for (i=0; i < dropDowns.length; i++) {
//             var openDropDown = dropDowns[i];
//             if (openDropDown.classList.contains("show")){
//                 openDropDown.classList.remove("show");
//             }
//         }
//     }
// }

// toggle the mobile menu
function toggleMenu() {
    const menu = document.getElementById('myDropDown');
    menu.classList.toggle('show');
}

// close the menu when clicking outside
window.addEventListener('click', function(event) {
    const menu = document.getElementById('myDropDown');
    const button = document.querySelector('.menuIcon');
    
    // if click is NOT on the button or inside the menu, close it
    if (!menu.contains(event.target) && !button.contains(event.target)) {
        menu.classList.remove('show');
    }
});