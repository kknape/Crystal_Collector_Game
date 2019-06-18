//javascript file
$(document).ready(function() { 


var ramdomNumber = 0; 
var counter = 0;
var wins = 1; 
var losses = 1; 


// App picks a random number between 19 - 120
function startGame() {
     $(".crystals").empty();
     $(".myScore").html(0);

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

//function resetGame() {
 //$(".myScore").html(0);
 //$("div:crystal").removeAttr("class");
// startGame();
//}

//user clicks on a crystal
$(".crystal").on("click", function(){
    var crystalNum = parseInt($(this).attr("data-randomNumber"));
    counter += crystalNum;

    if(counter < randomNumber){
        $(".myScore").html(counter);
          }

        else if(counter > randomNumber){
            $("#losses").html("Losses: " + losses++);
            replay = confirm("Sorry, you lost. Want to play again?");
            
                if (replay) {
                startGame();
                }
        }   
        
        else if(counter == randomNumber){
            $("#wins").attr("Wins: " + wins++);
            replay = confirm("You won! Want to play again?");
        
            if (replay) {
                startGame();
                }
            }
    });
});
