import React, { useState } from 'react';

import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

const NewExpense = (props) => {

    const [ openForm, setOpenForm ] = useState(false);

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        props.onAddExpense(expenseData);
        setOpenForm(false)
    };

    const openFormHandler = (event) => {
        setOpenForm(true)
        console.log(openForm)
    };

    const closeFormHandler = (event) => {
        setOpenForm(false)
        console.log(openForm)
    };

    return (
        <div className='new-expense'>
            {!openForm && <button onClick={openFormHandler} type='button' value={openForm}>New Expense</button>}
            {openForm && <ExpenseForm onCloseForm={closeFormHandler} onSaveExpenseData={saveExpenseDataHandler}/>}
        </div>
    )
};

export default NewExpense;