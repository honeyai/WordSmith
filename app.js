//========================================================================================
//================================== WORD SMITH ==========================================
//========================================================================================





//======================
//== Global Variables ==
//======================

let points = 0;
let index;
let pOnePoints = 0;
let pTwoPoints = 0;
let turnToggle = true;


//==============================================
//==  
//==                                         
//==              
//==============================================


//==============================================
//==  Creating the word bank of which         ==
//==  players will type the synonyms.         ==                               
//==============================================

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
    "jubilant",
    "lighthearted",
    "merry",
    "mirthful",
    "optimistic",
    "overjoyed",
    "pleased",
    "radiant",
    "rapturous",
    "satisfied",
    "smiling",
    "sunny",
    "thrilled",
    "untroubled",
    "upbeat",
    //!Add more later
  ],

  //==============================================
  //==  Check to see if the play's word         ==
  //==  inside of the array                     ==                              
  //==============================================

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

  //==============================================
  //==  Award points based on length            ==            
  //==============================================

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
  {
    word: "big",
    synonyms:[
      "astronomical",
      "boundless",
      "brawny",
      "broad",
      "capacious",
      "chunky",
      "colossal",
      "considerable",
      "copious",
      "corpulent",
      "deep",
      "elephantine",
      "enormous",
      "epic",
      "expansive",
      "extensive",
      "fat",
      "full",
      "gargantuan",
      "giant",
      "gigantic",
      "ginormous",
      "grand",
      "great",
      "heaping",
      "heavy",
      "hefty",
      "herculean",
      "huge",
      "hulking",
      "humongous",
      "husky",
      "immense",
      "imposing",
      "impressive",
      "infinite",
      "jumbo",
      "large",
      "limitless",
      "lofty",
      "long",
      "mammoth",
      "massive",
      "mega",
      "mighty",
      "miles-wide",
      "monumental",
      "mountainous",
      "multifarious",
      "multiplicity",
      "multitude",
      "numerous",
      "obese",
      "outsized",
      "overabundant",
      "oversized",
      "plentiful",
      "plump",
      "powerful",
      "prodigious",
      "sizable",
      "sethian",
      "spacious",
      "stout",
      "substantial",
      "strapping",
      "super",
      "sweeping",
      "tall",
      "thick",
      "titanic",
      "towering",
      "tremendous",
      "unlimited",
      "vast",
      "voluminous",
      "weighty",
      "whooping",
      "wide"
    ],

    //==============================================
    //==  Check to see if the play's word         ==
    //==  inside of the array                     ==                              
    //==============================================
  
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
  
    //==============================================
    //==  Award points based on length            ==            
    //==============================================
  
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
    },
  },
  {
    word: "many",
    synonyms: [
      "assortment",
      "batch",
      "billions",
      "blizzard",
      "boatload",
      "boundless",
      "buckers",
      "bunches",
      "clusters",
      "collection",
      "copious",
      "deluge",
      "dozens",
      "droves",
      "expansive",
      "extensive",
      "gaggle",
      "gazillions",
      "giant",
      "gigantic",
      "giant",
      "ginormous",
      "great",
      "heaps",
      "herd",
      "horde",
      "hundreds",
      "infinite",
      "limitless",
      "loads",
      "lots",
      "mammoth",
      "mass",
      "masses",
      "mega",
      "miles",
      "millions",
      "mob",
      "mountainous",
      "mountains",
      "multifarious",
      "multiplicity",
      "multitude",
      "numerous",
      "oceans",
      "oodles",
      "overabundance",
      "pack",
      "parcel",
      "piles",
      "plenty",
      "pots",
      "prodigious",
      "profuse",
      "profusion",
      "quantity",
      "reams",
      "sacks",
      "scads",
      "set",
      "several",
      "slew",
      "some",
      "stacks",
      "sundry",
      "swarm",
      "sweeping",
      "teeming",
      "thousands",
      "throng",
      "tons",
      "towering",
      "tremendous",
      "troop",
      "umpteen",
      "vast",
      "volumes",
      "wide",
      "yards",
      "zillions"
    ],

    //==============================================
    //==  Check to see if the play's word         ==
    //==  inside of the array                     ==                              
    //==============================================
  
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
  
    //==============================================
    //==  Award points based on length            ==            
    //==============================================
  
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
    },
  },
  {
    word: "always",
    synonyms: [
      'abidingly',         'again and again',   'all along',
      'all over',          'all the time',      'all the while',
      'at all times',      'at every turn',     'ceaselessly',
      'changelessly',      'constantly',        'continually',
      'continuously',      'cosmically',        'daily',
      'daily and hourly',  'day after day',     'day and night',
      'enduringly',        'eternally',         'ever',
      'ever and always',   'ever and anon',     'everlastingly',
      'evermore',          'every day',         'every hour',
      'every moment',      'everywhere',        'forever',
      'forevermore',       'frequently',        'galactically',
      'hour after hour',   'hourly',            'in any case',
      'in every instance', 'in perpetuity',     'incessantly',
      'inflexibly',        'internationally',   'invariably',
      'lastingly',         'like clockwork',    'many times',
      'methodically',      'month after month', 'never otherwise',
      'night and day',     'often',             'on and on',
      'orderly',           'perennially',       'permanently',
      'perpetually',       'rapidly',           'regularly',
      'right along',       'rigidly',           'statically',
      'steadfastly',       'steadily',          'sustainedly',
      'systematically',    'the world over',    'unceasingly',
      'unchangingly',      'unendingly',        'unintermittently',
      'uninterruptedly',   'universally',       'unvaryingly',
      'unwaveringly',      'usually',           'without cease',
      'without exception', 'without letup',     'without stopping',
      'year after year\r', "e'er"
    ],

    //==============================================
    //==  Check to see if the play's word         ==
    //==  inside of the array                     ==                              
    //==============================================
  
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
  
    //==============================================
    //==  Award points based on length            ==            
    //==============================================
  
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
    },
  },
  {
    word: "said",
    synonyms:[
      'aforementioned',  'aforenamed',
      'aforesaid',       'articulated',
      'beforementioned', 'enunciated',
      'foregoing',       'forementioned',
      'forenamed',       'former',
      'lingual',         'linguistic',
      'named',           'nuncupative',
      'oral',            'parol',
      'pronounced',      'same',
      'sounded',         'speech',
      'spoken',          'such',
      'unwritten',       'uttered',
      'verbal',          'viva voce',
      'vocal',           'vocalized',
      'voiced',          'voiceful'
    ],

    //==============================================
    //==  Check to see if the play's word         ==
    //==  inside of the array                     ==                              
    //==============================================
  
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
  
    //==============================================
    //==  Award points based on length            ==            
    //==============================================
  
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
    },
  },
  {
    word: "strange",
    synonyms: [
      'aberrant',          'able',               'abnormal',
      'absurd',            'alien',              'amazing',
      'anomalous',         'apart',              'astonishing',
      'astounding',        'atypical',           'barbarian',
      'barbaric',          'barbarous',          'beguiling',
      'bereft of reason',  'bewildering',        'bizarre',
      'brainsick',         'crackbrained',       'cracked',
      'crank',             'crankish',           'cranky',
      'crazed',            'crazy',              'crotchety',
      'curious',           'daft',               'deluded',
      'demented',          'deprived of reason', 'deranged',
      'detached',          'deviant',            'deviative',
      'different',         'disconnected',       'discrete',
      'disjunct',          'disoriented',        'disrelated',
      'dissociated',       'distraught',         'divergent',
      'dotty',             'eccentric',          'enigmatic',
      'erratic',           'exceptional',        'exotic',
      'exterior',          'external',           'extraneous',
      'extraordinary',     'extraterrestrial',   'extrinsic',
      'fabulous',          'fantastic',          'fascinating',
      'fey',               'fishy',              'flaky',
      'flighty',           'foreign',            'foreign-born',
      'freaked out',       'freakish',           'freaky',
      'funny',             'grotesque',          'hallucinated',
      'idiocratic',        'idiosyncratic',      'incalculable',
      'incognizable',      'incommensurable',    'incomparable',
      'incomprehensible',  'inconceivable',      'incredible',
      'independent',       'inexplicable',       'insane',
      'insular',           'intrusive',          'irrational',
      'irregular',         'irrelative',         'isolated',
      'kinky',             'kooky',              'loco',
      'lunatic',           'mad',                'maddened',
      'maggoty',           'manic',              'marvelous',
      'mazed',             'mental',             'mentally deficient',
      'meshuggah',         'miraculous',         'moon-struck',
      'mysterious',        'new',                'non compos',
      'non compos mentis', 'not all there',      'not right',
      'novel',             'nutty',              'odd',
      'oddball',           'of unsound mind',    'off',
      'off the wall',      'offbeat',            'original',
      'other',             'out',                'out-of-the-way',
      'outland',           'outlandish',         'outre',
      'outside',           'passing strange',    'peculiar',
      'phenomenal',        'prodigious',         'psycho',
      'puzzling',          'quaint',             'queer',
      'quirky',            'rare',               'reasonless',
      'remarkable',        'removed',            'romanesque',
      'romantic',          'rum',                'rummy',
      'screwball',         'screwy',             'sealed',
      'segregate',         'sensational',        'senseless',
      'separate',          'separated',          'sick',
      'singular',          'spectacular',        'stark-mad',
      'stark-staring mad', 'striking',           'stupendous',
      'surprising',        'tetched',            'touched',
      'twisted',           'ulterior',           'unaccountable',
      'unaccustomed',      'unaffiliated',       'unallied',
      'unapparent',        'unapprehended',      'unascertained',
      'unassociated',      'unbalanced',         'unbeknown',
      'uncanny',           'uncharted',          'unclassified',
      'uncommon',          'unconnected',        'unconventional',
      'uncouth',           'undisclosed',        'undiscoverable',
      'undiscovered',      'undivulged',         'unearthly',
      'unexplained',       'unexplored',         'unexposed',
      'unfamiliar',        'unfathomed',         'unheard',
      'unheard-of',        'unhinged',           'unidentified',
      'unimaginable',      'uninvestigated',     'unique',
      'unknowable',        'unknown',            'unnatural',
      'unperceived',       'unplumbed',          'unprecedented',
      'unrelatable',       'unrelated',          'unrevealed',
      'unsane',            'unsettled',          'unsound',
      'unsuspected',       'untouched',          'unusual',
      'virgin',            'wacky',              'wandering',
      'weird',             'whimsical',          'witless',
      'wonderful',         'wondrous',           'wondrous',
      'strange',           'antic',              'fantastical',
      'eerie',             'eery',               'gothic',
      'oddish',            'uneasy'
    ],

    //==============================================
    //==  Check to see if the play's word         ==
    //==  inside of the array                     ==                              
    //==============================================
  
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
  
    //==============================================
    //==  Award points based on length            ==            
    //==============================================
  
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
    },
  }
];






