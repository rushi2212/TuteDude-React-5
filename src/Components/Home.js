import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Search, ShoppingCart, Plus, Minus } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, increaseQuantity, decreaseQuantity } from "./redux/Action";

const Home = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const dispatch = useDispatch();
  const { cartItems } = useSelector((state) => state.cart);

  const shoes = [
    {
      id: 1,
      name: "Air Max 90",
      price: 120,
      image:
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=300&h=300&fit=crop",
    },
    {
      id: 2,
      name: "Classic Converse",
      price: 65,
      image:
        "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=300&h=300&fit=crop",
    },
    {
      id: 3,
      name: "Running Boost",
      price: 150,
      image:
        "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=300&h=300&fit=crop",
    },
    {
      id: 4,
      name: "Casual Sneakers",
      price: 85,
      image:
        "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=300&h=300&fit=crop",
    },
    {
      id: 5,
      name: "Basketball High",
      price: 140,
      image:
        "https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?w=300&h=300&fit=crop",
    },
    {
      id: 6,
      name: "Retro Runners",
      price: 95,
      image:
        "https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=300&h=300&fit=crop",
    },
    {
      id: 7,
      name: "Sport Trainers",
      price: 110,
      image:
        "https://images.unsplash.com/photo-1582588678413-dbf45f4823e9?w=300&h=300&fit=crop",
    },
    {
      id: 8,
      name: "Urban Walker",
      price: 75,
      image:
        "https://images.unsplash.com/photo-1518049362265-d5b2a6467637?w=300&h=300&fit=crop",
    },
    {
      id: 9,
      name: "Premium Leather",
      price: 180,
      image:
        "https://images.unsplash.com/photo-1549298916-f52d724204b4?w=300&h=300&fit=crop",
    }
  ];

  const filteredShoes = shoes.filter((shoe) =>
    shoe.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getCartQuantity = (id) => {
    const item = cartItems.find((item) => item.id === id);
    return item?.quantity || 0;
  };

  return (
    <div className="bg-light min-vh-100">
      <div className="bg-white border-bottom py-4">
        <div className="container">
          <div className="input-group w-100 w-md-50">
            <span className="input-group-text bg-white">
              <Search size={18} />
            </span>
            <input
              type="text"
              className="form-control"
              placeholder="Search shoes..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
      </div>

      <div className="container py-5">
        <div className="row g-4">
          {filteredShoes.map((shoe) => {
            const quantity = getCartQuantity(shoe.id);

            return (
              <div className="col-sm-6 col-lg-4" key={shoe.id}>
                <div className="card h-100 shadow-sm border-0">
                  <img
                    src={shoe.image}
                    alt={shoe.name}
                    className="card-img-top"
                    style={{ objectFit: "cover", height: "300px" }}
                  />
                  <div className="card-body d-flex flex-column">
                    <h5 className="card-title">{shoe.name}</h5>
                    <p className="card-text fw-bold text-primary">
                      ${shoe.price}
                    </p>

                    {quantity === 0 ? (
                      <button
                        className="btn btn-primary mt-auto d-flex align-items-center justify-content-center gap-2"
                        onClick={() => dispatch(addToCart(shoe))}
                      >
                        <ShoppingCart size={16} /> Add to Cart
                      </button>
                    ) : (
                      <div className="mt-auto d-flex justify-content-center align-items-center gap-3">
                        <button
                          className="btn btn-outline-secondary btn-sm rounded-circle p-2"
                          onClick={() => dispatch(decreaseQuantity(shoe.id))}
                          aria-label="Decrease quantity"
                        >
                          <Minus size={16} />
                        </button>
                        <span className="fw-bold">{quantity}</span>
                        <button
                          className="btn btn-outline-secondary btn-sm rounded-circle p-2"
                          onClick={() => dispatch(increaseQuantity(shoe.id))}
                          aria-label="Increase quantity"
                        >
                          <Plus size={16} />
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {filteredShoes.length === 0 && (
          <div className="text-center py-5">
            <p className="text-muted fs-5">
              No shoes found matching your search.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
