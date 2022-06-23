import { Component } from "react";

export class ClassChild3Fill3 extends Component {
    constructor(props) {
        super(props)
        this.state = {
            showUser: false,
        }
    }
    saiUser = (() => {
        this.setState({ showUser: true })
    })
    render() {
        return (
            <div>
                <button onClick={this.saiUser}>ClickUser</button>

                <table border="1">
                    <thead >
                        <tr>
                            <th>fname</th>
                            <th>lname</th>
                        </tr>
                    </thead>
                    {this.state.showUser && <tbody>
                        {this.props.allUser.map((sai)=>{
                            return <tr>
                                <td>{sai.fname}</td>
                                <td>{sai.lname}</td>
                            </tr>
                        })}
                    </tbody>}
                </table>
            </div>
        )
    }
}