//################################################################################################################################################
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~FUNCTIONALITY~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//################################################################################################################################################


//===================================
//==   Randomizing the Czar word   ==
//===================================

let randIndex;
let czarWord;

const randomizeWord = () => {
  randIndex = Math.floor(Math.random() * wordBank.length);
  czarWord = wordBank[randIndex].word;
  console.log("this is the word", czarWord);
  groupNword = [wordBank[randIndex], czarWord];
  return groupNword;
}

randomizeWord();

//==========================================
//==  This is the text field. It sends    ==
//==   over the text over to the object   ==
//==   methods when it detects a change   ==
//==========================================

let answerBox = document.querySelector("#answer");

let playerWord = "";

answerBox.addEventListener("change", function(event){
    playerWord = event.target.value;
    console.log("this is the player's word:", playerWord)
    points = 0;
    if(groupNword[0].validAnswerCheck(playerWord)){
      groupNword[0].points(groupNword[0].validAnswerCheck(playerWord))
    }
  }
);


//setting up the page?
let round = 1;
let displayRound = document.querySelector(".roundCounter");

const printRound = () => displayRound.innerHTML = "Round: " + round;
printRound();


//==========================================
//== Prints things to the respective divs ==
//==========================================

let definitelyARealButton = document.querySelector(".fakeSubmit");
let pOneScore = document.querySelector(".playerOneScore")
let pTwoScore = document.querySelector(".playerTwoScore")

