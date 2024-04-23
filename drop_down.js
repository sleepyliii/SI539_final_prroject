function myFunction() {
  var dropdown = document.getElementById("myDropdown");
  dropdown.classList.toggle("show");
}

window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdownList = document.getElementsByClassName("dropdown-content");
    Array.from(dropdownList).forEach(function(dropdown) {
      if (dropdown.classList.contains('show')) {
        dropdown.classList.remove('show');
      }
    });
  }
};
