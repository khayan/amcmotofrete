function menuOpened() {
  $(".navbar__burger i").removeClass("fa-bars");
  $(".navbar__burger i").addClass("fa-times");
  $("body").css("overflow", "hidden");
  $(".navbar__overlay").addClass(".navbar__overlay--opened");
}

function menuClosed() {
  $("body").css("overflow-y", "scroll");
  $(".navbar__burger i").removeClass("fa-times");
  $(".navbar__burger i").addClass("fa-bars");
  $(".list-wrapper::before").css("background-color", "transparent");
  $(".navbar__overlay").removeClass(".navbar__overlay--opened");
}


$(".list__item").click(function() {
  if($(".list-wrapper").hasClass("open")) {
     $(".navbar div").removeClass("open");
     $(".navbar__overlay").toggleClass("navbar__overlay--opened"); 
     menuClosed();
  }

})

$(".navbar__overlay").click(function() {
  menuClosed();
  $(".list-wrapper").removeClass("open");
  // $(".navbar__overlay").removeClass(".navbar__overlay--opened");
  $(".navbar__overlay").toggleClass("navbar__overlay--opened");
})

$(window).resize(function() {
  var mediaHeight = $(".media").height();
  var navigation = $(".navigation");
  var header = $(".header");

  if($(window).width() >= 768) {
    navigation.removeClass("fixed");
    header.css("padding-top", 35);
    navigation.removeClass("sticky");
  }

  if (($(window).width() < 768)) {
    navigation.addClass("fixed");
    header.css("padding-top", "8.8rem")
  }

})

$(".navbar__burger").click(function(){  
  const menu = $(".navbar div") 
  menu.toggleClass("open");
  $(".navbar__overlay").toggleClass("navbar__overlay--opened");

  menu.hasClass("open") 
  ? menuOpened()
  : menuClosed()
}); 

$(window).scroll(function () {
  var mediaHeight = $(".media").height();
  var navigation = $(".navigation");
  var header = $(".header");
  var scroll = $(window).scrollTop();

  if (($(window).width() < 768)) {
    navigation.addClass("fixed");
  }

  if(scroll >= mediaHeight && $(window).width() >= 768) {
    header.css("padding-top", (mediaHeight + navigation.height()) + 35);
    navigation.addClass("sticky");
  } else if (scroll <= mediaHeight && $(window).width() >= 768) {
    header.css("padding-top", 35);
    navigation.removeClass("sticky");
  }
})
/* 
$( document ).ready(function(event) {
	// Smooth scroll to element. Not necessary but provides a bit of delight
	$(".list__item").click(function() {
		// This prevents the default 'jump to' behaviour if JavaScript is enabled,
		// whilst keeping the functionality there for when JavaScript isn't enabled
		event.preventDefault();
	    $("html, body").animate({ scrollTop: ($($(this).attr('href')).offset().top - 86) }, 500);
	    return true;
	});
}); */

$(document).ready(function(){
	$('a[href^="#"]').on('click',function (e) {
	    e.preventDefault();
	    var target = this.hash;
	    var $target = $(target);
	    $('html, body').stop().animate({
	        'scrollTop': ($target.offset().top - $(".navigation").height())
	    }, 900);
	});
});