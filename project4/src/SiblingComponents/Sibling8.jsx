import { Component } from "react";

export default class Sibling8 extends Component{
    render(){
        const {village,posts,district}=this.props;
        return(
            <div>
               <h1>{village}</h1> 
               <h2>{posts.fname}{posts.lname}</h2>
               <ul>
                {district.map((com,i)=>{
                    return <li key={i}>{com.email}</li>
                })}
               </ul>
            </div>
        )
    }
}