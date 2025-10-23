import { useState, useEffect } from 'react';

function ReviewsPage() {
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [allReviews, setAllReviews] = useState([]);
  const [selectedCounty, setSelectedCounty] = useState('');
  const [availableRestaurants, setAvailableRestaurants] = useState([]);
  const [formData, setFormData] = useState({
    restaurantName: '',
    reviewerName: '',
    rating: '',
    reviewText: ''
  });
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch('http://localhost:4000/restaurants')
      .then(res => res.json())
      .then(data => setAllRestaurants(data.restaurants || data))
      .catch(error => console.error('Error:', error));
    
    fetch('http://localhost:4000/reviews')
      .then(res => res.json())
      .then(data => setAllReviews(data))
      .catch(error => console.error('Error:', error));
  }, []);

  const handleCountyChange = (e) => {
    const county = e.target.value;
    setSelectedCounty(county);
    const countyData = allRestaurants.find(c => c.county === county);
    setAvailableRestaurants(countyData ? countyData.restaurants : []);
    setFormData({ ...formData, restaurantName: '' });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const newReview = {
      id: allReviews.length + 1,
      restaurantName: formData.restaurantName,
      county: selectedCounty,
      reviewerName: formData.reviewerName,
      rating: parseFloat(formData.rating),
      reviewText: formData.reviewText,
      date: new Date().toLocaleDateString()
    };

    fetch('http://localhost:4000/reviews', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newReview)
    })
      .then(res => res.json())
      .then((data) => {
        setAllReviews([...allReviews, data]);
        setMessage('Review submitted successfully!');
        setFormData({ restaurantName: '', reviewerName: '', rating: '', reviewText: '' });
        setSelectedCounty('');
        setAvailableRestaurants([]);
        setTimeout(() => setMessage(''), 3000);
      })
      .catch(() => setMessage('Error Submitting Review'));
  };

  return (
    <main className="main-content">
      <div className="page-header">
        <h1>Write a Review</h1>
        <p>Share your dining experience</p>
      </div>

      <section className="add-review-section">
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label>County:</label>
            <select value={selectedCounty} onChange={handleCountyChange} required>
              <option value="">Select County</option>
              {allRestaurants.map((c, i) => (
                <option key={i} value={c.county}>{c.county}</option>
              ))}
            </select>
          </div>

          <div className="input-group">
            <label>Restaurant:</label>
            <select 
              name="restaurantName" 
              value={formData.restaurantName} 
              onChange={handleChange}
              disabled={!selectedCounty}
              required
            >
              <option value="">Select Restaurant</option>
              {availableRestaurants.map((r, i) => (
                <option key={i} value={r.name}>{r.name}</option>
              ))}
            </select>
          </div>

          <div className="input-group">
            <label>Your Name:</label>
            <input type="text" name="reviewerName" value={formData.reviewerName} onChange={handleChange} required />
          </div>

          <div className="input-group">
            <label>Rating:*</label>
            <select name="rating" value={formData.rating} onChange={handleChange} required>
              <option value="">Select Rating</option>
              <option value="5">⭐⭐⭐⭐⭐ Excellent</option>
              <option value="4">⭐⭐⭐⭐ Good</option>
              <option value="3">⭐⭐⭐ Average</option>
              <option value="2">⭐⭐ Poor</option>
              <option value="1">⭐ Terrible</option>
            </select>
          </div>

          <div className="input-group">
            <label>Your Review:</label>
            <textarea name="reviewText" rows="4" value={formData.reviewText} onChange={handleChange} required />
          </div>

          <div className="submit-button">
            <button type="submit">Submit Review</button>
          </div>

          {message && (
            <div className={`submit-message ${message.includes('success') ? 'success' : 'error'}`}>
              {message}
            </div>
          )}
        </form>
      </section>
    </main>
  );
}

export default ReviewsPage;