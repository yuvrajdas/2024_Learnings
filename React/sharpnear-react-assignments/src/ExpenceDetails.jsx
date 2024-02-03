import React from 'react'

const ExpenceDetails = (props) => {
  return (
    <div>
        <h3>{props.title}</h3>
        {props.amount} {props.location} 
    </div>
  )
}

export default ExpenceDetails