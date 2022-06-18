import { Component } from "react";

export default class Child7 extends Component {
    constructor(props) {
        super(props)
        this.state = {
            showcolors: false
        }
    }
    handleshowcolors = () => {
        this.setState({ showcolors: true })
    }
    render() {
        return (
            <div>
                <button onClick={this.handleshowcolors}>show colors</button>
                {this.state.showcolors && (
                    <ul>
                        {this.props.allcolors.map((user, i) => {
                            return <li key={i}>{user}</li>
                        })}
                    </ul>
                )}
            </div>
        )
    }
}