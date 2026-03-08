
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
