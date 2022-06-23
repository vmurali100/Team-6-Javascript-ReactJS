import { Component } from "react";

export class ClassChild1Post1 extends Component{
    constructor(props){
        super(props)
        this.state={
             ShowPostss:false
        }
    }
    disPostss=(()=>{
        this.setState({ShowPostss:true})
    })
    render(){
        return(
            <div>
                <button onClick={this.disPostss}>Show Post</button>
                <table >
                    <thead>
                        <tr>
                            <th>userId</th>
                            <th>id</th>
                            <th>title</th>
                            <th>body</th>
                            
                        </tr>
                    </thead>
                   {this.state.ShowPostss &&  <body>
                        {this.props.allPostss.map((user,i)=>{
                            return <tr key={i}>
                                <td>{user.userId}</td>
                                <td>{user.id}</td>
                                <td>{user.title}</td>
                                <td>{user.body}</td>
                            </tr>
                        })}
                    </body>}
                </table>
            </div>
        )
    }
}