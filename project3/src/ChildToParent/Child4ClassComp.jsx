import { Component } from "react";

export class Child4ClassComp extends Component{
    constructor(props){
        super(props)
        this.state={
            factory:"",
            labour:{},
            wages:[]
        }
    }
    render(){
        const {receivefactory,receivelabour,receivewages}=this.props;
        return(
            <div>
                <button onClick={()=>{receivefactory("hindusthan pvt ltd")  }}>send factory</button>
                <button onClick={()=>{receivelabour(names[1])}}>send labour</button>
                <button onClick={()=>{receivewages(names)}}>send wages</button>
            </div>
        )
    }
}
var names=[
    {
        "fname": "Brad",
        "lname": "Winder"
    },
    {
        "fname": "Maria",
        "lname": "Wade"
    },
    {
        "fname": "Nick",
        "lname": "Nicholson"
    },
    {
        "fname": "Robbie",
        "lname": "Culin"
    },
    {
        "fname": "Manish",
        "lname": "Hesters"
    },
    {
        "fname": "Rogelio",
        "lname": "Silverio"
    },
    {
        "fname": "Eric",
        "lname": "Vanessen"
    },
    {
        "fname": "Lorita",
        "lname": "Nelson"
    },
    {
        "fname": "Mario",
        "lname": "Proctor"
    },
    {
        "fname": "Wei",
        "lname": "Mckinney"
    }
]