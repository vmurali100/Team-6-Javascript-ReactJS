import { Component } from "react";
import { Filtextidtablecls } from "./Filtextidtablecls";

export class Filtextidcls extends Component{
    constructor(props){
        super(props)
        this.state={
            idscls:[
                {
                    "id": 2133,
                    "email": "CBlalock@aliquam.gov",
                    "username": "CWillett",
                    "password": "6dfIO"
                },
                {
                    "id": 2134,
                    "email": "VFaust@massa.gov",
                    "username": "LBurkhardt",
                    "password": "QfNjr"
                },
                {
                    "id": 2135,
                    "email": "CCarrothers@sed.io",
                    "username": "MRooprai",
                    "password": "1M2IC"
                },
                {
                    "id": 2136,
                    "email": "RSolomon@amet.ly",
                    "username": "VKeen",
                    "password": "AfzXa"
                },
                {
                    "id": 2137,
                    "email": "OPalterman@sed.com",
                    "username": "TWillms",
                    "password": "S8RkC"
                },
                {
                    "id": 2138,
                    "email": "ILeon@rutrum.ly",
                    "username": "HFederico",
                    "password": "yeUMG"
                },
                {
                    "id": 2139,
                    "email": "CCrenshaw@aenean.io",
                    "username": "YJaques",
                    "password": "CyaQp"
                },
                {
                    "id": 2140,
                    "email": "RPyo@facilisis.ly",
                    "username": "DTrautman",
                    "password": "Qx0j7"
                },
                {
                    "id": 2141,
                    "email": "RDouglass@mattis.ly",
                    "username": "GMullens",
                    "password": "IJ28U"
                },
                {
                    "id": 2142,
                    "email": "LCallison@lorem.net",
                    "username": "XNye",
                    "password": "eJqsy"
                }
            ]
        }
    }
    render(){
        return(
            <div>
               <Filtextidtablecls allfiltextidscls={this.state.idscls }/>
            </div>
        )
    }
}