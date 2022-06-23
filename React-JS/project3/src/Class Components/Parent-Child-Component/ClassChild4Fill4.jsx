import { Component } from "react";

export class ClassChild4Fill4 extends Component{
    constructor(props){
        super(props)
        this.state={
           showUsers:false,
        }
    }
     disUsers=(()=>{
        this.setState({showUsers:true})
     })
    render (){
        return(
            <div>
                <button onClick={this.disUsers}>ClickUsers</button>
                <table border="1">
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>email</th>
                            <th>username</th>
                            <th>password</th>
                        </tr>
                    </thead>
                    {this.state.showUsers && <tbody>
                        {this.props.allUsers.map((sireesha,i)=>{
                            return <tr key={i}>
                                <td>{sireesha.id}</td>
                                <td>{sireesha.email}</td>
                                <td>{sireesha.username}</td>
                                <td>{sireesha.password}</td>

                            </tr>
                        })}
                    </tbody>}
                </table>
            </div>
        )
    }
}