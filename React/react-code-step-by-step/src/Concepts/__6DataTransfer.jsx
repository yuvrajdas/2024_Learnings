import React from 'react'

const __6DataTransfer = (props) => {
  return (
    <>
        <button onClick={()=>props.alert("Hello")}>Send data to parent</button>
        <p>{props.parentData} came from parent to child</p>
    </>
  )
}

export default __6DataTransfer