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

  var words = ['UNIVERSE!','YOU!'],
      currentStep = 0,
      textEl = document.querySelector('.change-text'),
      oldWord = '';

  setTimeout(changeWord, 1000);

  function changeWord() {
    oldWord = textEl.innerHTML;

    if (oldWord.length < 1) {

      if (currentStep !== words.length -1) {
            currentStep ++;
      }else {
        currentStep = 0;
      }
      addNextWord();
    } else {
      setTimeout(deleteWord, 800);
    }
    
  };

  function deleteWord() {
    var WordLength = oldWord.length,
        currentWord = textEl.innerHTML,
        currentLength = currentWord.length;
    

    // The word is deleted so, start adding in the new one
    if (currentLength < 1) {
      changeWord();
      return;
    }
    
    // Remove a charachter
    textEl.innerHTML = currentWord.substring(0, currentLength - 1);
    
    setTimeout(deleteWord, 200);
  }

  function addNextWord() {
    var currentWord = textEl.innerHTML,
        currentLength = currentWord.length,
        nextWord = words[currentStep],
        nextWordLength = nextWord.length;
      
    
    if (currentLength === nextWordLength) {
      changeWord();
      return;
    }
    
    // add a charachter
    textEl.innerHTML = nextWord.substring(0, currentLength + 1);
      
    setTimeout(addNextWord, 200);
  }

  $(function(){
    var perNum = 70;
    $('.second.circle').circleProgress({
      value: perNum/100,
      startAngle:350,
      size:1000,
      fill:{
        gradient:["#06afe8","#77c04a"],
        gradientAngle: Math.PI / 2,
      },
      animation:{
        duration:2200,
        easing:"swing"
      },
      lineCap : "round",
      reverse:true,
      thickness: "15"
      }).on('circle-animation-progress', function(event, progress) {
            $(this).find('strong').html('<div id="mainImg"><img src="./images/adobe.png"></div>');
      });
    });
}