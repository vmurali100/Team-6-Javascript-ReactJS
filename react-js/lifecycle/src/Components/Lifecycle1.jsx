import React from 'react';
import { Component } from 'react';
import Count12Comp from './Count12Comp';
import Lifecycle2 from './Lifecycle2';

class Lifecycle1 extends Component {
constructor(props) {
    console.log("constructor triggred from Lifecycle1")
    super(props);

    this.state = {
        student:"i am student from Lifecycle1",
        count:100
    };
}

    render() {
        console.log("render triggred from Lifecycle1")
        return <div>
            <p>Lifecycle1</p>
            <button onClick={()=>{this.setState({student:"i am changed",count:102})}}>change in Lifecycle1</button>
            <Lifecycle2 stu={this.state.student}/>
            {this.state.count === 100 && <Count12Comp/>}
        </div>;
    }
    componentDidMount(){
        console.log("componentDidMount triggred from Lifecycle1")
    }
}



export default Lifecycle1;