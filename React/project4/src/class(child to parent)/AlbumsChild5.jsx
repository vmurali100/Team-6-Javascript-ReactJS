import { Component } from "react";

export class AlbumsChild5 extends Component{
    constructor(props){
        super(props)
        this.state={
            Message:"",
            person:{},
            albums:[]
        }
    }
    render(){
        const{recievemessage,recieveperson,recievealbums}=this.props
        return(
            <div>
                <button onClick={()=>{recievemessage("hello welcome to class component")}}>send message</button>

                <button onClick={()=>{recieveperson(allAlbums[0])}}>send person</button>
                <button onClick={()=>{recievealbums(allAlbums)}}>send Album</button>
                
            </div>
        )
    }
}
var allAlbums=[
    {
      "userId": 1,
      "id": 1,
      "title": "quidem molestiae enim"
    },
    {
      "userId": 1,
      "id": 2,
      "title": "sunt qui excepturi placeat culpa"
    },
    {
      "userId": 1,
      "id": 3,
      "title": "omnis laborum odio"
    },
    {
      "userId": 1,
      "id": 4,
      "title": "non esse culpa molestiae omnis sed optio"
    },
    {
      "userId": 1,
      "id": 5,
      "title": "eaque aut omnis a"
    },
]