import React,{useState} from 'react'
 
const FComp1 = ({sendMessage,sendperson,sendUsers}) => {
const [Message,setMessage] = useState("Hi Iam From FunctionalSiblingComponents");

const [person,setperson] = useState({
  fname:"A Mansur",
  lname:"Vali"
});

const [Users,setUsers] = useState(AllUsers);
  return (
    <div>
        <p>FComp1</p>

        <button onClick={()=>{sendMessage(Message)}}>Send Message/String</button>
        <button onClick={()=>{sendperson(person)}}>Send Person/Object</button>
        <button onClick={()=>{sendUsers(Users)}}>Send Users/Array</button>
    </div>
  )
}

export default FComp1

var AllUsers = [
  {
      "fname": "Furdella",
      "lname": "Wyner"
  },
  {
      "fname": "Vinit",
      "lname": "Campos"
  },
  {
      "fname": "Inessa",
      "lname": "Smyth"
  },
  {
      "fname": "Latonya",
      "lname": "Nelson"
  },
  {
      "fname": "Marisa",
      "lname": "Ventura"
  },
  {
      "fname": "Marc",
      "lname": "Vera"
  },
  {
      "fname": "Lyubov",
      "lname": "Haynes"
  },
  {
      "fname": "Bill",
      "lname": "Helm"
  },
  {
      "fname": "Derek",
      "lname": "Tuggle"
  },
  {
      "fname": "Sharmistha",
      "lname": "Rosenberg"
  }
]