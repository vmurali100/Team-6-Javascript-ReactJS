import { Component } from "react";

export class ChildComp extends Component {
    constructor(props) {
        super(props)
        console.log(props)
        this.state = {
            showUsers: false
        }
    }
    displayshowUsers=(()=>{
        this.setState({showUsers: true})
    })
    render() {
        return (
            <div>
                <button onClick={this.displayshowUsers}>showUsers</button>
                {this.state.showUsers &&
                     <ul>
                     {this.props.allusers.map((user, i) => {
                         return <li key={i}>{user}</li>
                     })}
                 </ul>}
               

            </div>
        )
    }
}