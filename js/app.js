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
const failError = document.getElementById('notify-fail');

//current balance
function getCurrentBalance() {
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    return previousBalanceTotal;
}

            // calculate total expense
            if (incomeAmount >0 && foodAmount > 0  && rentAmount >0 && clothAmount && incomeAmount>(foodAmount+rentAmount+clothAmount)){
                const expenseTotal = document.getElementById('expense-total');
                const expenseTotalText = expenseTotal.innerText;
                const previousExpenseTotal = parseFloat(expenseTotalText);
            
                expenseTotal.innerText = previousExpenseTotal + foodAmount + rentAmount + clothAmount;
              
                failError.style.display = 'none';
           
             }
             else
             {
             failError.style.display = 'block';}
            
            //  update balance
            if (incomeAmount >0 && foodAmount > 0  && rentAmount >0 && clothAmount && incomeAmount>(foodAmount+rentAmount+clothAmount)){
            const balanceTotal = document.getElementById('balance-total');
            const balanceTotalText = balanceTotal.innerText;
            const previousBalanceTotal = parseFloat(balanceTotalText);
            balanceTotal.innerText = previousBalanceTotal + incomeAmount - foodAmount - rentAmount - clothAmount ; 
          
            failError.style.display = 'none';
            }
            else{
                failError.style.display = 'block';
            }
        
             
  
})