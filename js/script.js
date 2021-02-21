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
