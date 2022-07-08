const { createStore } = require("redux");

const reducerFn = (state = { count: 0, Name:"A Mansur Vali"}, action) => {

    switch (action.type) {
        case 'Name':
            return {...state, Name: state.Name}
        case 'INCREMENT':
            return { ...state, count: state.count + 1 }

        case 'DECREMENT':
            return { ...state, count: state.count - 1 }

    }

    return state
};
export const store = createStore(reducerFn)