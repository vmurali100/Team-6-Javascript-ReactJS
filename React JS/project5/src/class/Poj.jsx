import { useState } from 'react';


export function Poj (){
    const [person ,setperson]=useState({
        fname:"",lname:""
        
    })
    function handle(){
        var variablename=eve.target.name;
        var newpreson={...person}
        newperson[variablename]=eve.target.value;
        setperson(newpreson)
    }
    function addperson(){
        console.log(person)
    }
    return <div>
        <label htmlFor="">fname</label>
        <input type="text"name="fname" value={person.fname} onChange={(eve)=>{handle (eve)}}/>
        <label htmlFor="">lname</label>
        <input type="text"name="lname" value={person.lname} onChange={(eve)=>{handle (eve)}}/>
        <button onClick={addperson}>add</button>
    </div>
}