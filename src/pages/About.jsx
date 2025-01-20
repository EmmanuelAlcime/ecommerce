const About = () => {
  return (
    <div id="main-content">
      {/* Hero Section */}
      <div className="hero-section py-5 bg-primary text-center text-white d-flex align-items-center justify-content-center">
        <div className="container">
          <h1 className="display-4 fw-bold">About Us</h1>
          <p className="lead mt-3">
            We are dedicated to providing the best products and services to our
            customers worldwide.
          </p>
        </div>
      </div>

      {/* About Section */}
      <div className="container py-5">
        <div className="row align-items-center">
          <div className="col-md-6">
            <img
              src="assets/about-us.webp"
              alt="About Us"
              className="img-fluid rounded shadow"
            />
          </div>
          <div className="col-md-6">
            <h2 className="fw-bold mb-4">Who We Are</h2>
            <p className="text-muted">
              We are a passionate team of professionals dedicated to delivering
              top-notch products and services to our customers. Our mission is
              to create solutions that bring value to people's lives.
            </p>
            <p className="text-muted">
              With years of experience and a commitment to excellence, we have
              built a reputation for quality and reliability. Our core values
              are innovation, integrity, and customer satisfaction.
            </p>
            <button className="btn btn-primary mt-3">Learn More</button>
          </div>
        </div>
      </div>

      {/* Our Team Section */}
      <div className="container py-5">
        <h2 className="fw-bold text-center mb-4">Meet Our Team</h2>
        <div className="row text-center">
          <div className="col-md-4">
            <img
              src="assets/team1.webp"
              alt="Team Member"
              className="rounded-circle mb-3"
              style={{ width: '150px', height: '150px', objectFit: 'cover' }}
            />
            <h5 className="fw-bold">Alice Johnson</h5>
            <p className="text-muted">CEO & Founder</p>
          </div>
          <div className="col-md-4">
            <img
              src="assets/team2.webp"
              alt="Team Member"
              className="rounded-circle mb-3"
              style={{ width: '150px', height: '150px', objectFit: 'cover' }}
            />
            <h5 className="fw-bold">Michael Smith</h5>
            <p className="text-muted">Chief Marketing Officer</p>
          </div>
          <div className="col-md-4">
            <img
              src="assets/team3.webp"
              alt="Team Member"
              className="rounded-circle mb-3"
              style={{ width: '150px', height: '150px', objectFit: 'cover' }}
            />
            <h5 className="fw-bold">Emily Davis</h5>
            <p className="text-muted">Lead Developer</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
