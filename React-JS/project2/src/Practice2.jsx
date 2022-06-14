import { Component } from "react";

export class Practice2 extends Component{
    constructor(){
        super()
    }
    render(){
        return <p>A class component must include the extends React.Component statement. This statement creates an inheritance to React.Component, and gives your component access to React.Component's functions. The component also requires a render () method, this method returns HTML. Here is the same example as above, but created using a Function component instead.</p>
    }
}