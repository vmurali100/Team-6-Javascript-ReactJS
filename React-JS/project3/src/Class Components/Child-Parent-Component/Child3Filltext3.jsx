import { Component } from "react";

export class Child3Filltext3 extends Component{
    constructor(props){
        super(props)
        this.state={
            Vijay:"",
            Varun:{},
            Vivek:[],
        }
    }
    render(){
        const{RecieveVijay,RecieveVarun,RecieveVivek}=this.props;
        return(
            <div>
                <button onClick={()=>{RecieveVijay("my name is SaikiranVK")}}>ClickVijay</button>
                <button onClick={()=>{RecieveVarun(MyUsers[0])}}>clickVarun</button>
                <button onClick={()=>{RecieveVivek(MyUsers)}}>clickVivek</button>

            </div>
        )
    }
}
var MyUsers=[
    {
        "fname": "Xiumei",
        "lname": "Love"
    },
    {
        "fname": "Suini",
        "lname": "Crider"
    },
    {
        "fname": "Marcedia",
        "lname": "Wasson"
    },
    {
        "fname": "Fang",
        "lname": "Breuninger"
    },
    {
        "fname": "Hae-Yong",
        "lname": "Guindin"
    },
    {
        "fname": "Leatrice",
        "lname": "Phuan"
    },
    {
        "fname": "Carman",
        "lname": "Sjaardema"
    },
    {
        "fname": "Carman",
        "lname": "Colon"
    },
    {
        "fname": "Sukanya",
        "lname": "Hatton"
    },
    {
        "fname": "Conrade",
        "lname": "Griffith"
    }
]