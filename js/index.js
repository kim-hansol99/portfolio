window.onload = function() {
  //배경
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

  //이미지 호버 이벤트
  $(".hello_img").on({
    mouseover:function(){
      $(this).find("img:nth-child(1)").stop().animate({opacity:0},600);
      $(this).find("img:nth-child(2)").stop().animate({opacity:1},600);
    }, mouseout:function(){
      $(this).find("img:nth-child(1)").stop().animate({opacity:1},600);
      $(this).find("img:nth-child(2)").stop().animate({opacity:0},600);
    } 
  });

  //변하는 텍스트
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

    if (currentLength < 1) {
      changeWord();
      return;
    }

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
    
    textEl.innerHTML = nextWord.substring(0, currentLength + 1);
      
    setTimeout(addNextWord, 200);
  }

  //스킬 클릭 이벤트
  const tabList = document.querySelectorAll('.circle-menu .list li');
  const contents = document.querySelectorAll('.cont_area .cont')
  let activeCont = '';
  console.log(tabList);
  console.log(contents);

  for(var i = 0; i < tabList.length; i++){
    tabList[i].querySelector('.btn').addEventListener('click', function(e){
      e.preventDefault();
      for(var j = 0; j < tabList.length; j++){
        tabList[j].classList.remove('is_on');

        contents[j].style.display = 'none';
      }

      this.parentNode.classList.add('is_on');

      activeCont = this.getAttribute('href');
      console.log(activeCont);
      document.querySelector(activeCont).style.display = 'block';
    });
  }
  

  ///모달
  $('[data-modal]').click(function(e){
    e.preventDefault();
    $(this).parent().find('[data-wrapper]').addClass('active');
    $('body').css("overflow", "hidden");
  });
  
  $('[data-wrapper], .close').click(
    function(modal){
      if (modal.target == this) {
        $('[data-wrapper]').removeClass('.modal-wrapper active');
        $('body').css("overflow-Y", "scroll");
      }
    });
}