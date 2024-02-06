import React from "react";

class __3ComponentDidUpdate extends React.Component {
    constructor() {
        super();
        this.state = {
            name: "Yuvraj"
        };
        // Bind the changeValue method to the correct context
        this.changeValue = this.changeValue.bind(this);
    }
    
    /*
        componentDidUpdate : it only execute when the state or props value changed.
        does not execute for initial render.
    */
    componentDidUpdate() {
        console.log("Component did update called");
    }
    
    changeValue() {
        this.setState({ name: "Das" });
    }
    
    render() {
        return (
            <>
                <p>{this.state.name}</p>
                <button onClick={this.changeValue}>Change Value</button>
            </>
        );
    }
}

export default __3ComponentDidUpdate;
