import { Component } from "react";

export class TodosChild4 extends Component{
    constructor(){
        super()
        this.state={
            message:"",
            person:{},
            todo:[]
        }
    }
    render(){
        const{receivemessage,receiveperson,receivetodo}=this.props
        return(
            <div>
                <button onClick={()=>{receivemessage("hello world")}}>send message</button>
                <button onClick={()=>{receiveperson(alltodos[0])}}>send person</button>
                <button onClick={()=>{receivetodo(alltodos)}}>send todo</button>
            </div>
        )
    }
}
var alltodos=[
    {
      "userId": 1,
      "id": 1,
      "title": "delectus aut autem",
      "completed": false
    },
    {
      "userId": 1,
      "id": 2,
      "title": "quis ut nam facilis et officia qui",
      "completed": false
    },
    {
      "userId": 1,
      "id": 3,
      "title": "fugiat veniam minus",
      "completed": false
    },
    {
      "userId": 1,
      "id": 4,
      "title": "et porro tempora",
      "completed": true
    },
    {
      "userId": 1,
      "id": 5,
      "title": "laboriosam mollitia et enim quasi adipisci quia provident illum",
      "completed": false
    },
]