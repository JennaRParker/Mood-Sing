// The links below redirect me (with my API key for last.fm) to similar songs as a song of my own selection. After researching the best songs to qualify distinctive music generations, through process of elimination, I am the links to genre variables 

// songs like "Party Rock Anthem" by LMFAO
const happyMusic = 'http://ws.audioscrobbler.com/2.0/?method=track.getsimilar&artist=lmfao&track=party+rock+anthem&api_key=1bc71772e81d1ed9594a4ad8921042ba&format=json'

// songs like "Let Her Go" by Passenger
const sadMusic = 'http://ws.audioscrobbler.com/2.0/?method=track.getsimilar&artist=passenger&track=let+her+go&api_key=1bc71772e81d1ed9594a4ad8921042ba&format=json'

// songs like "Banana Pancakes" by Jack Johnson
const peacefulMusic = 'http://ws.audioscrobbler.com/2.0/?method=track.getsimilar&artist=jack+johnson&track=banana+pancakes&api_key=1bc71772e81d1ed9594a4ad8921042ba&format=json'

// songs like "Unchained Melody" by The Rhighteous Brothers
const romanticMusic = 'http://ws.audioscrobbler.com/2.0/?method=track.getsimilar&artist=the+righteous+brothers&track=unchained+melody&api_key=1bc71772e81d1ed9594a4ad8921042ba&format=json'

// songs like "Slow Motion" by Trey Songz
const sexyMusic = 'http://ws.audioscrobbler.com/2.0/?method=track.getsimilar&artist=trey+songz&track=slow+motion&api_key=1bc71772e81d1ed9594a4ad8921042ba&format=json'

//songs like "Bad Kids" by The Black Lips
const angryMusic = 'http://ws.audioscrobbler.com/2.0/?method=track.getsimilar&artist=the+black+lips&track=bad+kids&api_key=1bc71772e81d1ed9594a4ad8921042ba&format=json'

// songs like "Halloween Theme" by John Carpenter
const scaryMusic = 'http://ws.audioscrobbler.com/2.0/?method=track.getsimilar&artist=john+carpenter&track=halloween+theme&api_key=1bc71772e81d1ed9594a4ad8921042ba&format=json'

// The links below direct me (with my API key to Big Huge Thesaurus) to an array of synonyms for specified words. 

// words like happy= "https://words.bighugelabs.com/api/2/b996e9430b23a7cc844249c00dd18e11/happy/json"
const happySyn = [
    "happy",
    "felicitous",
    "glad",
    "well-chosen",
    "cheerful",
    "content",
    "contented",
    "elated",
    "euphoric",
    "joyful",
    "joyous",
    "felicitous",
    "blessed",
    "blissful",
    "bright",
    "fortunate",
    "golden",
    "halcyon",
    "laughing",
    "prosperous",
    "riant",
    "willing",
    "overjoyed",
    "excited",
    "positive",
    "wonderful",
    "amazing",
    "incredible",
    "celebratory",
    "sunny",
    "ready",
    "fun",
    "energized",
    "awake",
    "free",
    "turnt",
    "cheesy",
    "productive",
    "hopeful",
    "optimistic",
    "creative",
    "funky",
    "groovy",
    "hip",
    "independant",
    "confident",
    "powerful",
    "vibey",
    "sassy",
    "good",
    "great",
    "fresh",
    "refreshed",
    "hpyer",
    "energized",
    "energetic",
    "ecstatic"
]

// words like sad= "https://words.bighugelabs.com/api/2/b996e9430b23a7cc844249c00dd18e11/sad/json"
const sadSyn = [
    "sad",
    "deplorable",
    "distressing",
    "lamentable",
    "pitiful",
    "sorry",
    "bad",
    "bittersweet",
    "depressing",
    "depressed",
    "depressive",
    "doleful",
    "gloomy",
    "heavyhearted",
    "melancholic",
    "melancholy",
    "mournful",
    "pensive",
    "saddening",
    "sorrowful",
    "tragic",
    "tragical",
    "tragicomic",
    "tragicomical",
    "wistful",
    "lonely",
    "remorseful",
    "shameful",
    "ashamed",
    "shitty",
    "misunderstood",
    "heartbroken",
    "ugly",
    "anxious",
    "confused",
    "vulnerable",
    "solemn",
    "blue",
    "bored",
    "embarrassed",
    "guilty",
    "shy",
    "exhausted",
    "worn out",
    "pooped",
    "nervous",
    "moody",
    "bad",
    "sucky",
    "horrible",
    "awful",
    "terrible",
    "serious"
]

