import { Component } from "react"

export class Child extends Component{
    constructor(props){
        super(props)
        this.state={
        message:"",
        person:{},
        students:[],
        
        }
    }
    render(){
        const {remessage, reperson,rearray}=this.props
        return <div>
            <button onClick={()=>{remessage("hello")}}>click</button>
            <button onClick={()=>{reperson(data [0])}}>click</button>
            <button onClick={()=>{rearray(text )}}>click</button>
        </div>
    }
}

var data=[
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

  var text=["hi","what","space"]