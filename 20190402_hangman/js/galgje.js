// global var
var answer = "";
//var possibleanswers = ["bench", "expectation", "gravel", "lion", "wrestle", "orientation", "wound", "project", "cathedral", "include"];
var answersofar = "";
var maxwronganswers = 10;
var wronganwers = 0;
var guessedletters = [];

var canvas = document.getElementById("myCanvas");
var context = canvas.getContext("2d");

function initialize() {
    // add event listeners to all letter buttons
    var letterbuttons = document.getElementsByClassName("letterbutton");

    for (var i = 0; i < letterbuttons.length; i++) {
        letterbuttons[i].addEventListener('click', GuessLetter, false);
    }
}

function GetWordAPI() {
    // Create the XHR Object
    let xhr = new XMLHttpRequest;
    //Call the open function, GET-type of request, url, true-asynchronous
    xhr.open('GET', 'https://random-word-api.herokuapp.com/word?key=NPTOHRGC&number=1', true)
    //call the onload
    xhr.onload = function()
    {
        //check if the status is 200(means everything is okay)
        if (this.status === 200)
        {
            //return server response as an object with JSON.parse
            var words = JSON.parse(this.responseText);
            answer =  words[0];
        }
    }
    //call send
    xhr.send();
}


function newgame() {
    GetWordAPI();

    answersofar = "";
    wronganwers = 0;
    guessedletters = [];

    // make answer uppercase because letter buttons return uppercase letters
    answer = answer.toUpperCase();

    // add event listeners to all letter buttons
    //var letterbuttons = document.getElementsByClassName("letterbutton");
    //for (var i = 0; i < letterbuttons.length; i++) {
    //    letterbuttons[i].style.display = "inline-block";
    //}

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

function DrawHangman() {

    switch (wronganwers) {
        case 1:
            // beam vertical
            context.moveTo(25,25);
            context.lineTo(25,275);
            break;

        case 2:
            // beam bottom
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

        DrawHangman();

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
//AnswerSoFar();