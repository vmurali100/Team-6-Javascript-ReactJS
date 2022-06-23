import { Component } from "react";

export class Child4Comment4 extends Component{
    constructor(props){
        super(props)
        this.state={
            Nihkil:"",
            Niranjan:{},
            Naresh:[],
        }
    }
    render(){
        const { RecieveNikhil, RecieveNirajan, RecieveNaresh}=this.props;
        return(
            <div>
                <button onClick={()=>{RecieveNikhil("I am Mr.saikiran")}}>ClickNikhil</button>
                <button onClick={()=>{RecieveNirajan(Alluser[0])}}>ClickNiranjan</button>
                <button onClick={()=>{RecieveNaresh(Alluser)}}>ClickNarseh</button>
            </div>
        )
    }
}
var Alluser=[
    {
        "fname": "Herbert",
        "lname": "Maynard",
        "tel": "(789)801-1855",
        "address": "9270 Nec Ln",
        "city": "Denton",
        "state": "NC",
        "zip": 24617
    },
    {
        "fname": "Robin",
        "lname": "Lazcano",
        "tel": "(143)946-6322",
        "address": "1971 Risus Ct",
        "city": "Saltilo",
        "state": "MT",
        "zip": 16195
    },
    {
        "fname": "Vernell",
        "lname": "Kim",
        "tel": "(730)032-5765",
        "address": "5805 Consectetur Rd",
        "city": "Semarang",
        "state": "NC",
        "zip": 39177
    },
    {
        "fname": "Frank",
        "lname": "Longmire",
        "tel": "(892)942-1093",
        "address": "1485 Vestibulum Rd",
        "city": "Asheville",
        "state": "VA",
        "zip": 36708
    },
    {
        "fname": "Hathor",
        "lname": "Mcduff",
        "tel": "(851)607-3294",
        "address": "172 Amet Rd",
        "city": "Derby",
        "state": "RI",
        "zip": 10534
    },
    {
        "fname": "Ben",
        "lname": "Campos",
        "tel": "(687)550-2889",
        "address": "1286 Etiam St",
        "city": "Blue Springs",
        "state": "NV",
        "zip": 87974
    },
    {
        "fname": "Judith",
        "lname": "Torres",
        "tel": "(444)875-6446",
        "address": "1094 Sed Dr",
        "city": "Rachel",
        "state": "CO",
        "zip": 59790
    },
    {
        "fname": "Miyanda",
        "lname": "Sweet",
        "tel": "(525)723-4548",
        "address": "8561 Vestibulum Ln",
        "city": "Roseville",
        "state": "SC",
        "zip": 60776
    },
    {
        "fname": "Kehinde",
        "lname": "Walstead",
        "tel": "(614)250-7206",
        "address": "1905 Sagittis Rd",
        "city": "Camden",
        "state": "CO",
        "zip": 80895
    },
    {
        "fname": "Aaron",
        "lname": "Phillips",
        "tel": "(401)593-5777",
        "address": "9125 Vitae Ln",
        "city": "Eglin Afb",
        "state": "ND",
        "zip": 90250
    }
]