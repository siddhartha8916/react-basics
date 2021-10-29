import React, {useState} from 'react'
import './NewExpense.css'
import { ExpenseForm } from './ExpenseForm'

export const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState(false)
  
  const saveExpenseDataHandler =  (enteredExpenseData) => {
    const enteredData = {
      ...enteredExpenseData,
      id:Math.random().toString()
    }
    props.onAddExpense(enteredData)
  };

  const startEditingHandler = () => {
    setIsEditing(true)
  }

  const stopEditingHandler = () => {
    setIsEditing(false)
  }

  return (
    <div className="new-expense">
      {!isEditing && <button onClick={startEditingHandler}>Add New Expense</button>}
      {isEditing && <ExpenseForm onSaveExpenseData = {saveExpenseDataHandler} stop = {stopEditingHandler}/>}
    </div>
  )
}
