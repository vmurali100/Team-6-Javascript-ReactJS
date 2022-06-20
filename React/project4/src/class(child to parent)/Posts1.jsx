import { Component } from "react";
import { PostsChild1 } from "./PostsChild1";

export class Posts1 extends Component {
    constructor() {
        super()
        this.state = {
            message: "",
            person: {},
            Users: []
        }
    }
    recieveMessage = (message) => {
        this.setState({ message })
    }
    recievePerson = (person) => {
        this.setState({ person })
    }
    recieveUsers = (Users) => {
        this.setState({ Users })
    }
    render() {
        const { recieveMessage, recievePerson, recieveUsers } = this;
        const{message,person,Users}=this.state
        return (
            <div>
                <PostsChild1 recieveMessage={recieveMessage} recievePerson={recievePerson} recieveUsers={recieveUsers} />
                    <p>message from childcomponent{message}</p>
                    <p>person from child component{person.title}-{person.body}</p>
                    <ul>
                        {Users.map((user,i)=>{
                            return <li key={i}>{user.userId} {user.id} {user.title}{ user.body}</li>
                            
                        })}
                    </ul>
            </div>
        )
    }
}