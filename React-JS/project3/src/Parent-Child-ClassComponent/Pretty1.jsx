import { Component } from "react";
import { Prettychild } from "./Prettychild";

export class Pretty1 extends Component{
    constructor(){
        super()
        this.state={
            Prettyuser:[
                {
                    "id": 1,
                    "email": "RMiranda@ante.ly",
                    "username": "KKyger",
                    "password": "PM4XK"
                },
                {
                    "id": 2,
                    "email": "XWomack@vestibulum.com",
                    "username": "LRios",
                    "password": "JcqNh"
                },
                {
                    "id": 3,
                    "email": "JCann@lacus.org",
                    "username": "VGay",
                    "password": "mnFrp"
                },
                {
                    "id": 4,
                    "email": "LPollard@odio.ly",
                    "username": "MTurich",
                    "password": "nrhod"
                },
                {
                    "id": 5,
                    "email": "SDees@risus.com",
                    "username": "CYork",
                    "password": "QOJNb"
                },
                {
                    "id": 6,
                    "email": "MCrum@sollicitudin.ly",
                    "username": "JSnow",
                    "password": "Urn50"
                },
                {
                    "id": 7,
                    "email": "LGraham@lectus.io",
                    "username": "VGardner",
                    "password": "6N5ZL"
                },
                {
                    "id": 8,
                    "email": "AFreund@aliquam.io",
                    "username": "BCohen",
                    "password": "HmmpT"
                },
                {
                    "id": 9,
                    "email": "KMullens@aliquam.ly",
                    "username": "LBoynton",
                    "password": "VSvoC"
                },
                {
                    "id": 10,
                    "email": "TMcintyre@id.ly",
                    "username": "NMoccio",
                    "password": "FL6hG"
                }
            ]
        }
    }
    render(){
        return(
            <div>
                <Prettychild allpretty={this.state.Prettyuser}/>
            </div>
        )
    }
}