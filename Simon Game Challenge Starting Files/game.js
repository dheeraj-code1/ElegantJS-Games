var i = 0;
var gamePlay = false;
userClickedPattern = []
gamePattern = []
buttonColors = ["red", "yellow", "blue", "green"]
var level = 0;

var nextSequence = function () {
  var randomNum = Math.floor(Math.random() * 4)
  var randomChosenColour = buttonColors[randomNum];
  gamePattern.push(randomChosenColour);
  var rand = document.querySelector(`#${randomChosenColour}`)
  var randomButton = $("#" + randomChosenColour)
  randomButton.fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
  var audio = new Audio("./sounds/" + randomChosenColour + ".mp3");
  audio.play();
  level += 1;
  document.querySelector("#level-title").innerHTML = `Level ${level}`;
}


function userInput() {
  document.querySelector("body").addEventListener("click", (e) => {
    if (e.target.id === "green" || e.target.id === "blue" || e.target.id === "red" || e.target.id === "yellow") {
      userClickedPattern.push(e.target.id)
      playSound(e.target.id);
      animatePress(e.target.id)
      checkAnswer(level);
    }

  })
}

var playSound = (name) => {

  var audio = new Audio("./sounds/" + name + ".mp3");
  audio.play();
}

function animatePress(currenColor) {
  $("#" + currenColor).addClass("pressed");

  setTimeout(() => {
    $("#" + currenColor).removeClass("pressed")
  }, 50);
}

function checkAnswer(currentLevel) {
  if (userClickedPattern[userClickedPattern.length - 1] === gamePattern[i]) {
    i++;
    console.log("succes");
    console.log("user", userClickedPattern);


    console.log("game", gamePattern);
    if (userClickedPattern.length === gamePattern.length) {
      i = 0;
      userClickedPattern = []

      setTimeout(() => {
        nextSequence()
      }, 1000);
    }

  }
  else {

    i = 0;
    gamePlay = false;
    gamePattern = []
    userClickedPattern = []
    level = 0;

    var audio1 = new Audio("./sounds/wrong.mp3")
    audio1.play()

    $("body").addClass("game-over");

    setTimeout(() => {
      $("body").removeClass("game-over")
    }, 200);

    document.querySelector("#level-title").innerHTML = "Game Over, Press Any Key to Restart";

  }

}

document.querySelector("body").addEventListener("keydown", function (e) {
  document.querySelector("#level-title").innerHTML = `Level ${level}`;
  if (!gamePlay) {
    gamePlay = true
    document.querySelector("#level-title").innerHTML = `Level ${level}`;
    nextSequence();
  }
});

userInput();



