import React from 'react';
import { Component } from 'react';

class Lifecycle2 extends Component{
constructor(props) {
    console.log("constructor triggered in Lifecycle2 ")
    super(props);

    this.state = {
        student:""
    };
}

    render() {
        console.log("render triggered in Lifecycle2 ")
        return <div>
            <p>Lifecycle2</p>
            <p>{this.props.stu}</p>
        </div>;
    }
    componentDidMount(){
        console.log("componentDidMount triggered in Lifecycle2 ")
    }
    shouldComponentUpdate(){
        console.log("shouldComponentUpdate triggered in Lifecycle2 ")
        return true
    }
    componentDidUpdate(){
        console.log("componentDidUpdate triggered in Lifecycle2 ")
    }
}


export default Lifecycle2;