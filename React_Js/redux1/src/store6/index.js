import { createStore } from "redux";
const reducerFn=(state={count:0},action)=>{
    switch(action.type){
        case 'INCREASE':
            return{...state,count:state.count+1}
        case 'DECREASE':
            return{...state,count:state.count-1}
    }
return state
}
export const store6=createStore(reducerFn)