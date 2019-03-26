//arrays and variables
var canvas;
var canvas2;
var text;
let words = [ "fishhook", "broccoli", "yacht", "sewer", "sphynx", "mercury", "backpack", "database", "anaconda", "dwarves", "haiku", "jazz", "clover", "turkey", "lunchbox", "egyptian", ""];
var blanks = []; //array of blanks; will replace this with the letters when guessed
var selectedWord="";
var letters = []; //array of the letters in the original word; changes as letters are guessed
var originalLetters = []; //original letters; does not change
let removeLetter=[];
let isStillInWord = [];
let checkedIfInWord = "yes";
let k = 0;

function startGame() {
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
text.strokeText(blanks,10,50);
canvas2 = document.getElementById("canvas1");
man = canvas2.getContext("2d");
}

function guess(letterClicked){
 //How many times an incorrect letter is pressed
  let checkIfInWord= letters.indexOf(letterClicked);
  var count = 0;
  for(var i = 0; i < letters.length; i++){
    if(letters[i] == letterClicked){
               count++;
    }
  document.getElementById("start").disabled = true;
  }

  if(checkIfInWord > -1 == true){
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
    //alert("You win!");
    text.clearRect(0, 0, canvas.width, canvas.height);
    blanks= [];
    document.getElementById("start").disabled = false;
}
  }
else{
  k++;
  //alert(k);
  if(k==1){
    //canvas face
  }
  else if(k==2){
    //canvas body
  }
  else if(k==3){
    //canvas right arm
  }
  else if(k==4){
    //canvas left arm
  }
  else if(k==5){
    //canvas right leg
  }
  else if(k==6){
    //canvas left leg
  }
  else if(k==7){
    //canvas eyes and mouth
  }
  else{
    alert("You lose!");
  }
  }
}
