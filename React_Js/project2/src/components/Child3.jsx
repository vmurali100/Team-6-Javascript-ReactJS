import { Component } from "react";

export default class Child3 extends Component {
    constructor(props) {
        super(props)
        console.log(props)
        this.state = {
            showcompany: false
        }
    }
    handleshowcompany = () => {
        this.setState({ showcompany: true })
    }
    render() {
        return (
            <div>
                <button onClick={this.handleshowcompany}>show users</button>
                {this.state.showcompany && (
                    <ul>
                        {this.props.alluser.map((user,i)=>{
                            return <li key={i}>{user}</li>
                        })}
                    </ul>
                )}
            </div>
        )
    }
}