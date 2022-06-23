import { Component } from "react";

export default class Posts2 extends Component{
    render(){
        return(
            <div>
                <p>{this.props.message}</p>
                <p>{this.props.Posts.userId}{this.props.Posts.id}</p>
                
                <ul>
                <table border="1">
                        <thead>
                            <tr>
                                <th>userId</th>
                                <th>id</th>
                                <th>title</th>
                                <th>body</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.props.AllPosts.map((user,i)=>{
                                return <tr>
                                    <td>{user.userId}</td>
                                    <td>{user.id}</td>
                                    <td>{user.title}</td>
                                    <td>{user.body}</td>
                                </tr>
                            })}
                        
                        </tbody>
                    </table>
                
                </ul>
            </div>
        )
    }
}