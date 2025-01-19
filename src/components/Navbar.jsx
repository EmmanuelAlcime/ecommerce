import { NavLink } from 'react-router-dom'
import logo from '../assets/react.svg'
import LinksContainer from './LinksContainer'
const Navbar = () => {
  return (
    <>
      <nav
        className="navbar bg-light border-bottom border-body navbar-expand-lg text-white"
        id="navbar"
        role="navigation"
      >
        <div className="container">
          <NavLink className="navbar-brand fw-bold" to="/">
            <img src={logo} />
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <LinksContainer />
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar
