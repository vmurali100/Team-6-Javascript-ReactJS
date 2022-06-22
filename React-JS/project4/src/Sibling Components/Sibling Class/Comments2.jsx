import { Component } from "react";

export default class Comments2 extends Component{
    render(){
        return(
            <div>
              <p>{this.props.message}</p>
           <p>{this.props.comment.fname}-{this.props.comment.lname}</p>
           <ul>
            {this.props.allcomments.map((user,i)=>{
                return <li key={i}>{user.postId}-{user.id}{user.name}{user.email}{user.body}</li>
            })}
           </ul>
            </div>
        )
    }
}