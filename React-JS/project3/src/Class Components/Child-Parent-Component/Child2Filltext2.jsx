import { Component } from "react";

export class Child2Filtext2 extends Component{
    constructor(props){
        super(props)
        this.state={
            Sai:"",
            Ram:{},
            Kiran:[],
        }
    }
    render (){
        const {RecieveSai,RecieveRam,RecieveKiran}=this.props;
        return(
            <div>
                <button onClick={()=>{RecieveSai("My name is JohnWislly")}}>ClickSai</button>
                <button onClick={()=>{RecieveRam(Allusers[0])}}>ClickRam</button>
                <button onClick={()=>{RecieveKiran(Allusers)}}>ClickKiran</button>
            </div>
        )
    }
}
var Allusers=[
    {
        "id": 1,
        "email": "KMorse@at.io",
        "username": "LMcwhorter",
        "password": "5zncd"
    },
    {
        "id": 2,
        "email": "NHohmann@dui.net",
        "username": "KZavala",
        "password": "qGP1w"
    },
    {
        "id": 3,
        "email": "GShanoski@convallis.net",
        "username": "MHigdon",
        "password": "CMHBK"
    },
    {
        "id": 4,
        "email": "MZhu@magna.org",
        "username": "GRenzi",
        "password": "828Tu"
    },
    {
        "id": 5,
        "email": "WSchreiner@pulvinar.com",
        "username": "CWalker",
        "password": "aBTgb"
    },
    {
        "id": 6,
        "email": "RBillanti@pulvinar.ly",
        "username": "TSkiffington",
        "password": "CPWSX"
    },
    {
        "id": 7,
        "email": "FHaiduke@sed.org",
        "username": "SLamsargis",
        "password": "bn8OW"
    },
    {
        "id": 8,
        "email": "ASiflinger@tortor.io",
        "username": "ACollins",
        "password": "YFkaP"
    },
    {
        "id": 9,
        "email": "LLohr@sed.com",
        "username": "SRahn",
        "password": "n4oQ8"
    },
    {
        "id": 10,
        "email": "MPost@turpis.ly",
        "username": "JSpataro",
        "password": "MqGit"
    }
]