import React from 'react'
import './HeaderExpence.css';
import Props from './Props';
import ExpenceDetails from './ExpenceDetails';
import ExpenceDate from './ExpenceDate';
const HeaderExpence = (props) => {
    let locationOfExpenditure = "Hyderabad";
    let expenceItem = [
        {food:10, petrol:100, movie:200},
        {food:11, petrol:101, movie:201},
        {food:12, petrol:102, movie:202},
        {food:13, petrol:103, movie:203}
    ]
    return (
        <>
           <div className='expense-item'>
                <ExpenceDate date={props.date} />
                <ExpenceDetails  amount={props.amount}  location={props.location}   title={props.title} />
            </div>
            {/* ---------------------------------------------------------------- */}
            <Props location={locationOfExpenditure} expItem={expenceItem} />
            <h2>Expense Items</h2>
            <p>Location of Expenditure <strong>{locationOfExpenditure}</strong></p>
            <ul>
                <li>Food Rs 10</li>
                <li>Petrol Rs 100</li>
                <li>Movies Rs 200</li>
            </ul>
        </>
    )
}

export default HeaderExpence