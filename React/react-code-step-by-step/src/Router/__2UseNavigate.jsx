import React from 'react'
import {useNavigate} from 'react-router-dom'
const __2UseNavigate = () => {
 
  const navigate = useNavigate();
  
  return (
    <>
        <h1>Use Navigate</h1>
        <p>useNavigate is react-router-dom hook used to navigate on event it return navigate function that takes path for navigate a specific location</p>

        <button onClick={()=>navigate('/contact/contactId')}>go to contact page</button>
    </>
  )
}

export default __2UseNavigate