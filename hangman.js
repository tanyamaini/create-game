//arrays and variables
var canvas;
var canvas2;
var text;
let words = ["javascript","monkey","amazing","pancake","galvanize","iteration","index","code","angular","react","python","shake", "tower", "string", "fishhook", "broccoli", "yacht", "sewer", "sphynx", "mercury", "backpack", "database", "anaconda", "dwarves", "haiku", "jazz", "clover", "turkey", "lunchbox", "egyptian", ""];
var blanks = []; //array of blanks; will replace this with the letters when guessed
var selectedWord="";
var letters = []; //array of the letters in the original word; changes as letters are guessed
var originalLetters = []; //original letters; does not change
let removeLetter=[];
let isStillInWord = [];
let checkedIfInWord = "yes";
let k = 0;
let gameOver=false;
//document.getElementById(buttonClicked).disabled = true;

function startGame() {
  if(gameOver==true){
    refresh();
    gameOver=false;
  }
  //document.getElementById(buttonClicked).disabled = false;
  document.getElementById("start").disabled = true;
  document.getElementById("a").disabled = false;
  document.getElementById("b").disabled = false;
  document.getElementById("c").disabled = false;
  document.getElementById("d").disabled = false;
  document.getElementById("e").disabled = false;
  document.getElementById("f").disabled = false;
  document.getElementById("g").disabled = false;
  document.getElementById("h").disabled = false;
  document.getElementById("i").disabled = false;
  document.getElementById("j").disabled = false;
  document.getElementById("k").disabled = false;
  document.getElementById("l").disabled = false;
  document.getElementById("m").disabled = false;
  document.getElementById("n").disabled = false;
  document.getElementById("o").disabled = false;
  document.getElementById("p").disabled = false;
  document.getElementById("q").disabled = false;
  document.getElementById("r").disabled = false;
  document.getElementById("s").disabled = false;
  document.getElementById("t").disabled = false;
  document.getElementById("u").disabled = false;
  document.getElementById("v").disabled = false;
  document.getElementById("x").disabled = false;
  document.getElementById("y").disabled = false;
  document.getElementById("z").disabled = false;
  selectedWord= words[Math.floor(Math.random()*words.length)];
//TURNS WORDS INTO ARRAY WITH LETTERS SEPARATED
  letters = selectedWord.split("");
  originalLetters = selectedWord.split("");
  isStillInWord = letters;
  removeLetter = letters;
  for(let i = 0; i < letters.length; i++){
    blanks.push("_");
  }
  canvas = document.getElementById("canvas1");
  text = canvas.getContext("2d");
  text.font = "100px Sans-serif";
  text.strokeStyle= "white";
  text.strokeText(blanks,10,50);
  canvas2 = document.getElementById("canvas2");
  man = canvas2.getContext("2d");
  man.strokeStyle="white";
}

function refresh(){
  document.getElementById("restart").click();
}

function guess(letterClicked){
  //Disable button clicked
  document.getElementById(letterClicked).disabled = true;
  document.getElementById(letterClicked).style.background = "red";
 //How many times an incorrect letter is pressed
  let checkIfInWord= letters.indexOf(letterClicked);
  var count = 0;
  for(var i = 0; i < letters.length; i++){
    if(letters[i] == letterClicked){
               count++;
    }
  }
  //check if in original word
  let checkIfInOriginalWord= originalLetters.indexOf(letterClicked);
    var count2 = 0;
    for(var l = 0; l < originalLetters.length; l++){
      if(originalLetters[l] == letterClicked){
                 count2++;
      }
    }
  if(checkIfInWord > -1 == true){
    document.getElementById(letterClicked).style.background = "#41fc28";
    for(let j = 0; j < count; j++){
      //CHECK WHERE LETTER GUESSED IS
      checkIfInWord= isStillInWord.indexOf(letterClicked);
      //REMOVE BLANKSPACE AND REPLACE WITH LETTER
      blanks.splice(checkIfInWord, 1, letterClicked);
      isStillInWord.splice(checkIfInWord, 1, checkedIfInWord);
      // blanks.splice(letterClicked, checkIfInWord);
      //alert(blanks);

      text.clearRect(0, 0, canvas.width, canvas.height);
      text.font = "100px Sans-serif";
      text.strokeText(blanks,100,100);

      //blanks.toString();
      //originalLetters= originalLetters.toString();
    }

  //if else, add mark to canvas hangman.
    if(originalLetters.toString()== blanks.toString()){
      blanks= [];
      gameOver=true;
      document.getElementById("start").disabled = false;
      alert("You win!");

    }
  }
//if not in original word
if(checkIfInOriginalWord < 0 == true){
  k++;
  let radius= 80;
  if(k==1){
    //canvas face
    man.beginPath();
    man.arc(radius + 100, radius+20, radius, 0, 2 * Math.PI);
    //man.arc(200, 100, 50, 0, Math.PI*2, true);
    man.stroke();

  }
  else if(k==2){
    //canvas body
    man.moveTo(100+radius,180);
    man.lineTo(100+radius,500);
    man.stroke();

  }
  else if(k==3){
    //canvas right arm
    man.moveTo(100+radius, 220);
    man.lineTo(100, 250);
    man.stroke();
  }
  else if(k==4){
    //canvas left arm
    man.moveTo(100+radius, 220);
    man.lineTo(2*radius+100, 250);
    man.stroke();
  }
  else if(k==5){
    //canvas right leg
    man.moveTo(radius+100, 500);
    man.lineTo(100, 600);
    man.stroke();
  }
  else if(k==6){
    //canvas left leg
    man.moveTo(radius+100, 500);
    man.lineTo(2*radius+100, 600);
    man.stroke();
  }
  else if(k==7){
    //canvas eyes and mouth
    man.beginPath();
    man.arc(radius + 100, radius+20, radius * 0.7, 0, 1 * Math.PI);
    man.stroke();

    man.beginPath();
    man.arc(radius+100 - radius/3, radius+15, radius * 0.10, 0, 2 * Math.PI);
    man.stroke();

    man.beginPath();
    man.arc(radius+100 + radius/3, radius+15, radius * 0.10, 0, 2 * Math.PI);
    man.stroke();
  }
  else{
    gameOver=true;
    document.getElementById("start").disabled = false;
    alert("You lose!");
  }
  }
//in the canvas on the side of the man, draw letter guessed
}
