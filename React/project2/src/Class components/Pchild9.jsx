import { Component } from "react";

export class Pchild9 extends Component{
    constructor(props){
        super(props)
        this.state={
            showName:false,
            showCar:false,
            showfriendName:false
        }
    }
    displayVillagename=(()=>{
        this.setState({ showName:true})
    })
    displayCarname=(()=>{
        this.setState({ showCar:true})
    })
    displayFriendname=(()=>{
        this.setState({ showfriendName:true})
    })
    render(){
        return(
            <div>
                <button onClick={this.displayVillagename}>showName</button>
                <button onClick={this.displayCarname}>showCar</button>
                <button onClick={this.displayFriendname}>showfriendName</button>
                {this.state.showName && <p>{this.props.myVillage.village}</p> }
                {this.state.showCar &&<p>{this.props.myCar.name}-{this.props.myCar.color}</p> }
                {this.state.showfriendName && <ul>{this.props.myFriends.map((user,i)=>{
                    return <li key={i}>{user}</li>
                })}</ul> }
               
            </div>
        )
    }
}