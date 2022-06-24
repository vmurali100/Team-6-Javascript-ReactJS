import React from 'react';
import { Component } from 'react';



class LifeCycleH extends Component {
constructor(props) {
    console.log("constructor triggered in LifeCycleH")
    super(props);

    this.state = {
        users:""
    };
}

    render() {
        console.log("render triggered in LifeCycleH")
        return <div>
            <p>LifeCycleH</p>
           <p> {this.props.use}</p>
        </div>;
    }
    componentDidMount(){
        console.log("componentDidMount triggered in LifeCycleH")
    }
    shouldComponentUpdate(){
        console.log("shouldComponentUpdate triggered in LifeCycleH")
        return true
    }
    componentDidUpdate(){
        console.log("componentDidUpdate triggered in LifeCycleH")
    }
}


export default LifeCycleH;