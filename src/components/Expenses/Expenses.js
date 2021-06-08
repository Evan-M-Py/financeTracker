import React, { useState } from 'react';

import './Expenses.css';
import ExpenseItem from './ExpenseItem';
import ExpenseFilter from './ExpensesFilter';
import Card from '../UI/Card';

const Expenses = (props) => {

    const [filteredYear, setFilteredYear ] = useState('2021');

    const onFilterChange = (year) => {
        setFilteredYear(year)
        console.log(filteredYear)
    };

    return(
        <div>
            <Card className='expenses'>
                <ExpenseFilter selected={filteredYear} onYearFilter={onFilterChange}/>
                {props.items.map((expenses) => (
                <ExpenseItem 
                title={expenses.title} 
                amount={expenses.amount} 
                date={expenses.date} />
                ))}
            </Card>
        </div>
    );

};

export default Expenses;