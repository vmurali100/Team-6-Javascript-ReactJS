import { Component } from "react";

export class Pchild5 extends Component{
    constructor(props){
        super(props)
        console.log(props)
        this.state={
            ShowNames:false
        }
    }
    displayNames=(()=>{
        this.setState({ShowNames:true})
    })
    render(){
        return(
            <div>
                  <button onClick={ this.displayNames}>ShowNames</button>
                {this.state.ShowNames && <ul>{this.props.allNames.map((user,i)=>{
                    return <li key={i}>{user}</li>
                })}</ul>}
            </div>
        )
    }
}