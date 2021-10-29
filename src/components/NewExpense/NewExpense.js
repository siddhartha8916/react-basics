import React from 'react'
import './NewExpense.css'
import { ExpenseForm } from './ExpenseForm'

export const NewExpense = (props) => {
  
  const saveExpenseDataHandler =  (enteredExpenseData) => {
    const enteredData = {
      ...enteredExpenseData,
      id:Math.random().toString()
    }
    props.onAddExpense(enteredData)
  };

  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData = {saveExpenseDataHandler} />
    </div>
  )
}
