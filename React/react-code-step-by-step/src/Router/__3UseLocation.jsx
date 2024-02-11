import React from 'react'
import { useLocation } from 'react-router-dom'

const __3UseLocation = () => {
  
  const location = useLocation();
  console.log(location);
  return (
    <>
        <h1>Use Location</h1>
        <p>useLocation is a react-router-dom hook used to get all details of outer eg. path, state sent by page, hash, etc.</p>
    </>
  )
}

export default __3UseLocation