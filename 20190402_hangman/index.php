<!DOCTYPE html>
<html>
<meta charset="UTF-8"/>
<meta name="theme-color" content=""/>
<meta name="viewport" content="width=device-width, initial-scale=1"/>
<link rel="icon" href="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzihQHVbndX3mgeGq2YoEiMNDaOICnc8XXQeu0I-MGqphlZiw6hw"/>
<title>Hangman</title>
<meta name="keywords" content=""/>
<meta name="description" content=""/>
<body>

<div id="game">
    <div id="buttons">
        <?php
        $arr = str_split("ABCDEFGHIJKLMNOPQRSTUVWXYZ");
        
        foreach ($arr as &$value) {
            echo "<input type=\"submit\" class=\"letterbutton\" value=\"" . $value . "\">";
        }
        ?>
    </div>
</div>

<h3 id="answersofar"></h3>

<h1 id="message"></h1>
<button id="newgame" style="margin-bottom: 20px">new game</button>

<canvas id="canvas" width="200" height="300" style="border:2px solid #000;">

<script src="/js/galgje.js"></script>
</body>
</html>