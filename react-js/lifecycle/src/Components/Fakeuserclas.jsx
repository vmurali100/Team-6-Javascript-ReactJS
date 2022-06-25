import React from 'react';
import axios from 'axios'
import { Component } from 'react';
import Faketab from './Faketab';
class Fakeuserclas extends Component {
constructor(props) {
    super(props);

    this.state = {
        fake:[]
    };
}
componentDidMount(){
    const url="http://localhost:3000/usersfakeapi"
    axios.get(url).then((response)=>{this.setState({fake:response.data})})
}

    render() {
        return <div>
            <Faketab allfake={this.state.fake}/>
        </div>;
    }
}



export default Fakeuserclas;