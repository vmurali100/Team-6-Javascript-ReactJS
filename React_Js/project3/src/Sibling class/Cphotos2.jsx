import { Component } from "react";

export default class Cphotos2 extends Component{
    render(){
        return(
            <div>
                <p>Component2</p>
                <p>{this.props.message}</p>
                <p>{this.props.person.fname} {this.props.person.lname}</p>
                <table border={1}>
                <thead>
                    <tr>
                        <th>albumId</th>
                        <th>id</th>
                        <th>title</th>
                        <th>url</th>
                        <th>thumbnailUrl</th>
                    </tr>
                </thead>
                <tbody>
                {this.props.photos.map((user,i)=>{
                        return <tr>
                            <th>{user.albumId}</th>
                            <th>{user.id}</th>
                            <th>{user.title}</th>
                            <th>{user.url}</th>
                            <th>{user.thumbnailUrl}</th>
                        </tr>
                    })}
                </tbody>
            </table>
            </div>
        )
    }
}

                  
                   