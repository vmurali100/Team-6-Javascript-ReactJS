import { Component } from "react";

export default class FilltextComp2 extends Component{
    constructor(props){
        super(props)
        this.state={            
        }
    }    
    render(){
        const {message,person,filltext}=this.props;
        return(
            <div>
                <p>Filltext Comp2</p>
                <p>{message}</p>
                <p>{person.name} {person.email} {person.state} {person.city}</p>
                <table border={1}>
                    <thead>
                        <tr>
                            <th>fname</th>
                            <th>lname</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filltext.map((user,i)=>{
                            return <tr key={i}>
                                <td>{user.fname}</td>
                                <td>{user.lname}</td>
                            </tr>
                        })}
                    </tbody>
                </table>
            </div>
        )
    }
}