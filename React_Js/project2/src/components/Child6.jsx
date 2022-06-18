import { Component } from "react";

export default class Child6 extends Component {
    constructor(props) {
        super(props)
        this.state = {
            showelectronic: false
        }
    }
    handleshowelectronnic = () => {
        this.setState({ showelectronic: true })
    }
    render() {
        return (
            <div>
                <button onClick={this.handleshowelectronnic}>show electronic</button>
                {this.state.showelectronic && (
                    <ul>
                        {this.props.allelectronic.map((user, i) => {
                            return <li key={i}>{user}</li>
                        })}
                    </ul>
                )}
            </div>
        )
    }
}