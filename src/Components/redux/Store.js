// redux/store.js
import { createStore, combineReducers } from 'redux';
import cartReducer from './Reducer';

const rootReducer = combineReducers({
  cart: cartReducer,
});

const store = createStore(rootReducer);

export default store;
