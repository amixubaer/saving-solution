//click on calculate button
document.getElementById('calculate-btn').addEventListener('click', function(){
// Income
    const incomeInput = document.getElementById('incomeInput');
    const incomeAmountText = incomeInput.value;
    const incomeAmount = parseFloat(incomeAmountText); 
// Expense
    const foodExpense = document.getElementById('foodExpense');
    const foodAmountText = foodExpense.value;
    const foodAmount = parseFloat(foodAmountText); 

    const rentExpense = document.getElementById('rentExpense');
    const rentAmountText = rentExpense.value;
    const rentAmount = parseFloat(rentAmountText); 

    const clothExpense = document.getElementById('clothExpense');
    const clothAmountText = clothExpense.value;
    const clothAmount = parseFloat(clothAmountText); 

    //alert
    const calculateError = document.getElementById('calculate-error');

            // calculate total expense
            if (incomeAmount >0 && foodAmount >= 0  && rentAmount >=0 && clothAmount >=0 && incomeAmount>(foodAmount+rentAmount+clothAmount)){
                const expenseTotal = document.getElementById('expense-total');
                const expenseTotalText = expenseTotal.innerText;
                const previousExpenseTotal = parseFloat(expenseTotalText);
            
                expenseTotal.innerText = previousExpenseTotal + foodAmount + rentAmount + clothAmount;
              
                calculateError.style.display = 'none';
           
             }
             else
             {
             calculateError.style.display = 'block';}
            
            //  update balance
            if (incomeAmount >0 && foodAmount >= 0  && rentAmount >= 0 && clothAmount >= 0 && incomeAmount>(foodAmount+rentAmount+clothAmount)){
            const balanceTotal = document.getElementById('balance-total');
            const balanceTotalText = balanceTotal.innerText;
            const previousBalanceTotal = parseFloat(balanceTotalText);
            balanceTotal.innerText = previousBalanceTotal + incomeAmount - foodAmount - rentAmount - clothAmount ; 
          
           calculateError.style.display = 'none';
            }
            else{
                calculateError.style.display = 'block';
            }
});


// Save button click
document.getElementById('save-btn').addEventListener('click', function(){
    //Taking value from savings and income field
const Income = document.getElementById("incomeInput").value;
const Savings = document.getElementById("saveInput").value;
//Alert
const saveError = document.getElementById('save-error');

if (Savings >= 0){
    //Show Savings balance
document.getElementById("saving-total").innerHTML = (Income * Savings) / 100;

//Show remaining balance
const Balance = document.getElementById("balance-total").innerHTML;
const AllSave = document.getElementById("saving-total").innerHTML;

document.getElementById("remaining-total").innerHTML = Balance - AllSave;
saveError.style.display = 'none';
}
else{
    saveError.style.display = 'block';
}
});