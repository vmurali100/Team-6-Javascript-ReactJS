import { Component } from "react";

export class Pchild4 extends Component{
    constructor(props){
        super(props)
        console.log(props)
        this.state={
            showBikes:false
        }
    }
    displaybikes=(()=>{
        this.setState({showBikes:true})
    })
    render(){
        return(
            <div>
                <button onClick={ this.displaybikes}>ShowBikes</button>
                {this.state.showBikes && <ul>{this.props.allBikes.map((user,i)=>{
                    return <li key={i}>{user}</li>
                })}</ul>}
            </div>
        )
    }
}