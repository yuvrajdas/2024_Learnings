import React from 'react'
import { useState } from 'react'

const __4Toggler = () => {
    const [flag, setFlag] = useState(false);

    const showFlag = () => {
        setFlag(true)
    }

    const hideFlag = () => {
        setFlag(false)
    }
    const toggle = () => {
        setFlag(!flag)
    }
    return (
        <>
            <h4>Toggler Application</h4>
            {flag ? <p>Hello world</p> : null}
            <button onClick={showFlag} >Show</button>
            <button onClick={hideFlag} >Hide</button>
            <button onClick={toggle} >Toggle</button>
        </>
    )
}

export default __4Toggler
