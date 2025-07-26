export const ADD_TO_CART = 'ADD_TO_CART';
export const INCREASE_QUANTITY = 'INCREASE_QUANTITY';
export const DECREASE_QUANTITY = 'DECREASE_QUANTITY';

export const addToCart = (item) => ({
  type: ADD_TO_CART,
  payload: item
});

export const increaseQuantity = (itemId) => ({
  type: INCREASE_QUANTITY,
  payload: itemId
});

export const decreaseQuantity = (itemId) => ({
  type: DECREASE_QUANTITY,
  payload: itemId
});

// Add this to your existing actions
export const clearCart = () => ({
  type: 'CLEAR_CART'
});