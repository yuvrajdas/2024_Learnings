import React, { useState } from 'react'

const __1UseState = () => {

    const [state, setState] = useState("Yuvraj");
    /**
     * useState : useState is hook used to maintain a state in functional component.
     * it takes initial state value as parameter and return current state.
     */

    const changeState = ()=>{
        setState("Das");
    }
  return (
    <div>
        <h1>useState Hook</h1>
        <p>{state}</p>
        <button onClick={changeState}>Change State Value</button>
    </div>
  )
}

export default __1UseState