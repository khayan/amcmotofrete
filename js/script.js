/* $(window).on('resize', function() {
  if($(window).width() >= 768) {
    $(".list").removeClass("open");
    $(".navbar__burger svg.feather").replaceWith(feather.icons.menu.toSvg());
  } else {
    $(".list").css('transform', "translateX(100%)"); 
  }
})

$(".navbar__burger").click(function(){  
  const list = $(".list") 
  list.toggleClass("open");
  if(list.hasClass("open")){
    $(".navbar__burger svg.feather").replaceWith(feather.icons.x.toSvg());
  } else {
    $(".navbar__burger svg.feather").replaceWith(feather.icons.menu.toSvg());
  }
}); */

$(window).scroll(function(){
  var sticky = $('.navigation'),
      header = $('.header'),
      media = $('.media'),
      scroll = $(window).scrollTop(),
      width = $(window).width();

  if (scroll >= 35 && width >= 768){
    sticky.addClass('fixed');
    header.css("padding-top", (sticky.height() + media.height()))
  } else {
    sticky.removeClass('fixed');
    header.css("padding-top", 0)
  }
});