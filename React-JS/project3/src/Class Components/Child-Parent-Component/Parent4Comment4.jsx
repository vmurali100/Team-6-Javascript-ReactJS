import { Component } from "react";
import { createPortal } from "react-dom";
import { Child4Comment4 } from "./Child4Comment4";

export class Parent4Comment4 extends Component{
    constructor(props){
        super(props)
        this.state={
            Nihkil:"",
            Niranjan:{},
            Naresh:[],
        }
    }
    RecieveNikhil=(Monisha)=>{
        this.setState({Nikhil:Monisha})
    }
    RecieveNirajan=(Nikitha)=>{
        this.setState({Niranjan:Nikitha})
    }
    RecieveNaresh=(Pallavi)=>{
        this.setState({Naresh:Pallavi})
    }
    render(){
        const {RecieveNikhil,RecieveNirajan,RecieveNaresh}=this;
        const {Nikhil,Niranjan,Naresh}=this.state
        return(
            <div>
                <Child4Comment4 RecieveNikhil={RecieveNikhil} RecieveNirajan={RecieveNirajan} RecieveNaresh={RecieveNaresh}/>
                {Nikhil && <p>Nikhil Recieve Form Child :{Nikhil}</p>}
                {Object.keys(Niranjan).length > 0 && <p>Niranjan Recieve For me</p>} 
                <ul>
                    <table border="1">
                        <thead>
                            <tr>
                                <th>fname</th>
                                <th>lname</th>
                                <th>tel</th>
                                <th>address</th>
                                <th>city</th>
                                <th>state</th>
                                <th>zip</th>
                            </tr>
                        </thead>
                        <tbody>
                        {Naresh.map((user,i)=>{
                        return <tr key={i}>
                            <td>{user.fname}</td>
                            <td>{user.lname}</td>
                            <td> {user.tel}</td>
                            <td>{user.address}</td>
                            <td>{user.city}</td>
                            <td>{user.state}</td>
                            <td>{user.zip}</td>
                                 
                        </tr>
                        
                                              
                    })}
                        </tbody>
                    </table>
                   
                </ul>
                
            </div>
        )
    }
    
}