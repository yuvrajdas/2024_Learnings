import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

const ProtectedRoute = (props) => {
   const navigate = useNavigate();
   useEffect(()=>{
        if(true){
            navigate('/company')
        }
   })

    
  return (
    <>
        <props.Component />
    </>
  )
}

export default ProtectedRoute