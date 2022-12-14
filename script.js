// The links below redirect me (with my API key for last.fm) to similar songs as a song of my own selection. After researching the best songs to qualify distinctive music generations, through process of elimination, I am the links to genre variables 

// songs like "Party Rock Anthem" by LMFAO
const happyMusic = 'https://ws.audioscrobbler.com/2.0/?method=track.getsimilar&artist=lmfao&track=party+rock+anthem&api_key=1bc71772e81d1ed9594a4ad8921042ba&format=json'

// songs like "Let Her Go" by Passenger
const sadMusic = 'https://ws.audioscrobbler.com/2.0/?method=track.getsimilar&artist=passenger&track=let+her+go&api_key=1bc71772e81d1ed9594a4ad8921042ba&format=json'

// songs like "Banana Pancakes" by Jack Johnson
const peacefulMusic = 'https://ws.audioscrobbler.com/2.0/?method=track.getsimilar&artist=jack+johnson&track=banana+pancakes&api_key=1bc71772e81d1ed9594a4ad8921042ba&format=json'

// songs like "Unchained Melody" by The Rhighteous Brothers
const romanticMusic = 'https://ws.audioscrobbler.com/2.0/?method=track.getsimilar&artist=the+righteous+brothers&track=unchained+melody&api_key=1bc71772e81d1ed9594a4ad8921042ba&format=json'

// songs like "Slow Motion" by Trey Songz
const sexyMusic = 'https://ws.audioscrobbler.com/2.0/?method=track.getsimilar&artist=trey+songz&track=slow+motion&api_key=1bc71772e81d1ed9594a4ad8921042ba&format=json'

//songs like "Bad Kids" by The Black Lips
const angryMusic = 'https://ws.audioscrobbler.com/2.0/?method=track.getsimilar&artist=the+black+lips&track=bad+kids&api_key=1bc71772e81d1ed9594a4ad8921042ba&format=json'

// songs like "Halloween Theme" by John Carpenter
const scaryMusic = 'https://ws.audioscrobbler.com/2.0/?method=track.getsimilar&artist=john+carpenter&track=halloween+theme&api_key=1bc71772e81d1ed9594a4ad8921042ba&format=json'

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
    "ecstatic",
    "awesome",
    "silly",
    "active",
    "pleasant",
    "vibing",
    "hot",
    "senational",
    "popular",
    "extraordinary",
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
    "serious",
    "bummed",
    "cautious",
    "nervous",
    "timid",
    "mediocre",
    "heavy",
    "worried",
    "innocent",
    "pathetic",
    "measly",
    "down"
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
    "at ease",
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
    "relaxed",
    "cool",
    "lovely",
    "average",
    "meh",

    
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
    "tense",
    "pissed",
    "harrassed",
    "overworked",
    "strained",
    "unsettled",
    "mixed-emotions",
    "cold",
    "irritated",
    "hangry",
    "hungry",
    "erratic",
    "manic",
    "defiant",
    "rebellious",
    "messy"
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
    "smug",
    "harrowing",
    "evil",
    "psychotic",
    "insane"
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

$submitBtn.hover(function () {
    $(this).css('background-color', 'blueviolet');
}, function () {
    $(this).css("background-color", "#df36f5");
});


// the function should 
// match the user input adjective with a synonym from one of the synonym links
// if adj is a happy synonym, shuffle the songs in const happyMusic
// if adj is sad- sadMusic
// if adj is peaceful-peacefulMusic
// if adj is romantic-romanticMusic
// if the adj is sexy-sexyMusic
// if the adj is angry-angryMusic
// if the adj is scary-scaryMusic
//output one song's 'title', the 'artist' and URL

//function songDisplay is triggered when the user input is matched to a synonym (when the conditional statement of getSyn is fulfilled). It selects a random song in the specified genre and will output the title, artist and URL

function songDisplay(musicChoice) {
    $.ajax(musicChoice).then(function (data) {
        let randomIndex = Math.floor(Math.random() * 100);
        let randomSong = data.similartracks.track[randomIndex]
        let $p = $(`<body><p class= 'title'>${randomSong.name}</p></body>`)
        let $p2 = $(`<body><p class= 'artist'>${randomSong.artist.name}</p></body>`)
        let $url = $(`<body><<a class= 'url' href="${randomSong.url}" target="_blank"> LISTEN NOW </a>`)
        $url.hover(function () {
            $(this).css('background-color', 'blueviolet');
        }, function () {
            $(this).css("background-color", "#df36f5");
        });
        $('p').remove();
        $('a').remove()
        $('main').append($p);
        $('main').append($p2);
        $('main').append($url);
    })
}

//function getSyn checks for a match and calls on function songDisplay

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

// event listener to trigger getSyn function when the submit button is clicked

$submitBtn.on('click', getSyn)
$submitBtn.on('vclick', getSyn)

// credit of modal info-graphic to Katherine Velie at http://antweak.blogspot.com/2012/03/mood-ring-for-my-interior-mood-swings.html

$('.open-modal').on('click', function (makeVisible) {
    const $modalContent = $(`<div class="modal-content"><img src="http://1.bp.blogspot.com/-fTHvMZqJCVw/T3RDQU8p-VI/AAAAAAAABEI/7vVcexEjR-Y/s1600/moodring.png" width="300" height="300"></div>`);
    const $remove = $(`<button type="button" class="open-modal" data-open=".modalId">X</button>`)
    $('.modal-container').append($modalContent);
    $('.helper').append($remove);
    $remove.on('click', function (makeInvisible) {
        $modalContent.remove()
        $remove.remove()
    })
})
