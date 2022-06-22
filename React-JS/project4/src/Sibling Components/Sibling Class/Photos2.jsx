import { Component } from "react";

export default class Photos2 extends Component{
    render(){
        return(
            <div>
                <p>{this.props.message}</p>
                <p>{this.props.photo.albumId}{this.props.photo.id}</p>
                <ul>
                   {this.props.allphotos.map((user,i)=>{
                     return(
                        <li key={i}>{user.albumId}{user.id}{user.title}{user.url}{user.thumbnailUrl}</li>
                    )
                   })}
                </ul>
            </div>
        )
    }
}