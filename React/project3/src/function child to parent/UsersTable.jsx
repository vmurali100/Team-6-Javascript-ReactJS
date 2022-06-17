import { useState } from "react"

export const UsersTable = ({filltextusersTable}) => {
    const [] = useState()
    return (
        <div>
            <table border={1}>
                <thead>
                    <tr>
                        <th>fname</th>
                        <th>lname</th>
                        <th>tel</th>
                        <th>address</th>
                        <th>city</th>
                        <th>state</th>
                        <th>zip</th>
                    </tr>
                </thead>
                <tbody>
                    {filltextusersTable.map((User, i) => {
                        return <tr>
                            <td>{User.fname}</td>
                            <td>{User.lname}</td>
                            <td>{User.tel}</td>
                            <td>{User.address}</td>
                            <td>{User.city}</td>
                            <td>{User.state}</td>
                            <td>{User.zip}</td>
                        </tr>
                    })}
                </tbody>
            </table>
        </div>
    )

}

var allusers = [
    {
        "fname": "Braulio",
        "lname": "Mcglaughlin",
        "tel": "(277)740-3043",
        "address": "773 At Dr",
        "city": "Manchester",
        "state": "HI",
        "zip": 32523
    },
    {
        "fname": "Sabrina",
        "lname": "Klapper",
        "tel": "(258)399-4922",
        "address": "6594 Mattis Dr",
        "city": "Eglin Afb",
        "state": "VT",
        "zip": 76258
    },
    {
        "fname": "Shanstella",
        "lname": "Eichberger",
        "tel": "(115)861-5727",
        "address": "4216 Et St",
        "city": "Malibu",
        "state": "NY",
        "zip": 57708
    },
    {
        "fname": "Julie",
        "lname": "Slate",
        "tel": "(486)101-4942",
        "address": "8822 Elementum St",
        "city": "Palm Harbor",
        "state": "OH",
        "zip": 35529
    },
    {
        "fname": "Mellony",
        "lname": "Schuplin",
        "tel": "(954)741-4245",
        "address": "6916 Hendrerit Rd",
        "city": "Winter Park",
        "state": "MD",
        "zip": 17289
    },
    {
        "fname": "Alla",
        "lname": "Michaels",
        "tel": "(798)757-8672",
        "address": "2596 Sed St",
        "city": "Colorado Springs",
        "state": "IN",
        "zip": 81440
    },
    {
        "fname": "Tina",
        "lname": "Gilbertson",
        "tel": "(995)029-5724",
        "address": "3328 Adipiscing Ct",
        "city": "Warsaw",
        "state": "PA",
        "zip": 31454
    },
    {
        "fname": "Kosta",
        "lname": "Tinker",
        "tel": "(366)477-8074",
        "address": "853 Vitae St",
        "city": "Greenville",
        "state": "UT",
        "zip": 53450
    },
    {
        "fname": "Jerome",
        "lname": "Hughesdkaiya",
        "tel": "(806)366-7103",
        "address": "2121 Curabitur Rd",
        "city": "Atlanta",
        "state": "LA",
        "zip": 73135
    },
    {
        "fname": "Karyn",
        "lname": "Collins",
        "tel": "(979)280-7587",
        "address": "1328 Quis Ct",
        "city": "Apopka",
        "state": "IN",
        "zip": 68440
    }
]