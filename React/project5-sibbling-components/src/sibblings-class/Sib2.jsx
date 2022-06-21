import { Component } from "react";

export class Sib2 extends Component{
    constructor(){
        super()
    }
   
    render(){
        const{message,person,photos}=this.props;
        return(
            <div>
                <p>{message}</p>
                <p>{person.fname} {person.lname}</p>
                <div>
                   
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
                                {photos.map((user,i)=>{
                                    return <tr key={i}>
                                        <td>{user.albumId}</td>
                                        <td>{user.id}</td>
                                        <td>{user.title}</td>
                                        <td>{user.url}</td>
                                        <td>{user.thumbnailUrl}</td>
                                    </tr>
                                })}
                            </tbody>
                        </table>
                
                </div>
            </div>
        )
    }
}