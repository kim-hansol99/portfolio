window.onload = function() {
  for (var i = 0; i < 500; i++) {
    var star =
        '<div class="star" style="animation: twinkle ' +
      (Math.random() * 2 + 2) +
        "s linear " +
      (Math.random() * 2 + 2) +
        "s infinite; top: " +
      Math.random() * $("body").height() +
        "px; left: " +
      Math.random() * $("body").width() +
        'px;"></div>';
    $("body").append(star);
  }

  $(".hello_img").on({
    mouseover:function(){
      $(this).find("img:nth-child(1)").stop().animate({opacity:0},600);
      $(this).find("img:nth-child(2)").stop().animate({opacity:1},600);
    }, mouseout:function(){
      $(this).find("img:nth-child(1)").stop().animate({opacity:1},600);
      $(this).find("img:nth-child(2)").stop().animate({opacity:0},600);
    } 
  });
}