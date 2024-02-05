import React from "react";

class __2ComponentDidMount extends React.Component{
    // eslint-disable-next-line no-useless-constructor
    constructor(){
        super()
        console.log("__2ComponentDidMount constructor called");
        this.satate = {
            name:"Yuvraj"
        }
    }

    componentDidMount(){
        /*
            ComponentDidMount : It it third lifecycle method that executes when the DOM is completely loaded.
            It executes only once.

            We can use to make API call etc.
        */
        console.log("__2ComponentDidMount componentDidMount called");
    }


    render(){
        console.log("__2ComponentDidMount render called");
        const changeValue = ()=>{
            alert("safd")
           this.setState({name:"changed"});
        }
        return(
            <>
                <h4>Component Did Mount</h4>
                <p>{this.satate.name}</p>
                <button onClick={changeValue}>change vlaue</button>
            </>
        )
    }
}
export default __2ComponentDidMount