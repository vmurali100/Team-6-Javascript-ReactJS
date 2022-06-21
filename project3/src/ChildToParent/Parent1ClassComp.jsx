import { Component } from "react";
import { Child1ClassComp, ChildClassComp } from "./Child1ClassComp";

export class Parent1ClassComp extends Component{
    constructor(props){
        super(props)
        this.state={
            chairman:"",
            correspondant:{},
            school:[],
        }
    }
    receivechairman=(chai)=>{
        this.setState({chairman:chai})
    };
    receivecorrespondant=(correspondant)=>{
        this.setState({correspondant})
    };
    receiveschool=(scho)=>{
        this.setState({school:scho})
    };
    render(){
        const {receivechairman,receivecorrespondant,receiveschool}=this;
        const {chairman,correspondant,school}=this.state;
        return(
            <div>
               <Child1ClassComp receivechairman={receivechairman}
               receivecorrespondant={receivecorrespondant}
               receiveschool={receiveschool}
               /> 
               <hr />
               {chairman && <p> chairman receive from child:{chairman}</p>}
               {Object.keys(correspondant).length>0 && <p> correspondant receive from child:{correspondant.city}-{correspondant.street}</p> }
               
               <ul>
                {school.map((sch,i)=>{
                    return <li key={i}>
                        {sch.phone}
                    </li>
                })}
               </ul>
            </div>
        )
    }
}