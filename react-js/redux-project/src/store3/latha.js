const {createStore}=require("redux");

const reducerFn=(state={counter:200},action)=>{
      switch(action.type){
        case 'INCREMENT':
            return {...state,counter:state.counter+1}
            case 'DECREMENT':
                return {...state,counter:state.counter-1}
      }
      return state
}
export const store3= createStore(reducerFn)