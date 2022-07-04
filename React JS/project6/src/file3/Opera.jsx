import { Click } from "./Click";
import { Counter } from "./Counter";
import { Hover } from "./Hover";

export function Opera (){
    return <div>
       <Counter render={(count,increase)=> <Click count={count} increase={increase}/>}/>
       <Counter render={(count,increase)=> <Hover count={count} increase={increase}/>}/>
    </div>
}