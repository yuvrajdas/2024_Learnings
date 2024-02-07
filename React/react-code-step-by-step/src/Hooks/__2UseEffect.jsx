import React, {useEffect, useState} from 'react'

const __2UseEffect = () => {
  
    const [state, setState] = useState(0);

    useEffect(()=>{
        console.log("usedEffec2 called", state);
    })
    
  
   /**
   * useEffect : useEffect hook is a combination of componentDidMount, componentDidUpdate, componentWillUnmount
   * it execute when component loads. and also when the state and props value change but we can control it. 
   * 
   */
    return (
    <>
        <button onClick={()=>setState(state+1)}>ChangeState</button>
    </>
  )
}

export default __2UseEffect