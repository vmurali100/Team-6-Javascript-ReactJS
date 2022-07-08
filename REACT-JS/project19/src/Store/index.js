const { createStore } = require("redux");

const reducerFn = (state = { count:0 }, action) => {
    // we call this as Reducer which All the bussiness logic
    // IncrementCount
    //DecrementCount
    switch (action.type)
    {
        case "INCREMENT":
            return {...state,count:state.count+1}

            case "DECREMENT":
            return {...state,count:state.count-1}
    }

    return state
}
export const store = createStore(reducerFn)
