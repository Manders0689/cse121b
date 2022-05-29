// const expenses = {
//     foodList: [],
//     billsList: [],
//     autoList: [],
//     tithingList: [],
//     savingsList: [],
// }

// function getExpense() {
//     //get category from input box
//     const category = document.querySelector("#category");
//     //get amount from input box
//     const amount = document.querySelector("#amount").value;
//     category.textContent = expenses.categoryList;
//     amount.textContent = expenses.amountList;

// }

function clickCalcFood() {
    // get amount spent from user input box
    const amountSpentOnFood = document.querySelector("#foodAmount");
    // add amount spent to food total
    const foodArray = amountSpentOnFood.split(",");
    return foodArray
};

function clickCalcBills() {

};

function clickCalcAuto() {

};

function clickCalcTithing() {

};

function clickCalcSavings() {

};

document.querySelector("#calcFoodButton").addEventListener("click", clickCalcFood);
document.querySelector("#calcBillsButton").addEventListener("click", clickCalcBills);
document.querySelector("#calcAutoButton").addEventListener("click", clickCalcAuto);
document.querySelector("#calcTithingButton").addEventListener("click", clickCalcTithing);
document.querySelector("#calcSavingsButton").addEventListener("click", clickCalcSavings);