import { NavLink } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import logo from '../assets/react.svg'
import LinksContainer from './LinksContainer'

const Navbar = () => {
  const { cartState } = useCart()

  return (
    <nav
      className="navbar bg-light border-bottom border-body navbar-expand-lg"
      id="navbar"
      role="navigation"
    >
      <div className="container">
        {/* Brand Logo */}
        <NavLink className="navbar-brand fw-bold" to="/">
          <img
            src={logo}
            alt="Logo"
            width="40"
            height="40"
            className="d-inline-block align-top"
          />
        </NavLink>

        {/* Mobile Menu Toggle */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Links */}
        <div
          className="collapse navbar-collapse justify-content-between"
          id="navbarNav"
        >
          <LinksContainer />

          {/* Cart Icon Link */}
          <NavLink to="/cart" className="nav-link position-relative">
            <i className="bi bi-cart3 fs-4 text-dark"></i>
            {cartState.totalQuantity > 0 && (
              <span
                className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger text-white"
                style={{ fontSize: '0.75rem' }}
              >
                {cartState.totalQuantity}
              </span>
            )}
          </NavLink>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
