//mani-child
import { Component } from "react"

export class Manikcomp extends Component{
    constructor(props){
        super(props)
        this.state={
          showstudents:false,
        }
    }
    handlestudents=()=>{
        this.setState({showstudents:true})
    }
    render(){
        return(
            
        <div>
            <button onClick={this.handlestudents}>showstudents</button>
            {this.state.showstudents && <ul>
                {this.props.allstudents.map((stu,i)=>{
                    return <li key={i}>{stu}</li>
                })}
            </ul>}
        </div>
        )
        
    }
}