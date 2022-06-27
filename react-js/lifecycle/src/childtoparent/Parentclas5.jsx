import React from 'react';
import { Component } from 'react';
import Childclas5 from './Childclas5';

class Parentclas5 extends Component {
constructor(props) {
    super(props);

    this.state = {
        posts:[]
    };
}
receivepostfromchild=(posts)=>{
    this.setState({posts})
}
    render() {
        const {receivepostfromchild}=this;
        const {posts}=this.state;
        return <div>
            <Childclas5 receivepostfromchild={receivepostfromchild}/>
            <table border="1">
                <thead>
                    <tr>
                        <th>userid</th>
                        <th>id</th>
                        <th>title</th>
                        <th>email</th>
                    </tr>
                </thead>
                <tbody>
                    {posts.map((pos,i)=>{
                        return <tr key={i}>
                            <td>{pos.userId}</td>
                            <td>{pos.id}</td>
                            <td>{pos.title}</td>
                            <td>{pos.email}</td>
                        </tr>
                    })}
                </tbody>
            </table>
        </div>;
    }
}


export default Parentclas5;