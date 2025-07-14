import { ADD_TO_CART, INCREASE_QUANTITY, DECREASE_QUANTITY } from './Action';

const initialState = {
  cartItems: []
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const existingItem = state.cartItems.find(item => item.id === action.payload.id);
      if (existingItem) {
        return {
          ...state,
          cartItems: state.cartItems.map(item =>
            item.id === action.payload.id ? { ...item, quantity: item.quantity + 1 } : item
          )
        };
      }
      return {
        ...state,
        cartItems: [...state.cartItems, { ...action.payload, quantity: 1 }]
      };

    case INCREASE_QUANTITY:
      return {
        ...state,
        cartItems: state.cartItems.map(item => item.id === action.payload ? { ...item, quantity: item.quantity + 1 } : item )
      };

    case DECREASE_QUANTITY:
      return {
        ...state,
        cartItems: state.cartItems.map(item => item.id === action.payload ? { ...item, quantity: item.quantity - 1 } : item ).filter(item => item.quantity > 0)
      };

    default:
      return state;
  }
};

export default cartReducer;