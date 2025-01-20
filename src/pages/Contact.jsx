const Contact = () => {
  return (
    <div id="main-content">
      {/* Hero Section */}
      <div className="hero-section bg-primary py-5 text-center text-white d-flex align-items-center justify-content-center">
        <div className="container">
          <h1 className="display-4 fw-bold">Contact Us</h1>
          <p className="lead mt-3">
            Get in touch with us for any queries or support. We are here to help
            you.
          </p>
        </div>
      </div>

      {/* Contact Details Section */}
      <div className="container py-5 my-5">
        <div className="row text-center">
          <div className="col-md-4">
            <i className="bi bi-geo-alt fs-1 text-primary"></i>
            <h5 className="fw-bold mt-3">Our Address</h5>
            <p className="text-muted">123 Main Street, New York, NY 10001</p>
          </div>
          <div className="col-md-4">
            <i className="bi bi-envelope fs-1 text-primary"></i>
            <h5 className="fw-bold mt-3">Email Us</h5>
            <p className="text-muted">info@yourcompany.com</p>
          </div>
          <div className="col-md-4">
            <i className="bi bi-telephone fs-1 text-primary"></i>
            <h5 className="fw-bold mt-3">Call Us</h5>
            <p className="text-muted">+1 (555) 123-4567</p>
          </div>
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="container pb-5">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="card border-0 shadow-sm p-4">
              <h3 className="fw-bold mb-4 text-center">Send Us a Message</h3>
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
                  <label className="form-label">Message</label>
                  <textarea
                    className="form-control"
                    rows="4"
                    placeholder="Enter your message"
                    required
                  ></textarea>
                </div>
                <button className="btn btn-primary w-100">Submit</button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Google Map Section */}
      <div className="map-container">
        <iframe
          title="Google Map"
          width="100%"
          height="400"
          style={{ border: 0 }}
          loading="lazy"
          allowFullScreen
          src="https://www.google.com/maps/embed/v1/place?q=New+York,+NY,+USA&key=YOUR_GOOGLE_MAPS_API_KEY"
        ></iframe>
      </div>
    </div>
  )
}

export default Contact
