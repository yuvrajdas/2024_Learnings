import React from 'react'
import CompB from './CompB'
import { createContext } from 'react'

let FirstName = createContext();
let LastName = createContext();
const CompA = () => {

    return (<>
        <h1>Context API</h1>
        <FirstName.Provider value={"Yuvraj"}>
            <LastName.Provider value={"Das"}>
                <CompB />
            </LastName.Provider>
        </FirstName.Provider>
    </>)
}

export default CompA
export { FirstName, LastName }