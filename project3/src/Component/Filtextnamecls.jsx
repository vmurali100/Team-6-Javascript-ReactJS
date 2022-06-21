import { Component } from "react";
import { Filtextnametablecls } from "./Filtextnametablecls";

export class Filtextnamecls extends Component{
    constructor(props){
        super(props)
        this.state={
            namescls:[
                {
                    "fname": "Carmen",
                    "lname": "Alagisan"
                },
                {
                    "fname": "Sunil",
                    "lname": "Speck"
                },
                {
                    "fname": "Kathleen",
                    "lname": "Harris"
                },
                {
                    "fname": "Marty",
                    "lname": "Kandray"
                },
                {
                    "fname": "Nerissa",
                    "lname": "Vera"
                },
                {
                    "fname": "Lynda",
                    "lname": "Thomason"
                },
                {
                    "fname": "Robbin",
                    "lname": "Oachs"
                },
                {
                    "fname": "Kendall",
                    "lname": "Burnett"
                },
                {
                    "fname": "Ian",
                    "lname": "Lessenberry"
                },
                {
                    "fname": "Catherine",
                    "lname": "Bunek"
                }
            ]
        }
    }
    render(){
        return(
            <div>
                <Filtextnametablecls allfiltextnamecls={this.state.namescls}/>
            </div>
        )
    }
}