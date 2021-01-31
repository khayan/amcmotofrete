$(window).on('resize', function() {
  if($(window).width() >= 768) {
    $(".list").removeClass("open");
  } else {
    $(".list").css('left', "-100%"); 
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
});