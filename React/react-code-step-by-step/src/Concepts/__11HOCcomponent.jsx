import React, { useState } from 'react'

const __11HOCcomponent = () => {

    /**
     * Higher Order Component : A Component that takes component and return a component known as HOC component.
     * 
    */ 
  return (
    <>
        <h1>HOC Component</h1>
        <HOC counter={Counter} />
    </>
  )
}

const HOC = (props)=>{
    return (<>
        <h2>Counter</h2>
        <props.counter />
    </>)
}

const Counter = ()=>{
    const [count, setCount] = useState(0);
 
    return(<>
        <p>{count}</p>
        <button onClick={()=>setCount(count+1)}>Click Me</button>
    </>)
}

export default __11HOCcomponent