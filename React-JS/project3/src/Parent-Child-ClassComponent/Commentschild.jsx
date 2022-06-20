import { Component } from "react";

export class Commentschild extends Component{
    constructor(props){
        super(props)
        this.state={
            showcomments:false
        }
    }
    displaycomments=(()=>{
        this.setState({showcomments:true})
    })
    render(){
        return(
            <div>
                <button onClick={this.displaycomments}>show comments</button>
                <table border={1}>
                    <thead>
                        <tr>
                            <th>postId</th>
                            <th>id</th>
                            <th>name</th>
                            <th>email</th>
                            <th>body</th>
                        </tr>
                    </thead>
                    
            {this.state.showcomments && <tbody>
                {this.props.allcomment.map((user,i)=>{
                    return <tr key={i}>
                        <td>{user.postId}</td>
                        <td>{user.id}</td>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>{user.body}</td>
                    </tr>
                })}
            </tbody> }
            
                </table>
            </div>
        )
    }
}