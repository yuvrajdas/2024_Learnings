import React from "react";

class __7PureComponent extends React.PureComponent{

    constructor(){
        super();
        this.state = {
            count: 1
        }
    }

    updateCount(){
        this.setState({ count: this.state.count});
    }

    render(){
        console.log("Re-rendering...");
        return (
            <>
                <h3>{this.state.count}</h3>
                <button onClick={() => this.updateCount()}>Update Value</button>
            </>
        );
    }
}

export default __7PureComponent;
