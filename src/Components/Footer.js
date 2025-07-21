import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();

    // Basic email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email) {
      setError('Email is required.');
    } else if (!emailRegex.test(email)) {
      setError('Please enter a valid email address.');
    } else {
      setError('');
      // Handle subscription logic here (e.g., API call)
      alert(`Subscribed with ${email}`);
      setEmail('');
    }
  };

  return (
    <footer className="bg-dark text-white pt-5 pb-4">
      <div className="container">
        <div className="row">
          
          <div className="col-md-6 mb-4">
            <h5 className="fw-bold">About StepStyle</h5>
            <p className="text-light small">
              We're passionate about bringing you the finest footwear from around the world. 
              Quality, comfort, and style — that's our promise to you.
            </p>
          </div>

          <div className="col-md-6 mb-4">
            <h6 className="fw-bold">Newsletter</h6>
            <p className="text-light small">Subscribe to get the latest updates and offers.</p>
            <form onSubmit={handleSubscribe} noValidate>
              <div className="input-group">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <button className="btn btn-primary" type="submit">
                  Subscribe
                </button>
              </div>
              {error && <small className="text-danger">{error}</small>}
            </form>
          </div>
        </div>

        <hr className="border-light" />
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-center text-light small">
          <div className="fw-bold">StepStyle</div>
          <div>© 2024 StepStyle. All rights reserved.</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
