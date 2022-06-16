import { Component } from "react";

export class Pchild10 extends Component {
    constructor(props) {
        super(props)
        console.log(props)
        this.state = {
            showName: false,
            showPerson: false,
            showFruits: false
        }
    }
    displayNames = (() => {
        this.setState({ showName: true })
    })
    displayPerson = (() => {
        this.setState({ showPerson: true })
    })
    displayFruits = (() => {
        this.setState({ showFruits: true })
    })

    render() {
        return (
            <div>
                <button onClick={this.displayNames}>showName</button>

                <button onClick={this.displayPerson}>showPerson</button>

                <button onClick={this.displayFruits}>showFruits</button>
                {/* for string */}
                {this.state.showName && <p>{this.props.allnames.name}</p>}
                {/* for object */}
                {this.state.showPerson && <p>{this.props.allpersons.fname}-{this.props.allpersons.lname}</p>}
                {/* for array */}
                {this.state.showFruits && <ul>{this.props.allfruits.map((user, i) => {
                    return <li key={i}>{user}</li>
                })}</ul>}
            </div>
        )
    }
}