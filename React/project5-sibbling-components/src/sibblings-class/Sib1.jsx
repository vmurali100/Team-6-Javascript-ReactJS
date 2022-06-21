import { Component } from "react";

export class Sib1 extends Component{
    constructor(){
        super()
        this.state={
            message:"helooooooooooooo",
            person:{
                fname:"DEEPTHI",
                lname:"BoPPANA"
            },
            photos:allphotos
        }
    }
    render(){
        const{sendmessage,sendperson,sendphotos}=this.props
        const{message,person,photos}=this.state
        return(
          
            <div>
                <p>sib1</p>
                <button onClick={()=>{sendmessage(message)}}>send message</button>
                <button onClick={()=>{sendperson(person)}}>send person</button>
                <button onClick={()=>{sendphotos(photos)}}>send photos</button>
            </div>
        )
    }
}
var allphotos=[
    {
      "albumId": 1,
      "id": 1,
      "title": "accusamus beatae ad facilis cum similique qui sunt",
      "url": "https://via.placeholder.com/600/92c952",
      "thumbnailUrl": "https://via.placeholder.com/150/92c952"
    },
    {
      "albumId": 1,
      "id": 2,
      "title": "reprehenderit est deserunt velit ipsam",
      "url": "https://via.placeholder.com/600/771796",
      "thumbnailUrl": "https://via.placeholder.com/150/771796"
    },
    {
      "albumId": 1,
      "id": 3,
      "title": "officia porro iure quia iusto qui ipsa ut modi",
      "url": "https://via.placeholder.com/600/24f355",
      "thumbnailUrl": "https://via.placeholder.com/150/24f355"
    },
    {
      "albumId": 1,
      "id": 4,
      "title": "culpa odio esse rerum omnis laboriosam voluptate repudiandae",
      "url": "https://via.placeholder.com/600/d32776",
      "thumbnailUrl": "https://via.placeholder.com/150/d32776"
    },
]