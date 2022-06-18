import { Component } from "react";

export default class Child9 extends Component {
    constructor(props) {
        super(props)
        this.state = {
            showname: false,
            showperson: false,
            showstates: false,
        }
    }
    handleshownames = () => {
        this.setState({ showname: true })
    }
    handleshowperson = () => {
        this.setState({ showperson: true })
    }
    handleshowstates = () => {
        this.setState({ showstates: true })
    }
    render() {
        return (
            <div>
                <button onClick={this.handleshownames}>show names</button>
                <button onClick={this.handleshowperson}>show person</button>
                <button onClick={this.handleshowstates}>show states</button>
                {this.state.showname && <p>{this.props.allnames}</p>}
                {this.state.showperson && <p>{this.props.allpersons.email} - {this.props.allpersons.city}</p>}
                {this.state.showstates && (
                    <ul>
                        {this.props.allstates.map((user, i) => {
                            return <li key={i}>{user}</li>
                        })}
                    </ul>
                )}
            </div>
        )
    }
}