import { Component } from "react";

export class Ccommentchild extends Component{
    constructor(props){
        super(props)
        this.state={
            showcomments:false
        }
    }
    commentdetails=(()=>{
        this.setState({showcomments:true})
    })
    render(){
        return(
            <div>
                <button onClick={this.commentdetails}>show comments</button>
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
                        {this.props.commentdetails.map((user,i)=>{
                            return <tr>
                                <td>{user.postId}</td>
                                <td>{user.id}</td>
                                <td>{user.namedate}</td>
                                <td>{user.email}</td>
                                <td>{user.body}</td>
                            </tr>
                        })}
                        </tbody>}
                </table>
            </div>
        )
    }
}