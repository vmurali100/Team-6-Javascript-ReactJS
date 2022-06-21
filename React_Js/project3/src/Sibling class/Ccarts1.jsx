import { Component } from "react";

export default class Ccarts1 extends Component{
    constructor(props){
        super(props)
        this.state={
            message:"Hello world from component",
            person:{
                fname:"Padhu",
                lname:"Padmaja"
            },
            carts:allcarts,
        }
    }
    render(){
        return(
            <div>
                <button onClick={()=>{this.props.sendmessage(this.state.message)}}>send message</button>
                <button onClick={()=>{this.props.sendperson(this.state.person)}}>send person</button>
                <button onClick={()=>{this.props.sendcarts(this.state.carts)}}>send carts</button>
                <p>Ccarts1</p></div>
        )
    }
}
var allcarts=[{ "id": 1, "userId": 1, "date": "2020-03-02T00:00:02.000Z", "__v": 0 }, 
{ "id": 2, "userId": 1, "date": "2020-01-02T00:00:02.000Z", "__v": 0 },
{"id":3,"userId":2,"date":"2020-03-01T00:00:02.000Z","__v":0},
{"id":4,"userId":3,"date":"2020-01-01T00:00:02.000Z","__v":0},
{"id":5,"userId":3,"date":"2020-03-01T00:00:02.000Z","__v":0},
{"id":6,"userId":4,"date":"2020-03-01T00:00:02.000Z","__v":0},
{"id":6,"userId":8,"date":"2020-03-01T00:00:02.000Z","__v":0}]