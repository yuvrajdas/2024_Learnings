import State from "./Concepts/State";
import StateWithClassComponent from "./Concepts/StateWithClassComponent";
import __1Props from "./Concepts/__1Props";
import __2PropsWithClassComp from "./Concepts/__2PropsWithClassComp";
import __3InputBox from "./Concepts/__3InputBox";

function App() {
  function myFun(){
    alert("hi i am function")
  }
  return (
   <>
    <State />
    <hr />
    <StateWithClassComponent />
    <hr />
    <__1Props name={"Hello I am props value"} fun={myFun} />
    <hr />
    <__2PropsWithClassComp name="Yuvraj" />
    <hr />
    <__3InputBox />
   </>
  );
}

export default App;
