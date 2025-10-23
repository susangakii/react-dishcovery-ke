function HomePage() {
  return (
    <div className="landing-page">
      {/* hero section */}
      <section className="hero-section">
        <div className="hero-content">
          <div className="hero-text">
            <h1>Discover Kenya's Best Dish Experiences</h1>
            <p>Find your favorite dishes across Kenya's top restaurants. From all counties, explore authentic flavors and hidden gems.</p>
            <div className="hero-buttons">
              <button className="btn-secondary" onClick={() => window.location.href = '/explore'}>
                Start Exploring
              </button>
            </div>
            <div className="hero-stats">
              <div className="stat-item">
                <h3>90+</h3>
                <p>Restaurants</p>
              </div>
              <div className="stat-item">
                <h3>47</h3>
                <p>Counties</p>
              </div>
              <div className="stat-item">
                <h3>300+</h3>
                <p>Dishes</p>
              </div>
            </div>
          </div>
          <div className="hero-image">
            <div className="hero-card">
              <img
                src="https://assets1.canadiangrocer.com/images/v/max_width_1440/s3fs-public/2024-05/people_eat_dinner_together.jpg"
                alt="People eating dinner together"
                className="hero-img"
              />
            </div>
          </div>
        </div>
      </section>

      {/* about section */}
      <section className="about-section">
        <div className="about-content">
          <h2>About</h2>
          <p>DishCovery KE connects food lovers with the best restaurants, serving their best dishes across Kenya. Whether you're craving traditional Kenyan dishes or international cuisine, we help you find exactly what you're looking for.</p>
          <div className="about-features">
            <div className="feature-card">
              <span className="feature-icon">🔍</span>
              <h3>Smart Search</h3>
              <p>Search by dish name and county, and access several filters to find your perfect meal</p>
            </div>
            <div className="feature-card">
              <span className="feature-icon">⭐</span>
              <h3>Verified Reviews</h3>
              <p>Read honest reviews from real customers to make informed decisions</p>
            </div>
            <div className="feature-card">
              <span className="feature-icon">📍</span>
              <h3>Location Based</h3>
              <p>Discover restaurants near you or explore new areas across Kenya</p>
            </div>
          </div>
        </div>
      </section>

      {/* how it works section */}
      <section className="how-it-works-section">
        <div className="how-content">
          <h2>How It Works</h2>
          <p className="section-subtitle">Finding your next favorite restaurant is easy</p>
          <div className="steps-container">
            <div className="step-card">
              <div className="step-number">1</div>
              <h3>Search</h3>
              <p>Enter your location (county) and the dish you're craving</p>
            </div>
            <div className="step-arrow">→</div>
            <div className="step-card">
              <div className="step-number">2</div>
              <h3>Discover</h3>
              <p>Browse through curated restaurant recommendations</p>
            </div>
            <div className="step-arrow">→</div>
            <div className="step-card">
              <div className="step-number">3</div>
              <h3>Connect</h3>
              <p>View details, contact the restaurant, and enjoy your meal</p>
            </div>
          </div>
        </div>
      </section>

      {/* featured cuisines section */}
      <section className="featured-section">
        <div className="featured-content">
          <h2>Popular Cuisines</h2>
          <p className="section-subtitle">Explore Kenya's diverse culinary landscape</p>
          <div className="cuisine-grid">
            <div className="cuisine-card">
              <div className="cuisine-icon">🍛</div>
              <h3>Traditional Kenyan</h3>
              <p>Nyama Choma, Ugali, Sukuma Wiki</p>
            </div>
            <div className="cuisine-card">
              <div className="cuisine-icon">🍱</div>
              <h3>International</h3>
              <p>Italian, Chinese, Japanese</p>
            </div>
            <div className="cuisine-card">
              <div className="cuisine-icon">🦞</div>
              <h3>Coastal Swahili</h3>
              <p>Seafood, Biryani, Coconut Dishes</p>
            </div>
            <div className="cuisine-card">
              <div className="cuisine-icon">🥗</div>
              <h3>Healthy Options</h3>
              <p>Farm-to-table, Organic, Vegetarian</p>
            </div>
          </div>
        </div>
      </section>

      {/* team section */}
      <section className="team-section">
        <div className="team-content">
          <h2>Meet Our Founder</h2>
          <p className="section-subtitle">Passionate about connecting people with great food</p>
          <div className="team-card">
            <div className="team-avatar">
              <span>SG</span>
            </div>
            <h3>Susan Gakii</h3>
            <p className="team-role">Founder & CEO</p>
            <p className="team-bio">Dedicated to making Kenyan cuisine accessible to everyone. Susan's vision is to connect food lovers with the best dining experiences across Kenya.</p>
          </div>
        </div>
      </section>

      {/* CTA section */}
      <section className="cta-section">
        <div className="cta-content">
          <h2>Ready to Discover Your Next Favorite Restaurant?</h2>
          <p>Join thousands of food lovers exploring Kenya's culinary scene</p>
          <button className="btn-cta" onClick={() => window.location.href = '/explore'}>
            Get Started Now
          </button>
        </div>
      </section>
    </div>
  );
}

export default HomePage;