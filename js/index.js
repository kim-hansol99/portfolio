window.onload = function() {
    for (var i = 0; i < 1000; i++) {
        var star =
            '<div class="star" style="animation: twinkle ' +
          (Math.random() * 2 + 2) +
            "s linear " +
          (Math.random() * 2 + 2) +
            "s infinite; top: " +
          Math.random() * $("html").height() +
            "px; left: " +
          Math.random() * $("html").width() +
            'px;"></div>';
        $("body").append(star);
        }
}