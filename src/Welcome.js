import React from 'react'
import App from "./App";

class Welcome extends React.Component {
    render() {
        const test = <h1>Hello World</h1>;
        console.log(test);
        return React.createElement("div", {
            className: "this",
            htmlFor: ""
        }, React.createElement("h1", null, " Hello React "));
    }
}

export default Welcome;