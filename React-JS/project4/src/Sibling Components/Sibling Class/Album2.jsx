import { Component } from "react";

export default class Album2 extends Component{
    render(){
        return(
            <div>
                <p>{this.props.message}</p>
                <p>{this.props.album.userId}-{this.props.album.id}</p>
                <ul>
                    {this.props.allalbum.map((user,i)=>{
                        return <li key={i}>
                            {user.userId}-{user.id}-{user.title}
                        </li>
                    })}
                </ul>
            </div>
        )
    }
}