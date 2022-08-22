// The links below redirect me (with my API key for last.fm) to similar songs as a song of my own selection. After researching the best songs to qualify distinctive music generations, through process of elimination, I am the links to genre variables 

// songs like "Dancing Queen" by Abba
const happyMusic = 'http://ws.audioscrobbler.com/2.0/?method=track.getsimilar&artist=abba&track=dancing+queen&api_key=1bc71772e81d1ed9594a4ad8921042ba&format=json'

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

// songs like Halloween Theme by John Carpenter
const scaryMusic = 'http://ws.audioscrobbler.com/2.0/?method=track.getsimilar&artist=john+carpenter&track=halloween+theme&api_key=1bc71772e81d1ed9594a4ad8921042ba&format=json'

// The links below direct me (with my API key to Big Huge Thesaurus) to an array of synonyms for specified words. 

// words like happy
// const happySyn = "https://words.bighugelabs.com/api/2/b996e9430b23a7cc844249c00dd18e11/happy/json"
const happySyn = [
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
    "willing"
]

// words like sad
const sadSyn = "https://words.bighugelabs.com/api/2/b996e9430b23a7cc844249c00dd18e11/sad/json"

// words like romantic 
const romanticSyn = "https://words.bighugelabs.com/api/2/b996e9430b23a7cc844249c00dd18e11/loving/json"

// worlds like sexy 
const sexySyn = "https://words.bighugelabs.com/api/2/b996e9430b23a7cc844249c00dd18e11/sexy/json"

// words like angry
const angrySyn = "https://words.bighugelabs.com/api/2/b996e9430b23a7cc844249c00dd18e11/angry/json"

// words like scary
const scarySyn = "https://words.bighugelabs.com/api/2/b996e9430b23a7cc844249c00dd18e11/scary/json"

// applying background image. Credit to "superviespiel" on Reddit

$('body').css('background-image', 'url("https://media0.giphy.com/media/39lWTXEdmp4qnZtHIK/giphy.gif")')

// defining global variables
const $submitBtn = $('.push');
const $userInput = $('.enter');
const $body = $('body');

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

function getSyn(event) {
    event.preventDefault();
    // $.ajax(happySyn).then(function (data) {
    for (i = 0; i < happySyn.length; i++) {
        if (happySyn[i] === $userInput.val() || $userInput.val() === 'happy') {
            console.log('hooray')
        }
    }
}



// event listener to run the function getSyn when the submit button is clicked

$submitBtn.on('click', getSyn)