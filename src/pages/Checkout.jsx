import { useCart } from '../context/CartContext'

const Checkout = () => {
  const { cartState } = useCart()

  return (
    <div id="main-content">
      <div className="container py-5">
        <h2 className="fw-bold mb-4 text-center">Checkout</h2>

        <div className="row">
          {/* Checkout Form */}
          <div className="col-md-7">
            <div className="card border-0 shadow-sm p-4 mb-4">
              <h4 className="fw-bold mb-3">Billing Details</h4>
              <form>
                <div className="mb-3">
                  <label className="form-label">Full Name</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter your full name"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Email Address</label>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Enter your email"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Shipping Address</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="123 Main Street"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">City</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter your city"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Country</label>
                  <select className="form-select" required>
                    <option value="">Select Country</option>
                    <option value="US">United States</option>
                    <option value="CA">Canada</option>
                    <option value="UK">United Kingdom</option>
                  </select>
                </div>
                <div className="mb-3">
                  <label className="form-label">Zip Code</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter zip code"
                    required
                  />
                </div>
              </form>
            </div>

            {/* Payment Information */}
            <div className="card border-0 shadow-sm p-4">
              <h4 className="fw-bold mb-3">Payment Information</h4>
              <div className="mb-3">
                <label className="form-label">Card Number</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="1234 5678 9012 3456"
                  required
                />
              </div>
              <div className="row">
                <div className="col-md-6 mb-3">
                  <label className="form-label">Expiration Date</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="MM/YY"
                    required
                  />
                </div>
                <div className="col-md-6 mb-3">
                  <label className="form-label">CVV</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="123"
                    required
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Order Summary */}
          <div className="col-md-5">
            <div className="card border-0 shadow-sm p-4">
              <h4 className="fw-bold mb-3">Order Summary</h4>
              <ul className="list-group mb-3">
                {cartState.items.map((item) => (
                  <li
                    key={item.id}
                    className="list-group-item d-flex justify-content-between align-items-center border-0"
                  >
                    <div>
                      <img
                        src={item.image}
                        alt={item.name}
                        width="50"
                        height="50"
                        className="rounded me-2"
                      />
                      {item.name}
                    </div>
                    <span className="fw-bold">
                      ${(item.price * item.quantity).toFixed(2)}
                    </span>
                  </li>
                ))}
              </ul>
              <h5 className="fw-bold d-flex justify-content-between">
                <span>Total:</span>
                <span>${cartState.totalPrice.toFixed(2)}</span>
              </h5>
              <button className="btn btn-primary w-100 mt-3">
                Place Order
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Checkout
