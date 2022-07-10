import React, {useState} from 'react';
import ExpenseForm from './ExpenseForm';

import './AddExpense.css'

const AddExpense = (props) => {

    const [isEditing, setIsEditing] = useState(false);
    //The date is passed from child to parent
    //OnsaveExpenseDate

    const saveExpenseDateHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }
        props.onAddExpense(expenseData);
        setIsEditing(false)
    }

    const startEditingHandler = () => {
        setIsEditing(true);
    }

    const stopEditingHandler = () => {
        isEditing(false);
    }


    return (

        <div className='new-expense'>
            {!isEditing &&  <button onClick={startEditingHandler}>Add New Expense</button> }
           
            {isEditing  && <ExpenseForm onCancel={stopEditingHandler} onSaveExpenseData={saveExpenseDateHandler} /> }
        </div>
    )
}

export default AddExpense;