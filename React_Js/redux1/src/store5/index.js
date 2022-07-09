const {createStore}=require("redux");
const reducerFn=(state={count:0},action)=>{
    switch(action.type){
        case 'increase':
            return {...state,count:state.count+1}
        case 'decrease':
            return {...state,count:state.count-1}
    }
    return state

}
export const store5=createStore(reducerFn)