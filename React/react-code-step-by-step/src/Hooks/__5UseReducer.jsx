import React from 'react'
import { useReducer } from 'react'

const reducer = (state, action)=>{
  if(action.type === 'inc'){
    return state+1;
  }

  if(action.type === 'dec'){
    return state-1;
  }

}
const __5UseReducer = () => {
    /**
    * useReducer : 1. useReducer is an addition Hook in react, It is an alternative of useState. 
    *              2. It takes two parameter in which first is reducer method and second is initialState
    *              3. The useReducer method returns an array where first is current state value and second is dispatch function
    *                 to which you can pass an action and later invoke it.
    *              4. This is similar to the Redux pattern uses.
    */

    const [state, dispatch] = useReducer(reducer, 0);

     return (
    <> 
        <h2>Use Reducer Hook</h2>
        <h3>{state}</h3>
        <button onClick={()=>dispatch({type:'inc'})}>INC</button>
        <button onClick={()=>dispatch({type:'dec'})}>DEC</button>
    </>
  )
}

export default __5UseReducer