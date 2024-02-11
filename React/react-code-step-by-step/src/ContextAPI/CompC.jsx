import React from 'react'
import { FirstName, LastName } from './CompA'
const CompC = () => {
    return (
        <>
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