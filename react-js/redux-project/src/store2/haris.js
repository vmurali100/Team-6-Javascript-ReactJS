const {createStore}=require("redux");

const reducerFn=(state={counts:100},action)=>{
     switch(action.type){
        case 'INCREASE':
            return {...state,counts:state.counts+1}
     
     case 'DECREASE':
            return {...state,counts:state.counts-1}
     }
     return state
}
export const store2=createStore(reducerFn)