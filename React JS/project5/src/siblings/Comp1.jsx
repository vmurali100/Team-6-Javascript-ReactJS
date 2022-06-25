import { Component } from "react"

export class Comp1 extends Component{
    constructor(props){
        super(props)
        this.state={
        message:"hi",
        person:{
            fname:"santhosh",
            lname:"B"
        },
        users:users
        
        }
    }
    render(){
        const {semessage, seperson,searray}=this.props
        return <div>
            <button onClick={()=>{semessage(this.state.message)}}>click</button>
            <button onClick={()=>{seperson(this.state.person)}}>click</button>
            <button onClick={()=>{searray(this.state.users )}}>click</button>
        </div>
    }
}

var users=[
    {
        "fname": "Meera",
        "lname": "Heilman"
    },
    {
        "fname": "Michael",
        "lname": "Newell"
    },
    {
        "fname": "Kerry",
        "lname": "Yen"
    },
    {
        "fname": "Bilal",
        "lname": "Ghiselli"
    },
    {
        "fname": "Shahriar",
        "lname": "Walley"
    },
    {
        "fname": "Regine",
        "lname": "Staley"
    },
    {
        "fname": "Rachelle",
        "lname": "Brubaker"
    },
    {
        "fname": "Yolunda",
        "lname": "Mcnamee"
    },
    {
        "fname": "Yan",
        "lname": "Castellanos"
    },
    {
        "fname": "Nathan",
        "lname": "Frame"
    }

  ]

