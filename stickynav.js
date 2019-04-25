// function for nav

window.onscroll = function() {
    stickyFun()
};

// get the nav bar
var navbar = document.getElementById("navbar");

// get offset position of nav bar
var sticky = navbar.offsetTop;


// add sticky function when you reach scroll bar else remove it
function stickyFun() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}