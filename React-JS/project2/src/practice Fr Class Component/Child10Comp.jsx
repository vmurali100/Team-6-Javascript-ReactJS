import { Component } from "react";

export class Child10Comp extends Component{
    constructor(props){
        super(props)
        this.state ={
           ShowUsers:false,
        }
    }
    hansdleAshowusers = () => {
        this.setState({ShowUsers:true})
    }
    render(){
        return(
            <div>
                <button onClick={this.hansdleAshowusers}>ShowUsers</button>
                {this.state.ShowUsers &&   <ul>
                    {this.props.allusers.map((user ,i)=>{
                        return <li key={i}>{user}</li>
                    })}
                </ul>}
              
            </div>
        )
    }
}