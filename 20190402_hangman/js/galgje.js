// global var
var APIkey = "jecgaa";
var newgamebutton = document.getElementById("newgame");
var answersofartext = document.getElementById("answersofar");
var message = document.getElementById("message");
var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");

var answer = "";
var answersofar = "";
var maxwronganswers = 10;
var wronganwers = 0;
var guessedletters = [];
var gameactive = false;

function Initialize() {
    // add event listeners to all letter buttons
    var letterbuttons = document.getElementsByClassName("letterbutton");

    for (var i = 0; i < letterbuttons.length; i++) {
        letterbuttons[i].addEventListener('click', GuessLetter, false);
    }

    newgamebutton.addEventListener('click', NewGame, false);
}

function GetWordAPI() {
    // Create the XHR Object
    let xhr = new XMLHttpRequest
    //Call the open function, GET-type of request, url, true-asynchronous
    xhr.open('GET', 'https://random-word-api.herokuapp.com/word?key=' + APIkey + '&number=1', true)
    //call the onload
    xhr.onload = function()
    {
        //check if the status is 200(means everything is okay)
        if (this.status === 200)
        {
            // return server response as an object with JSON.parse
            var words = JSON.parse(this.responseText);

            // check if the word contains a dash, if it does, choose new word
            if (words[0].includes("-")) {
                GetWordAPI();
            } else {
                // set word as answer
                answer = words[0];

                // make answer uppercase because letter buttons return uppercase letters
                answer = answer.toUpperCase();

                // show answer dots
                AnswerSoFar();
            }
        }
    }
    //call send
    xhr.send();
}

function NewGame() {
    // get a new answer
    GetWordAPI();

    // re(set) all variables
    answersofar = "";
    wronganwers = 0;
    guessedletters = [];

    // hide newgame button
    newgamebutton.style.display = "none";

    // clear canvas
    context.clearRect(0, 0, canvas.width, canvas.height);

    // add event listeners to all letter buttons
    var letterbuttons = document.getElementsByClassName("letterbutton");
    for (var i = 0; i < letterbuttons.length; i++) {
        letterbuttons[i].style.visibility = "visible";
    }

    // reset message
    message.innerHTML = "";

    // set game to active
    gameactive = true;
}

function AnswerSoFar() {
    // create temporary variable to build the answersofar variable
    var answersofar_tmp = "";

    // loop trough each letter of the answer
    for (var i = 0; i < answer.length; i++) {
        if (guessedletters.includes(answer.charAt(i))) {
            answersofar_tmp += answer.charAt(i);
        } else {
            answersofar_tmp += " . ";
        }
    }

    // update global answersofar variable
    answersofar = answersofar_tmp;

    answersofartext.innerHTML = answersofar;
}

function DrawHangman() {

    context.beginPath();
    switch (wronganwers) {
        case 1:
            // beam vertical
            context.moveTo(25,25);
            context.lineTo(25,275);
            break;

        case 2:
            // beam bottom
            context.moveTo(25,275);
            context.lineTo(175,275);
            break;

        case 3:
            // beam top
            context.moveTo(25,25);
            context.lineTo(150,25);
            break;

        case 4:
            // diagonal beam top
            context.moveTo(60,25);
            context.lineTo(25,60);
            break;

        case 5:
            // diagonal beam bottom
            context.moveTo(25,225);
            context.lineTo(75,275);
            break;

        case 6:
            // rope
            context.moveTo(120,25);
            context.lineTo(120,60);
            break;

        case 7:
            // head
            context.beginPath();
            context.arc(120, 85, 25, 0, 2 * Math.PI);
            context.stroke();
            break;

        case 8:
            // body
            context.moveTo(120,110);
            context.lineTo(120,190);
            break;

        case 9:
            // leg left
            context.moveTo(120,190);
            context.lineTo(100,240)
            // leg right
            context.moveTo(120,190);
            context.lineTo(140,240);
            break;

        case 10:
            // arm left
            context.moveTo(90,180);
            context.lineTo(120,120);
            // arm right
            context.lineTo(150,180);
            break;
    }

    context.stroke();
    context.closePath();
}

function GuessLetter() {
    if (gameactive) {
        // store guessed letter in local variable
        var letter = this.value;
        // hide letter so user isn't able to click it anymore
        this.style.visibility = "hidden";
        // add letter to the array of guessed letters
        guessedletters.push(letter);

        if (answer.includes(letter)) {
            AnswerSoFar();

            if (answersofar == answer) {
                document.getElementById("message").innerHTML = "You won!!!";
                newgamebutton.style.display = "block";

                gameactive = false;
            }
        } else {
            // update wronganswers
            wronganwers++;

            DrawHangman();

            // check if player reached the max amount of wrong answers
            if (wronganwers == maxwronganswers) {
                message.innerHTML = "You lost... the answer was " + answer;
                newgamebutton.style.display = "block";

                gameactive = false;;
            }
        }
    }
};

// add event listeners to buttons
Initialize();
// start a game
NewGame();