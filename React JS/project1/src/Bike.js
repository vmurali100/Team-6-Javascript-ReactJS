import { Car } from "./Car";
import { Rock } from "./Component/Rock";
import { Sand } from "./Component/Sand";

import { Food } from "./Food";
import { Hobi } from "./Hobi";
import { Krish } from "./Krish";
import { Place } from "./Place";
import { Raju } from "./Raju";
import { Santhosh } from "./Santhosh";
import { Sport } from "./Sport";
import { View } from "./View";





export function Bike(){
    return <div >
        <Sand/>
        <Krish/>
        <Raju/>
        <Santhosh/>
        <Food/>
        <Car/>
        <View/>
        <Sport/>
        <Hobi/>
        <Place/>
        <Rock/>
        
    </div>
}