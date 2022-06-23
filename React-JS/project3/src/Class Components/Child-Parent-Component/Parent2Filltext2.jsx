import { Component } from "react";
import { Child2Filtext2 } from "./Child2Filltext2";

export class Parent2Filltext2 extends Component{
    constructor(props){
        super(props)
        this.state ={
            Sai:"",
            Ram:{},
            Kiran:[],
        }
    }
    RecieveSai =(Hii)=>{
        this.setState({Sai:Hii})
    }
    RecieveRam =(Hello)=>{
        this.setState({Ram:Hello})
    }
    RecieveKiran =(Byee)=>{
        this.setState({Kiran:Byee})
    }

    render(){
        const {RecieveSai,RecieveRam,RecieveKiran}=this;
        const {Sai,Ram,Kiran}=this.state
        return(          
            <div>
            <Child2Filtext2 RecieveSai={RecieveSai} RecieveRam={RecieveRam} RecieveKiran={RecieveKiran}/>
            <hr />
            {Sai && <p>Sai Recieve From Child:{Sai}</p>}
            {Object.keys(Ram).length > 0 && <p>Ram Recieve for me </p>  }
            <ul>
                <table>
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>email</th>
                            <th>username</th>
                            <th>password</th>
                        </tr>
                    </thead>
                    <tbody>
                    {Kiran.map((Siri,i)=>{
                    return <tr key={i}>
                          <td>{Siri.id}</td>
                          <td>{Siri.email}</td>
                          <td>{Siri.username}</td>
                          <td> {Siri.password}</td>
                    </tr>
                })}
                    </tbody>
                </table>
                
            </ul>
                                  
            </div>
        )
    }
}