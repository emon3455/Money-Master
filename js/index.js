function getInputValueByID(id){
    let inputField = document.getElementById(id);
    let inputValue = parseFloat(inputField.value);

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

    if(isNaN(income) || isNaN(foodCost)  || isNaN(rentCost) || isNaN(clothCost)
    || income<0 || foodCost<0 ||  rentCost<0 || clothCost<0){
        alert("please enter a number(positive)");
        return;
    }

    totalExpenses = foodCost + rentCost + clothCost;

    if(totalExpenses > income){
        alert("you cannot spent more money than your income");
        return;
    }
    
    setElementValueByID("total-expenses" , totalExpenses);

    // seting the value of remaining balance after calculating expenses:
    remainingBalance = income - totalExpenses;
    setElementValueByID("remaining-balance" , remainingBalance);

});




document.getElementById("save-button").addEventListener("click" , function(){

    const savepersentage = getInputValueByID("save-input-field");

    if(isNaN(savepersentage) || savepersentage<0){
        alert("please enter number(positive)");
        return;
    }

    if(savepersentage>100){
        alert("you cannot save more than 100%");
        return;
    }


    const saveAmount = income * (savepersentage/100);

    if(saveAmount > remainingBalance){
        alert("you cannot save more money then your remaining cost after expensions");
        return;
    }

    setElementValueByID("saved-amount" , saveAmount);

    const finalRemainingBalance = remainingBalance - saveAmount;
    setElementValueByID("final-remaining-amount" , finalRemainingBalance);

});



