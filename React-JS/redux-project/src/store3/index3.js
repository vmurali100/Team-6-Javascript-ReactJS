
const {createStore}=require("redux")
const reducerFun=(state={count:0},action)=>{
    switch(action.type){
        case 'INCREMEANT':
            return{...state,count:state.count+1}
        case 'DECREMEANT':
            return{...state,count:state.count-1}
    }
    return state
}
export const store3=createStore(reducerFun)