// words like peaceful : "https://words.bighugelabs.com/api/2/b996e9430b23a7cc844249c00dd18e11/peaceful/json"
const peacefulSyn = [
    "passive",
    "law-abiding",
    "amicable",
    "nonaggressive",
    "nonviolent",
    "quiet",
    "unaggressive",
    "peaceable",
    "dovish",
    "halcyon",
    "irenic",
    "nonbelligerent",
    "nonviolent",
    "orderly",
    "pacific",
    "pacifist",
    "pacifistic",
    "peace-loving",
    "undisturbed",
    "peaceful",
    "calm",
    "tired",
    "sleepy",
    "lowkey",
    "easy",
    "easy-going",
    "slow",
    "mellow",
    "nostalgic",
    "comfy",
    "comfortable",
    "homey",
    "homie",
    "apathetic",
    "indifferent",
    "meditative",
    "careful",
    "patient",
    "cautious",
    "chill",
    "so so",
    "so-so",
    "gentle",
    "soft",
    "cool",
    "okay",
    "hanging-in",
    "hanging in",
    "content",
    "relaxed"
]

// words like romantic = "https://words.bighugelabs.com/api/2/b996e9430b23a7cc844249c00dd18e11/loving/json"
const romanticSyn = [
    "attached",
    "committed",
    "lovable",
    "loveable",
    "passionate",
    "warmhearted",
    "admiring",
    "adoring",
    "affectionate",
    "affectioned",
    "amative",
    "amatory",
    "amorous",
    "captivated",
    "caressing",
    "caressive",
    "caring",
    "charmed",
    "doting",
    "dotty",
    "enamored",
    "fatherly",
    "fond",
    "gaga",
    "idolatrous",
    "in love",
    "in-love",
    "infatuated",
    "loverlike",
    "loverly",
    "lovesome",
    "overfond",
    "smitten",
    "soft on",
    "taken with",
    "tender",
    "tenderhearted",
    "touchy-feely",
    "uxorious",
    "warm",
    "romantic",
    "sweet",
    "sentimental",
    "love",
    "love struck",
    "love-struck"
]
// worlds like sexy 
//const sexySyn = "https://words.bighugelabs.com/api/2/b996e9430b23a7cc844249c00dd18e11/sexy/json"
const sexySyn =
    [
        "aphrodisiac",
        "aphrodisiacal",
        "exciting",
        "seductive",
        "aroused",
        "autoerotic",
        "blue",
        "coquettish",
        "erotic",
        "flirtatious",
        "gamey",
        "gamy",
        "highly-sexed",
        "horny",
        "hot",
        "intimate",
        "juicy",
        "lascivious",
        "lecherous",
        "leering",
        "lewd",
        "libidinous",
        "lubricious",
        "luscious",
        "lustful",
        "naughty",
        "orgiastic",
        "oversexed",
        "pornographic",
        "provocative",
        "prurient",
        "racy",
        "randy",
        "raunchy",
        "red-hot",
        "risque",
        "ruttish",
        "salacious",
        "sex-starved",
        "sexed",
        "sexual",
        "spicy",
        "steamy",
        "titillating",
        "toothsome",
        "turned on",
        "voluptuous",
        "sexy",
        "flirty"
    ]
