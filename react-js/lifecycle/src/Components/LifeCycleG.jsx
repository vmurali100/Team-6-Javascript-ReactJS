import React from 'react';
import { Component } from 'react';
import CountGHComponent from './CountGHComponent';
import LifeCycleH from './LifeCycleH';



class LifeCycleG extends Component{
constructor(props) {
    console.log("constructor triggered in LifeCycleG")
    super(props);

    this.state = {
        user:"i am user from LifeCycleG",
        count:50
    };
}

    render() {
        console.log("constructor triggered in LifeCycleG")
        return <div>
           <p>LifeCycleG</p>
           <button onClick={()=>{this.setState({user:"i am changed",count:55})}}>change user in LifeCycleG</button>
           <LifeCycleH use={this.state.user}/>
           {this.state.count === 50 && <CountGHComponent/>}

        </div>;
    }
    componentDidMount(){
        console.log("componentDidMount triggered in LifeCycleG")
    }
   
}



export default LifeCycleG;