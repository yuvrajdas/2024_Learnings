import React, { useState } from 'react'

const __9ControlledComponent = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    /**
     * Controlled Component : A Component is known as controlled component is the form input is handled by the react states.
     * 
    */
  return (
    <>
        <h1>Controlled Component</h1>
        <form>
            <input type="text" name='name' value={name} onChange={(e)=>setName(e.target.value)} />
            <input type="text" name='email' value={email} onChange={(e)=>setEmail(e.target.value)} />
        </form>
    </>
  )
}

export default __9ControlledComponent