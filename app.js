//Creating the word bank of which players will type the synonyms. Probably should be an object

const wordBank = [
  {
  word: "Happy",
  synonyms: [
    "amused",
    "beaming",
    "blissful",
    "blithe",
    "bouyant",
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

  
  //award points based on length
  points(word) {
    console.log("this is the word:", word)
    if (word.length >= 8){
      console.log("this is long the word is:", word.length);
      console.log("player gets 5 points");
    } else if(word.length < 8 && word.length >= 5){
      console.log("this is long the word is:", word.length);
      console.log("player gets 3 points");
    } else if(word.length < 5 && word.length > 0){
      console.log("this is long the word is:", word.length);
      console.log("player gets 1 points");
    } else {
      console.log("this is long the word is:", word.length);
      console.log("no points awarded")
    }
  }
  },
  
];


//a function to search the obj array get it's index when it is actually in the array. Otherwise tell the player they didn't get any points.
// const isItThere = (input)=> wordBank[0].synonyms.includes(input);
let index;

const validAnswerCheck =  (input) => {
//is the input any of these iterated words, give me a boolean
  if(wordBank[0].synonyms.includes(input)){  
    //if it is give me the index of this word. The index will be fed to the points method
    index = wordBank[0].synonyms.indexOf(input);
    return index
  }
}

console.log(validAnswerCheck("funny"));

console.log(wordBank[0].points(wordBank[0].synonyms[index]));


//something to confirm if you want to submit. Chance to check for spellings