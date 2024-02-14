import React, { useContext } from 'react'
import { FirstName, LastName } from './CompA'
const CompC = () => {
    let fname = useContext(FirstName);
    let lname = useContext(LastName);
    return (
        <>
            <h1>use context</h1>
            <p>{fname} {lname}</p>
            <FirstName.Consumer>
                {(fname) => {
                    return (
                        <LastName.Consumer >
                            {(lname) => {
                                return <h2>{fname} {lname}</h2>
                            }}
                        </LastName.Consumer>
                    )
                }}
            </FirstName.Consumer>
        </>
    )
}

export default CompC