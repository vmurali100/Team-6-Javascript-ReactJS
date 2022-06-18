import { Component } from "react";

export class Pchild1 extends Component {
    constructor(props) {
        super(props)
        console.log(props)
        this.state = {
            showPosts: false,
        }
    }
    displayPosts = (() => {
        this.setState({ showPosts: true })
    })
    render() {
        return (
            <div>
                <button onClick={this.displayPosts}>showPosts</button>
                <table border={1}>
                    <thead>
                        <tr>
                            <th>userId</th>
                            <th>id</th>
                            <th>title</th>
                            <th>body</th>
                        </tr>
                    </thead>



                    {this.state.showPosts && <tbody>{this.props.postDetails.map((user, i) => {
                        return <tr>
                            <td>{user.userId}</td>
                            <td>{user.id}</td>
                            <td>{user.title}</td>
                            <td>{user.body}</td>
                        </tr>
                    })}   </tbody>}


                </table>
            </div>
        )
    }
}