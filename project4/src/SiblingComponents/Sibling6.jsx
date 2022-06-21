import { Component } from "react";

export default class Sibling6 extends Component{
    render(){
        const {post,postman,postoffice}=this.props;
        return <div>
            <p>{post}</p>
            <p>{postman.fname}-{postman.lname}</p>
            <ul>
                {postoffice.map((po,i)=>{
                    return <li key={i}>{po.body}</li>
                })}
            </ul>
        </div>
    }
}