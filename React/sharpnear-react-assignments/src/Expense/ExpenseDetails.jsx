import React from 'react';
import './expense-details.css';

const ExpenseDetails = (props) => {
  const deleteExpense = (ele) => {
    const updatedExpenses = props.expenseData.filter((expense) => expense !== ele);
    props.updateExpenses(updatedExpenses);
  };

  return (
    <>
      <div className=='expense-wrapper'>
        <ul>
          {props.expenseData.map((ele, index) => (
            <li key={index}>
              <span>{ele.date}</span>
              <span>{ele.title}</span>
              <span>{ele.amount}</span>
              <button onClick={() => deleteExpense(ele)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default ExpenseDetails;
