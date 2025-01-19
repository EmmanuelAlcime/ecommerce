import { NavLink } from 'react-router-dom'

const LinksContainer = () => {
  const getActiveLinkClass = ({ isActive }) =>
    isActive ? 'active nav-link text-secondary rounded-3' : 'nav-link text-dark'

  return (
    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
      <li className="nav-item p-2">
        <NavLink className={getActiveLinkClass} to="/">
          Shop
        </NavLink>
      </li>
      <li className="nav-item p-2">
        <NavLink className={getActiveLinkClass} to="/cart">
          Cart
        </NavLink>
      </li>
      <li className="nav-item p-2">
        <NavLink className={getActiveLinkClass} to="/checkout">
          Checkout
        </NavLink>
      </li>
      <li className="nav-item p-2">
        <NavLink className={getActiveLinkClass} to="/about">
          About
        </NavLink>
      </li>
      <li className="nav-item p-2">
        <NavLink className={getActiveLinkClass} to="/contact">
          Contact
        </NavLink>
      </li>
    </ul>
  )
}

export default LinksContainer
