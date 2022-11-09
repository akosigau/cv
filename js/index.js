// Preloader

$(window).on('beforeunload', function(){
    $(window).scrollTop(0);
});

$(window).on('load',function() {
	$(".loader").delay(2000).fadeOut("slow");
  $("#overlayer").delay(2000).fadeOut("slow");
  $(window).scrollTop(0);
  setTimeout(function(){
    $('body').removeClass('stop-scrolling');
}, 2000);
})



// When the user scrolls down 
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
// reset button
goUp = () => {
$(window).scrollTop(0);
}
// logs scroll
$(window).scroll(example);
function example() {
  var tempScrollTop = $(window).scrollTop();
  console.log("Scroll from Top: " + tempScrollTop.toString());
};



