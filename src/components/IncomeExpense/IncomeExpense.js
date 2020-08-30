import React from 'react';

export const IncomeExpense = () => {
  return (
    <div className="incomeExpenseWrapper">
      <div className="incomeWrapper">
        <p className="incomeText m-1">Income</p>
        <p className="incomeAmountText m-1">$210</p>
      </div>
      <div className="expenseWrapper">
        <p className="expenseText m-1">Expense</p>  
        <p className="expenseAmountText m-1">$160</p>
      </div>
    </div>
  )
}