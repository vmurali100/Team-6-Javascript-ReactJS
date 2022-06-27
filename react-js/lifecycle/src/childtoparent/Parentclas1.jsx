import React, { Component } from 'react';
import ChildClas1 from './ChildClas1';

class Parentclas1 extends Component {
constructor(props) {
    super(props);

    this.state = {
        chairman:[]
    };
}
receivechairman=(chai)=>{
    this.setState({chairman:chai})
}

    render() {
        const {receivechairman}=this;
        const {chairman}=this.state;
        
        return( <div>
            <ChildClas1 receivechairman={receivechairman}/>
            <hr />
            
            <table>
                <thead>
                    <tr>
                        <th>userId</th>
                        <th>Id</th>
                        <th>Title</th>
                        <th>Completed</th>
                    </tr>
                </thead>
                <tbody>
                {chairman.map((chair)=>{
                return <tr>
                    <td>{chair.userId}</td>
                    <td>{chair.id}</td>
                    <td>{chair.title}</td>
                    <td>{chair.completed}</td>
                </tr>
            })}
                </tbody>
            </table>
            
        </div>
        )
    }
}



export default Parentclas1;