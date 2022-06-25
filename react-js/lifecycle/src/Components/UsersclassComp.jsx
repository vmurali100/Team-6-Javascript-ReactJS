import React from 'react';
import { Component } from 'react';
import axios from 'axios'
import Userstables from './Userstables';



class UsersclassComp extends Component {
constructor(props) {
    super(props);

    this.state = {
        users:[]
    };
}
componentDidMount(){
    const url="http://localhost:3000/data"
   axios.get(url).then((response)=>{this.setState({users:response.data})})

}

    render() {
        return <div>
            <Userstables filtextusers={this.state.users}/>
        </div>;
    }
}



export default UsersclassComp;