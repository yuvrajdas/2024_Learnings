import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { incNumber, decNumber } from './action/index'

const App = () => {
  const myState = useSelector((state)=> state.changeTheNumber)
  const dispatch  = useDispatch();
  return (
    <>
      <div className='counter'>
          <div>
            <strong>{myState}</strong>
            <button onClick={()=>dispatch(incNumber())}>+</button>
            <button onClick={()=>dispatch(decNumber())}>-</button>
          </div>
      </div>
    </>
  )
}

export default App