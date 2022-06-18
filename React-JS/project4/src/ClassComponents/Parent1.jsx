import { Component } from "react";
import Child1 from "./Child1";
import { ChildComponent } from "./ChildComponent";

export class Parent1 extends Component{
    constructor(){
        super()
        this.state = {
           
        }
    }
    render(){
        return (
            <div>
                 {ChildData1.map((user)=>{
                return <div className="userinfo">
                    <p>{user.fname}</p> 
                    <p>{user.lname}</p> 
                    <p>{user.tel}</p>
                    <p>{user.address}</p>
                    <p>{user.city}</p>
                    <p>{user.state}</p>
                    <p>{user.zip}</p>
                </div>
            })}
     </div>
          
        )
    }
}
