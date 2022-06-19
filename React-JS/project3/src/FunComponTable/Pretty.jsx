import { useState } from "react"
import PrettyDiv from "./PrettyDiv"
import PrettyTable from "./PrettyTable"


const Pretty=()=>{
    const[pretty,setpretty]=useState(allpre)
    return(
        <div>
            <PrettyDiv pretty={pretty}/>
           <PrettyTable pretty={pretty}/>
        </div>
    )
    }
    export default Pretty
    var allpre=[
        {
            "fname": "Tony",
            "lname": "Catania",
            "tel": "(364)633-4481",
            "address": "762 Tellus Ct",
            "city": "Saint Louis",
            "state": "ME",
            "zip": 59853
        },
        {
            "fname": "Carmen",
            "lname": "Covel",
            "tel": "(406)089-2159",
            "address": "6330 Ipsum Dr",
            "city": "Curtis Bay",
            "state": "ID",
            "zip": 45739
        },
        {
            "fname": "Janise",
            "lname": "Rice",
            "tel": "(186)485-4382",
            "address": "8471 Pharetra Ct",
            "city": "Wrentham",
            "state": "ID",
            "zip": 38473
        },
        {
            "fname": "Alisa",
            "lname": "Delaura",
            "tel": "(667)173-6552",
            "address": "3443 Aenean Dr",
            "city": "Pompano Beach",
            "state": "MO",
            "zip": 29097
        },
        {
            "fname": "Chanel",
            "lname": "Dixon",
            "tel": "(436)682-9228",
            "address": "1672 Aliquam Ct",
            "city": "Rexburg",
            "state": "KS",
            "zip": 59564
        },
        {
            "fname": "Mirza",
            "lname": "Rodriguez",
            "tel": "(166)975-6697",
            "address": "9256 Malesuada Ct",
            "city": "Furlong",
            "state": "AL",
            "zip": 26239
        },
        {
            "fname": "Lorita",
            "lname": "Garascia",
            "tel": "(367)125-4375",
            "address": "4778 Amet St",
            "city": "Long Beach",
            "state": "WV",
            "zip": 81216
        },
        {
            "fname": "Shivkumar",
            "lname": "Fouts",
            "tel": "(725)738-8857",
            "address": "4524 Lorem St",
            "city": "Glencoe",
            "state": "WY",
            "zip": 46221
        },
        {
            "fname": "Rosalinda",
            "lname": "Bradley",
            "tel": "(681)149-5566",
            "address": "6918 Porttitor Ln",
            "city": "Spencer",
            "state": "MD",
            "zip": 39757
        },
        {
            "fname": "Soledad",
            "lname": "Barowsky",
            "tel": "(918)244-2550",
            "address": "1544 Dolor Ln",
            "city": "Carrollton",
            "state": "GA",
            "zip": 34036
        }
    ]