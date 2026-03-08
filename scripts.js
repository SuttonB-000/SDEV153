// when the user clicks on the button toggle between hiding and showing content 
function dropDownMenu() {
    document.getElementById("myDropDown").classList.toggle("show");
}



// close the drop down menu if the user clicks outside of it 
window.onclick = function(event) {
    if (!event.target.matches('.menuIcon')) {
        var dropDowns = this.document.getElementsByClassName("menuContent");
        var i;
        for (i=0; i < dropDowns.length; i++) {
            var openDropDown = dropDowns[i];
            if (openDropDown.classList.contains("show")){
                openDropDown.classList.remove("show");
            }
        }
    }
}