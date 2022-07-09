const {createStore}=require("redux");

const reducerFn=(state={coun:0},action)=>{
    switch(action.type){
        case 'INCREMENT':
            return {...state,coun:state.coun+1}
        case 'DECREMENT':
            return {...state,coun:state.coun-1}    
    }
    return state
}
export const store1=createStore(reducerFn);