import React from "react"
import __6A from "./__6A"
class __5ComponentWillUnmount extends React.Component {

    // eslint-disable-next-line no-useless-constructor
    constructor() {
        super();
        this.state = {
            flag: false
        }
    }
    componentWillUnmount(){
        console.log("ComponentWillUnmount");
    }
    clickHandler() {
        this.setState({ flag: !this.state.flag })
    }
    render() {
        return (<>
            <h1>Should Component Update</h1>
            {this.state.flag ? <__6A /> : "hi"}
            <button onClick={() => this.clickHandler()}>click me</button>
        </>)
    }

}

export default __5ComponentWillUnmount;