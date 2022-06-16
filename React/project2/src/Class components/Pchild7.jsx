import { Component } from "react"

export class Pchild7 extends Component {
    constructor(props) {
        super(props)
        console.log(props)
        this.state = {
            showNames: false,
            showMobiles: false,
            showPlaces: false
        }
    }
    displayNames = (() => {
        this.setState({ showNames: true })
    })
    displayMobiles = (() => {
        this.setState({ showMobiles: true })
    })
    displayPlaces=(()=>{
        this.setState({showPlaces:true})
    })
    render() {
        return (

            <div>
                <button onClick={this.displayNames}>showNames</button>
                <button onClick={this.displayMobiles}>showMobiles</button>
                <button onClick={this.displayPlaces}>showPlaces</button>
                {this.state.showNames && <p>{this.props.allmyName.myName}</p>}
                {this.state.showMobiles && <p>{this.props.mymobiles.brand}-{this.props.mymobiles.color}-{this.props.mymobiles.os}</p>}
                {this.state.showPlaces && <ul>{this.props.allplaces.map((user, i) => {
                    return <li key={i}>{user}</li>
                })}</ul>}

            </div>
        )
    }
}