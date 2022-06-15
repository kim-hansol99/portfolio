window.onload = function() {
    for (var i = 0; i < 1000; i++) {
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

        var words = ['UNIVERSE!','YOU!',''],
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
}