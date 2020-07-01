//Global Variable
let points = 0;
let index;
let pOnePoints = 0;
let pTwoPoints = 0;
let turnToggle = true;


//Creating the word bank of which players will type the synonyms. Probably should be an object

const wordBank = [
  {
  word: "Happy",
  synonyms: [
    "amused",
    "beaming",
    "blissful",
    "blithe",
    "buoyant",
    "carefree",
    "cheery",
    "chipper",
    "chirpy",
    "content",
    "contented",
    "delighted",
    "ebullient",
    "ecstatic",
    "elated",
    "enraptured",
    "euphoric",
    "exhilarated",
    "exultant",
    "funny",
    "glad",
    "gleeful",
    "gratified",
    "grinning",
    "invigorated",
    "jocular",
    "jolly",
    "joyful",
    "joyous",
    //!Add more later
  ],
  //check to see if the play's word inside of the array
  validAnswerCheck(input){
    //is the input any of these iterated words, give me a boolean
    if(this.synonyms.includes(input)){  
    //if it is give me the index of this word. The index will be fed to the points method
      index = this.synonyms.indexOf(input);
      return this.synonyms[index];
      } else {
        console.log("no points");
        //change the innerHTML to say those are not strings? else if typeof input !== "string"
      }
  },
  //award points based on length
  points(word) {
      console.log("this is the word:", word)
      if (word.length >= 8){
        console.log("this is long the word is:", word.length);
        console.log("player gets 8 points");
        return points = 8;
      } else if(word.length < 8 && word.length >= 5){
        console.log("this is long the word is:", word.length);
        console.log("player gets 5 points");
        return points = 5;

      } else if(word.length < 5 && word.length > 0){
        console.log("this is long the word is:", word.length);
        console.log("player gets 1 points");
        return points = 1;

      } else {
        console.log("this is long the word is:", word.length);
        console.log("no points awarded")
        return points = 0;

      }
    }
  },
  
];

//This is the text field. It sends over the text over to the object methods when it detects a change
let answerBox = document.querySelector("#answer");

let playerWord = "";

answerBox.addEventListener("change", function(event){
    playerWord = event.target.value;
    console.log("this is the player's word:", playerWord)
    points = 0;
    if(wordBank[0].validAnswerCheck(playerWord)){
      wordBank[0].points(wordBank[0].validAnswerCheck(playerWord))
    }
  }
);

//create a pseudo-button that doesn't submit but instead does ask to spellcheck
let definitelyARealButton = document.querySelector(".fakeSubmit");
let pOneScore = document.querySelector(".playerOneScore")
let pTwoScore = document.querySelector(".playerTwoScore")

definitelyARealButton.addEventListener("click", function(event){
    //evaluates the points (done by the answerBox listener)
    
    if(turnToggle === true){
        if(playerWord === ""){
        console.log("entered an empty string")
      } else {
        console.log("this is what points is holding",points)
        pOnePoints += points;
        //displays those points to the respective play box y
        pOneScore.innerHTML = "Player one: "+ pOnePoints + " points";
        // turnToggle = false;
      }
    }
      // makes the next player go
    if(turnToggle === false){
      if(playerWord === ""){
        console.log("entered an empty string")
      } else {
        console.log("this is what points is holding",points)
        pTwoPoints += points;
        //displays those points to the respective play box y
        pTwoScore.innerHTML = "Player two: \n"+ pTwoPoints + " points";
        //in two seconds after player two goes it'll say who won
        setTimeout(whoWonRound(pOnePoints, pTwoPoints), 10000);
      }
    }
    if(turnToggle === true){
      console.log("it's player two's turn")
      turnToggle = false;
    } else {
      console.log("it's player one's turn")
      turnToggle = true;
    }
  }
);

//The computer talking:

let wordCzar = document.querySelector(".computerWordDisplay");

window.onload = function() {
  wordCzar.innerHTML = "I am the Czar!"
}

//dialogue for the comp to tell the which player won.
const whoWonRound = (pOne, pTwo) => {
  if(pOne > pTwo){
    wordCzar.innerHTML = "Player one won this round!\nPlayer two...get it together!\nNext Round!"
  } else if(pTwo > pOne){
    wordCzar.innerHTML = "Player two won this round!\nPlayer one...get it together!\nNext Round!"
  } else if(pOne === pTwo){
    wordCzar.innerHTML = "Evenly matched! This round was a tie!\nNext Round!"
  }
}



