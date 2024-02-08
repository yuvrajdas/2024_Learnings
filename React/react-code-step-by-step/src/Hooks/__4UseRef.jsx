import React, { useRef } from 'react'

const __4UseRef = () => {
    let inputRef = useRef(null);
    /**
     * useRef : useRef is a hook used to access, manupulate the DOM element.
     */
    const getValueFromRef = ()=>{
        console.log(inputRef);
        inputRef.current.focus();
    }
    return (
    <>
     <h1>useRef</h1>
     <input type="text" ref={inputRef}/>
     <button onClick={getValueFromRef}>Submit</button>
    </>
  )
}

export default __4UseRef