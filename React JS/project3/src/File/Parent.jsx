import { Component } from "react";
import { Child } from "./Child";

export class Parent extends Component{
    constructor(){
        super()
        this.state={
           text:data
        }
    }
    render(){
        return (
            <div>
              <Child all={this.state.text}/>  
            </div>
        )
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