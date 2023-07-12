
function buttonAnimation(currentKey) {
  var activeKey = document.querySelector("." + currentKey);
  activeKey.classList.add("pressed");
  console.log(activeKey);
  setTimeout(function () {
    activeKey.classList.remove("pressed");
  }, 100);

}

function keyPressFunc(key) {
  switch (key) {
    case "a":
      var audio = new Audio('./sounds/tom-1.mp3');
      audio.play();
      break;
    case "s":
      var audio = new Audio('./sounds/tom-2.mp3');
      audio.play();
      break;
    case "d":
      var audio = new Audio('./sounds/tom-3.mp3');
      audio.play();
      break;
    case "f  ":
      var audio = new Audio('./sounds/tom-4.mp3');
      audio.play();
      break;
    case "j":
      var audio = new Audio('./sounds/snare.mp3');
      audio.play();
      break;
    case "k":
      var audio = new Audio('./sounds/crash.mp3');
      audio.play();
      break;
    case "l":
      var audio = new Audio('./sounds/kick-bass.mp3');
      audio.play();
      break;
  }

}



for (var i = 0; i < 7; i++) {
  document.querySelectorAll("button")[i].addEventListener("click", function () {
    var buttonInnerHtml = this.innerHTML;
    keyPressFunc(buttonInnerHtml);
    buttonAnimation(buttonInnerHtml);
  });

}

document.addEventListener("keypress", function (event) {
  keyPressFunc(event.key);
  buttonAnimation(event.key);

});