import { Component } from "react";

export class Practice4 extends Component{
    constructor(){
        super()
    }
    render(){
        return (
            <div className="Amv">
            <h2>What is the difference between functional components and class components in react?</h2>
            <p>The functional components are not aware of the other components in your program whereas the class components can work with each other. We can pass data from one class component to other class components. We can use JavaScript ES6 classes to create class-based components in React.</p>
            <hr></hr>
        </div>
        );
    }
}