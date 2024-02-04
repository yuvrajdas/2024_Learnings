import React from 'react'
import { useState } from 'react'

const __3InputBox = () => {
    const [value, setValue] = useState("");
    const changeHandler = (event) => {
        setValue(event.target.value);
    }
    return (
        <>
            {value ? <p>{value}</p> : null}
            <input type="text" onChange={changeHandler} />
        </>
    )
}

export default __3InputBox