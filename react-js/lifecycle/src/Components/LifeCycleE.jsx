import React from 'react';
import { Component } from 'react';
import CountEFComponent from './CountEFComponent';
import LifeCycleF from './LifeCycleF';



class LifeCycleE extends Component{
constructor(props) {
    
    console.log("constructor triggered LifeCycleE " )
    super(props);

    this.state = {
        message:"i am from LifeCycleE",
        count:5
    };
}

    render() {
        console.log("render triggered LifeCycleE")
        return <div>
            <p>LifeCycleE</p>
            <button onClick={()=>{this.setState({message:"i am changed to lifecycleE",count:10})}}> change in lifecycleE</button>
            <LifeCycleF msg={this.state.message}/>
            {this.state.count === 5 && <CountEFComponent/>}
        </div>;
    }
     componentDidMount(){
         console.log("componentDidMount triggered LifeCycleE")
     }
}



export default LifeCycleE
