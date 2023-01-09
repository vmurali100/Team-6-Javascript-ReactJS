const {createStore} = require('redux')
const BUY_CAKE = 'BUY_CAKE';
const BUY_ICECREAM = 'BUY_ICECREAM';

function buyCake(){
    return {
        type:BUY_CAKE,
        info:"First Redux Action"
    }
}
function buyIceCream(){
    return {
        type:BUY_ICECREAM,
        info:"Second Redux Action"
    }
}

const initialState = {
    numofCakes:10,
    iceCreams:20
}

const reducer = (state=initialState,action)=>{
    switch (action.type) {
        case BUY_CAKE:
            return {
                ...state,
                numofCakes:state.numofCakes -1
            }
            case BUY_ICECREAM:
                return {
                    ...state,
                    iceCreams:state.iceCreams -1
                }
        default:
            return state
    }
}

const store = createStore(reducer);
console.log(store.getState());
const unsubscribe = store.subscribe(()=>{console.log('Updated State :-',store.getState())})
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyIceCream())
store.dispatch(buyIceCream())
unsubscribe()