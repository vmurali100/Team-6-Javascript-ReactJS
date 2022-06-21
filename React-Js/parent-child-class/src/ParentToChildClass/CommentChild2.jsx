import { Component } from "react";

export default class CommentChild2 extends Component{
    constructor(){
        super()

        this.state = {
            showComments : false
        }
    }
    handleshowComments = () =>{
        this.setState({showComments : true})
    }
    render(){
        return(
            <div>
                <button onClick={this.handleshowComments}>Display Comments</button>

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
                    {this.state.showComments && <tbody>
                        {this.props.commentdetails.map((user,i)=>{
                            return <tr key={i}>
                                <td>{user.postId}</td>
                                <td>{user.id}</td>
                                <td>{user.name}</td>
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