import React,{useState} from 'react'
import Childs1 from './Childs1'
 

const Parents1 = () => {
    const [Users, setUsers] = useState([])


    const SendDataToChild = () =>{
        setUsers( allUsers)
        
    }
  return (
    <div> 
         <button onClick={SendDataToChild}>Send Data Parents To Child Components</button>
        
       
         <Childs1 Users={Users}/>
    </div>
  )
}

export default Parents1

var allUsers = [
    {
        "fname": "Gregory",
        "lname": "Zavala",
        "tel": "(141)043-0198",
        "address": "9981 Mi Dr",
        "city": "Harrison",
        "state": "OR",
        "zip": 71728
    },
    {
        "fname": "Rupa",
        "lname": "Rizk",
        "tel": "(894)013-8956",
        "address": "1704 Quis Rd",
        "city": "State College",
        "state": "UT",
        "zip": 55238
    },
    {
        "fname": "Marina",
        "lname": "Lee",
        "tel": "(959)816-7441",
        "address": "7385 Donec Rd",
        "city": "Palm Harbor",
        "state": "SC",
        "zip": 74158
    },
    {
        "fname": "Siping",
        "lname": "Jackson",
        "tel": "(431)020-7401",
        "address": "2022 At Dr",
        "city": "Litchfield Park",
        "state": "ND",
        "zip": 59291
    },
    {
        "fname": "Thomas",
        "lname": "Stubbs",
        "tel": "(968)584-7875",
        "address": "5928 Porta Ave",
        "city": "Canton",
        "state": "KS",
        "zip": 79103
    },
    {
        "fname": "Cherise",
        "lname": "Kasprzak",
        "tel": "(138)394-9994",
        "address": "9231 Libero Rd",
        "city": "Rochester",
        "state": "NC",
        "zip": 90252
    },
    {
        "fname": "Irene",
        "lname": "Stewart",
        "tel": "(736)839-6793",
        "address": "9974 Sit Rd",
        "city": "Chester",
        "state": "NE",
        "zip": 32448
    },
    {
        "fname": "Ali",
        "lname": "Rush",
        "tel": "(272)978-4478",
        "address": "2994 Nunc Rd",
        "city": "Blacksburg",
        "state": "ID",
        "zip": 42627
    },
    {
        "fname": "Eva",
        "lname": "Dellabadia",
        "tel": "(515)817-7167",
        "address": "7009 Libero Rd",
        "city": "Roy",
        "state": "IA",
        "zip": 27589
    },
    {
        "fname": "Ginny",
        "lname": "Thomason",
        "tel": "(832)521-3005",
        "address": "8003 Ipsum Ct",
        "city": "Knoxville",
        "state": "KY",
        "zip": 92370
    }
]