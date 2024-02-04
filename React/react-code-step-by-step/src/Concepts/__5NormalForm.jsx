import React from 'react'
import { useState } from 'react'

const __5NormalForm = () => {
  
  const [name, setName] = useState("");
  const [intrest, setIntrest] = useState("");
  const [tnc, setTnc] = useState(false);
  const submitFrom  = (e)=>{
    e.preventDefault();
    console.log(name, intrest, tnc);
  }
  return (
    <> 
            <h3>Form</h3>
            Name<input type="text" onChange={(e)=>setName(e.target.value)} /> <br />
            Intrest<select onChange={(e)=>setIntrest(e.target.value)}> <br />
                <option>Java</option>
                <option>Javscript</option>
                <option>Python</option>
            </select><br />
            <input type="checkbox" onChange={(e)=>setTnc(e.target.checked)} /> <br />

            <button onClick={submitFrom}>Submit</button>
        
    </>
  )
}

export default __5NormalForm