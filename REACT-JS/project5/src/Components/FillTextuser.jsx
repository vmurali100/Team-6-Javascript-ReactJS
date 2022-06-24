import React, { useState } from "react"

const FillTextUsers = () => {
    const [FilltextUsers, setfilltextUsers] = useState(allUsers)
    return (
        <div>
            {/* <table border="1">
                <thead>
                    <tr>
                        <th>fname</th>
                        <th>lnmae</th>
                        <th>tel</th>
                        <th>addres</th>
                        <th>city</th>
                        <th>state</th>
                        <th>zip</th>
                    </tr>
                </thead>
                <tbody>
                    {FilltextUsers.map((Users)=>{
                        return<tr>
                            <td>{Users.fname}</td>
                            <td>{Users.lname}</td>
                            <td>{Users.tel}</td>
                            <td>{Users.address}</td>
                            <td>{Users.city}</td>
                            <td>{Users.state}</td>
                            <td>{Users.zip}</td>
                        </tr>
                        
                    })}
                </tbody>
            </table> */
            };



        </div>
    )

}
export default FillTextUsers

var allUsers = [

    [
        {
            "fname": "Farhad",
            "lname": "Partridge",
            "tel": "(832)974-8941",
            "address": "8632 Donec Ln",
            "city": "Littleton",
            "state": "KS",
            "zip": 88014
        },
        {
            "fname": "Joe",
            "lname": "Gershowitz",
            "tel": "(342)299-1101",
            "address": "5117 Consequat Ln",
            "city": "Lake Lillian",
            "state": "ME",
            "zip": 53073
        },
        {
            "fname": "Myrna",
            "lname": "Whalley",
            "tel": "(870)269-9725",
            "address": "6395 Magna Ln",
            "city": "Arvada",
            "state": "MO",
            "zip": 85447
        },
        {
            "fname": "Song",
            "lname": "Pies",
            "tel": "(827)411-7200",
            "address": "6517 Vitae St",
            "city": "Asheville",
            "state": "SD",
            "zip": 68136
        },
        {
            "fname": "Monique",
            "lname": "Hemmer",
            "tel": "(861)947-1406",
            "address": "6272 Sed Ave",
            "city": "Oakland",
            "state": "VT",
            "zip": 65261
        },
        {
            "fname": "Howard",
            "lname": "Atheya",
            "tel": "(779)722-7959",
            "address": "2580 Pulvinar Dr",
            "city": "Odessa",
            "state": "GA",
            "zip": 28211
        },
        {
            "fname": "Ralph",
            "lname": "Mcinerney",
            "tel": "(378)886-7685",
            "address": "4388 Amet St",
            "city": "Cuyahoga Falls",
            "state": "WI",
            "zip": 24310
        },
        {
            "fname": "Alesia",
            "lname": "Gutsteinberg",
            "tel": "(643)734-1670",
            "address": "914 Ipsum St",
            "city": "Brooklyn Park",
            "state": "AK",
            "zip": 29177
        },
        {
            "fname": "Lee",
            "lname": "Whalley",
            "tel": "(713)941-9613",
            "address": "6855 Ipsum Rd",
            "city": "Swanton",
            "state": "WA",
            "zip": 68044
        },
        {
            "fname": "Jaeho",
            "lname": "Clark",
            "tel": "(898)642-1842",
            "address": "1380 Aenean Ln",
            "city": "Brodhead",
            "state": "FL",
            "zip": 51281
        }
    ]

]


