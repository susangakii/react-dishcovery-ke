import { useState } from 'react';

function SearchForm({ onSearch, counties }) {
  const [county, setCounty] = useState('');
  const [dishName, setDishName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!county && !dishName) {
      alert('Please Select a County or Enter a Dish Name');
      return;
    }
    onSearch(county, dishName);
  };

  return (
    <section className="search-section">
      <h2>Find Your Perfect Dish</h2>
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <label htmlFor="county-select">County:</label>
          <select 
            id="county-select" 
            value={county} 
            onChange={(e) => setCounty(e.target.value)}
          >
            <option value="">All Counties</option>
            {counties.map((c, index) => (
              <option key={index} value={c}>{c}</option>
            ))}
          </select>
        </div>

        <div className="input-group">
          <label htmlFor="dish-input">Dish Name:</label>
          <input
            type="text"
            id="dish-input"
            placeholder="e.g., Ravioli, Nyama Choma, Sukuma Wiki"
            value={dishName}
            onChange={(e) => setDishName(e.target.value)}
          />
        </div>

        <div className="submit-button">
          <button type="submit">Begin Search</button>
        </div>
      </form>
    </section>
  );
}

export default SearchForm;