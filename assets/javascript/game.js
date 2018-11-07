/*
generate a random target number to guess up to - 19-120
add 4 images of crystals and assign them a random number value -1 -12
make the user click on the images to increase their score
if their score adds up to the target number incrememnt wins  -reset
if they go over the value, increment losses - reset
*/

var targetNum = Math.floor(Math.random() * 112) + 19;
Math.floor(Math.random() * 100) + 1;
console.log(targetNum);

var counter = 0;


$(".crystal").on("click", function () {
    counter += 1;
console.log('you clicked a crystal ' + counter + " times")
});