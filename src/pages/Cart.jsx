import { useCart } from '../context/CartContext'

const Cart = () => {
  const { cartState, removeItem, clearCart } = useCart()

  return (
    <div id="main-content">
      <div className="container py-5">
        <h2 className="text-center mb-4 fw-bold">🛒 Shopping Cart</h2>

        {cartState.items.length === 0 ? (
          <div className="text-center mt-5">
            <h5 className="text-muted">Your cart is currently empty.</h5>
            <a href="/" className="btn btn-primary mt-3">
              Continue Shopping
            </a>
          </div>
        ) : (
          <div className="card shadow-sm border-0 p-4">
            <table className="table align-middle">
              <thead>
                <tr className="text-uppercase bg-light text-center">
                  <th>Product</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Total</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {cartState.items.map((item) => (
                  <tr key={item.id} className="text-center">
                    <td>
                      <img
                        src={item.image}
                        alt={item.name}
                        className="img-fluid rounded"
                        style={{
                          width: '50px',
                          height: '50px',
                          objectFit: 'cover',
                        }}
                      />
                      <span className="ms-3 fw-semibold">{item.name}</span>
                    </td>
                    <td>${item.price.toFixed(2)}</td>
                    <td>
                      <input
                        type="number"
                        value={item.quantity}
                        className="form-control text-center mx-auto"
                        style={{ width: '60px' }}
                        readOnly
                      />
                    </td>
                    <td>${(item.price * item.quantity).toFixed(2)}</td>
                    <td>
                      <button
                        onClick={() => removeItem(item.id)}
                        className="btn btn-danger btn-sm"
                      >
                        ❌ Remove
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            <div className="d-flex justify-content-between align-items-center mt-4">
              <h3 className="fw-bold">
                Total: ${cartState.totalPrice.toFixed(2)}
              </h3>
              <button onClick={clearCart} className="btn btn-danger">
                🗑️ Clear Cart
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Cart
