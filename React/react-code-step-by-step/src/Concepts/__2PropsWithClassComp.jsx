import { Component } from "react";

class __2PropsWithClassComp extends Component{
    // eslint-disable-next-line no-useless-constructor
    constructor(){
        super();
    }

    render(){
        console.log(this.props);
        return(
            <>
                <div>
                    <h4>Props With Class Component</h4>
                    <p>Prop vlaue is : <strong>{this.props.name}</strong></p>
                </div>
            </>
        )
    }
}

export default __2PropsWithClassComp;