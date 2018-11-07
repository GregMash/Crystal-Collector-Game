/*
generate a random target number to guess up to - 19-120
add 4 images of crystals and assign them a random number value -1 -12
make the user click on the images to increase their score
if their score adds up to the target number incrememnt wins  -reset
if they go over the value, increment losses - reset
*/



var targetNum = Math.floor(Math.random() * 120) + 19;
console.log(targetNum);
$("#target-number").text(targetNum);

var counter = 0;

var number1 = Math.floor(Math.random() * 12 + 1);
console.log(number1);
var number2 = Math.floor(Math.random() * 12 + 1);
console.log(number2);
var number3 = Math.floor(Math.random() * 12 + 1);
console.log(number3);
var number4 = Math.floor(Math.random() * 12 + 1);
console.log(number4);


$("#1").on("click", function () {
    counter += number1;
    console.log('you clicked a crystal ' + counter + " times");

    if (counter === targetNum) {
        console.log("winner winner");
    } else if (counter > targetNum) {
        console.log('LOSER');
    }
});

$("#2").on("click", function () {
    counter += number2;
    console.log('you clicked a crystal ' + counter + " times");

    if (counter === targetNum) {
        console.log("winner winner");
    } else if (counter > targetNum) {
        console.log('LOSER');
    }
});

$("#3").on("click", function () {
    counter += number3;
    console.log('you clicked a crystal ' + counter + " times");

    if (counter === targetNum) {
        console.log("winner winner");
    } else if (counter > targetNum) {
        console.log('LOSER');
    }
});

$("#4").on("click", function () {
    counter += number4;
    console.log('you clicked a crystal ' + counter + " times");

    if (counter === targetNum) {
        console.log("winner winner");
    } else if (counter > targetNum) {
        console.log('LOSER');
    }
});
