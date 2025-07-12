import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { increaseQuantity, decreaseQuantity } from './redux/Action';

const Cart = () => {
  const cartItems = useSelector(state => state.cart.cartItems);
  const dispatch = useDispatch();
  
  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className="container py-4">
      <h2 className="mb-4">Your Cart</h2>

      {cartItems.length === 0 ? (
        <div className="text-center py-5">
          <p className="text-muted fs-5">Your cart is empty</p>
          <Link to="/" className="btn btn-primary mt-3">
            Continue Shopping
          </Link>
        </div>
      ) : (
        <>
          <div className="row g-3 mb-4">
            {cartItems.map((item) => (
              <div className="col-12" key={item.id}>
                <div className="card shadow-sm">
                  <div className="row g-0">
                    <div className="col-md-2">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="img-fluid rounded-start"
                        style={{ height: '120px', objectFit: 'cover' }}
                      />
                    </div>

                    <div className="col-md-8">
                      <div className="card-body">
                        <h5 className="card-title">{item.name}</h5>
                        <p className="card-text">${item.price.toFixed(2)}</p>
                      </div>
                    </div>

                    <div className="col-md-2">
                      <div className="card-body d-flex align-items-center justify-content-end h-100">
                        <div className="d-flex align-items-center gap-3">
                          <button
                            className="btn btn-outline-secondary btn-sm"
                            onClick={() => dispatch(decreaseQuantity(item.id))}
                          >
                            -
                          </button>
                          <span className="fw-bold">{item.quantity}</span>
                          <button
                            className="btn btn-outline-secondary btn-sm"
                            onClick={() => dispatch(increaseQuantity(item.id))}
                          >
                            +
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="card shadow-sm mb-4">
            <div className="card-body text-end">
              <h4 className="card-title">Order Summary</h4>
              <p className="card-text fs-5">
                <span className="text-muted">Total:</span> ${totalPrice.toFixed(2)}
              </p>
            </div>
          </div>

          <div className="d-flex justify-content-between">
            <Link to="/" className="btn btn-outline-secondary">
              Continue Shopping
            </Link>
            <Link to="/checkout" className="btn btn-primary">
              Proceed to Checkout
            </Link>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;