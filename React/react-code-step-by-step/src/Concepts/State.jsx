import React ,{useState} from 'react'

const State = () => {
  
  /*
    useState : useState is a hook in react. used to have a state in functional component. this function takes the initial state value and returns the current state.
  */
  const [currState, setState] = useState("Yuvraj");

  let name = "Yuvraj"
  const normalVariableChanger = ()=>{
    name = "Variable's value updated with Das";
    alert(name)
  }

  const stateVariableChanger = ()=>{
    setState("state's value updated with Das");
    alert("state's value updated with Das")
  }
  return (
    /*
        State : state is an object that holds the data or information of the component.
        Redendering : Whenever any state or props value changes the component render again it is known as rerendering.

        Note : When normal variables value changes the component or dom does not re-render. that is why updated value not seen in DOM.
    */
    <>
        <div>
         <span>Normal Varialbe</span> <strong>{name}</strong><br />
         <button onClick={normalVariableChanger}>Change Value (For Norma Variable)</button>
        </div>
        <br />
        <div>
         <span>State Varialbe</span> <strong>{currState}</strong><br />
         <button onClick={stateVariableChanger}>Change Value (For State Variable)</button>
        </div>
    </>
  )
}

export default State