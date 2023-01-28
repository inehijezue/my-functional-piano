//  const pianokeys = document.querySelectorAll('.key')
//  function playSound(){
//      new Audio('mrab.mp3').play()
//  }

//  pianokeys.forEach(pianokey => {
//      pianokey.addEventListener('click', playSound)
//  })

const pianokeys = document.querySelectorAll(".key");
function playSound(newUrl) {
  console.log(newUrl);

  new Audio(newUrl).play();
}

pianokeys.forEach((pianokey, i) => {
  const number = i < 9 ? "0" + (i + 1) : i + 1;
  const newUrl = "pianokeysnote/key" + number + ".mp3";
  pianokey.addEventListener("click", () => playSound(newUrl));
});
