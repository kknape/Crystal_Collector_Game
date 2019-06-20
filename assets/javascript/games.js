//javascript file
$(document).ready(function() { 


var ramdomNumber = 0; 
var counter = 0;
var wins = 1; 
var losses = 1; 
var images = [src="assets/images/crystal_1.jpg", "assets/images/crystal_2.jpg", "assets/images/crystal_3.jpg", "assets/images/crystal_4.jpg"];

// App picks a random number between 19 - 120
function startGame() {
     $(".crystals").empty();
      $(".myScore").html(0);
    counter=0;
    randomNumber = [Math.floor(Math.random() * 101) + 19];
    $("#theNumber").html(randomNumber);

    for (var i=0; i < 4; i++) {
        var random = [Math.floor(Math.random() * 12) + 1];
        
        var crystal =$("<img>");
            crystal.attr({
                "class": "crystal", "data-randomNumber": random, "src": images[i]
            });

        $(".crystals").append(crystal);
        }    
    }

startGame();

//user clicks on a crystal, the value of the crystal adds to the counter
$(document).on("click", "img.crystal", function(){
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
            $("#wins").html("Wins: " + wins++);
            replay = confirm("You won! Want to play again?");
        
            if (replay) {
                startGame();
                }
            }
    });
});
