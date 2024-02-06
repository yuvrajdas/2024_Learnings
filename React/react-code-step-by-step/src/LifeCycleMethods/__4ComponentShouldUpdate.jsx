import React from "react";

class __4ComponentShouldUpdate extends React.Component {
         
    constructor() {
        super();
        this.state = {
            count: 0,
        };
    }

    componentDidUpdate() {
        console.log("componentDidUpdate");
    }

    shouldComponentUpdate() {
        /*
            shouldComponentUpdate : this function return true or fasle;
            if we return false then it block the re-rendering. 
        */
        console.log("shouldComponentUpdate");
        return true;
        
    }

    increment() {
        console.log(this.state.count);
        this.setState({ count: this.state.count + 1 });
    }

    decrement() {
        console.log(this.state.count);
        this.setState({ count: this.state.count - 1 });
    }

    render() {
        
        return (
            <>
                <h3>Component Should Update</h3>
                <h5>{this.state.count}</h5>
                <button onClick={() => this.increment()}>+</button>  
                <button onClick={() => this.decrement()}>-</button>  
            </>
        );
    }

}

export default __4ComponentShouldUpdate;
