const { createStore,combineReducers } = require("redux");
const BUY_CAKE = "BUY_CAKE";
const BUY_ICECREAM = "BUY_ICECREAM";

function buyCake() {
  return {
    type: BUY_CAKE,
    info: "First Redux Action",
  };
}
function buyIceCream() {
  return {
    type: BUY_ICECREAM,
    info: "Second Redux Action",
  };
}

const initialCakesState = {
    numofCakes: 10,
  };
  const initialiceCreamState = {
    iceCreams: 15,
  };

const cakeRreducer = (state = initialCakesState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state,
        numofCakes: state.numofCakes - 1,
      };
    default:
      return state;
  }
};

const iceCreamRreducer = (state = initialiceCreamState, action) => {
  switch (action.type) {
    case BUY_ICECREAM:
      return {
        ...state,
        iceCreams: state.iceCreams - 1,
      };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
    cakeRreducer,iceCreamRreducer
})
const store = createStore(rootReducer);
console.log(store.getState());
const unsubscribe = store.subscribe(() => {
  console.log("Updated State :-", store.getState());
});
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyIceCream());
store.dispatch(buyIceCream());
unsubscribe();
