// Preloader

$(window).on('beforeunload', function(){
    $(window).scrollTop(0);
});

$(window).on('load',function() {
	$(".loader").delay(2000).fadeOut("slow");
  $("#overlayer").delay(2000).fadeOut("slow");
  
  setTimeout(function(){
    $('body').removeClass('stop-scrolling');
    //....and whatever else you need to do
}, 2000);
})



// When the user scrolls down 
window.onscroll = function() {scrollFunction()};

function scrollFunction() {

    
  if (document.body.scrollTop > 536 || document.documentElement.scrollTop > 536) {
    document.getElementById("navigbar").style.top = "0";
    document.getElementById("navibar").style.opacity = "0";
  } else {
    document.getElementById("navigbar").style.top = "-80px";
    document.getElementById("navibar").style.opacity = "1";
  }
}

$(window).scroll(example);

function example() {
  var tempScrollTop = $(window).scrollTop();
  console.log("Scroll from Top: " + tempScrollTop.toString());
};



