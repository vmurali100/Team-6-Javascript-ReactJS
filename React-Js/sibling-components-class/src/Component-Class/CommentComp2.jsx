import { Component } from "react";

export default class CommentComp2 extends Component{
    constructor(props){
        super(props)
        this.state={            
        }
    }    
    render(){
        const {message,person,comments}=this.props;
        return(
            <div>
                <p>Comment Comp2</p>
                <p>{message}</p>
                <p>{person.name} {person.email} {person.state} {person.city}</p>
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
                    <tbody>
                        {comments.map((user,i)=>{
                            return <tr key={i}>
                                <td>{user.postId}</td>
                                <td>{user.id}</td>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.body}</td>
                            </tr>
                        })}
                    </tbody>
                </table>
            </div>
        )
    }
}