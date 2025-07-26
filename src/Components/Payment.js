import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useLocation, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { clearCart } from './redux/Action';

const Payment = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const totalPrice = location.state?.totalPrice || 0;
  
  const [cardNumber, setCardNumber] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvv, setCvv] = useState('');

  const handlePayment = (e) => {
    e.preventDefault();
    if (cardNumber && expiry && cvv) {
      // Dispatch clearCart action
      dispatch(clearCart());
      alert('Payment successful!');
      // Navigate to a confirmation page or home
      navigate('/');
    } else {
      alert('Please fill in all details.');
    }
  };

  return (
    <div className="container py-5 d-flex justify-content-center">
      <div className="card shadow-lg" style={{ maxWidth: '500px', width: '100%' }}>
        <div className="card-body">
          <h3 className="card-title mb-4 text-center">Payment</h3>
          <form onSubmit={handlePayment}>
            <div className="mb-3">
              <label className="form-label">Credit Card Number</label>
              <input
                type="text"
                className="form-control"
                maxLength={16}
                placeholder="1234 5678 9012 3456"
                value={cardNumber}
                onChange={(e) => setCardNumber(e.target.value)}
                required
              />
            </div>

            <div className="mb-3 d-flex gap-3">
              <div className="flex-fill">
                <label className="form-label">Expiry</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="MM/YY"
                  value={expiry}
                  onChange={(e) => setExpiry(e.target.value)}
                  required
                />
              </div>

              <div className="flex-fill">
                <label className="form-label">CVV</label>
                <input
                  type="password"
                  className="form-control"
                  maxLength={4}
                  placeholder="123"
                  value={cvv}
                  onChange={(e) => setCvv(e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="mb-4 text-center">
              <h5>Total Price: <span className="text-primary">${totalPrice.toFixed(2)}</span></h5>
            </div>

            <button type="submit" className="btn btn-success w-100">
              Complete Payment
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Payment;