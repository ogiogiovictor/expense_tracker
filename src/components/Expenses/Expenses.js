import React, {Fragment, useState} from 'react';
import Card from '../Front/Card';

import ExpenseItem from './ExpenseItem';
import './Expenses.css';

import ExpensesFilter from './ExpenseFilter';
import './ExpenseFilter.css';

import ExpensesChart from './ExpensesChart';

const Expenses = (props) => {

  const [filteredYear, setFilteredYear] = useState('2020');

  const filterChangeHandler = selectedYear => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter(expense => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
   
     <Fragment>
        <Card className='expenses'>
        <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />

        <ExpensesChart expenses={filteredExpenses} />

        {filteredExpenses.length === 0 ? 
        <p className='expenses-list__fallback'>No Expenses found</p> : 
      
        filteredExpenses.map(expense => (
          <ExpenseItem 
          key={expense.id}
          title={expense.title} 
          amount={expense.amount}
          date={expense.date}
          />
        ))
        
        }
       
         {
          //props.items.map(expense => (
          // filteredExpenses.map(expense => (
          //   <ExpenseItem 
          //   key={expense.id}
          //   title={expense.title} 
          //   amount={expense.amount}
          //   date={expense.date}
          //   />
          // ))
        } 
      </Card>
      </Fragment>
   
  );
}

export default Expenses;