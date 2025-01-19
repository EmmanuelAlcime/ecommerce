const Footer = () => {
  return (
    <footer id="footer" className="bg-dark text-light pt-5">
      <div className="container">
        <div className="row">
          {/* About Us Section */}
          <div className="col-md-4">
            <h5 className="fw-bold text-uppercase">About Us</h5>
            <p className="small">
              We are a passionate team dedicated to providing the best products
              and services to our customers. Quality and customer satisfaction
              are our top priorities.
            </p>
          </div>

          {/* Quick Links Section */}
          <div className="col-md-4">
            <h5 className="fw-bold text-uppercase">Quick Links</h5>
            <ul className="list-unstyled">
              <li>
                <a href="/shop" className="text-light text-decoration-none">
                  Shop
                </a>
              </li>
              <li>
                <a href="/cart" className="text-light text-decoration-none">
                  Cart
                </a>
              </li>
              <li>
                <a href="/checkout" className="text-light text-decoration-none">
                  Checkout
                </a>
              </li>
              <li>
                <a href="/contact" className="text-light text-decoration-none">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Follow Us Section */}
          <div className="col-md-4">
            <h5 className="fw-bold text-uppercase">Follow Us</h5>
            <div className="d-flex gap-4 justify-content-center mt-4">
              <a href="https://facebook.com" className="text-light fs-4">
                <i className="bi bi-facebook"></i>
              </a>
              <a href="https://twitter.com" className="text-light fs-4">
                <i className="bi bi-twitter"></i>
              </a>
              <a href="https://instagram.com" className="text-light fs-4">
                <i className="bi bi-instagram"></i>
              </a>
              <a href="https://linkedin.com" className="text-light fs-4">
                <i className="bi bi-linkedin"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="text-center border-top mt-4 pt-3">
          <p className="small mb-0">
            &copy; {new Date().getFullYear()} Goal Noire Software. All Rights
            Reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
