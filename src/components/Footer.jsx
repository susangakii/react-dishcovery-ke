function Footer() {
  return (
    <footer className="main-footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>DishCovery KE</h3>
          <p>Your gateway to Kenya's best culinary experiences</p>
        </div>
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/explore">Explore Restaurants</a></li>
            <li><a href="/reviews">Reviews</a></li>
            <li><a href="/auth">Sign In</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Contact</h4>
          <p>Email: dishcoveryke@gmail.com</p>
          <p>Phone: +254 700 000 000</p>
        </div>
        <div className="footer-section">
          <h4>Follow Us</h4>
          <div className="social-links">
            <span>Instagram</span>
            <span>Facebook</span>
            <span>X</span>
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