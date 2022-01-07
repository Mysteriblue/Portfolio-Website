window.onscroll = function() {myFunction()};

var sticky = document.getElementById("sticky");

var sticky = sticky.offsetLeft;

function myFunction() {
  if (window.pageYOffset > sticky) {
    sticky.classList.add("sticky");
  } else {
    sticky.classList.remove("sticky");
  }
} 