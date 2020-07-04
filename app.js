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
    'a propos',          'accepting',        'accidental',
    'ad rem',            'adapted',          'addled',
    'advantageous',      'advisable',        'applicable',
    'apposite',          'appropriate',      'apropos',
    'apt',               'at ease',          'auspicious',
    'beaming',           'beatific',         'beatified',
    'becoming',          'beery',            'befitting',
    'bemused',           'beneficial',       'benign',
    'benignant',         'besotted',         'blessed',
    'blind drunk',       'blissful',         'blithe',
    'blithesome',        'bright',           'bright and sunny',
    'capering',          'casual',           'cheerful',
    'cheery',            'chirping',         'civil',
    'cock-a-hoop',       'cogent',           'comely',
    'comfortable',       'composed',         'congruous',
    'content',           'contented',        'convenient',
    'convincing',        'correct',          'crapulent',
    'crapulous',         'dancing',          'decent',
    'decorous',          'delighted',        'desirable',
    'dizzy',             'dovetailing',      'drenched',
    'drunk',             'drunken',          'easy',
    'easygoing',         'ecstatic',         'effective',
    'effectual',         'efficacious',      'efficient',
    'elated',            'eupeptic',         'euphoric',
    'exalted',           'exhilarated',      'expedient',
    'exuberant',         'exultant',         'fair',
    'far-gone',          'favorable',        'favoring',
    'feasible',          'felicitous',       'fit',
    'fitted',            'fitten',           'fitting',
    'flushed',           'flushed with joy', 'flustered',
    'fortuitous',        'fortunate',        'fou',
    'fructuous',         'full',             'full of promise',
    'gay',               'geared',           'genial',
    'genteel',           'giddy',            'glad',
    'gladsome',          'gleeful',          'glorious',
    'glowing',           'golden',           'good',
    'gratified',         'high',             'hopeful',
    'in good spirits',   'in high spirits',  'in liquor',
    'in seventh heaven', 'incidental',       'inebriate',
    'inebriated',        'inebrious',        'inspired',
    'intoxicated',       'irrepressible',    'jolly',
    'joyful',            'joyous',           'jubilant',
    'just',              'just right',       'laughing',
    'leaping',           'light-hearted',    'lighthearted',
    'likely',            'lucky',            'maudlin',
    'meet',              'mellow',           'merry',
    'meshing',           'muddled',          'nappy',
    'nice',              'of good cheer',    'of good comfort',
    'of good omen',      'of happy portent', 'of promise',
    'on cloud nine',     'on the button',    'opportune',
    'optimistic',        'overjoyed',        'pat',
    'pleasant',          'pleased',          'pleased as Punch',
    'politic',           'profitable',       'promising',
    'proper',            'propitious',       'prosperous',
    'providential',      'purring',          'qualified',
    'radiant',           'recommendable',    'reconciled',
    'reeling',           'relevant',         'resigned',
    'riant',             'right',            'ripe',
    'rosy',              'sanguine',         'sanguineous',
    'sans souci',        'satisfied',        'seasonable',
    'seemly',            'shikker',          'singing',
    'smiling',           'smirking',         'sodden',
    'sortable',          'sotted',           'sparkling',
    'starry-eyed',       'suitable',         'suited',
    'suiting',           'sunny',            'tailored',
    'telling',           'thrice happy',     'thrilled',
    'tickled pink',      'tiddly',           'timely',
    'tipsy',             'to be desired',    'to the point',
    'to the purpose',    'uncomplaining',    'under the influence',
    'unrepining',        'urbane',           'useful',
    'well',              'well-chosen',      'well-expressed',
    'well-put',          'well-timed',       'winsome',
    'wise',              'without care',     'worthwhile',
    'happy',             'elysian',          'paradisiacal',
    'paradisiac',        'paradisaical',     'paradisaic',
    'paradisal',         'paradisial',       'halcyon',
    'expansive',         'euphoriant',       'joy',
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
    word: "Big",
    synonyms:[
      'adult',             'aggrandized',     'ample',
      'apotheosized',      'arrogant',        'arty',
      'awash',             'awesome',         'awful',
      'awfully',           'beatified',       'benevolent',
      'big boy',           'big cheese',      'big noise',
      'big shot',          'big-league',      'big-name',
      'big-time',          'bighearted',      'bigwig',
      'bigwigged',         'bombastic',       'brimful',
      'brimming',          'bull',            'bumper',
      'canonized',         'capacious',       'chivalrous',
      'chock-full',        'cloyed',          'clumsy',
      'commodious',        'comprehensive',   'condescending',
      'consequential',     'considerable',    'considerate',
      'copious',           'crammed',         'crowded',
      'damned',            'deified',         'distended',
      'domineering',       'double-barreled', 'earthshaking',
      'elevated',          'eminent',         'ennobled',
      'enshrined',         'enthroned',       'exalted',
      'excellent',         'expectant',       'expecting',
      'extensive',         'extravagant',     'extremely',
      'fat',               'flushed',         'full to bursting',
      'gassy',             'generous',        'glorified',
      'glutted',           'gone',            'goodly',
      'grand',             'gravid',          'great',
      'great gun',         'great of heart',  'greathearted',
      'greatly',           'grown',           'grown-up',
      'handsome',          'haughty',         'healthy',
      'heavy',             'heavyweight',     'hefty',
      'held in awe',       'heroic',          'high',
      'high and mighty',   'high-faluting',   'high-flown',
      'high-headed',       'high-minded',     'high-nosed',
      'high-powered',      'high-sounding',   'high-swelling',
      'highfalutin',       'highfaluting',    'hoity-toity',
      'hugely',            'hulking',         'husky',
      'idealistic',        'immortal',        'immortalized',
      'important',         'imposing',        'inflated',
      'knightly',          'large',           'large-scale',
      'largehearted',      'liberal',         'lion',
      'lofty',             'magnanimous',     'magnified',
      'major',             'man-sized',       'marriable',
      'marriageable',      'material',        'mature',
      'maturescent',       'meaningful',      'mighty',
      'momentous',         'much',            'name',
      'noble',             'noble-minded',    'nubile',
      'numerous',          'of age',          'of marriageable age',
      'old',               'openhanded',      'overbearing',
      'overblown',         'overflowing',     'packed',
      'parturient',        'patronizing',     'pretentious',
      'princely',          'proud',           'purse-proud',
      'replete',           'roomy',           'sainted',
      'sanctified',        'sated',           'satiated',
      'satisfied',         'self-important',  'shrined',
      'significant',       'sizable',         'spacious',
      'stuck-up',          'stuffed',         'sublime',
      'substantial',       'supereminent',    'superior',
      'swollen',           'tall',            'throned',
      'tidy',              'toplofty',        'unwieldy',
      'uppish',            'uppity',          'upstage',
      'voluminous',        'weighty',         'whacking',
      'whopping',          'windy',           'world-shaking\r',
      'sizeable',          'astronomic',      'astronomical',
      'galactic',          'bigger',          'larger',
      'biggest',           'greatest',        'largest',
      'biggish',           'largish',         'blown-up',
      'enlarged',          'bouffant',        'puffy',
      'bulky',             'colossal',        'prodigious',
      'stupendous',        'cosmic',          'deep',
      'double',            'elephantine',     'gargantuan',
      'giant',             'jumbo',           'enormous',
      'tremendous',        'epic',            'larger-than-life',
      'extended',          'gigantic',        'mammoth',
      'hulky',             'huge',            'immense',
      'vast',              'Brobdingnagian',  'humongous',
      'banging',           'thumping',        'walloping',
      'king-size',         'king-sized',      'life-size',
      'lifesize',          'life-sized',      'full-size',
      'macro',             'massive',         'monolithic',
      'monumental',        'monstrous',       'mountainous',
      'outsize',           'outsized',        'oversize',
      'oversized',         'overlarge',       'too large',
      'plumping',          'queen-size',      'queen-sized',
      'rangy',             'super',           'titanic',
      'volumed',           'wide-ranging',    'broad',
      'wide',              'of import',       'prominent',
      'conspicuous',       'obvious',         'bad',
      'intense',           'loud',            'intemperate',
      'full-grown',        'fully grown',     'grownup',
      'swelled',           'vainglorious',    'big',
      'elder',             'older',           'boastful',
      'braggart',          'bragging',        'braggy',
      'cock-a-hoop',       'crowing',         'self-aggrandizing', 'sethian', 'seth', 'pasha',
      'self-aggrandising', 'bounteous',       'bountiful',
      'freehanded',        'giving',          'enceinte',
      'with child',        'pregnant',        'boastfully',
      'vauntingly'
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
    word: "Many",
    synonyms: [
      'a mass of',      'a world of',           'abounding',
      'abundance',      'abundant',             'affluent',
      'all-sufficing',  'ample',                'aplenty',
      'army',           'assorted',             'at odds',
      'at variance',    'bevy',                 'billion',
      'bottomless',     'bounteous',            'bountiful',
      'bunch',          'cloud',                'clutter',
      'common',         'considerable',         'contrary',
      'contrasted',     'contrasting',          'copious',
      'countless',      'covey',                'departing',
      'deviating',      'deviative',            'different',
      'differentiated', 'differing',            'diffuse',
      'disaccordant',   'disagreeing',          'discordant',
      'discrepant',     'discrete',             'discriminated',
      'disjoined',      'disparate',            'dissimilar',
      'dissonant',      'distinct',             'distinguished',
      'divergent',      'diverging',            'divers',
      'diverse',        'diversified',          'effuse',
      'epidemic',       'ever so many',         'everyday',
      'exhaustless',    'extravagant',          'exuberant',
      'fat',            'fertile',              'flight',
      'flock',          'flocks',               'flush',
      'frequent',       'frequentative',        'full',
      'full many',      'galore',               'generous',
      'habitual',       'hail',                 'heaped-up',
      'heterogeneous',  'hive',                 'hordes',
      'host',           'in disagreement',      'in plenty',
      'in quantity',    'inaccordant',          'incompatible',
      'incongruous',    'inconsistent',         'inconsonant',
      'inexhaustible',  'inharmonious',         'innumerable',
      'irreconcilable', 'jam',                  'jillion',
      'large amount',   'lavish',               'legion',
      'liberal',        'lots',                 'luxuriant',
      'manifold',       'many and various',     'many times',
      'masses',         'masses of',            'maximal',
      'million',        'mob',                  'motley',
      'much',           'muchness',             'multifarious',
      'multifold',      'multiple',             'multiplied',
      'multitude',      'multitudes',           'multitudinal',
      'multitudinous',  'myriad',               'nest',
      'no few',         'not a few',            'not rare',
      'numberless',     'numbers',              'numerous',
      'of all sorts',   'of common occurrence', 'oft-repeated',
      'oftentime',      'opulent',              'ordinary',
      'overflowing',    'pack',                 'plenitudinous',
      'plenteous',      'plentiful',            'plenty',
      'plurality',      'poles apart',          'poles asunder',
      'populous',       'prevailing',           'prevalent',
      'prodigal',       'productive',           'profuse',
      'profusion',      'profusive',            'quantities',
      'quite a few',    'quite some',           'rampant',
      'recurrent',      'replete',              'rich',
      'rife',           'riotous',              'rout',
      'routine',        'ruck',                 'running over',
      'scads',          'scores',               'separate',
      'separated',      'several',              'shoal',
      'shoals',         'sundry',               'superabundant',
      'swarm',          'swarms',               'teeming',
      'thick-coming',   'thousand',             'thousands',
      'throng',         'tidy sum',             'tons',
      'unconformable',  'uncountable',          'unequal',
      'unlike',         'usual',                'variant',
      'varied',         'variegated',           'various',
      'varying',        'very many',            'voluminous',
      'wealthy',        'well-found',           'well-furnished',
      'well-provided',  'well-stocked',         'wholesale',
      'widely apart',   'worlds apart',         'worlds of',
      'zillion',      'many',                 'many a',
      'many an',        'many another',         'some',
      'umpteen',        'umteen',               'more'
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
    word: "Always",
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
    word: "Messy",
    synonyms:[
      'beat-up',     'bedraggled',    'blowzy',      'botched',
      'bungling',    'careless',      'chintzy',     'clumsy',
      'deficient',   'dilapidated',   'dingy',       'dirty',
      'disheveled',  'drabbletailed', 'draggled',    'draggletailed',
      'dusty',       'frowzy',        'frumpish',    'frumpy',
      'grimy',       'grubby',        'grungy',      'half-assed',
      'haphazard',   'hit-and-miss',  'hit-or-miss', 'in rags',
      'informal',    'loose',         'lumpen',      'miry',
      'muddy',       'mussy',         'negligent',   'poky',
      'promiscuous', 'ragged',        'raggedy',     'raunchy',
      'ruinous',     'scraggly',      'scruffy',     'seedy',
      'shabby',      'shoddy',        'slack',       'slapdash',
      'slatternly',  'slipshod',      'slipshoddy',  'sloppy',
      'slovenly',    'sluttish',      'smirchy',     'smoky',
      'smudgy',      'smutchy',       'smutty',      'snuffy',
      'sooty',       'sordid',        'squalid',     'tacky',
      'tattered',    'unfastidious',  'unkempt',     'unneat',
      'unsightly',   'unthorough',    'untidy',      'untidy',
      'disorganized',
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
    word: "Strange",
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
      'oddish',            'uneasy',             
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
  console.log("this is the randIndex", randIndex)
  groupNword = [wordBank[randIndex], czarWord];
  return groupNword;
}

//==========================================
//==  This is the text field. It sends    ==
//==   over the text over to the object   ==
//==   methods when it detects a change   ==
//==========================================

let answerBox = document.querySelector("#answer");

let playerWord = "";

answerBox.addEventListener("change", function(event){
    playerWord = event.target.value.toLowerCase();
    console.log("this is the player's word:", playerWord)
    points = 0;
    if(groupNword[0].validAnswerCheck(playerWord)){
      groupNword[0].points(groupNword[0].validAnswerCheck(playerWord))
    }
  }
);


//======================================
//== Determining how many rounds the  ==
//==  player wants. All odd numbered  ==
//======================================
let totalRounds;

const startGame = () => {
  let form = document.querySelector(".gameStart");
  totalRounds = form.elements.rounds.value;
  hideForm.style.display = "none"
  gameStartDialogue.innerHTML = `We will be playing ${totalRounds} rounds.`+"<br/><br/>"+`The longest word wins the round. The player with the most points at the end of ${totalRounds} rounds is the WORD SMITH.`+"<br/><br/>"+`Let us begin!`;

}

//setting up the page?
let round = 1;
let displayRound = document.querySelector(".roundCounter");

const printRound = () => displayRound.innerHTML = round;
const printScore = () => {
  pOneScore.innerHTML = pOnePoints + " points";
  pTwoScore.innerHTML = pTwoPoints + " points";
}
//===========================
//== The game select modal ==
//===========================

let close = document.querySelector(".startGame");
let modal = document.querySelector(".modalStart");
let gameStartDialogue = document.querySelector(".startCzar");
let triggerInstructions = document.querySelector(".roundSelector");
let hideForm = document.querySelector(".gameStart"); 
let instructions = document.querySelector(".instructions");
let playAgain = document.querySelector(".text");
let form = document.querySelector(".gameRestart");


close.onclick = function (){
  modal.style.display = "none";
  printScore();
  printRound();
  printWord(randomizeWord());
  instructions.style.display = "none";
}

triggerInstructions.onclick = function (){
  instructions.style.display = "flex";
  close.style.display = "block";
}



//++++++++++++++++++++++++++++++
//++ Makes the next player go ++
//++++++++++++++++++++++++++++++ 

const toggleTurn = () => {
  if(turnToggle === true){
    console.log("it's player two's turn")
    turnToggle = false;
  } else {
    console.log("it's player one's turn")
    turnToggle = true;
  }
}

//==========================================
//== Prints things to the respective divs ==
//==========================================

let definitelyARealButton = document.querySelector(".fakeSubmit");
let pOneScore = document.querySelector(".playerOneScore");
let pTwoScore = document.querySelector(".playerTwoScore");
let inputAcknowledgement = document.querySelector(".inputAcknowledgement");
//if gives me error make czar text here
let czarText = document.querySelector(".czarText");


//i think i can make this better by passing two params and if the display param is undefined set it to a default of block?
const toggleDisplay = element => {
  if (element.style.display === "none" ){
    element.style.display = "block";
  } else if (element.style.display !== "none"){
    element.style.display = "none"
  }
}

definitelyARealButton.addEventListener("click", function(event){
  console.log("this is the current round",round)
  if(turnToggle === true){
    if(playerWord === ""){
      inputAcknowledgement.innerHTML = "You didn't enter anything!";
      setTimeout(toggleDisplay, 1000, inputAcknowledgement);
      console.log("entered an empty string");
      setTimeout(function(){
        toggleDisplay(inputAcknowledgement)
        inputAcknowledgement.innerHTML = "Player two it's your turn!"
      }, 2000);
    } else {
      // toggleDisplay(inputAcknowledgement);
      inputAcknowledgement.innerHTML = `You got ${points} points!`
      setTimeout(toggleDisplay, 2000, inputAcknowledgement)
      console.log("this is what points is holding",points)
      pOnePoints += points;
      // --~ displays those points to the respective play box y ~---
      pOneScore.innerHTML = pOnePoints + " points";
      answerBox.value = "";
      setTimeout(function(){
        toggleDisplay(inputAcknowledgement)
        inputAcknowledgement.innerHTML = "Player two it's your turn!"
      }, 2000);
    }
  }else if(turnToggle === false){
    if(playerWord === ""){
      // toggleDisplay(inputAcknowledgement)
      inputAcknowledgement.innerHTML = "You didn't enter anything!"
      setTimeout(toggleDisplay, 1000, inputAcknowledgement)
      console.log("entered an empty string")
      setTimeout(function(){
        toggleDisplay(inputAcknowledgement)
        inputAcknowledgement.innerHTML = "Player One it's your turn!"
      }, 2000);
      round = round;
    } else {
      // toggleDisplay(inputAcknowledgement)
      inputAcknowledgement.innerHTML = `You got ${points} points!`
      setTimeout(toggleDisplay, 1000, inputAcknowledgement)
      console.log("this is what points is holding",points)
      pTwoPoints += points;
      //--~ displays those points to the respective play box y ~--
      pTwoScore.innerHTML = pTwoPoints + " points";
      answerBox.value = "";
      round++;
      totalRounds--;
      if(totalRounds > 0){
        setTimeout(whoWonRound, 1000, pOnePoints, pTwoPoints);
        setTimeout(printRound, 500);
        setTimeout(function(){
          toggleDisplay(inputAcknowledgement)
          toggleDisplay(theWord);
          printWord(randomizeWord());
        }, 5000);
      }
    }  
  }
  toggleTurn();
  if(totalRounds === 0){
    winner();
    setTimeout(function () {
      close.style.display = "none";
      playAgain.innerHTML = "Would you like to play again?";
      modal.style.display = "flex";
      form.style.display = "block";
    }, 5000);
    }
  } 
);

const restartGame = () => {
  answer = form.elements.answer.value;
  console.log(answer);
  if (answer === "yes"){
    pOnePoints = 0;
    pTwoPoints = 0;
    round = 1;
    form.style.display = "none";
    hideForm.style.display = "block";
  }
}

//===============================================
//==  The computer talking:                    ==
//==      -dialogue for the comp to tell       ==
//==        the which player won               ==
//==      -Printing the round's word           ==
//===============================================

let wordCzar = document.querySelector(".computerWordDisplay");
let theWord = document.querySelector(".theWord")

const printWord = (word) => {
  displayWord = word[1];
  czarText.innerHTML = "Word Smiths, your word is:" + "<br/><br/>";
  theWord.innerHTML = displayWord;
  inputAcknowledgement.innerHTML = "Player one it's your turn."
}

const whoWonRound = (pOne, pTwo) => {
    if(pOne > pTwo){
      toggleDisplay(theWord);
      czarText.innerHTML = "Player one has won this round!<br/>Player two...get it together!<br/>Next Round!"
    } else if(pTwo > pOne){
      toggleDisplay(theWord);
      czarText.innerHTML = "Player two has won this round!<br/>Player one...get it together!<br/>Next Round!"
    } else if(pOne === pTwo){
      toggleDisplay(theWord);
      czarText.innerHTML = "Evenly matched! This round was a tie!<br/>Next Round!"
    }
}

const winner = () => {
  wordCzar.innerHTML = "That's the end!<br/>Results are in... <br/>Who is the Word Smith?"
  if(pOnePoints > pTwoPoints){
    setTimeout(function () {
      wordCzar.innerHTML = "Player Two!<br/>Better luck next time. <br/>Player One you are the WORD SMITH";
    }, 3000);
  } else if (pOnePoints < pTwoPoints){
    setTimeout(function (){
      wordCzar.innerHTML = "Player One!<br/>Better luck next time. <br/>Player Two you are the WORD SMITH";
    }, 3000);
  } else if (pOnePoints === pTwoPoints){
    setTimeout(function (){
      wordCzar.innerHTML = "Word Smithery is strong with these two... <br/>You are both worthy of the title of WORD SMITH";
    }, 3000);
  }
} 


//*===============================================================NOTES=========================================================================
//!After the first pass it doesn't warn you that you have entered an empty string.
//TODO==============================================================================================================================================
//On the start game button, making everything slide down and bounce a bit into the view port
//add an icon that controls if there is sound or not
//fix the play again menu!

