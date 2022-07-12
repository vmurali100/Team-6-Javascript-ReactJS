import { createStore } from "redux";
const reducerFn=(state={count:0},action)=>{
    switch(action.type){
        case 'Increase':
            return{...state,count:state.count+1}
        case 'Decrease':
            return{...state,count:state.count-1}
    }
    return state
}
export const store7=createStore(reducerFn)