// global var
var answer = "";
var possibleanswers = ["bench", "expectation", "gravel", "lion", "wrestle", "orientation", "wound", "project", "cathedral", "include"];
var answersofar = "";
var maxwronganswers = 10;
var wronganwers = 0;
var guessedletters = [];

function initialize() {
    // add event listeners to all letter buttons
    var letterbuttons = document.getElementsByClassName("letterbutton");

    for (var i = 0; i < letterbuttons.length; i++) {
        letterbuttons[i].addEventListener('click', GuessLetter, false);
    }
}

function newgame() {
    // api link: https://random-word-api.herokuapp.com/word?key=M05QB30L&number=1
    answer = possibleanswers[Math.floor(Math.random() * possibleanswers.length)];
    answersofar = "";
    wronganwers = 0;
    guessedletters = [];

    // make answer uppercase because letter buttons return uppercase letters
    answer = answer.toUpperCase();

    // add event listeners to all letter buttons
    var letterbuttons = document.getElementsByClassName("letterbutton");
    for (var i = 0; i < letterbuttons.length; i++) {
        letterbuttons[i].style.display = "inline-block";
    }

    console.log("the answer is: " + answer);
}

function AnswerSoFar() {
    // create temporary variable to build the answersofar variable
    var answersofar_tmp = "";

    // loop trough each letter of the answer
    for (var i = 0; i < answer.length; i++) {
        if (guessedletters.includes(answer.charAt(i))) {
            answersofar_tmp += answer.charAt(i);
        } else {
            answersofar_tmp += ".";
        }
    }

    // update global answersofar variable
    answersofar = answersofar_tmp;

    console.log(answersofar);
}

function GuessLetter() {
    // store guessed letter in local variable
    var letter = this.value;
    // hide letter so user isn't able to click it anymore
    this.style.display = "none";
    // add letter to the array of guessed letters
    guessedletters.push(letter);

    if (answer.includes(letter)) {
        AnswerSoFar()

        if (answersofar == answer) {
            console.log("You won!!!");
            newgame();
        }
    } else {
        console.log("incorrect, " + (maxwronganswers - wronganwers - 1) + " lives left");

        // update wronganswers
        wronganwers++;

        // check if player reached the max amount of wrong answers
        if (wronganwers == maxwronganswers) {
            console.log("you lost...")
        }
    }
};

// add eventlisteners to buttons
initialize();
// start a game
newgame();
// display dots that represent the answer
AnswerSoFar();