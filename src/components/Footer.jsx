function Footer() {
  return (
    <footer className="main-footer">
      <div className="footer-content">
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/explore">Explore Restaurants</a></li>
            <li><a href="/reviews">Reviews</a></li>
            <li><a href="/auth">Sign In</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Contact Us</h4>
          <p>
            Email:{" "}
            <a href="mailto:dishcoveryke@gmail.com">
              dishcoveryke@gmail.com
            </a>
          </p>
          <p>
            Phone:{" "}
            <a href="tel:+254700000000">
              +254 700 000 000
            </a>
          </p>
        </div>
        <div className="footer-section">
          <h4>Follow Us</h4>
          <div className="social-links">
              <img src="/images/icons8-instagram-logo-50.png" alt="Instagram" />
              <img src="/images/icons8-facebook-logo-50.png" alt="Facebook" />
              <img src="/images/icons8-x-logo-50.png" alt="X" />
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2025 DishCovery KE. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;