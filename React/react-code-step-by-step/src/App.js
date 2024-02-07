import State from "./Concepts/State";
import StateWithClassComponent from "./Concepts/StateWithClassComponent";
import __1Props from "./Concepts/__1Props";
import __2PropsWithClassComp from "./Concepts/__2PropsWithClassComp";
import __3InputBox from "./Concepts/__3InputBox";
import __4Toggler from "./Concepts/__4Toggler";
import __5NormalForm from "./Concepts/__5NormalForm";
import __1ConstructorAndRender from "./LifeCycleMethods/__1ConstructorAndRender";
import __2ComponentDidMount from "./LifeCycleMethods/__2ComponentDidMount";
import __3ComponentDidUpdate from "./LifeCycleMethods/__3ComponentDidUpdate";
import __4ComponentShouldUpdate from "./LifeCycleMethods/__4ComponentShouldUpdate";
import __5ComponentWillUnmount from "./LifeCycleMethods/__5ComponentWillUnmount";
import __1UseState from "./Hooks/__1UseState";
import __2UseEffect from "./Hooks/__2UseEffect";

function App() {
  function myFun(){
    alert("hi i am function")
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
    <__2UseEffect />
   </>
  );
}

export default App;
