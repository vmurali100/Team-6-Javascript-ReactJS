import { Component } from "react"

export default class ChildComp4 extends Component{
    constructor(props){
        super(props)
        this.state= {
            showMobiles: false
        }
    }
    handleshowMobils = ()=>{
        this.setState({showMobiles: true})
    }
    render(){
        return <div>
            <button onClick={this.handleshowMobils}>Display Mobils</button>
            {this.state.showMobiles && (
                <ul>{this.props.allMobiles.map((user,i)=>{
                    return <li key={i}>{user}</li>
                })}</ul>
            )}
        </div>
    }
}