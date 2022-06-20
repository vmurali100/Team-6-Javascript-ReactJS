import { Component } from "react";
import { UserChild1 } from "../Child-parent-fu/UserChild1";

export class User1 extends Component{
    constructor(){
        super()
        this.state={
            user:[
                {
                    "address": {
                      "geolocation": {
                        "lat": "-37.3159",
                        "long": "81.1496"
                      },
                      "city": "kilcoole",
                      "street": "new road",
                      "number": 7682,
                      "zipcode": "12926-3874"
                    },
                    "id": 1,
                    "email": "john@gmail.com",
                    "username": "johnd",
                    "password": "m38rmF$",
                    "name": {
                      "firstname": "john",
                      "lastname": "doe"
                    },
                    "phone": "1-570-236-7033",
                    "__v": 0
                  },
                  {
                    "address": {
                      "geolocation": {
                        "lat": "-37.3159",
                        "long": "81.1496"
                      },
                      "city": "kilcoole",
                      "street": "Lovers Ln",
                      "number": 7267,
                      "zipcode": "12926-3874"
                    },
                    "id": 2,
                    "email": "morrison@gmail.com",
                    "username": "mor_2314",
                    "password": "83r5^_",
                    "name": {
                      "firstname": "david",
                      "lastname": "morrison"
                    },
                    "phone": "1-570-236-7033",
                    "__v": 0
                  },
                  {
                    "address": {
                      "geolocation": {
                        "lat": "40.3467",
                        "long": "-30.1310"
                      },
                      "city": "Cullman",
                      "street": "Frances Ct",
                      "number": 86,
                      "zipcode": "29567-1452"
                    },
                    "id": 3,
                    "email": "kevin@gmail.com",
                    "username": "kevinryan",
                    "password": "kev02937@",
                    "name": {
                      "firstname": "kevin",
                      "lastname": "ryan"
                    },
                    "phone": "1-567-094-1345",
                    "__v": 0
                  },
                  {
                    "address": {
                      "geolocation": {
                        "lat": "50.3467",
                        "long": "-20.1310"
                      },
                      "city": "San Antonio",
                      "street": "Hunters Creek Dr",
                      "number": 6454,
                      "zipcode": "98234-1734"
                    },
                    "id": 4,
                    "email": "don@gmail.com",
                    "username": "donero",
                    "password": "ewedon",
                    "name": {
                      "firstname": "don",
                      "lastname": "romer"
                    },
                    "phone": "1-765-789-6734",
                    "__v": 0
                  },
                  {
                    "address": {
                      "geolocation": {
                        "lat": "40.3467",
                        "long": "-40.1310"
                      },
                      "city": "san Antonio",
                      "street": "adams St",
                      "number": 245,
                      "zipcode": "80796-1234"
                    },
                    "id": 5,
                    "email": "derek@gmail.com",
                    "username": "derek",
                    "password": "jklg*_56",
                    "name": {
                      "firstname": "derek",
                      "lastname": "powell"
                    },
                    "phone": "1-956-001-1945",
                    "__v": 0
                  },
                  {
                    "address": {
                      "geolocation": {
                        "lat": "20.1677",
                        "long": "-10.6789"
                      },
                      "city": "el paso",
                      "street": "prospect st",
                      "number": 124,
                      "zipcode": "12346-0456"
                    },
                    "id": 6,
                    "email": "david_r@gmail.com",
                    "username": "david_r",
                    "password": "3478*#54",
                    "name": {
                      "firstname": "david",
                      "lastname": "russell"
                    },
                    "phone": "1-678-345-9856",
                    "__v": 0
                  }
            ]
        }
    }
    render(){
        return(
            <div>
                <UserChild1 alluser={this.state.user}/>
            </div>
        )
    }
}