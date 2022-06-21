import { Component } from "react";
import { Child2ClassComp } from "./Child2ClassComp";

export class Parent2ClassComp extends Component{
    constructor(props){
        super(props)
        this.state={
            employee:"",
            person:{},
            company:[],
        }
    }
    receiveemployee=(emp)=>{
        this.setState({employee:emp})
    };
    receiveperson=(person)=>{
        this.setState({person})
    };
    receivecompany=(com)=>{
        this.setState({company:com})
    }
    render(){
    
        const {receiveemployee,receiveperson,receivecompany}=this;
        const{employee,person,company}=this.state;
        return(
            <div><Child2ClassComp receiveemployee={receiveemployee} 
            receiveperson={receiveperson}
            receivecompany={receivecompany}
            />
            <hr />
           {employee && <p>employee received from child component:{employee}</p>}
           {Object.keys(person).length>0 && <p>person received from child:{person.username}-{person.name}</p>}
            
            <ul>
                {company.map((filt,i)=>{
                    return <li key={i}>{filt.email}</li>
                })}
            </ul>
            </div>
        )
    }
}