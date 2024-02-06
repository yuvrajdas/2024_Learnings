import React from 'react'
class __A extends React.Component{
    
    // eslint-disable-next-line no-useless-constructor
    constructor(){
        super();
    }
    componentWillUnmount(){
        alert("component will unmount called")
    }
    render(){
        return(<>
        
            <h1>Component A</h1>
        </>)
    }
}

export default __A;