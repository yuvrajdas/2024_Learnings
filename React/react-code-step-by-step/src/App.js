import State from "./Concepts/State";
import StateWithClassComponent from "./Concepts/StateWithClassComponent";
import __1Props from "./Concepts/__1Props";

function App() {
  function myFun(){
    alert("hi i am function")
  }
  return (
   <>
    <State />
    <StateWithClassComponent />
    <__1Props name={"Hello I am props value"} fun={myFun} />
   </>
  );
}

export default App;
