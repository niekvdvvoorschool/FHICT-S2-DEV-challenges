// wait until DOM loaded
$( document ).ready(function() {

    // global var
    var answer = "";
    var answersofar = "";
    var maxwronganswers = 10;
    var wronganwers = 0;
    var guessedletters = [];
    var gameactive = false;

    function CheckChosenWord(word) {
        // check if word is filled in
        if (word == "") {
            return "no value";
        }

        // check if word doesn't contain any other characters than letters
        else if (!/^[a-zA-Z]+$/.test(word)) {
            return "only letters allowed";
        }

        // valid word
        else
        {
            return "valid";
        }
    }

    function AnswerSoFar() {
        // create temporary variable to build the answersofar variable
        var answersofar_tmp = "";

        // loop trough each letter of the answer
        for (var i = 0; i < answer.length; i++) {
            // check if the letter of the answer is guessed
            if(!(jQuery.inArray(answer.charAt(i), guessedletters) < 0)) {
                // if this letter is guessed, add it to the answersofar_tmp variable
                answersofar_tmp += answer.charAt(i);
            } else {
                // if it hasn't been guessed, add a "." to the answersofar_tmp variable
                answersofar_tmp += ".";
            }
        }

        // update global answersofar variable
        answersofar = answersofar_tmp;

        // update frontend #answersofar
        $("#answersofar").text(answersofar);
    }

    function GuessLetter(letter) {
        // check if there is a game active (prevent that the user is able to guess letters after he won/lost)
        if (gameactive == true) {

            // add letter to the guessedLetters array
            guessedletters.push(letter);

            // check if the answer contains the guessed letter
            if (answer.indexOf(letter) > -1) {
                // answer contains the guessed letter, good guess

                // update answer so far
                AnswerSoFar();

                // check if answersofar equals the answer
                if (answersofar == answer) {
                    // player has won
                    Win();
                }

            } else {
                // answer doesn't contain the guessed letter

                // update wronganswers
                wronganwers++;

                // update hangman image
                $("#hangman").attr("src", "/assets/img/hangman-" + wronganwers + ".jpg");

                // check if player reached the max amount of wrong answers
                if (wronganwers == maxwronganswers) {
                    // player has lost
                    Lose();
                }
            }
        }
    }

    function Win() {
        // show user he has won
        console.log("You won!!!");
    }

    function Lose() {
        // show user he has lost
        console.log("You lost...");
    }

    // function get's called when the player submits a word
    $("#chooseword-submit").click(function () {
        // create local variable to save the chosenword (uppercase because letterbuttons are also uppercase)
        var chosenword = $("#chooseword-text").val().toUpperCase();

        // check if meets the minimum requirements (not empty, only letters)
        if (CheckChosenWord(chosenword) == "valid") {

            // set chosenword as answer
            answer = chosenword;

            // update frontend #answersofar
            AnswerSoFar();

            // show the game, hide the options
            $("#game").show();
            $("#options").hide();

            // set game to active (player able to guess letters)
            gameactive = true;
        } else {
            // show error
            console.log(CheckChosenWord($("#chooseword-text").val()));
        }

    });

    // function get's called when the player clicks a letter
    $(".letterbutton").click(function () {
        GuessLetter($(this).val());
        $(this).hide();
    });
});