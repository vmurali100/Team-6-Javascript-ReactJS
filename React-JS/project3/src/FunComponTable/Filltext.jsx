import { useState } from "react"
import FillDivTable from "./FillDivTable"
import FillTable from "./FillTable"

const Filltext =()=>{
    const [filltextuses,setfilltext]=useState(alluser)
    return (
        <div>
          
           <FillDivTable filltextuses={filltextuses}/>
          <FillTable filltextuses={filltextuses}/>
           
        </div>
    )
}
export default Filltext
var alluser=[
    
    {
        "fname": "Richelle",
        "lname": "Finke",
        "tel": "(199)641-9796",
        "address": "6189 Pulvinar St",
        "city": "Redondo Beach",
        "state": "WV",
        "zip": 86677
    },
    {
        "fname": "Percy",
        "lname": "Neese",
        "tel": "(697)560-4100",
        "address": "9289 Nec Dr",
        "city": "Winchester",
        "state": "OR",
        "zip": 92627
    },
    {
        "fname": "Sudershan",
        "lname": "Smoaks",
        "tel": "(256)462-9257",
        "address": "509 Augue Dr",
        "city": "Bessemer City",
        "state": "CT",
        "zip": 92150
    },
    {
        "fname": "Leopoldo",
        "lname": "Kavanaugh",
        "tel": "(576)906-2565",
        "address": "7724 Aenean Ave",
        "city": "Saugus",
        "state": "ND",
        "zip": 44220
    },
    {
        "fname": "Ingrid",
        "lname": "Meaney",
        "tel": "(309)414-0870",
        "address": "3091 Mattis Rd",
        "city": "Fayetteville",
        "state": "AK",
        "zip": 91157
    },
    {
        "fname": "Jeremiah",
        "lname": "Lenz",
        "tel": "(120)503-4377",
        "address": "3822 Nullam Ave",
        "city": "Northern",
        "state": "NH",
        "zip": 100000
    }
]