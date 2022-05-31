// let is_playing = true;
const diceArray = [];

function startGame() {
    rollDice();
    getValues(diceArray);
    sumOfValues(pointValues);
};
// let current_score_message = document.querySelector("#current_score_message");

function rollDice() {
    // roll 5 dice and save rolled numbers to diceArray
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
    // send array to html to be viewed on DOM
    document.querySelector("#dice_rolled").innerHTML = "You rolled: " + diceArray;
};

let pointValues = [];

function getValues(diceArray) {
    let points = 0;
    const dicePoints = diceArray.map(die => {
        if (die === 1 ) {
            points = 100;
        }
        else if (die === 5 ) {
            points = 50;
        }
        else {
            points = 0;
        }
        return points;
    });
    pointValues += dicePoints;
    //take this out once game if functioning
    document.querySelector("#testing").innerHTML = pointValues;
};

function sumOfValues(pointValues) {
    // add up all 5 dice values into total_score
    for (let index = 0; index < pointValues.length; index++) {
        sum += pointValues[index];
    };
    document.querySelector("#current_score_message").innerHTML = "Your score: " + sum;  
};

//if playing again, clear array

document.querySelector("#roll_dice_button").addEventListener("click", startGame);
