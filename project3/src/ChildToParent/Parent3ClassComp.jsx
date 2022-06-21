import { Component } from "react";
import { Child3ClassComp } from "./Child3ClassComp";

export class Parent3ClassComp extends Component{
    constructor(props){
        super(props)
        this.state={
            principal:"",
            teacher:{},
            college:[]
        }
    }
    receiveprincipal=(princ)=>{
        this.setState({principal:princ})
    };
    receiveteacher=(teacher)=>{
        this.setState({teacher})
    };
    receivecollege=(col)=>{
        this.setState({college:col})
    };
    render(){
        const {receiveprincipal,receiveteacher,receivecollege}=this;
        const {principal,teacher,college}=this.state;
        return(
            <div>
                <Child3ClassComp receiveprincipal={receiveprincipal}
                receiveteacher={receiveteacher}
                receivecollege={receivecollege}
                />
                <hr />
               {principal && <h1>principal received from child:{principal}</h1>}
               {Object.keys(teacher).length>0 && <h2>teacher received from child:{teacher.title}-{teacher.body}</h2>}
                
                <mark>
                    <ul>
                       {college.map((pos,i)=>{
                        return  <li>{pos.id}</li>
                        

                        
                       })} 
                    </ul>
                </mark>
            </div>
        )
    }
}