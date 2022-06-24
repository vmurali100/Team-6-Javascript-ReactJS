import React from 'react';
import { Component } from 'react';



class LifeCycleF extends Component{
constructor(props) {
    console.log("constructor triggered LifeCycleF ")
    super(props);

    this.state = {
    };
}

    render() {
        console.log("render triggered LifeCycleF")
        return <div>
            <p>LifeCycleF</p>
            <p>{this.props.msg}</p>
        </div>;
    }
    componentDidMount(){
        console.log("componentDidMount triggered LifeCycleF")
    }
    shouldComponentUpdate(){
       
        console.log("shouldcomponentupdate triggered in lifecycleF")
        return true
    }
    componentDidUpdate(){
        console.log("componentDidUpdate triggered in lifecycleF") 
    }
}



export default LifeCycleF;