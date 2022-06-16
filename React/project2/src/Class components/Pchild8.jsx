import { Component } from "react"

export class Pchild8 extends Component{
    constructor(props){
        super(props)
        this.state={
            showNames:false,
            showBikedet:false,
            showAnimals:false
        }
    }
    displayNames=(()=>{
        this.setState({showNames:true})
    })
    displayBikedet=(()=>{
        this.setState({showBikedet:true})
    })
    displayAnimals=(()=>{
        this.setState({showAnimals:true})
    })
    render(){
        return(
            <div>
                <button onClick={this.displayNames}>showNames</button>
                <button onClick={this.displayBikedet}>showBikedet</button>
                <button onClick={this.displayAnimals}>showAnimals</button>
                {this.state.showNames && <p>{this.props.myName.name}</p>}
                {this.state.showBikedet &&  <p>{this.props.myBike.name}-{this.props.myBike.model}-{this.props.myBike.mileage}</p>}
                {this.state.showAnimals &&  <ul>{this.props.allAnimals.map((user,i)=>{
                    return <li key={i}>{user}</li>
                })}</ul>}
               
               
            </div>
        )
    }
}