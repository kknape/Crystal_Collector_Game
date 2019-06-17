//javascript file
$(document).ready(function() { 


var ramdomNumber = 0; 
var counter = 0;
var wins = 0; 
var losses = 0; 


// App picks a random number between 19 - 120
function startGame() {
    $(".cyrstals").empty();

    randomNumber = [Math.floor(Math.random() * 101) + 19];
    $("#theNumber").html(randomNumber);

    for (var i=0; i < 4; i++) {
        var random = [Math.floor(Math.random() * 12) + 1];
        
        var crystal =$("<div>");
            crystal.attr({
                "class": "crystal", "data-randomNumber": random
            });

        $(".crystals").append(crystal);
        }    
    }

startGame();

function resetGame() {
 $(".myScore").html(0);
 //$(".cyrstals").empty();
 startGame();
}

//user clicks on a crystal
$(".crystal").on("click", function(){
    var crystalNum = parseInt($(this).attr("data-randomNumber"));
    counter += crystalNum;

    if (counter === randomNumber) {
       wins++;
        $("#wins").html("Wins: " + wins);
        replay = confirm("You won! Want to play again?");
       
        if (replay) {
            resetGame();
             }
         }
    else if (counter > randomNumber) {
        losses++;
        $("#losses").html("Losses: " + losses);
        replay = confirm("Sorry, you lost. Want to play again?");
        
            if (replay) {
            resetGame();
            }
 
        }

    else if (counter < randomNumber) {
        $(".myScore").html(counter);
        
    }

});

});