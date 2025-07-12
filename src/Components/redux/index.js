// const INCREASE_QUANTITY = ' INCREASE_QUANTITY';
// const DECREASE_QUANTITY = ' DECREASE_QUANTITY';
// const createStore = redux.createStore
// const combineReducers = redux.combineReducers;

// function increaseQuantity(itemId) {
//   return {
//     type: INCREASE_QUANTITY,
//     payload: itemId,
//   };
// }

// function decreaseQuantity(itemId) {
//   return {
//     type: DECREASE_QUANTITY,
//     payload: itemId,
//   };
// }

// const initialState = {
//   quantity : 1,
// };

// const reducer= (state = initialState, action) => {
//   switch (action.type) {
//     case INCREASE_QUANTITY:
//       return {
//         ...state,
//         quantity: state.quantity + 1,
//       };
//     case DECREASE_QUANTITY:
//       return {
//         ...state,
//         quantity: state.quantity - 1 
//       };
//     default:
//       return state;
//   }
// };

// const rootReducer = combineReducers({
//   cart: reducer,
// });

// const store = createStore(reducer);

// export { INCREASE_QUANTITY, DECREASE_QUANTITY, increaseQuantity, decreaseQuantity };

