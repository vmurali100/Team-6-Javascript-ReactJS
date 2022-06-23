import { Component } from "react";

export class ClassChild2Albums2 extends Component{
    constructor(props){
        super(props)
        this.state={
          showalbum:false,
        }
    }
    userslabums=(()=>{
        this.setState({showalbum:true})
    })
    render(){
        return(
            <div>
                <button onClick={this.userslabums}>Click Albums</button>
                <table border="1">
                    <thead>
                        <tr>
                             <th>userId</th>
                             <th>id</th>
                             <th>titel</th>
                        </tr>
                    </thead>
                    {this.state.showalbum && <tbody>
                        {this.props.allalbum.map((user,i)=>{
                            return <tr key={i}>
                                <td>{user.userId}</td>
                                <td>{user.id}</td>
                                <td>{user.title}</td>
                            </tr>
                        })}
                    </tbody>}
                </table>
            </div>
        )
    }
}