definitelyARealButton.addEventListener("click", function(event){
    console.log(round)
    if(turnToggle === true){
        if(playerWord === ""){
        console.log("entered an empty string")
      } else {
        console.log("this is what points is holding",points)
        pOnePoints += points;
        // --~ displays those points to the respective play box y ~---
        pOneScore.innerHTML = "Player one: "+ pOnePoints + " points";
      }
    }
    if(turnToggle === false){
      if(playerWord === ""){
        console.log("entered an empty string")
      } else {
        console.log("this is what points is holding",points)
        pTwoPoints += points;
                    //--~ displays those points to the respective play box y ~--
        pTwoScore.innerHTML = "Player two: \n"+ pTwoPoints + " points";
                    //--~ in two seconds after player two goes it'll say who won ~--
        setTimeout(whoWonRound(pOnePoints, pTwoPoints), 10000);
        round+
        printRound();
        printWord(groupNword[1]);
      }
    }

    //++++++++++++++++++++++++++++++
    //++ Makes the next player go ++
    //++++++++++++++++++++++++++++++

    if(turnToggle === true){
      console.log("it's player two's turn")
      turnToggle = false;
    } else {
      console.log("it's player one's turn")
      turnToggle = true;
      round++;
    }
  }
);

//===============================================
//==  The computer talking:                    ==
//==      -dialogue for the comp to tell       ==
//==        the which player won               ==
//==      -Printing the round's word           ==
//===============================================

let wordCzar = document.querySelector(".computerWordDisplay");

const printWord = (word) => {
  wordCzar.innerHTML = "The word is " + word;
}

printWord(groupNword[1]);

const whoWonRound = (pOne, pTwo) => {
  if(pOne > pTwo){
    wordCzar.innerHTML = "Player one won this round!\nPlayer two...get it together!\nNext Round!"
  } else if(pTwo > pOne){
    wordCzar.innerHTML = "Player two won this round!\nPlayer one...get it together!\nNext Round!"
  } else if(pOne === pTwo){
    wordCzar.innerHTML = "Evenly matched! This round was a tie!\nNext Round!"
  }
}

//*===============================================================NOTES=========================================================================

//TODO==============================================================================================================================================
//

