import { Component } from "react";

export default class PostsChild1 extends Component{
    constructor(){
        super()

        this.state = {
            showPosts : false
        }
    }
    handleshowPosts = () =>{
        this.setState({showPosts: true})
    }
    render(){
        return(
            <div>
                <button onClick={this.handleshowPosts}>Display Posts</button>
                <table border={1}>
                    <thead>
                        <tr>
                            <th>userId</th>
                            <th>id</th>
                            <th>title</th>
                            <th>body</th>
                        </tr>
                    </thead>
                    {this.state.showPosts && <thead>
                        {this.props.postsDetails.map((user,i)=>{
                            return <tr key={i}>
                                <td>{user.userId}</td>
                                <td>{user.id}</td>
                                <td>{user.title}</td>
                                <td>{user.body}</td>
                            </tr>
                        })}
                    </thead>}
                </table>
            </div>
        )
    }
}