function getInputValueByID(id){
    let inputField = document.getElementById(id);
    let inputValue = parseFloat(inputField.value);

    inputField.value="";

    return inputValue;
}

function setElementValueByID(id , value){
    let element = document.getElementById(id);
    element.innerText = value;
}

// --------common functions end -----------------

let income;

let totalExpenses;
let remainingBalance;


// setting the value of total expenses:
document.getElementById("calculate-btn").addEventListener("click" , function(){

    income = getInputValueByID("income-field");

    const foodCost = getInputValueByID("food-filed");

    const rentCost = getInputValueByID("rent-field");

    const clothCost = getInputValueByID("cloth-cost");

    totalExpenses = foodCost + rentCost + clothCost;
    
    setElementValueByID("total-expenses" , totalExpenses);

    // seting the value of remaining balance after calculating expenses:
    remainingBalance = income - totalExpenses;
    setElementValueByID("remaining-balance" , remainingBalance);

});




document.getElementById("save-button").addEventListener("click" , function(){

    const savepersentage = getInputValueByID("save-input-field");
    const saveAmount = income * (savepersentage/100);

    setElementValueByID("saved-amount" , saveAmount);

    const finalRemainingBalance = remainingBalance - saveAmount;
    setElementValueByID("final-remaining-amount" , finalRemainingBalance);

});



