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




    // calculate total expense
     
    const expenseTotal = document.getElementById('expense-total');
     const expenseTotalText = expenseTotal.innerText;
     const previousExpenseTotal = parseFloat(expenseTotalText);
 
     expenseTotal.innerText = previousExpenseTotal + foodAmount + rentAmount + clothAmount;

    //  update balance
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    balanceTotal.innerText = previousBalanceTotal + incomeAmount - foodAmount - rentAmount - clothAmount ; 

    // clear fields
    incomeInput.value = ' ';
    foodExpense.value = ' ';
    rentExpense.value = ' ';
    clothExpense.value = ' ';
})