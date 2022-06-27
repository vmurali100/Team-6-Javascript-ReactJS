import React from 'react';
import axios from 'axios'
import { Component } from 'react';

class Childclas2 extends Component {
constructor(props) {
    super(props);

    this.state = {
        comments:[]
    };
}
componentDidMount(){
    const url="http://localhost:3000/comments"
    axios.get(url).then((response)=>{this.setState({comments:response.data})})

}
    render() {
        return (
        <div>
            <button onClick={()=>{this.props.receivedatafromchild(this.state.comments)}}>send to parent2</button>
        </div>
        )
    }
}


export default Childclas2;