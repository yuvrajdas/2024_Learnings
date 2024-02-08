import React, { createRef } from "react";

class __8RefInClassComp extends React.Component {
    constructor() {
        super();
        this.inputRef = createRef();
        // Binding the method to the component instance
        this.getInputVal = this.getInputVal.bind(this);
    }

    componentDidMount() {
        console.log(this.inputRef.current);
        this.inputRef.current.style.backgroundColor = 'red'
    }

    getInputVal() {
        console.log("input value: " + (this.inputRef?.current ? this.inputRef.current.value : ""));
    }

    render() {
        return (
            <>
                <h2>Ref in Class Component</h2>
                <input type="text" ref={this.inputRef} />
                <button onClick={this.getInputVal}>Submit</button>
            </>
        );
    }
}

export default __8RefInClassComp;
