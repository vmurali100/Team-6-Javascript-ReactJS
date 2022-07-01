import { useState } from "react";
import Parent from "./Parent";
import { UserProvider } from "./userContext";


 export function App (){
    const [user, setuser] = useState(user)
    return <div>
    <UserProvider value={user}>
        <Parent/>
    </ UserProvider>

</div>
}
var user=[
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
