import { Component } from "react";

export class Comp1 extends Component{
    constructor(){
        super()
        this.state={
          message:"hello welcome to comp1",
          person:{
            fname:"deepthi",
            lname:"boppana"
          },
          posts:allposts
        }
    }
    render(){
        // const{sendMessage}=this.props
        return(
            <div>
                <p>component1</p>
                <button onClick={()=>{this.props.sendMessage(this.state.message)}}>send message</button>
                   <button onClick={()=>{this.props.sendperson(this.state.person)}}>send person</button>
                   <button onClick={()=>{this.props.sendposts(this.state.posts)}}>send posts</button>
                
            </div>
        )
    }
}
 var allposts=[
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