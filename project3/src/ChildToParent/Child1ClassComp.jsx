import { Component } from "react";

export class Child1ClassComp extends Component{
    constructor(props){
        super(props)
        this.state={
            chairman:"",
            correspondant:{},
            school:[],
        }
    }
    render(){
        const {receivechairman,receivecorrespondant,receiveschool}=this.props;
        return(
            <div>
                <button onClick={()=>{receivechairman("my name is chandrasekhar")}}>send chairman</button>
                <button onClick={()=>{receivecorrespondant(users[0])}}>send correspondant</button>
                <button onClick={()=>{receiveschool(users)}}>send school</button>
            </div>
        )
    }
}
var users=[
    {"city":"kilcoole","street":"new road","number":7682,"zipcode":"12926-3874","id":1,"email":"john@gmail.com","username":"johnd","password":"m38rmF$","phone":"1-570-236-7033",},
    {"city":"kilcoole","street":"Lovers Ln","number":7267,"zipcode":"12926-3874","id":2,"email":"morrison@gmail.com","username":"mor_2314","password":"83r5^_","phone":"1-570-236-7033",},
   { "city":"Cullman","street":"Frances Ct","number":86,"zipcode":"29567-1452","id":3,"email":"kevin@gmail.com","username":"kevinryan","password":"kev02937@","phone":"1-567-094-1345",},
    {"city":"San Antonio","street":"Hunters Creek Dr","number":6454,"zipcode":"98234-1734","id":4,"email":"don@gmail.com","username":"donero","password":"ewedon","phone":"1-765-789-6734",},
    {"city":"san Antonio","street":"adams St","number":245,"zipcode":"80796-1234","id":5,"email":"derek@gmail.com","username":"derek","password":"jklg*_56","phone":"1-956-001-1945",},
    {"city":"el paso","street":"prospect st","number":124,"zipcode":"12346-0456","id":6,"email":"david_r@gmail.com","username":"david_r","password":"3478*#54","phone":"1-678-345-9856",},
    {"city":"fresno","street":"saddle st","number":1342,"zipcode":"96378-0245","id":7,"email":"miriam@gmail.com","username":"snyder","password":"f238&@*$","phone":"1-123-943-0563",},
    {"city":"mesa","street":"vally view ln","number":1342,"zipcode":"96378-0245","id":8,"email":"william@gmail.com","username":"hopkins","password":"William56$hj","phone":"1-478-001-0890",},
    {"city":"miami","street":"avondale ave","number":345,"zipcode":"96378-0245","id":9,"email":"kate@gmail.com","username":"kate_h","password":"kfejk@*_","phone":"1-678-456-1934",},
    {"city":"fort wayne","street":"oak lawn ave","number":526,"zipcode":"10256-4532","id":10,"email":"jimmie@gmail.com","username":"jimmie_k","password":"klein*#%*","phone":"1-104-001-4567",},
]