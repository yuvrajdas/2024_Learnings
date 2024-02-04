import React, {useState} from 'react'

const __1Props = (props) => {
  const [propVal, setPropVal] = useState(props.name);
  const propChanger = ()=>{
    setPropVal("Props value has been changed")
  }
  return (
    <>
        {/* 
            Props : Props is an object used to pass the data from one component to another component.
        */}
      <div>
        <p>
          <span> Props Value is : <strong>{propVal}</strong> </span>
          <button onClick={propChanger}>Change Prop Value </button>
        </p>
        <button onClick={props.fun}>prop fun</button>
      </div>
    </>
  )
}

export default __1Props