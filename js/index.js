// Preloader

$(window).on('beforeunload', function(){
    $(window).scrollTop(0);
});

$(window).on('load',function() {
	$(".loader").delay(2000).fadeOut("slow");
  $("#overlayer").delay(2000).fadeOut("slow");
  $(window).scrollTop(0); //resets position upon load
  setTimeout(function(){
    $('body').removeClass('stop-scrolling');
}, 2000);
})


// logs scroll
$(window).scroll(example);
function example() {
  var tempScrollTop = $(window).scrollTop();
  console.log("Scroll from Top: " + tempScrollTop.toString());
};

// if screen matches max-width 428
mobileFunction = (mobile) => {
  if (mobile.matches) { // if media screen matches
   // When the user scrolls down 
window.onscroll = function() {scrollFunction()};
function scrollFunction() {

  if (document.body.scrollTop > 395 || document.documentElement.scrollTop > 395) {
    document.querySelector("#navigmobile").style.opacity = "1";
    document.querySelector("#navigmobile").style.top = "-50px";
    document.querySelector(".navbar").style.opacity = "0";
   
  } else {
    document.querySelector("#navigmobile").style.opacity = "0";
    document.querySelector("#navigmobile").style.top = "0px";
    document.querySelector(".navbar").style.opacity = "1";
  }
}


  } else {  // if screen does not match
    window.onscroll = function() {scrollFunction()};

    function scrollFunction() {
    
        
      if (document.body.scrollTop > 536 || document.documentElement.scrollTop > 536) {
        document.querySelector("#navigbar").style.opacity = "1";
        document.querySelector(".navbar").style.opacity = "0";
       
      } else {
        document.querySelector("#navigbar").style.opacity = "0";
        document.querySelector(".navbar").style.opacity = "1";
      }
    }
  }
}
var mobile = window.matchMedia("(max-width: 428px)");
mobileFunction(mobile);
mobile.addListener(mobileFunction);

// content fades in on scroll 
function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (i = 0; i < reveals.length; i++) {
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

window.addEventListener("scroll", reveal);

// reset button
goUp = () => {
  $(window).scrollTop(0);
  }