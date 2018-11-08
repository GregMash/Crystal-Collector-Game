/*
generate a random target number to guess up to - 19-120
add 4 images of crystals and assign them a random number value -1 -12
make the user click on the images to increase their score
if their score adds up to the target number incrememnt wins  -reset
if they go over the value, increment losses - reset
*/


//This sets the target number for the user to guess up to
var targetNum = Math.floor(Math.random() * 102) + 19;
console.log(targetNum);
$("#target-number").text(targetNum);

//This starts the user score at 0
var counter = 0;
$("#score").text(counter);

//This starts wins at 0
var wins = 0;
$('#wins').text(wins);

//This starts losses at 0
var losses = 0;
$('#losses').text(losses);

//This function generates a random number for the crystal value between 1 and 12
function numGenerate() {
    var crystalNumber = Math.floor(Math.random() * 12 + 1);
    return crystalNumber;
}

//This gives each crystal in the HTML an attribute of data-value, and a value of a random number from the numGenerate function
$("#crystal1").attr("data-value", numGenerate());
$("#crystal2").attr("data-value", numGenerate());
$("#crystal3").attr("data-value", numGenerate());
$("#crystal4").attr("data-value", numGenerate());

//This is our reset function




//This is our click event
$(".crystal").on("click", function () {
    var crystalNumber = ($(this).attr("data-value"));
    crystalNumber = parseInt(crystalNumber);
    console.log(crystalNumber);


    counter += crystalNumber;
    console.log('you clicked a crystal ' + counter + " times");
    $("#score").text(counter);

    if (counter === targetNum) {
        wins++;
        $('#wins').text(wins);

    } else if (counter > targetNum) {
        losses++;
        $('#losses').text(losses);

    }
});
