
import React from "react";

class __1ConstructorAndRender extends React.Component {

    // eslint-disable-next-line no-useless-constructor
    constructor() {
        /*
            Constructor is the first lifecycle method it execute firt when class is loaded.
            it execute only once.
        */
        super();
        console.log("Constructor method called");
    }

    render() {
        /*
            Render is a second lifecycle method of component. it execute after the execution of constructor.
            and it executes every time whenever the state or props value gets changed.
        */
       console.log("Render method called");
        return (
            <>
            </>
        );
    }

}

export default __1ConstructorAndRender