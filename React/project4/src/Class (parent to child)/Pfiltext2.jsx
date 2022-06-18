import { Component } from "react";
import { PfiltextChild2 } from "./PfiltextChild2";

export class Pfiltext2 extends Component{
    constructor(){
        super()
        this.state={
            filltext1:[
                {
                    "id": 1,
                    "email": "SThompson@ipsum.net",
                    "username": "LPeters",
                    "password": "YJ90N"
                },
                {
                    "id": 2,
                    "email": "LGriffeeney@rutrum.com",
                    "username": "DParham",
                    "password": "tezed"
                },
                {
                    "id": 3,
                    "email": "GCorrell@hendrerit.ly",
                    "username": "AValkanet",
                    "password": "KgpN1"
                },
                {
                    "id": 4,
                    "email": "HSanvick@tortor.io",
                    "username": "NYen",
                    "password": "rDko1"
                },
                {
                    "id": 5,
                    "email": "GAubut@pharetra.org",
                    "username": "YKels",
                    "password": "C297v"
                },
                {
                    "id": 6,
                    "email": "KLenz@placerat.io",
                    "username": "TMendiola",
                    "password": "jZTP3"
                },
                {
                    "id": 7,
                    "email": "SClanton@sed.gov",
                    "username": "VPlourde",
                    "password": "X1nEy"
                },
                {
                    "id": 8,
                    "email": "CRooprai@ante.ly",
                    "username": "DMcinerney",
                    "password": "G24RI"
                },
                {
                    "id": 9,
                    "email": "JClay@eros.net",
                    "username": "AHanks",
                    "password": "xFS8F"
                },
                {
                    "id": 10,
                    "email": "SKubota@etiam.com",
                    "username": "STollund",
                    "password": "vLRWW"
                }
            ]
        }
    }
    render(){
        return(
            <div>
                <PfiltextChild2 filltextDetails={this.state.filltext1}/>
            </div>
        )
    }
}