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
}