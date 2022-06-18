import { Component } from "react";

export default class Child4 extends Component {
    constructor(props) {
        super(props)
        this.state = {
            showvegetable: false
        }
    }
    handleshowvegetable = () => {
        this.setState({ showvegetable: true })
    }
    render() {
        return (
            <div>
                <button onClick={this.handleshowvegetable}>show vegetables</button>
                {this.state.showvegetable && (
                    <ul>
                        {this.props.allvegetables.map((user, i) => {
                            return <li key={i}>{user}</li>
                        })}
                    </ul>
                )}
            </div>
        )
    }
}