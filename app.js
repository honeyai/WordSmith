//========================================================================================
//================================== WORD SMITH ==========================================
//========================================================================================


//==============================================
//==  Creating the word bank of which         ==
//==  players will type the synonyms.         ==                               
//==============================================

const wordBank = [{
    word: "Happy",
    synonyms: [
      'a propos', 'accepting', 'accidental',
      'ad rem', 'adapted', 'addled',
      'advantageous', 'advisable', 'applicable',
      'apposite', 'appropriate', 'apropos',
      'apt', 'at ease', 'auspicious',
      'beaming', 'beatific', 'beatified',
      'becoming', 'beery', 'befitting',
      'bemused', 'beneficial', 'benign',
      'benignant', 'besotted', 'blessed',
      'blind drunk', 'blissful', 'blithe',
      'blithesome', 'bright', 'bright and sunny',
      'capering', 'casual', 'cheerful',
      'cheery', 'chirping', 'civil',
      'cock-a-hoop', 'cogent', 'comely',
      'comfortable', 'composed', 'congruous',
      'content', 'contented', 'convenient',
      'convincing', 'correct', 'crapulent',
      'crapulous', 'dancing', 'decent',
      'decorous', 'delighted', 'desirable',
      'dizzy', 'dovetailing', 'drenched',
      'drunk', 'drunken', 'easy',
      'easygoing', 'ecstatic', 'effective',
      'effectual', 'efficacious', 'efficient',
      'elated', 'eupeptic', 'euphoric',
      'exalted', 'exhilarated', 'expedient',
      'exuberant', 'exultant', 'fair',
      'far-gone', 'favorable', 'favoring',
      'feasible', 'felicitous', 'fit',
      'fitted', 'fitten', 'fitting',
      'flushed', 'flushed with joy', 'flustered',
      'fortuitous', 'fortunate', 'fou',
      'fructuous', 'full', 'full of promise',
      'gay', 'geared', 'genial',
      'genteel', 'giddy', 'glad',
      'gladsome', 'gleeful', 'glorious',
      'glowing', 'golden', 'good',
      'gratified', 'high', 'hopeful',
      'in good spirits', 'in high spirits', 'in liquor',
      'in seventh heaven', 'incidental', 'inebriate',
      'inebriated', 'inebrious', 'inspired',
      'intoxicated', 'irrepressible', 'jolly',
      'joyful', 'joyous', 'jubilant',
      'just', 'just right', 'laughing',
      'leaping', 'light-hearted', 'lighthearted',
      'likely', 'lucky', 'maudlin',
      'meet', 'mellow', 'merry',
      'meshing', 'muddled', 'nappy',
      'nice', 'of good cheer', 'of good comfort',
      'of good omen', 'of happy portent', 'of promise',
      'on cloud nine', 'on the button', 'opportune',
      'optimistic', 'overjoyed', 'pat',
      'pleasant', 'pleased', 'pleased as Punch',
      'politic', 'profitable', 'promising',
      'proper', 'propitious', 'prosperous',
      'providential', 'purring', 'qualified',
      'radiant', 'recommendable', 'reconciled',
      'reeling', 'relevant', 'resigned',
      'riant', 'right', 'ripe',
      'rosy', 'sanguine', 'sanguineous',
      'sans souci', 'satisfied', 'seasonable',
      'seemly', 'shikker', 'singing',
      'smiling', 'smirking', 'sodden',
      'sortable', 'sotted', 'sparkling',
      'starry-eyed', 'suitable', 'suited',
      'suiting', 'sunny', 'tailored',
      'telling', 'thrice happy', 'thrilled',
      'tickled pink', 'tiddly', 'timely',
      'tipsy', 'to be desired', 'to the point',
      'to the purpose', 'uncomplaining', 'under the influence',
      'unrepining', 'urbane', 'useful',
      'well', 'well-chosen', 'well-expressed',
      'well-put', 'well-timed', 'winsome',
      'wise', 'without care', 'worthwhile',
      'happy', 'elysian', 'paradisiacal',
      'paradisiac', 'paradisaical', 'paradisaic',
      'paradisal', 'paradisial', 'halcyon',
      'expansive', 'euphoriant', 'joy',
    ],

    //==============================================
    //==  Check to see if the play's word         ==
    //==  inside of the array                     ==                              
    //==============================================

    validAnswerCheck(input) {
      //is the input any of these iterated words, give me a boolean
      if (this.synonyms.includes(input)) {
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
      if (word.length >= 8) {
        console.log("this is long the word is:", word.length);
        console.log("player gets 8 points");
        return points = 8;
      } else if (word.length < 8 && word.length >= 5) {
        console.log("this is long the word is:", word.length);
        console.log("player gets 5 points");
        return points = 5;

      } else if (word.length < 5 && word.length > 0) {
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
    synonyms: [
      'adult', 'aggrandized', 'ample',
      'apotheosized', 'arrogant', 'arty',
      'awash', 'awesome', 'awful',
      'awfully', 'beatified', 'benevolent',
      'big boy', 'big cheese', 'big noise',
      'big shot', 'big-league', 'big-name',
      'big-time', 'bighearted', 'bigwig',
      'bigwigged', 'bombastic', 'brimful',
      'brimming', 'bull', 'bumper',
      'canonized', 'capacious', 'chivalrous',
      'chock-full', 'cloyed', 'clumsy',
      'commodious', 'comprehensive', 'condescending',
      'consequential', 'considerable', 'considerate',
      'copious', 'crammed', 'crowded',
      'damned', 'deified', 'distended',
      'domineering', 'double-barreled', 'earthshaking',
      'elevated', 'eminent', 'ennobled',
      'enshrined', 'enthroned', 'exalted',
      'excellent', 'expectant', 'expecting',
      'extensive', 'extravagant', 'extremely',
      'fat', 'flushed', 'full to bursting',
      'gassy', 'generous', 'glorified',
      'glutted', 'gone', 'goodly',
      'grand', 'gravid', 'great',
      'great gun', 'great of heart', 'greathearted',
      'greatly', 'grown', 'grown-up',
      'handsome', 'haughty', 'healthy',
      'heavy', 'heavyweight', 'hefty',
      'held in awe', 'heroic', 'high',
      'high and mighty', 'high-faluting', 'high-flown',
      'high-headed', 'high-minded', 'high-nosed',
      'high-powered', 'high-sounding', 'high-swelling',
      'highfalutin', 'highfaluting', 'hoity-toity',
      'hugely', 'hulking', 'husky',
      'idealistic', 'immortal', 'immortalized',
      'important', 'imposing', 'inflated',
      'knightly', 'large', 'large-scale',
      'largehearted', 'liberal', 'lion',
      'lofty', 'magnanimous', 'magnified',
      'major', 'man-sized', 'marriable',
      'marriageable', 'material', 'mature',
      'maturescent', 'meaningful', 'mighty',
      'momentous', 'much', 'name',
      'noble', 'noble-minded', 'nubile',
      'numerous', 'of age', 'of marriageable age',
      'old', 'openhanded', 'overbearing',
      'overblown', 'overflowing', 'packed',
      'parturient', 'patronizing', 'pretentious',
      'princely', 'proud', 'purse-proud',
      'replete', 'roomy', 'sainted',
      'sanctified', 'sated', 'satiated',
      'satisfied', 'self-important', 'shrined',
      'significant', 'sizable', 'spacious',
      'stuck-up', 'stuffed', 'sublime',
      'substantial', 'supereminent', 'superior',
      'swollen', 'tall', 'throned',
      'tidy', 'toplofty', 'unwieldy',
      'uppish', 'uppity', 'upstage',
      'voluminous', 'weighty', 'whacking',
      'whopping', 'windy', 'world-shaking\r',
      'sizeable', 'astronomic', 'astronomical',
      'galactic', 'bigger', 'larger',
      'biggest', 'greatest', 'largest',
      'biggish', 'largish', 'blown-up',
      'enlarged', 'bouffant', 'puffy',
      'bulky', 'colossal', 'prodigious',
      'stupendous', 'cosmic', 'deep',
      'double', 'elephantine', 'gargantuan',
      'giant', 'jumbo', 'enormous',
      'tremendous', 'epic', 'larger-than-life',
      'extended', 'gigantic', 'mammoth',
      'hulky', 'huge', 'immense',
      'vast', 'Brobdingnagian', 'humongous',
      'banging', 'thumping', 'walloping',
      'king-size', 'king-sized', 'life-size',
      'lifesize', 'life-sized', 'full-size',
      'macro', 'massive', 'monolithic',
      'monumental', 'monstrous', 'mountainous',
      'outsize', 'outsized', 'oversize',
      'oversized', 'overlarge', 'too large',
      'plumping', 'queen-size', 'queen-sized',
      'rangy', 'super', 'titanic',
      'volumed', 'wide-ranging', 'broad',
      'wide', 'of import', 'prominent',
      'conspicuous', 'obvious', 'bad',
      'intense', 'loud', 'intemperate',
      'full-grown', 'fully grown', 'grownup',
      'swelled', 'vainglorious', 'big',
      'elder', 'older', 'boastful',
      'braggart', 'bragging', 'braggy',
      'cock-a-hoop', 'crowing', 'self-aggrandizing',
      'sethian', 'seth', 'pasha',
      'self-aggrandising', 'bounteous', 'bountiful',
      'freehanded', 'giving', 'enceinte',
      'with child', 'pregnant', 'boastfully',
      'vauntingly'
    ],

    //==============================================
    //==  Check to see if the play's word         ==
    //==  inside of the array                     ==                              
    //==============================================

    validAnswerCheck(input) {
      //is the input any of these iterated words, give me a boolean
      if (this.synonyms.includes(input)) {
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
      if (word.length >= 8) {
        console.log("this is long the word is:", word.length);
        console.log("player gets 8 points");
        return points = 8;
      } else if (word.length < 8 && word.length >= 5) {
        console.log("this is long the word is:", word.length);
        console.log("player gets 5 points");
        return points = 5;

      } else if (word.length < 5 && word.length > 0) {
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
      'a mass of', 'a world of', 'abounding',
      'abundance', 'abundant', 'affluent',
      'all-sufficing', 'ample', 'aplenty',
      'army', 'assorted', 'at odds',
      'at variance', 'bevy', 'billion',
      'bottomless', 'bounteous', 'bountiful',
      'bunch', 'cloud', 'clutter',
      'common', 'considerable', 'contrary',
      'contrasted', 'contrasting', 'copious',
      'countless', 'covey', 'departing',
      'deviating', 'deviative', 'different',
      'differentiated', 'differing', 'diffuse',
      'disaccordant', 'disagreeing', 'discordant',
      'discrepant', 'discrete', 'discriminated',
      'disjoined', 'disparate', 'dissimilar',
      'dissonant', 'distinct', 'distinguished',
      'divergent', 'diverging', 'divers',
      'diverse', 'diversified', 'effuse',
      'epidemic', 'ever so many', 'everyday',
      'exhaustless', 'extravagant', 'exuberant',
      'fat', 'fertile', 'flight',
      'flock', 'flocks', 'flush',
      'frequent', 'frequentative', 'full',
      'full many', 'galore', 'generous',
      'habitual', 'hail', 'heaped-up',
      'heterogeneous', 'hive', 'hordes',
      'host', 'in disagreement', 'in plenty',
      'in quantity', 'inaccordant', 'incompatible',
      'incongruous', 'inconsistent', 'inconsonant',
      'inexhaustible', 'inharmonious', 'innumerable',
      'irreconcilable', 'jam', 'jillion',
      'large amount', 'lavish', 'legion',
      'liberal', 'lots', 'luxuriant',
      'manifold', 'many and various', 'many times',
      'masses', 'masses of', 'maximal',
      'million', 'mob', 'motley',
      'much', 'muchness', 'multifarious',
      'multifold', 'multiple', 'multiplied',
      'multitude', 'multitudes', 'multitudinal',
      'multitudinous', 'myriad', 'nest',
      'no few', 'not a few', 'not rare',
      'numberless', 'numbers', 'numerous',
      'of all sorts', 'of common occurrence', 'oft-repeated',
      'oftentime', 'opulent', 'ordinary',
      'overflowing', 'pack', 'plenitudinous',
      'plenteous', 'plentiful', 'plenty',
      'plurality', 'poles apart', 'poles asunder',
      'populous', 'prevailing', 'prevalent',
      'prodigal', 'productive', 'profuse',
      'profusion', 'profusive', 'quantities',
      'quite a few', 'quite some', 'rampant',
      'recurrent', 'replete', 'rich',
      'rife', 'riotous', 'rout',
      'routine', 'ruck', 'running over',
      'scads', 'scores', 'separate',
      'separated', 'several', 'shoal',
      'shoals', 'sundry', 'superabundant',
      'swarm', 'swarms', 'teeming',
      'thick-coming', 'thousand', 'thousands',
      'throng', 'tidy sum', 'tons',
      'unconformable', 'uncountable', 'unequal',
      'unlike', 'usual', 'variant',
      'varied', 'variegated', 'various',
      'varying', 'very many', 'voluminous',
      'wealthy', 'well-found', 'well-furnished',
      'well-provided', 'well-stocked', 'wholesale',
      'widely apart', 'worlds apart', 'worlds of',
      'zillion', 'many', 'many a',
      'many an', 'many another', 'some',
      'umpteen', 'umteen', 'more'
    ],

    //==============================================
    //==  Check to see if the play's word         ==
    //==  inside of the array                     ==                              
    //==============================================

    validAnswerCheck(input) {
      //is the input any of these iterated words, give me a boolean
      if (this.synonyms.includes(input)) {
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
      if (word.length >= 8) {
        console.log("this is long the word is:", word.length);
        console.log("player gets 8 points");
        return points = 8;
      } else if (word.length < 8 && word.length >= 5) {
        console.log("this is long the word is:", word.length);
        console.log("player gets 5 points");
        return points = 5;

      } else if (word.length < 5 && word.length > 0) {
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
      'abidingly', 'again and again', 'all along',
      'all over', 'all the time', 'all the while',
      'at all times', 'at every turn', 'ceaselessly',
      'changelessly', 'constantly', 'continually',
      'continuously', 'cosmically', 'daily',
      'daily and hourly', 'day after day', 'day and night',
      'enduringly', 'eternally', 'ever',
      'ever and always', 'ever and anon', 'everlastingly',
      'evermore', 'every day', 'every hour',
      'every moment', 'everywhere', 'forever',
      'forevermore', 'frequently', 'galactically',
      'hour after hour', 'hourly', 'in any case',
      'in every instance', 'in perpetuity', 'incessantly',
      'inflexibly', 'internationally', 'invariably',
      'lastingly', 'like clockwork', 'many times',
      'methodically', 'month after month', 'never otherwise',
      'night and day', 'often', 'on and on',
      'orderly', 'perennially', 'permanently',
      'perpetually', 'rapidly', 'regularly',
      'right along', 'rigidly', 'statically',
      'steadfastly', 'steadily', 'sustainedly',
      'systematically', 'the world over', 'unceasingly',
      'unchangingly', 'unendingly', 'unintermittently',
      'uninterruptedly', 'universally', 'unvaryingly',
      'unwaveringly', 'usually', 'without cease',
      'without exception', 'without letup', 'without stopping',
      'year after year\r', "e'er", 'ad infinitum',
      'all-comprehensiveness', '                all-inclusiveness',
      'always', 'an eternity', 'aye',
      'boundlessly', 'boundlessness', 'countlessness',
      'endless time', 'endlessly', 'endlessness',
      'eternally', 'eternity', 'ever',
      'ever and again', 'ever and anon', 'evermore',
      'exhaustlessness', 'for all time', 'for aye',
      'for good', 'for keeps', 'forever and aye',
      'forevermore', 'illimitability', 'illimitably',
      'immeasurability', 'immeasurably', 'immensely',
      'immensity', 'in all ages', 'in perpetuity',
      'incalculability', 'incalculably', 'incomprehensibility',
      'incomprehensibly', 'inexhaustibility', 'infinitely',
      'infiniteness', 'infinitude', 'infinity',
      'innumerability', 'innumerably', 'interminability',
      'interminably', 'limitlessly', 'limitlessness',
      'measurelessly', 'measurelessness', 'now and forever',
      'numberlessness', 'perpetuity', 'termlessness',
      'throughout the ages', 'till doomsday', 'till time stops',
      'time without end', 'to infinity', 'universality',
      'unmeasurability', 'without end', 'without limit',
      'world without end\r', 'everlastingly', 'forever and a day'
    ],

    //==============================================
    //==  Check to see if the play's word         ==
    //==  inside of the array                     ==                              
    //==============================================

    validAnswerCheck(input) {
      //is the input any of these iterated words, give me a boolean
      if (this.synonyms.includes(input)) {
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
      if (word.length >= 8) {
        console.log("this is long the word is:", word.length);
        console.log("player gets 8 points");
        return points = 8;
      } else if (word.length < 8 && word.length >= 5) {
        console.log("this is long the word is:", word.length);
        console.log("player gets 5 points");
        return points = 5;

      } else if (word.length < 5 && word.length > 0) {
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
    synonyms: [
      'beat-up', 'bedraggled', 'blowzy', 'botched',
      'bungling', 'careless', 'chintzy', 'clumsy',
      'deficient', 'dilapidated', 'dingy', 'dirty',
      'disheveled', 'drabbletailed', 'draggled', 'draggletailed',
      'dusty', 'frowzy', 'frumpish', 'frumpy',
      'grimy', 'grubby', 'grungy', 'half-assed',
      'haphazard', 'hit-and-miss', 'hit-or-miss', 'in rags',
      'informal', 'loose', 'lumpen', 'miry',
      'muddy', 'mussy', 'negligent', 'poky',
      'promiscuous', 'ragged', 'raggedy', 'raunchy',
      'ruinous', 'scraggly', 'scruffy', 'seedy',
      'shabby', 'shoddy', 'slack', 'slapdash',
      'slatternly', 'slipshod', 'slipshoddy', 'sloppy',
      'slovenly', 'sluttish', 'smirchy', 'smoky',
      'smudgy', 'smutchy', 'smutty', 'snuffy',
      'sooty', 'sordid', 'squalid', 'tacky',
      'tattered', 'unfastidious', 'unkempt', 'unneat',
      'unsightly', 'unthorough', 'untidy', 'untidy',
      'disorganized','amiss',        'anarchial',     'anarchic',      'anarchistic',
      'antinomian',   'askew',         'awry',          'balled-up',
      'bothered',     'chaotic',       'cockeyed',      'confused',
      'convulsed',    'deranged',      'disarranged',   'discomfited',
      'discomposed',  'disconcerted',  'dislocated',    'disordered',
      'disorderly',   'disturbed',     'embarrassed',   'flustered',
      'fluttered',    'fussed',        'haywire',       'in a jumble',
      'in a pother',  'in a pucker',   'in a stew',     'in a sweat',
      'in a swivet',  'in a tizzy',    'in disorder',   'jumbled',
      'misplaced',    'mixed-up',      'nihilistic',    'on the fritz',
      'out of gear',  'out of joint',  'out of kelter', 'out of kilter',
      'out of order', 'out of place',  'out of tune',   'out of whack',
      'perplexed',    'perturbed',     'put-out',       'rattled',
      'roily',        'ruffled',       'shaken',        'shook',
      'shuffled',     'syndicalistic', 'turbid',        'turbulent',
      'unruly',       'unsettled',     'upset\r',       'disorganized',
      'disorganised', 'broken',        'upset',         'helter-skelter',
      'fucked-up',    'snafu',         'scrambled',     'unmethodical',
      'unstuck',      'undone',        'unsystematic'
    ],

    //==============================================
    //==  Check to see if the play's word         ==
    //==  inside of the array                     ==                              
    //==============================================

    validAnswerCheck(input) {
      //is the input any of these iterated words, give me a boolean
      if (this.synonyms.includes(input)) {
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
      if (word.length >= 8) {
        console.log("this is long the word is:", word.length);
        console.log("player gets 8 points");
        return points = 8;
      } else if (word.length < 8 && word.length >= 5) {
        console.log("this is long the word is:", word.length);
        console.log("player gets 5 points");
        return points = 5;

      } else if (word.length < 5 && word.length > 0) {
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
      'aberrant', 'able', 'abnormal',
      'absurd', 'alien', 'amazing',
      'anomalous', 'apart', 'astonishing',
      'astounding', 'atypical', 'barbarian',
      'barbaric', 'barbarous', 'beguiling',
      'bereft of reason', 'bewildering', 'bizarre',
      'brainsick', 'crackbrained', 'cracked',
      'crank', 'crankish', 'cranky',
      'crazed', 'crazy', 'crotchety',
      'curious', 'daft', 'deluded',
      'demented', 'deprived of reason', 'deranged',
      'detached', 'deviant', 'deviative',
      'different', 'disconnected', 'discrete',
      'disjunct', 'disoriented', 'disrelated',
      'dissociated', 'distraught', 'divergent',
      'dotty', 'eccentric', 'enigmatic',
      'erratic', 'exceptional', 'exotic',
      'exterior', 'external', 'extraneous',
      'extraordinary', 'extraterrestrial', 'extrinsic',
      'fabulous', 'fantastic', 'fascinating',
      'fey', 'fishy', 'flaky',
      'flighty', 'foreign', 'foreign-born',
      'freaked out', 'freakish', 'freaky',
      'funny', 'grotesque', 'hallucinated',
      'idiocratic', 'idiosyncratic', 'incalculable',
      'incognizable', 'incommensurable', 'incomparable',
      'incomprehensible', 'inconceivable', 'incredible',
      'independent', 'inexplicable', 'insane',
      'insular', 'intrusive', 'irrational',
      'irregular', 'irrelative', 'isolated',
      'kinky', 'kooky', 'loco',
      'lunatic', 'mad', 'maddened',
      'maggoty', 'manic', 'marvelous',
      'mazed', 'mental', 'mentally deficient',
      'meshuggah', 'miraculous', 'moon-struck',
      'mysterious', 'new', 'non compos',
      'non compos mentis', 'not all there', 'not right',
      'novel', 'nutty', 'odd',
      'oddball', 'of unsound mind', 'off',
      'off the wall', 'offbeat', 'original',
      'other', 'out', 'out-of-the-way',
      'outland', 'outlandish', 'outre',
      'outside', 'passing strange', 'peculiar',
      'phenomenal', 'prodigious', 'psycho',
      'puzzling', 'quaint', 'queer',
      'quirky', 'rare', 'reasonless',
      'remarkable', 'removed', 'romanesque',
      'romantic', 'rum', 'rummy',
      'screwball', 'screwy', 'sealed',
      'segregate', 'sensational', 'senseless',
      'separate', 'separated', 'sick',
      'singular', 'spectacular', 'stark-mad',
      'stark-staring mad', 'striking', 'stupendous',
      'surprising', 'tetched', 'touched',
      'twisted', 'ulterior', 'unaccountable',
      'unaccustomed', 'unaffiliated', 'unallied',
      'unapparent', 'unapprehended', 'unascertained',
      'unassociated', 'unbalanced', 'unbeknown',
      'uncanny', 'uncharted', 'unclassified',
      'uncommon', 'unconnected', 'unconventional',
      'uncouth', 'undisclosed', 'undiscoverable',
      'undiscovered', 'undivulged', 'unearthly',
      'unexplained', 'unexplored', 'unexposed',
      'unfamiliar', 'unfathomed', 'unheard',
      'unheard-of', 'unhinged', 'unidentified',
      'unimaginable', 'uninvestigated', 'unique',
      'unknowable', 'unknown', 'unnatural',
      'unperceived', 'unplumbed', 'unprecedented',
      'unrelatable', 'unrelated', 'unrevealed',
      'unsane', 'unsettled', 'unsound',
      'unsuspected', 'untouched', 'unusual',
      'virgin', 'wacky', 'wandering',
      'weird', 'whimsical', 'witless',
      'wonderful', 'wondrous', 'wondrous',
      'strange', 'antic', 'fantastical',
      'eerie', 'eery', 'gothic',
      'oddish', 'uneasy',
    ],

    //==============================================
    //==  Check to see if the play's word         ==
    //==  inside of the array                     ==                              
    //==============================================

    validAnswerCheck(input) {
      //is the input any of these iterated words, give me a boolean
      if (this.synonyms.includes(input)) {
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
      if (word.length >= 8) {
        console.log("this is long the word is:", word.length);
        console.log("player gets 8 points");
        return points = 8;
      } else if (word.length < 8 && word.length >= 5) {
        console.log("this is long the word is:", word.length);
        console.log("player gets 5 points");
        return points = 5;

      } else if (word.length < 5 && word.length > 0) {
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
    word: "Love",
    synonyms: [
      'Amor', 'Aphrodite', 'Astarte',
      'BOMFOG', 'Benthamism', 'Christian charity',
      'Christian love', 'Cupid', 'Eros',
      'Freya', 'Kama', 'Love',
      'Venus', 'accord', 'accordance',
      'admiration', 'admire', 'adoration',
      'adore', 'adulate', 'adulation',
      'affair', 'affection', 'affinity',
      'agape', 'agreement', 'aim at',
      'allegiance', 'altruism', 'amiability',
      'amiableness', 'amicability', 'amicableness',
      'amity', 'amor', 'amorousness',
      'amour', 'angel', 'appreciate',
      'ardency', 'ardor', 'attachment',
      'attraction', 'babe', 'baby',
      'baby-doll', 'bang', 'bask in',
      'be all heart', 'be desirous of', 'be fond of',
      'be partial to', 'be pleased with', 'beau',
      'beloved', 'beloved object', 'beneficence',
      'benevolence', 'benevolent disposition', 'benevolentness',
      'bent', 'best love', 'best regards',
      'best wishes', 'betrothed', 'bigheartedness',
      'bonds of harmony', 'bonk', 'boyfriend',
      'brotherhood', 'brotherly love', 'burn with love',
      'buttercup', 'cardinal virtues', 'care',
      'care for', 'caress', 'caritas',
      'carnality', 'cement of friendship', 'charitableness',
      'charity', 'cherish', 'cherub',
      'chick', 'chickabiddy', 'choose',
      'coldness', 'communion', 'community',
      'community of interests', 'compatibility', 'compliments',
      'concern', 'concord', 'concordance',
      'congeniality', 'correspondence', 'cosset',
      'crush', 'cuddle', 'dandle',
      'darling', 'dear', 'dear one',
      'dearly beloved', 'deary', 'deify',
      'delight', 'delight in', 'derive pleasure from',
      'desiderate', 'desire', 'devoirs',
      'devotion', 'devour', 'disposition',
      'do-goodism', 'doll', 'dote',
      'dote on', 'dote upon', 'duck',
      'duckling', 'eat up', 'egards',
      'embrace', 'emotion', 'empathy',
      'enjoy', 'enjoyment', 'enthusiasm',
      'esprit', 'esprit de corps', 'exalt',
      'faith', 'fancy', 'favor',
      'fealty', 'feast on', 'feeling of identity',
      'fellow feeling', 'fellowship', 'fervor',
      'fiance', 'fiancee', 'fidelity',
      'flesh', 'fleshliness', 'flower power',
      'fondle', 'fondness', 'fortitude',
      'freak out on', 'frictionlessness', 'friendliness',
      'friendship', 'frigidity', 'fuck',
      'generosity', 'get high on', 'girl',
      'giving', 'gloat over', 'go for',
      'good vibes', 'good vibrations', 'good wishes',
      'goodwill', 'grace', 'greatheartedness',
      'greetings', 'groove on', 'gust',
      'gusto', 'guy', 'happy family',
      'harmony', 'hate', 'have deep feelings',
      'have designs on', 'have eyes for', 'have it bad',
      'have sex', 'hold dear', 'hon',
      'honey', 'honey bunch', 'honey child',
      'hope', 'humanitarianism', 'hump',
      'identity', 'idolatry', 'idolize',
      'impotence', 'inamorata', 'inamorato',
      'inclination', 'indulge in', 'infatuation',
      'intended', 'intrigue', 'justice',
      'kind regards', 'kindest regards', 'kindness',
      'kinship', 'know', 'lamb',
      'lambkin', 'largeheartedness', 'leaning',
      'liaison', 'libido', 'light of love',
      'like', 'like-mindedness', 'likes',
      'liking', 'love affair', 'love of mankind',
      'loved one', 'lovemaking', 'lover',
      'loyalty', 'lust', 'lust after',
      'luxuriate in', 'make out', 'man',
      'mania', 'marriage', 'mate',
      'mutuality', 'natural virtues', 'neck',
      'neighborlikeness', 'neighborliness', 'oneness',
      'partiality', 'passion', 'peace',
      'peaceableness', 'pet', 'petkins',
      'philanthropism', 'philanthropy', 'piety',
      'pleasure', 'potency', 'precious',
      'precious heart', 'predilection', 'prefer',
      'preference', 'prize', 'proclivity',
      'prudence', 'rapport', 'rapprochement',
      'rapture', 'reciprocity', 'regard',
      'regards', 'rejoice in', 'relationship',
      'relish', 'remembrances', 'respects',
      'revel in', 'revere', 'riot in',
      'romance', 'savor', 'screw',
      'sensuality', 'sentiment', 'sex drive',
      'sexiness', 'sexual instinct', 'sexual urge',
      'sexualism', 'sexuality', 'sharing',
      'sisterhood', 'smack the lips', 'snookums',
      'sociability', 'solicitude', 'solidarity',
      'sugar', 'suitor', 'supernatural virtues',
      'swain', 'sweet', 'sweetheart',
      'sweetie', 'sweetkins', 'sweets',
      'swim in', 'sympathy', 'symphony',
      'take', 'take pleasure in', 'take to',
      'tally', 'taste', 'team spirit',
      'temperance', 'tenderness', 'theological virtues',
      'thing', 'treasure', 'truelove',
      'turtledove', 'understanding', 'unhostility',
      'union', 'unison', 'unity',
      'utilitarianism', 'value', 'venerate',
      'voluptuousness', 'wallow in', 'want',
      'warmth', 'weakness', 'welfarism',
      'well-affectedness', 'well-beloved', 'well-disposedness',
      'wish', 'wish to goodness', 'wish very much',
      'woman', 'worship', 'would fain do',
      'yearning', 'young man', 'zeal',
      'object', 'dearest', 'sexual desire',
      'concupiscence', 'physical attraction', 'score',
      'sexual love', 'making love', 'love life',
      'sexual activity', 'sexual practice', 'sex',
      'sex activity', 'roll in the hay', 'make love',
      'sleep with', 'get laid', 'do it',
      'be intimate', 'have intercourse', 'have it away',
      'have it off', 'jazz', 'eff',
      'lie with', 'bed', 'have a go at it',
      'get it on', 'copulate', 'pair',
      'couple'

    ],

    //==============================================
    //==  Check to see if the play's word         ==
    //==  inside of the array                     ==                              
    //==============================================

    validAnswerCheck(input) {
      //is the input any of these iterated words, give me a boolean
      if (this.synonyms.includes(input)) {
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
      if (word.length >= 8) {
        console.log("this is long the word is:", word.length);
        console.log("player gets 8 points");
        return points = 8;
      } else if (word.length < 8 && word.length >= 5) {
        console.log("this is long the word is:", word.length);
        console.log("player gets 5 points");
        return points = 5;

      } else if (word.length < 5 && word.length > 0) {
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
    word: "Remorse",
    synonyms: [
      'anxiety', 'apologies',
      'attrition', 'ayenbite of inwit',
      'bitterness', 'compunction',
      'contriteness', 'contrition',
      'embarrassment', 'grief',
      'guilt', 'guilty conscience',
      'humiliation', 'mortification',
      'pangs of conscience', 'penance',
      'penitence', 'penitently',
      'regret', 'regretfulness',
      'regrets', 'regretting',
      'remorse of conscience', 'remorsefulness',
      'repentance', 'repining',
      'rue', 'ruefulness',
      'self-reproach', 'shame',
      'shamefacedness', 'shamefastness',
      'shamefulness', 'sorriness',
      'sorrow', 'wistfulness',
      'woe', 'blame',
      'blameworthiness',
      'contriteness', 'contrition',
      'crime', 'criminality',
      'culpability', 'fault',
      'feloniousness', 'guiltiness',
      'misconduct', 'offense',
      'onus', 'regret',
      'remorse', 'repentance',
      'responsibility', 'self-condemnation',
      'self-reproach', 'shame',
      'sin', 'sinfulness',
      'sorrow', 'wrongdoing',
      'condition', 'status',
      'guilty conscience', 'guilt feelings',
      'guilt trip', 'compunction'

    ],

    //==============================================
    //==  Check to see if the play's word         ==
    //==  inside of the array                     ==                              
    //==============================================

    validAnswerCheck(input) {
      //is the input any of these iterated words, give me a boolean
      if (this.synonyms.includes(input)) {
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
      if (word.length >= 8) {
        console.log("this is long the word is:", word.length);
        console.log("player gets 8 points");
        return points = 8;
      } else if (word.length < 8 && word.length >= 5) {
        console.log("this is long the word is:", word.length);
        console.log("player gets 5 points");
        return points = 5;

      } else if (word.length < 5 && word.length > 0) {
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
    word: "Remorse",
    synonyms: [
      'anxiety', 'apologies',
      'attrition', 'ayenbite of inwit',
      'bitterness', 'compunction',
      'contriteness', 'contrition',
      'embarrassment', 'grief',
      'guilt', 'guilty conscience',
      'humiliation', 'mortification',
      'pangs of conscience', 'penance',
      'penitence', 'penitently',
      'regret', 'regretfulness',
      'regrets', 'regretting',
      'remorse of conscience', 'remorsefulness',
      'repentance', 'repining',
      'rue', 'ruefulness',
      'self-reproach', 'shame',
      'shamefacedness', 'shamefastness',
      'shamefulness', 'sorriness',
      'sorrow', 'wistfulness',
      'woe', 'blame',
      'blameworthiness',
      'contriteness', 'contrition',
      'crime', 'criminality',
      'culpability', 'fault',
      'feloniousness', 'guiltiness',
      'misconduct', 'offense',
      'onus', 'regret',
      'remorse', 'repentance',
      'responsibility', 'self-condemnation',
      'self-reproach', 'shame',
      'sin', 'sinfulness',
      'sorrow', 'wrongdoing',
      'condition', 'status',
      'guilty conscience', 'guilt feelings',
      'guilt trip', 'compunction'

    ],

    //==============================================
    //==  Check to see if the play's word         ==
    //==  inside of the array                     ==                              
    //==============================================

    validAnswerCheck(input) {
      //is the input any of these iterated words, give me a boolean
      if (this.synonyms.includes(input)) {
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
      if (word.length >= 8) {
        console.log("this is long the word is:", word.length);
        console.log("player gets 8 points");
        return points = 8;
      } else if (word.length < 8 && word.length >= 5) {
        console.log("this is long the word is:", word.length);
        console.log("player gets 5 points");
        return points = 5;

      } else if (word.length < 5 && word.length > 0) {
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
    word: "Tension",
    synonyms: [
      'Discordia',          'Eris',             'agitation',
  'all-overs',          'angst',            'anxiety',
  'anxiety hysteria',   'anxiety neurosis', 'anxious bench',
  'anxious concern',    'anxious seat',     'anxiousness',
  'apprehension',       'apprehensiveness', 'bloat',
  'bloating',           'breaking point',   'cankerworm of care',
  'care',               'chill',            'chilliness',
  'clash',              'clashing',         'clutch',
  'coldness',           'concern',          'concernment',
  'conflict',           'contention',       'coolness',
  'crisis',             'crunch',           'disaccord',
  'disaffinity',        'discomfort',       'discord',
  'discordance',        'discordancy',      'disharmony',
  'disquiet',           'disquietude',      'distension',
  'distress',           'disturbance',      'dread',
  'edginess',           'elongation',       'emergency',
  'enmity',             'exigency',         'extension',
  'extreme tension',    'fear',             'fidgetiness',
  'firmness',           'force',            'foreboding',
  'forebodingness',     'friction',         'frost',
  'haul',               'heave',            'high pressure',
  'iciness',            'imperativeness',   'incompatibility',
  'incompatibleness',   'inflation',        'inharmoniousness',
  'inharmony',          'inhospitality',    'inimicality',
  'inquietude',         'jangle',           'jar',
  'jitteriness',        'jumpiness',        'lengthening',
  'malaise',            'mental strain',    'mischief',
  'misgiving',          'nerves',           'nervous strain',
  'nervous tension',    'nervousness',      'noncooperation',
  'open conflict',      'overanxiety',      'overdistension',
  'overdrawing',        'overexertion',     'overexpansion',
  'overextension',      'overstrain',       'overstraining',
  'overstress',         'overstretching',   'overtaxing',
  'personal conflict',  'perturbation',     'pinch',
  'pins and needles',   'press',            'pressure',
  'production',         'prolongation',     'protraction',
  'pucker',             'pull',             'rack',
  'renitence',          'renitency',        'rigidity',
  'rigidness',          'rigor',            'rub',
  'snapping point',     'solicitude',       'starchiness',
  'stew',               'stiffness',        'strain',
  'strained relations', 'straining',        'stress',
  'stress and strain',  'stressfulness',    'stretch',
  'stretching',         'stringing out',    'suspense',
  'swelling',           'tautness',         'taxing',
  'tenseness',          'tensity',          'tightness',
  'traction',           'trouble',          'tug',
  'unamiability',       'uncordiality',     'unease',
  'uneasiness',         'unfriendliness',   'ungeniality',
  'unharmoniousness',   'unpleasantness',   'unquietness',
  'unsociability',      'upset',            'urgency',
  'vexation',           'worry',            'zeal\r',
  'latent hostility',   'hostility',        'antagonism',
  'vasoconstrictor',    'vasoconstrictive', 'condition',
  'status',             'balance'

    ],

    //==============================================
    //==  Check to see if the play's word         ==
    //==  inside of the array                     ==                              
    //==============================================

    validAnswerCheck(input) {
      //is the input any of these iterated words, give me a boolean
      if (this.synonyms.includes(input)) {
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
      if (word.length >= 8) {
        console.log("this is long the word is:", word.length);
        console.log("player gets 8 points");
        return points = 8;
      } else if (word.length < 8 && word.length >= 5) {
        console.log("this is long the word is:", word.length);
        console.log("player gets 5 points");
        return points = 5;

      } else if (word.length < 5 && word.length > 0) {
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
    word: "Confused",
    synonyms: [
      'disconcerted',       'dismayed',          'disordered',
  'disorderly',         'disorganized',      'disoriented',
  'disquieted',         'distracted',        'distraught',
  'distressed',         'disturbed',         'elaborate',
  'embarrassed',        'embrangled',        'entangled',
  'faint',              'featureless',       'feeble',
  'filmy',              'flustered',         'fluttered',
  'foggy',              'formless',          'fouled up',
  'fussed',             'fuzzy',             'galley-west',
  'general',            'grating',           'guessing',
  'half-seen',          'half-visible',      'harsh',
  'hazy',               'helter-skelter',    'higgledy-piggledy',
  'hit-or-miss',        'hugger-mugger',     'hung up',
  'ill at ease',        'ill-defined',       'implicated',
  'imprecise',          'in a fix',          'in a jumble',
  'in a maze',          'in a mess',         'in a pickle',
  'in a pother',        'in a pucker',       'in a scrape',
  'in a stew',          'in a sweat',        'in a swivet',
  'in a tizzy',         'inaccurate',        'inarticulate',
  'inchoate',           'incoherent',        'inconsistent',
  'inconspicuous',      'indecisive',        'indefinable',
  'indefinite',         'indeterminable',    'indeterminate',
  'indistinct',         'indistinguishable', 'inexact',
  'inform',             'intricate',         'involuted',
  'involved',           'jangling',          'jangly',
  'jarring',            'jostling',          'jumbled',
  'kaleidoscopic',      'knotted',           'labyrinthian',
  'labyrinthine',       'lax',               'loose',
  'lost',               'loused up',         'low-profile',
  'lumpen',             'many-faceted',      'matted',
  'mazed',              'mazy',              'meandering',
  'merely glimpsed',    'messed up',         'messy',
  'miscellaneous',      'misleading',        'misty',
  'mixed up',           'mixed-up',          'mortified',
  'motley',             'mousy',             'mucked up',
  'muddled',            'multifarious',      'muzzy',
  'mystified',          'mystifying',        'nondescript',
  'nonplussed',         'nonspecific',       'not with it',
  'obscure',            'off the track',     'orderless',
  'out of countenance', 'out of focus',      'out of it',
  'pale',               'perplexed',         'perplexing',
  'perturbed',          'put off',           'put out',
  'put-out',            'put-upon',          'puzzled',
  'puzzling',           'ramified',          'random',
  'rattled',            'roundabout',        'ruffled',
  'scattered',          'screwed up',        'self-conscious',
  'semivisible',        'shadowed forth',    'shadowy',
  'shaken',             'shamefaced',        'shamefast',
  'shapeless',          'shook',             'shuffled',
  'shy',                'skimble-skamble',   'skittish',
  'snafu',              'snarled',           'snarled up',
  'stammering',         'stochastic',        'subtle',
  'sweeping',           'tangled',           'tangly',
  'timid',              'timorous',          'topsy-turvy',
  'troubled',           'turned around',     'twisted',
  'uncertain',          'unclear',           'uncomfortable',
  'undefined',          'undestined',        'undetermined',
  'uneasy',             'unordered',         'unorganized',
  'unplain',            'unrecognizable',    'unsettled',
  'unspecified',        'upset',             'upside-down',
  'vague',              'veiled',            'warring',
  'weak',               'without a clue\r',  'disconnected',
  'disjointed',         'garbled',           'illogical',
  'unconnected',        'unoriented',        'broken',
  'disorganised',       'confused',          'addlebrained',
  'addlepated',         'potty',             'puddingheaded',
  'muddleheaded',       'addled',            'woolly',
  'wooly',              'woolly-headed',     'wooly-minded',
  'befogged',           'clouded',           'stunned',
  'stupefied',          'stupid',            'punch-drunk',
  'silly',              'slaphappy',         'spaced-out',
  'dazzled',            'trancelike',        'seth'

    ],

    //==============================================
    //==  Check to see if the play's word         ==
    //==  inside of the array                     ==                              
    //==============================================

    validAnswerCheck(input) {
      //is the input any of these iterated words, give me a boolean
      if (this.synonyms.includes(input)) {
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
      if (word.length >= 8) {
        console.log("this is long the word is:", word.length);
        console.log("player gets 8 points");
        return points = 8;
      } else if (word.length < 8 && word.length >= 5) {
        console.log("this is long the word is:", word.length);
        console.log("player gets 5 points");
        return points = 5;

      } else if (word.length < 5 && word.length > 0) {
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
    word: "Determined",
    synonyms: [
      'actual',             'adamant',        'approaching',
  'arrogant',           'ascertained',    'assured',
  'attested',           'authenticated',  'bent',
  'borne out',          'bound',          'bound and determined',
  'categorically true', 'certain',        'certified',
  'circumscribed',      'circumscript',   'circumstantiated',
  'cocksure',           'coming',         'committed',
  'confident',          'confirmed',      'constant',
  'convinced',          'corroborated',   'decided',
  'decisive',           'dedicated',      'defined',
  'definite',           'delimited',      'demarcated',
  'demonstrated',       'desired',        'destinal',
  'destined',           'determinate',    'devoted',
  'distinct',           'documentary',    'dogged',
  'earnest',            'effectual',      'emergent',
  'encircled',          'established',    'eventual',
  'exact',              'experimental',   'extrapolated',
  'factual',            'fatal',          'fated',
  'fatidic',            'firm',           'fixed',
  'forthcoming',        'future',         'futuristic',
  'guaranteed',         'hedged about',   'hereafter',
  'historical',         'hoped-for',      'hubristic',
  'identified',         'imminent',       'in the bag',
  'intent',             'later',          'made sure',
  'nailed down',        'nearing',        'not in error',
  'objectively true',   'obstinate',      'on ice',
  'open-and-shut',      'overconfident',  'oversure',
  'overweening',        'persevering',    'persistent',
  'persuaded',          'planned',        'plotted',
  'poised',             'pompous',        'positive',
  'precise',            'predetermined',  'predicted',
  'probable',           'projected',      'prophesied',
  'prospective',        'proud',          'proved',
  'proven',             'purposeful',     'real',
  'reassured',          'relentless',     'resolute',
  'resolved',           'secure',         'self-assured',
  'self-confident',     'self-important', 'self-reliant',
  'serious',            'set',            'settled',
  'shown',              'sincere',        'single-minded',
  'specific',           'stated',         'steady',
  'strong-minded',      'strong-willed',  'stubborn',
  'substantiated',      'sure',           'sure-enough',
  'surrounded',         'tenacious',      'tentative',
  'tested',             'to come',        'to-be',
  'trial',              'tried',          'true',
  'true as gospel',     'truthful',       'ultimate',
  'unafraid',           'unconfuted',     'undenied',
  'undoubted',          'undoubting',     'unerroneous',
  'unfallacious',       'unfalse',        'unfaltering',
  'unflinching',        'unhesitating',   'unmistaken',
  'unquestionable',     'unrefuted',      'unwavering',
  'unyielding',         'validated',      'venturesome',
  'veracious',          'verified',       'veritable',
  'warranted',          'wholehearted',   'willing\r',
  'determined',         'discovered',     'observed',
  'dictated',           'compulsive',     'driven',
  'ambitious'

    ],

    //==============================================
    //==  Check to see if the play's word         ==
    //==  inside of the array                     ==                              
    //==============================================

    validAnswerCheck(input) {
      //is the input any of these iterated words, give me a boolean
      if (this.synonyms.includes(input)) {
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
      if (word.length >= 8) {
        console.log("this is long the word is:", word.length);
        console.log("player gets 8 points");
        return points = 8;
      } else if (word.length < 8 && word.length >= 5) {
        console.log("this is long the word is:", word.length);
        console.log("player gets 5 points");
        return points = 5;

      } else if (word.length < 5 && word.length > 0) {
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






//################################################################################################################################################
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~FUNCTIONALITY~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//################################################################################################################################################


//======================
//== Global Variables ==
//======================

//~~- JS VARIABLES -~~

// Points assigned by the points()
let points = 0;

// Index to locate player's input
let index;

// Random Index for which word will be displayed
let randIndex;

// The word chosen by randIndex
let czarWord;

// Players points
let pOnePoints = 0;
let pTwoPoints = 0;

// Toggles at each player's turn end
let turnToggle = true;

// Empty value for the player input
let playerWord = "";

// Number of rounds to be played chosen at start
let totalRounds;

// Current Round
let round = 1;


//~~- DOM VARIABLES -~~

// Text field
let answerBox = document.querySelector("#answer");

// Play/pause field
let audioButton = document.querySelector(".toggleAudio");

// Audio element
let gameTrack = document.querySelector(".gameTrack");

// Button that closes the modal and starts the game
let close = document.querySelector(".startGame");

// Beginning screen asking for how many rounds to play
let modal = document.querySelector(".modalStart");

// The container that holds gameStartDialogue
let instructions = document.querySelector(".instructions");

// Confirms the number of rounds and opens up gameStartDialogue
let triggerInstructions = document.querySelector(".roundSelector");

// Informs the players of the rounds they chose and how to play
let gameStartDialogue = document.querySelector(".startCzar");

// Used to hide or reveal the the form that has the rounds
let hideForm = document.querySelector(".gameStart");

// Round printed here
let displayRound = document.querySelector(".roundCounter");

// "submits" the player's synonyms. Its the button.
let definitelyARealButton = document.querySelector(".fakeSubmit");

// Player scor divs
let pOneScore = document.querySelector(".playerOneScore");
let pTwoScore = document.querySelector(".playerTwoScore");

// Text to let the player what points if any they got
let inputAcknowledgement = document.querySelector(".inputAcknowledgement");

// The container that holds czarText and theWord
let wordCzar = document.querySelector(".computerWordDisplay");

// The dialogue for the computer, "Word smiths your word is:"
let czarText = document.querySelector(".czarText");

// The word chosen at random to provide synonyms for
let theWord = document.querySelector(".theWord")

// The div that holds "WELCOME TO WORD SMITH"
let playAgain = document.querySelector(".text");

// Asks for yes or no to restart
let form = document.querySelector(".gameRestart");


//||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||


//========================
//==  Audio pause/play  ==
//========================

audioButton.addEventListener("click", function () {
  if (gameTrack.paused) {
    gameTrack.play();
  } else {
    gameTrack.pause()
    gameTrack.currentTime = 0;
  }
})

//===================================
//==   Randomizing the Czar word   ==
//===================================

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

answerBox.addEventListener("change", function (event) {
  playerWord = event.target.value.toLowerCase();
  console.log("this is the player's word:", playerWord)
  points = 0;
  if (groupNword[0].validAnswerCheck(playerWord)) {
    groupNword[0].points(groupNword[0].validAnswerCheck(playerWord))
  }
});


//======================================
//== Determining how many rounds the  ==
//==  player wants. All odd numbered  ==
//======================================

const startGame = () => {
  let form = document.querySelector(".gameStart");
  totalRounds = form.elements.rounds.value;
  hideForm.style.display = "none"
  gameStartDialogue.innerHTML = `We will be playing ${totalRounds} rounds.` + "<br/><br/>" + `The longest word wins the round. The player with the most points at the end of ${totalRounds} rounds is the WORD SMITH.` + "<br/><br/>" + `Let us begin!`;
}

//================
//== Page setup ==
//================

const printRound = () => displayRound.innerHTML = round;
const printScore = () => {
  pOneScore.innerHTML = pOnePoints + " points";
  pTwoScore.innerHTML = pTwoPoints + " points";
}

//===========================
//== The game select modal ==
//===========================

close.onclick = function () {
  modal.style.display = "none";
  printScore();
  printRound();
  printWord(randomizeWord());
  instructions.style.display = "none";
}

close.addEventListener("click", function () {
  document.querySelector('.wrapper').classList.add('cssanimation');
  document.querySelector('.wrapper').classList.add('elevateRight');
});

triggerInstructions.onclick = function () {
  instructions.style.display = "flex";
  close.style.display = "block";
}


//==============================
//== Makes the next player go ==
//============================== 

const toggleTurn = () => {
  if (turnToggle === true) {
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


//?i think i can make this better by passing two params and if the display param is undefined set it to a default of block?
const toggleDisplay = element => {
  if (element.style.display === "none") {
    element.style.display = "block";
  } else if (element.style.display !== "none") {
    element.style.display = "none"
  }
}

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Per click, this checks 
//   1. If there are still rounds left to play
//   2. Who's turn it is
//      - Let's them know if they got any points at all or if they didn't input anything
//   3. End of each turn it prints the player's score and announces this round's winner
//   4. Prints the next word 
//   5. If there are no other rounds to play it'll trigger the end game
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

definitelyARealButton.addEventListener("click", function () {
  console.log("this is the current round", round)
  if (turnToggle === true) {
    if (playerWord === "") {
      inputAcknowledgement.innerHTML = "You didn't enter anything!";
      setTimeout(toggleDisplay, 1000, inputAcknowledgement);
      console.log("entered an empty string");
      setTimeout(function () {
        toggleDisplay(inputAcknowledgement)
        inputAcknowledgement.innerHTML = "Player two it's your turn!"
      }, 2000);
    } else {
      inputAcknowledgement.innerHTML = `You got ${points} points!`
      setTimeout(toggleDisplay, 2000, inputAcknowledgement)
      console.log("this is what points is holding", points)
      pOnePoints += points;
      // --~ displays those points to the respective play box y ~---
      pOneScore.innerHTML = pOnePoints + " points";
      answerBox.value = "";
      setTimeout(function () {
        toggleDisplay(inputAcknowledgement)
        inputAcknowledgement.innerHTML = "Player two it's your turn!"
      }, 2000);
    }
  } else if (turnToggle === false) {
    if (playerWord === "") {
      // toggleDisplay(inputAcknowledgement)
      inputAcknowledgement.innerHTML = "You didn't enter anything!"
      setTimeout(toggleDisplay, 1000, inputAcknowledgement)
      console.log("entered an empty string")
      setTimeout(function () {
        toggleDisplay(inputAcknowledgement)
        inputAcknowledgement.innerHTML = "Player One it's your turn!"
      }, 2000);
      round = round;
    } else {
      inputAcknowledgement.innerHTML = `You got ${points} points!`
      setTimeout(toggleDisplay, 1000, inputAcknowledgement)
      console.log("this is what points is holding", points)
      pTwoPoints += points;
      //--~ displays those points to the respective play box y ~--
      pTwoScore.innerHTML = pTwoPoints + " points";
      answerBox.value = "";
      round++;
      totalRounds--;
      if (totalRounds > 0) {
        setTimeout(whoWonRound, 1000, pOnePoints, pTwoPoints);
        setTimeout(printRound, 500);
        setTimeout(function () {
          toggleDisplay(inputAcknowledgement)
          toggleDisplay(theWord);
          theWord.classList.add("cssanimation" );
          theWord.classList.add("leFadeInLeft" );
          theWord.classList.add("sequence");
          printWord(randomizeWord());
        }, 2000);
      }
    }
  }
  toggleTurn();
  if (totalRounds === 0) {
    winner();
    setTimeout(function () {
      close.style.display = "none";
      playAgain.innerHTML = "Would you like to play again?";
      modal.style.display = "flex";
      form.style.display = "block";
    }, 5000);
  }
});

//=======================================================
//==  Reopens the modal if the player wants to replay  ==
//=======================================================

const restartGame = () => {
  answer = form.elements.answer.value;
  console.log(answer);
  if (answer === "yes") {
    pOnePoints = 0;
    pTwoPoints = 0;
    round = 1;
    form.style.display = "none";
    hideForm.style.display = "block";
    toggleDisplay(theWord);
    printWord(randomizeWord());
  } else if (answer === "no") {
    playAgain.innerHTML = "Thank you for playing!";
    form.style.display = "none";
  }
}

//===============================================
//==  The computer talking:                    ==
//==      -dialogue for the comp to tell       ==
//==        the which player won               ==
//==      -Printing the round's word           ==
//===============================================

const printWord = (word) => {
  displayWord = word[1];
  czarText.innerHTML = "Word Smiths, your word is:";
  theWord.innerHTML = displayWord;
  inputAcknowledgement.innerHTML = "Player one it's your turn."
}

const whoWonRound = (pOne, pTwo) => {
  if (pOne > pTwo) {
    toggleDisplay(theWord);
    czarText.innerHTML = "Player one has won this round!<br/>Player two...get it together!<br/>Next Round!"
  } else if (pTwo > pOne) {
    toggleDisplay(theWord);
    czarText.innerHTML = "Player two has won this round!<br/>Player one...get it together!<br/>Next Round!"
  } else if (pOne === pTwo) {
    toggleDisplay(theWord);
    czarText.innerHTML = "Evenly matched! This round was a tie!<br/>Next Round!"
  }
}

//================
//==  End Game  ==
//================

const winner = () => {
  toggleDisplay(theWord);
  czarText.innerHTML = "That's the end!<br/>Results are in... <br/>Who is the Word Smith?"
  if (pOnePoints > pTwoPoints) {
    setTimeout(function () {
      czarText.innerHTML = "Player Two!<br/>Better luck next time. <br/>Player One you are the WORD SMITH";
    }, 3000);
  } else if (pOnePoints < pTwoPoints) {
    setTimeout(function () {
      czarText.innerHTML = "Player One!<br/>Better luck next time. <br/>Player Two you are the WORD SMITH";
    }, 3000);
  } else if (pOnePoints === pTwoPoints) {
    setTimeout(function () {
      czarText.innerHTML = "Word Smithery is strong with these two... <br/>You are both worthy of the title of WORD SMITH";
    }, 3000);
  }
}


//*===============================================================NOTES=========================================================================
//!After the first pass it doesn't warn you that you have entered an empty string.
//TODO==============================================================================================================================================

// allow custom names for words
// add the seth easter egg
// add a timer restricting game input entry
// add more words, based on a theme: emotion

