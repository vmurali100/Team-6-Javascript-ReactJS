import { Component } from "react";

export default class AlbumComp2 extends Component{
    constructor(props){
        super(props)
        this.state = {

        }
    }
    render(){
        const{message,person,albums}=this.props
        return(
            <div>
                <p>Album Component2</p>
                <p>{message}</p>
                <p>{person.fname} {person.lname}</p>
                <table border={1}>
                    <thead>
                        <tr>
                            <th>UserId</th>
                            <th>Id</th>
                            <th>Title</th>
                        </tr>
                    </thead>
                    <tbody>
                        {albums.map((user,i)=>{
                            return <tr key={i}>
                                <td>{user.userId}</td>
                                <td>{user.id}</td>
                                <td>{user.title}</td>
                            </tr>
                        })}
                    </tbody>
                </table>
            </div>
        )
    }
}