// search-box open close js code
let navbar = document.querySelector(".navbar");
let searchBox = document.querySelector(".search-box .bx-search");
// let searchBoxCancel = document.querySelector(".search-box .bx-x");

searchBox.addEventListener("click", ()=>{
  navbar.classList.toggle("showInput");
  if(navbar.classList.contains("showInput")){
    searchBox.classList.replace("bx-search" ,"bx-x");
  }else {
    searchBox.classList.replace("bx-x" ,"bx-search");
  }
});

// sidebar open close js code
let navLinks = document.querySelector(".nav-links");
let menuOpenBtn = document.querySelector(".navbar .bx-menu");
let menuCloseBtn = document.querySelector(".nav-links .bx-x");
menuOpenBtn.onclick = function() {
navLinks.style.left = "0";
}
menuCloseBtn.onclick = function() {
navLinks.style.left = "-100%";
}


// sidebar submenu open close js code
let aboutArrow = document.querySelector(".about-arrow");
aboutArrow.onclick = function() {
 navLinks.classList.toggle("show1");
}
let moreArrow = document.querySelector(".more-arrow");
moreArrow.onclick = function() {
 navLinks.classList.toggle("show2");
}
let depArrow = document.querySelector(".dep-arrow");
depArrow.onclick = function() {
 navLinks.classList.toggle("show3");
}
let acaArrow = document.querySelector(".aca-arrow");
acaArrow.onclick = function() {
 navLinks.classList.toggle("show4");
}
let eveArrow = document.querySelector(".eve-arrow");
eveArrow.onclick = function() {
 navLinks.classList.toggle("show5");
}
let clubArrow = document.querySelector(".club-arrow");
clubArrow.onclick = function() {
 navLinks.classList.toggle("show6");
}
let facArrow = document.querySelector(".fac-arrow");
facArrow.onclick = function() {
 navLinks.classList.toggle("show7");
}


//Scroll up button
const btnMoveUp = document.getElementById("btn-move-up");

window.addEventListener("scroll", function () {
  if (window.pageYOffset > 100) {
    btnMoveUp.style.display = "block";
  } else {
    btnMoveUp.style.display = "none";
  }
});

btnMoveUp.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});


//Scroll side menu
const leftSm = document.getElementById("left-sm");

window.addEventListener("scroll", function() {
  if (window.pageYOffset > 650 && window.innerHeight + window.pageYOffset < document.body.clientHeight - 500) {
    leftSm.classList.add("show");
  } else {
    leftSm.classList.remove("show");
  }
});




//-------------Slide show---------------------------------

let slideIndex = 1;
showSlides(slideIndex);

// Set the time interval in milliseconds
let slideInterval = 4000;
let intervalId = setInterval(function() {
  plusSlides(1);
}, slideInterval);

let slideshowContainer = document.querySelector('.slideshow-container');

// Pause slideshow on mouse hover
slideshowContainer.addEventListener('mouseover', function() {
  clearInterval(intervalId);
});

// Restart slideshow when mouse leaves container
slideshowContainer.addEventListener('mouseleave', function() {
  intervalId = setInterval(function() {
    plusSlides(1);
  }, slideInterval);
});

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

/* -----------------------Move to the right Animation------------------ */
function right() {
  var reveals = document.querySelectorAll(".move-right");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", right);


/* -----------------------Move to the left Animation------------------ */
function left() {
  var reveals = document.querySelectorAll(".move-left");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", left);


/* -----------------------Move to the top Animation------------------ */
function rise() {
  var reveals = document.querySelectorAll(".move-top");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", rise);



/* -----------------------Move downwards Animation------------------ */
function fall() {
  var reveals = document.querySelectorAll(".move-down");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", fall);