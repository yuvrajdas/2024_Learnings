/* eslint-disable react/jsx-no-undef */
import State from "./Concepts/State";
import StateWithClassComponent from "./Concepts/StateWithClassComponent";
import __1Props from "./Concepts/__1Props";
import __2PropsWithClassComp from "./Concepts/__2PropsWithClassComp";
import __3InputBox from "./Concepts/__3InputBox";
import __4Toggler from "./Concepts/__4Toggler";
import __6DataTransfer from "./Concepts/__6DataTransfer";
import __5NormalForm from "./Concepts/__5NormalForm";
import __7PureComponent from "./Concepts/__7PureComponent";
import __8RefInClassComp from "./Concepts/__8RefInClassComp";
import __9ControlledComponent from "./Concepts/__9ControlledComponent";
import __10UncontrolledComponent from "./Concepts/__10UncontrolledComponent";
import __11HOCcomponent from "./Concepts/__11HOCcomponent";
import __1ConstructorAndRender from "./LifeCycleMethods/__1ConstructorAndRender";
import __2ComponentDidMount from "./LifeCycleMethods/__2ComponentDidMount";
import __3ComponentDidUpdate from "./LifeCycleMethods/__3ComponentDidUpdate";
import __4ComponentShouldUpdate from "./LifeCycleMethods/__4ComponentShouldUpdate";
import __5ComponentWillUnmount from "./LifeCycleMethods/__5ComponentWillUnmount";
import __1UseState from "./Hooks/__1UseState";
import __2UseEffect from "./Hooks/__2UseEffect";
import __3UseMemo from "./Hooks/__3UseMemo";
import __4UseRef from "./Hooks/__4UseRef";
import React,{useState} from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './Router/Home';
import Contact from './Router/Contact';
import Category from './Router/Category';
import About from './Router/About';
import PageNotFount from './Router/PageNotFount';
import NavBar from './Router/NavBar';
import __1SearchParam from './Router/__1SearchParam';
import __2UseNavigate from './Router/__2UseNavigate';
import __3UseLocation from './Router/__3UseLocation';
import __4NestedRoute from './Router/__4NestedRoute';
import './App.css';
import CompanySize from "./Router/CompanySize";
import CompanyDetails from "./Router/CompanyDetails";
import CompanyLocation from "./Router/CompanyLocation";
import ProtectedRoute from "./Router/ProtectedRoute";
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
    {/* <__7PureComponent /> */}
    {/* <__3UseMemo /> */}
    {/* <__8RefInClassComp /> */}
    {/* <__4UseRef /> */}
    {/* <__9ControlledComponent /> */}
    {/* <__10UncontrolledComponent /> */}
    <__11HOCcomponent />
    <BrowserRouter>
  <NavBar />
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/category/:name" element={<Category />} />
    <Route path="/contact/:name" element={<Contact />} />
    <Route path="/about/:name" element={<About />} />
    <Route path="/search-param" element={<__1SearchParam />} />
    <Route path="/use-navigate" element={<__2UseNavigate />} />
    <Route path="/use-location" element={<__3UseLocation />} />
    <Route path="/company" element={<ProtectedRoute Component={__4NestedRoute} />}>
      <Route path="/company/company-size" element={<CompanySize />} />
      <Route path="/company/comapny-details" element={<CompanyDetails />} />
      <Route path="/company/company-location" element={<CompanyLocation />} />
    </Route>
    <Route path="/*" element={<PageNotFount />} />
  </Routes>
</BrowserRouter>

   </>
  );
}

export default App;
