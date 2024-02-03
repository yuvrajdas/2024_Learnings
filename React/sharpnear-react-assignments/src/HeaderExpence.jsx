import React from 'react'
import './HeaderExpence.css';
const HeaderExpence = () => {
    let locationOfExpenditure = "Hyderabad";
    return (
        <>
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