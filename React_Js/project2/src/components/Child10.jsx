import { Component } from "react";

export default class Child10 extends Component {
    constructor(props) {
        super(props)
        this.state = {
            showname: false,
            showemployee: false,
            showgraduate: false,
        }
    }
    handleshownames = () => {
        this.setState({ showname: true })
    }
    handleshowemployee = () => {
        this.setState({ showemployee: true })
    }
    handleshowgraduate = () => {
        this.setState({ showgraduate: true })
    }
    render() {
        return (
            <div>
                <button onClick={this.handleshownames}>show names</button>
                <button onClick={this.handleshowemployee}>show employee</button>
                <button onClick={this.handleshowgraduate}>show graduate</button>
                {this.state.showname && <p>{this.props.allnames}</p>}
                {this.state.showemployee && <p>{this.props.allemployee.id} - {this.props.allemployee.salary}</p>}
                {this.state.showgraduate && (
                    <ul>
                        {this.props.allgraduate.map((user, i) => {
                            return <li key={i}>{user}</li>
                        })}
                    </ul>
                )}
            </div>
        )
    }
}