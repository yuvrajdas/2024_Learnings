import State from "./Concepts/State";
import StateWithClassComponent from "./Concepts/StateWithClassComponent";
import __1Props from "./Concepts/__1Props";
import __2PropsWithClassComp from "./Concepts/__2PropsWithClassComp";
import __3InputBox from "./Concepts/__3InputBox";
import __4Toggler from "./Concepts/__4Toggler";
import __6DataTransfer from "./Concepts/__6DataTransfer";
import __5NormalForm from "./Concepts/__5NormalForm";
import __7PureComponent from "./Concepts/__7PureComponent";
import __1ConstructorAndRender from "./LifeCycleMethods/__1ConstructorAndRender";
import __2ComponentDidMount from "./LifeCycleMethods/__2ComponentDidMount";
import __3ComponentDidUpdate from "./LifeCycleMethods/__3ComponentDidUpdate";
import __4ComponentShouldUpdate from "./LifeCycleMethods/__4ComponentShouldUpdate";
import __5ComponentWillUnmount from "./LifeCycleMethods/__5ComponentWillUnmount";
import __1UseState from "./Hooks/__1UseState";
import __2UseEffect from "./Hooks/__2UseEffect";
import React,{useState} from "react";
function App() {
  const [state, setState] = useState("")
  function myFun(){
    alert("hi i am function")
  }
  function getDataFromChild(childData){
    // useState(childData)
    setState(childData);

  }
  return (
   <>
    {/* <State />
    <hr />
    <StateWithClassComponent />
    <hr />
    <__1Props name={"Hello I am props value"} fun={myFun} />
    <hr />
    <__2PropsWithClassComp name="Yuvraj" />
    <hr />
    <__3InputBox />
    <hr />
    <__4Toggler />
    <hr />
    <__5NormalForm/>
    <hr/>
    <__1ConstructorAndRender />
    <__2ComponentDidMount /> */}
    {/* <__3ComponentDidUpdate /> */}
    {/* <__4ComponentShouldUpdate /> */}
    {/* <__5ComponentWillUnmount /> */}
    {/* <__1UseState /> */}
    {/* <__2UseEffect /> */}
    {/* <p>{state} came from child to parent</p>
    <__6DataTransfer parentData="App data" alert={getDataFromChild} /> */}
    <__7PureComponent />
   </>
  );
}

export default App;
