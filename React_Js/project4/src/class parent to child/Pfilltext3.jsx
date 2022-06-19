import { Component } from "react";
import { Cfilltextchild3 } from "./Cfilltextchild3";

export class Pfilltext3 extends Component{
    constructor(){
        super()
        this.state={
            filltextuser:[
                {
                    "id": 17,
                    "email": "JEschenbacher@aenean.io",
                    "username": "NPrellwitz",
                    "password": "VXipi"
                },
                {
                    "id": 18,
                    "email": "CReitz@dolor.ly",
                    "username": "JErica",
                    "password": "HVJMG"
                },
                {
                    "id": 19,
                    "email": "RUsgiveaway@quis.io",
                    "username": "TCompton",
                    "password": "CHYqY"
                },
                {
                    "id": 20,
                    "email": "AGarbe@turpis.com",
                    "username": "AEuaparadorn",
                    "password": "buNfq"
                },
                {
                    "id": 21,
                    "email": "RPlanty@dolor.ly",
                    "username": "HRoman",
                    "password": "bIIOZ"
                },
                {
                    "id": 22,
                    "email": "SKieras@hendrerit.gov",
                    "username": "RCorson",
                    "password": "NpOus"
                },
                {
                    "id": 23,
                    "email": "NVanburen@consequat.org",
                    "username": "RWarren",
                    "password": "50Wpu"
                },
                {
                    "id": 24,
                    "email": "RSoto@nec.gov",
                    "username": "MEasterly",
                    "password": "ZHtUR"
                },
                {
                    "id": 25,
                    "email": "BKensmoe@orci.org",
                    "username": "FCoopr",
                    "password": "KFQvi"
                },
                {
                    "id": 26,
                    "email": "ANabors@mi.ly",
                    "username": "LWalters",
                    "password": "dKAaC"
                }
            ]
        }
    }
    render(){
        return(
            <div>
                <Cfilltextchild3 filltextdetails={this.state.filltextuser}/>
            </div>
        )
    }
}