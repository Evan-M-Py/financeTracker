import React, { useState } from 'react';

import './ExpenseForm.css';

const ExpenseForm = (props) => {

    const [ enteredTitle, setEnteredTitle ] = useState('');
    const [ enteredAmount, setEnteredAmount ] = useState('');
    const [ enteredDate, setEnteredDate ] = useState('');

    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value)
        console.log(enteredTitle)
    };

    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value)
        console.log(enteredAmount)
    };

    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value)
        console.log(enteredDate)
    };

    const submitHandler = (event) => {

        event.preventDefault();

        const expenseData = {
            title: enteredTitle,
            amount: +enteredAmount,
            date: new Date(enteredDate)
        }

        props.onSaveExpenseData(expenseData);
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');

    };


    return(
        <form onSubmit={submitHandler} >
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input value={enteredTitle} onChange={titleChangeHandler} type='text'/>
                </div>
                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input value={enteredAmount} onChange={amountChangeHandler} type='number' min='0.01' step='0.01'/>
                </div>
                <div className='new-expense__control'>
                    <label>Date</label>
                    <input value={enteredDate} onChange={dateChangeHandler} type='date' min='2019-01-01' max='2022-12-31'/>
                </div>
            </div>
            <div className='new-expense__actions'>
                <button onClick={props.onCloseForm} type='button'>cancel</button>
                <button type='submit'>submit</button>
            </div>
        </form>
    )
};

export default ExpenseForm;