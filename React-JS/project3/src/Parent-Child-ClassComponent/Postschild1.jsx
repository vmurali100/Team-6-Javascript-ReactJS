import { Component } from "react";

export class Postschild1 extends Component{
    constructor(props){
        super(props)
        this.state={
            showpost:false
        }
    }
    displayPosts=(()=>{
        this.setState({showpost:true})
    })
    render(){
        return(
            <div>
             <button onClick={this.displayPosts}>showpost</button>
             <table border={1}>
                <thead>
                    <tr>
                        <th>userId</th>
                        <th>id</th>
                        <th>title</th>
                        <th>body</th>
                    </tr>
                </thead>
                {this.state.showpost && <tbody>
                    {
                        this.props.alluser.map((user,i)=>{
                            return <tr key={i}>
                                <td>{user.userId}</td>
                                <td>{user.id}</td>
                                <td>{user.title}</td>
                                <td>{user.body}</td>
                            </tr>
                        })
                    }
                    
                    </tbody>}
             </table>
            </div>
        )
    }
}
