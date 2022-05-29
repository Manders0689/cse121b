dice = 10;
round_score = 0;
game_score = 0;
is_playing = true;

const dice_rolled = document.querySelector("#dice_rolled").textContent;
const current_score_message = document.querySelector("#current_score_message");

function rollDice() {
    var diceArray = [];
    var dice1 = Math.floor(Math.random() * 5) + 1;
    var dice2 = Math.floor(Math.random() * 5) + 1;
    var dice3 = Math.floor(Math.random() * 5) + 1;
    var dice4 = Math.floor(Math.random() * 5) + 1;
    var dice5 = Math.floor(Math.random() * 5) + 1;
    diceArray.push(dice1);
    diceArray.push(dice2);
    diceArray.push(dice3);
    diceArray.push(dice4);
    diceArray.push(dice5);
    dice_rolled = diceArray;
};

// function addValue() {
//      dice = diceList.map(dieValue);
//     dice_roll = diceArray
// };

// function dieValue() {
//     if (value == 1) {
//         points = 100;
//     }
//     else if (value == 5) {
//         points = 50;
//     }
//     else {
//         points = 0;
//     }
// return points
// };

// document.querySelector("#current_score_message").innerHTML = "Your current score is: 0" + diceArray;

document.querySelector("#roll_dice_button").addEventListener("click", rollDice());