// words like angry
// const angrySyn = "https://words.bighugelabs.com/api/2/b996e9430b23a7cc844249c00dd18e11/angry/json"
const angrySyn = [
    "furious",
    "raging",
    "angsty",
    "tempestuous",
    "wild",
    "furious",
    "aggravated",
    "angered",
    "black",
    "choleric",
    "enraged",
    "hot under the collar",
    "huffy",
    "incensed",
    "indignant",
    "infuriated",
    "irascible",
    "irate",
    "ireful",
    "livid",
    "mad",
    "maddened",
    "outraged",
    "provoked",
    "smoldering",
    "smouldering",
    "sore",
    "stormy",
    "upset",
    "umbrageous",
    "unhealthy",
    "wrathful",
    "wroth",
    "wrothful",
    "angry",
    "frustrated",
    "irritated",
    "over-it",
    "done",
    "annoyed",
    "pessimistic",
    "hostile",
    "envious",
    "jealous",
    "hateful",
    "crazy",
    "disgusted",
    "overwhelmed",
    "shocked",
    "surprised",
    "scared",
    "fearful",
    "enraged",
    "hysterical",
    "edgy",
    "punk",
    "punky",
    "indie",
    "stressed",
    "tense"
]
// words like scary
// const scarySyn = "https://words.bighugelabs.com/api/2/b996e9430b23a7cc844249c00dd18e11/scary/json"
const scarySyn = [
    "chilling",
    "scarey",
    "shivery",
    "shuddery",
    "alarming",
    "scary",
    "spooky",
    "dark",
    "freaky",
    "wacky",
    "weird",
    "wild",
    "suspicious",
    "mischevious",
    "frightened",
    "smug"
]
// applying background image. Credit to "superviespiel" on Reddit

$('body').css('background-image', 'url("https://media0.giphy.com/media/39lWTXEdmp4qnZtHIK/giphy.gif")')


// defining global variables
const $submitBtn = $('.push');
const $userInput = $('.enter');
const $body = $('body');

//submit button changes colors if hovered on

$submitBtn.hover(function () {
    $(this).css('background-color', 'blueviolet');
}, function () {
    $(this).css("background-color", "#df36f5");
});

// the function should 
// match the user input adjective with a synonym from one of the synonym links
// if adj is a happy synonym, shuffle the songs in const happyMusic
//output one song's 'name', its artist 'name' and URL
// if adj is sad, shuffle the songs in sadMusic
//output one song's 'name', its artist 'name' and URL
// if adj is peaceful, shuffle the songs in peacefulMusic
//output one song's 'name', its artist 'name' and URL
// if adj is romantic, shuffle the songs in romanticMusic
//output one song's 'name', its artist 'name' and URL
// if the adj is sexy, shuffle the songs in sexyMusic
//output one song's 'name', its artist 'name' and URL
// if the adj is angry, shuffle the songs in angryMusic
//output one song's 'name', its artist 'name' and URL
// if the adj is scary, shuffle the songs in scaryMusic
//output one song's 'name', its artist 'name' and URL

function songDisplay(musicChoice) {
    $.ajax(musicChoice).then(function (data) {
        let randomIndex = Math.floor(Math.random() * 100);
        let randomSong = data.similartracks.track[randomIndex]
        let $p = $(`<body><p>${randomSong.name}<p><body>`)
        $('body').append($p)
    })
}


function getSyn(event) {
    event.preventDefault();
    // $.ajax(happySyn).then(function (data) {
    for (i = 0; i < 100; i++) {
        if (happySyn[i] === $userInput.val()) {
            songDisplay(happyMusic);
        } else if (sadSyn[i] === $userInput.val()) {
            songDisplay(sadMusic);
        } else if (sexySyn[i] === $userInput.val()) {
            songDisplay(sexyMusic);
        } else if (angrySyn[i] === $userInput.val()) {
            songDisplay(angryMusic);
        } else if (scarySyn[i] === $userInput.val()) {
            songDisplay(scaryMusic);
        } else if (peacefulSyn[i] === $userInput.val()) {
            songDisplay(peacefulMusic);
        } else if (romanticSyn[i] === $userInput.val()) {
            songDisplay(romanticMusic);  
        }          
    }
}

// event listener to run the function getSyn when the submit button is clicked

$submitBtn.on('click', getSyn)