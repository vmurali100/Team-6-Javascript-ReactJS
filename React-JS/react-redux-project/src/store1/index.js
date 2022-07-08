const { createStore } = require("redux");

const reducerFn = (state = { count: 0 }, action) => {
    switch (action.type) {
        case "INCREMENT":
            return { ...state, count: state.count + 1 }
        case "DECREMENT":
            return { ...state, count: state.count - 1 }
    }
    return state
}
export const store1 = createStore(reducerFn)