import { Component } from "react";

export class ClassChild5Comment5 extends Component {
    constructor(props) {
        super(props)
        this.state = {
            saiComments:false,
        }
    }
    RajuCommnets =(()=>{
        this.setState({ saiComments:true })
    })
    render() {
        return (
            <div>
                <button onClick={this.RajuCommnets}>ClickComment</button>
                <table border="1">
                    <thead>
                        <tr>
                            <th>postId</th>
                            <th>id</th>
                            <th>name</th>
                            <th>email</th>
                            <th>body</th>
                        </tr>
                    </thead>                   
                    {this.state.saiComments &&  <body>
                        {this.props.allComments.map((user,i)=>{
                            return <tr key={i}>
                                <td>{user.postId}</td>
                                <td>{user.id}</td>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.body}</td>
                            </tr>
                        })}
                    </body>}
                   
                </table>
            </div>
        )
    }
}