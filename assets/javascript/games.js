//javascript file
$(document).ready(function() { 


var ramdomNumber = 0; 
var counter = 0;
var wins = 0; 
var losses = 0; 


// App picks a random number between 19 - 120
function getRandomNumber() {
    randomNumber = [Math.floor(Math.random() * 101) + 19];
    $("#theNumber").html(randomNumber);
   }

getRandomNumber();


function getCrystalValues() {
    for (var i=0; i < 4; i++) {
        var random = [Math.floor(Math.random() * 12) + 1];
        
        var crystal =$("<div>");
            crystal.attr({
                "class": "crystal", "data-randomNumber": random
            });

        $(".crystals").append(crystal);
        }    
    }

getCrystalValues(); 

//user clicks on a crystal
$(".crystal").on("click", function(){
    var crystalNum = parseInt($(this).attr("data-randomNumber"));
    counter += crystalNum;

    console.log(counter);
});

});

