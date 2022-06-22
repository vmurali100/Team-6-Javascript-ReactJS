
import { useState } from "react";



 export function Par1(){
    const [s,sets]=useState (data)
    
        return (
            <div>
              
            <table border= "1">
                <thead>
                    <tr>
                    <th>fname</th>
                    <th>lname</th>
                   

                    </tr>
                </thead>
                <tbody>
                   {s .map((user)=>{
                    return<tr>
                        <td>{user.fname}</td>
                        <td>{user.lname}</td>
                    </tr>
                   })}
                </tbody>
            </table>
            </div>
        )
    

}          


var data=[
    {
        "fname": "Meera",
        "lname": "Heilman"
    },
    {
        "fname": "Michael",
        "lname": "Newell"
    },
    {
        "fname": "Kerry",
        "lname": "Yen"
    },
    {
        "fname": "Bilal",
        "lname": "Ghiselli"
    },
    {
        "fname": "Shahriar",
        "lname": "Walley"
    },
    {
        "fname": "Regine",
        "lname": "Staley"
    },
    {
        "fname": "Rachelle",
        "lname": "Brubaker"
    },
    {
        "fname": "Yolunda",
        "lname": "Mcnamee"
    },
    {
        "fname": "Yan",
        "lname": "Castellanos"
    },
    {
        "fname": "Nathan",
        "lname": "Frame"
    }

  ]