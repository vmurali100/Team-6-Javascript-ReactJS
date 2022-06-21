import { Component } from "react"

export default class Sibling4 extends Component{
    render(){
        const {school,teacher,students}=this.props;
        return(
            <div>
                <p>Component 4</p>
                <p>{school}</p>
                <p>{teacher.fname}{teacher.lname}</p>
                <ol>
                    {students.map((stud,i)=>{
                        return <li key={i}>{stud.username}</li>
                    })}
                </ol>
            </div>
            
        )
    }
}