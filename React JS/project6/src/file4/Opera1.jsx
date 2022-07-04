
import { Click1 } from "./Click1";
import { Counter1 } from "./Counter1";
import { Hover1 } from "./Hover1";

export function Opera1 (){
    return <div>
       <Counter1 render={(count,increase)=> <Click1 count={count} increase={increase}/>}/>
       <Counter1 render={(count,increase)=> <Hover1 count={count} increase={increase}/>}/>
    </div>
}