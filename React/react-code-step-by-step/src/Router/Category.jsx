import React from 'react'
import { useParams } from 'react-router-dom'

const Category = () => {
  let param = useParams();
  const {name} = param; 
  return (<>
    <h1>{name}</h1>
  <div>Category</div>
  
  </>
    
  )
}

export default Category