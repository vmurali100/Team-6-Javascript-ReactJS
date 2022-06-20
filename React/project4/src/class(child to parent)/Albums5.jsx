import { Component } from "react";
import { AlbumsChild5 } from "./AlbumsChild5";

export class Albums5 extends Component{
    constructor(){
        super()
        this.state={
            message:"",
            person:{},
            albums:[]
        }
    }
    recievemessage=(message)=>{
        this.setState({message})
    }
    recieveperson=(person)=>{
        this.setState({person})
    }
    recievealbums=(albums)=>{
        this.setState({albums})
    }
    render(){
        const{recievemessage,recieveperson,recievealbums}=this
        const{message,person,albums}=this.state
        return(
            <div>
                <AlbumsChild5 recievemessage={recievemessage} recieveperson={recieveperson} recievealbums={recievealbums}/>
                <p>{message}</p>
                <p>{person.title}</p>
                
                           <table border={1}>
                           <thead>
                               <tr>
                                   <th>userId</th>
                                   <th>id</th>
                                   <th>title</th>
                                   
                               </tr>
                           </thead>
                           <tbody>{albums.map((user,i)=>{
                               return <tr key={i}>
                                   <td>{user.userId}</td>
                                   <td>{user.id}</td>
                                   <td>{user.title}</td>
                                  
                               </tr>
                           })}</tbody>
                       </table>
                    

            </div>
        )
    }
}