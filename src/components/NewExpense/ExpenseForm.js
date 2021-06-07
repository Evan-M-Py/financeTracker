import React, { useState } from 'react';

import './ExpenseForm.css';

const ExpenseForm = () => {

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

    return(
        <form>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input onChange={titleChangeHandler} type='text'/>
                </div>
                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input onChange={amountChangeHandler} type='number' min='0.01' step='0.01'/>
                </div>
                <div className='new-expense__control'>
                    <label>Date</label>
                    <input onChange={dateChangeHandler} type='date' min='2019-01-01' max='2022-12-31'/>
                </div>
            </div>
            <div className='new-expense__actions'>
                <button type='submit'>Submit</button>
            </div>
        </form>
    )
};

export default ExpenseForm;