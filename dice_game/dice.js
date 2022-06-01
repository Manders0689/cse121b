// let is_playing = true;
const diceArray = [];

function startGame() {
    rollDice();
    getValues(diceArray);
    sumOfValues(pointValues);
};

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
    let dicePoints = diceArray.map(die => {
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

    // None of these work! 
    // The pointValues array is an array before this function, but inside this function, it doesn't see it as one.

    // for(var result = 0; i < pointValues.length; i++){
    //     total += pointValues[i];
    // };

    // pointValues.forEach(point => {
    //     result += point;
    // });

    // const add = (a, b) => a + b;
    // const result = pointValues.reduce(add);

    // for (let value of pointValues) {
    //     result += value;
    // };

    // let result = pointValues.reduce((a, b) => a + b);

    document.querySelector("#current_score_message").innerHTML = result;
};

//if playing again, clear array

document.querySelector("#roll_dice_button").addEventListener("click", startGame);
