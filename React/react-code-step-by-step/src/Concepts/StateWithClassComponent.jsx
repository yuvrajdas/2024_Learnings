import {Component} from "react";

export default class StateWithClassComponent extends Component{
    // eslint-disable-next-line no-useless-constructor
    constructor(){
        super();
 
        // this.state = {
        //     count : 0
        // }
    }
    state = {
        count : 0
    }
    changeValue(){
        this.setState({count:this.state.count+1});
    }
    render(){
        return(
            <>  
                <br />
                <h3>State with class Component</h3>
                <strong>{this.state.count}</strong>
                <button onClick={()=>this.changeValue()}>Click Me</button>
            </>
        )
    }
}