function typewritingEffect() {
  const words = ["websites", "illustrations", "artworks"];
  let count = 0;
  let index = 0;
  let currentWord = "";
  let currentLetter = "";
  let forward = true;

  (function type() { //self invoking function
    if (forward === true) {
      if (count === words.length) {
        count = 0;
      }
      currentWord = words[count];
      currentLetter = currentWord.slice(0, ++index);

      document.querySelector(".typing").textContent = currentLetter;
      if (currentLetter.length === currentWord.length) {
        count++;
        index = 0;
        forward = false;
      }
    } else {
      currentLetter = currentWord.slice(0, --index);
      document.querySelector(".typing").textContent = currentLetter;
      if(currentLetter.length === 0) {
        index = 0;
        forward = true;
      }
    }

    setTimeout(type, 100);
  })();
}
typewritingEffect();
