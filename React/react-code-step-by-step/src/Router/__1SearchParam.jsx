import React, { useState } from 'react'
import {useSearchParams } from 'react-router-dom'
const __1SearchParam = () => {
    const [searchParam, setSearchParam] = useSearchParams();
    const [myParamValue, setMyParamValue] = useState("");
    console.log(searchParam.get('name'));
  return (
    <>
        <h1>Search Param</h1>
        <p>Search param is a react-router-dom hook. used to get or set the value of query param</p>
        <p>Param value is : <strong>{myParamValue ? myParamValue : ""}</strong></p>
        <button onClick={()=>setMyParamValue(searchParam.get('name'))}>Get Param Value</button>
        <button onClick={()=>setSearchParam({name:"Das"})}>Set Param Value</button>
    </>
  )
}

export default __1SearchParam