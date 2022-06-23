import { Component } from "react";
import { ClassChild4Fill4 } from "./ClassChild4Fill4";

export class ClassParent4Fill4 extends Component{
    constructor(){
        super()
        this.state={
            Users:[
                {
                    "id": 81,
                    "email": "YMazza@dolor.com",
                    "username": "GCullen",
                    "password": "DgZBx"
                },
                {
                    "id": 82,
                    "email": "BBerger@orci.gov",
                    "username": "FHill",
                    "password": "8mws1"
                },
                {
                    "id": 83,
                    "email": "DShobe@porta.net",
                    "username": "MHollis",
                    "password": "XmxcD"
                },
                {
                    "id": 84,
                    "email": "CGrimsley@magna.ly",
                    "username": "UDeals",
                    "password": "on4ID"
                },
                {
                    "id": 85,
                    "email": "KHebert@amet.org",
                    "username": "PSalter",
                    "password": "dN8OY"
                },
                {
                    "id": 86,
                    "email": "MRoethlisberger@libero.com",
                    "username": "EKiab",
                    "password": "gj0k4"
                },
                {
                    "id": 87,
                    "email": "DEvert@nec.org",
                    "username": "JFreund",
                    "password": "AiMit"
                },
                {
                    "id": 88,
                    "email": "RTrautman@lacus.io",
                    "username": "KMcnulty",
                    "password": "LNpwi"
                },
                {
                    "id": 89,
                    "email": "HDemarse@pulvinar.com",
                    "username": "JCamiling",
                    "password": "QeFvK"
                },
                {
                    "id": 90,
                    "email": "RRoos@nunc.ly",
                    "username": "BGriffith",
                    "password": "r6Qbf"
                }
            ]
        }
    }
    render(){
        return(
            <div>
                <ClassChild4Fill4 allUsers={this.state.Users}/>
            </div>
        )
    }
}