import React from 'react';
import axios from 'axios'
import { Component } from 'react';
class Childclas5 extends Component {
constructor(props) {
    super(props);

    this.state = {
        posts:[]
    };
}
componentDidMount(){
    const url="http://localhost:3000/posts"
    axios.get(url).then((response)=>{this.setState({posts:response.data})})
}

    render() {
        const {receivepostfromchild}=this.props;
        const {posts}=this.state;
        return <div>
            <button onClick={()=>{receivepostfromchild(posts)}}>send to parent5</button>
        </div>;
    }
}



export default Childclas5;