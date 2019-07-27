//javascript file
$(document).ready(function() { 


var ramdomNumber = 0; 
var counter = 0;
var wins = 1; 
var losses = 1; 
var images = [src="assets/images/crystal_1.jpg", "assets/images/crystal_2.jpg", "assets/images/crystal_3.jpg", "assets/images/crystal_4.jpg"];

//this is the main game play & reset function
function startGame() {
    
//these reset the game when user chooses to play again  
        $(".crystals").empty();
        $(".myScore").html(0);
        counter=0;

// App picks a random number between 19 - 120
    randomNumber = [Math.floor(Math.random() * 101) + 19];
    $("#theNumber").html(randomNumber);

//App creates four imgs and assigns each a random value between 1 and 12
    for (var i=0; i < 4; i++) {
        var random = [Math.floor(Math.random() * 12) + 1];
        
        var crystal =$("<img>");
            crystal.attr({
                "class": "crystal col col-lg-3", "data-randomNumber": random, "src": images[i]
            });

        $(".crystals").append(crystal);
        }    
    }
//starts and resets game 
startGame();

//user clicks on a crystal, the value of the crystal adds to the My Score counter
$(document).on("click", "img.crystal", function(){
    var crystalNum = parseInt($(this).attr("data-randomNumber"));
    counter += crystalNum;

//if my score is less than the random number click on another cyrstal
    if(counter < randomNumber){
        $(".myScore").html(counter);
          }
//if my score is greater than the random number add 1 to Losses, start game over if user wants to play again
        else if(counter > randomNumber){
            $("#losses").html("Losses: " + losses++);
            replay = confirm("Sorry, you lost. Want to play again?");
            
                if (replay) {
                startGame();
                }
        }   
 //if my score is equal to the random number add 1 to Wins, start game over if user wants to play again   
        else if(counter == randomNumber){
            $("#wins").html("Wins: " + wins++);
            replay = confirm("You won! Want to play again?");
        
            if (replay) {
                startGame();
                }
            }
    });
});
