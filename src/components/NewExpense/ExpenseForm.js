import React, {useState} from 'react';

import './ExpenseForm.css'

const ExpenseForm = (props) => {

    const [enterTitle, setEnteredTitle] = useState('')
    const [enterAmount, setEnteredAmount] = useState('')
    const [enteredDate, setEnteredDate] = useState('')

    // const [userInput, setUserInput] = useState({
    //     enteredTitle: '',
    //     enterAmount: '',
    //     enteredDate: ''
    // })

    const changeHandler = (e) => {
        setEnteredTitle(e.target.value);
        // setUserInput({
        //     ...userInput,
        //     enteredTitle: e.target.value,
        // })
        // setUserInput((prevState) => {
        //     return {...prevState, enteredTitle: e.target.value}
        // });
    }

    const amountchangeHandler = (e) => {
        setEnteredAmount(e.target.value)
        // setUserInput({
        //     ...userInput,
        //     enteredAmount: e.target.value,
        // })
    }

    const datechangeHandler = (e) => {
        setEnteredDate(e.target.value)
        // setUserInput({
        //     ...userInput,
        //     enteredDate: e.target.value,
        // })
    }

    const submitHandler = (event) => {
        event.preventDefault();
        
    const expenseDate = {
        title: enterTitle,
        amount: +enterAmount,
        date: new Date(enteredDate)
        }

        props.onSaveExpenseData(expenseDate);
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('')
       

    }

    return (
        <form onSubmit={submitHandler}>
            <div className='new-expense__controls'>

                <div className='new-expense__control'>
                    <label>Title</label>
                    <input type='text' value={enterTitle} onChange={changeHandler}/>
                </div>

                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input type='number' value={enterAmount} onChange={amountchangeHandler} min="0.01" step="0.01" />
                </div>

                <div className='new-expense__control'>
                    <label>Date</label>
                    <input type='date' value={enteredDate} onChange={datechangeHandler} min="2020-10-12" max="2023-12-31" />
                </div>

            </div>

            <div className='new-expense__actions'>
                <button type='button' onClick={props.onCancel}>Cancel</button>
                <button type='submit'>Add Expense</button>
            </div>

        </form>
    )

}

export default ExpenseForm;