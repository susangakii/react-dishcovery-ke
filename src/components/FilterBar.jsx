function FilterBar({ sortBy, setSortBy, filterCuisine, setFilterCuisine, filterPrice, setFilterPrice, onApply, onReset }) {
  const cuisines = ["African", "Cafe", "Chinese", "Continental", "Farm-to-table", "Healthy", "International", "Italian", "Japanese", "Kenyan", "Korean", "Safari", "Seafood", "Steakhouse", "Swahili"];

  const handleApply = () => {
    onApply();
    setTimeout(() => {
      document.querySelector('.results-section')?.scrollIntoView({ 
        behavior: 'smooth', 
        block: 'center' 
      });
    }, 100);
  };

  const handleReset = () => {
    onReset();
    setTimeout(() => {
      document.querySelector('.results-section')?.scrollIntoView({ 
        behavior: 'smooth', 
        block: 'center' 
      });
    }, 100);
  };

  return (
    <div className="filter-bar">
      <div className="filter-content">
        <div className="filter-section">
          <label>Sort by Rating:</label>
          <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
            <option value="">None</option>
            <option value="rating">Highest Rated</option>
          </select>
        </div>

        <div className="filter-section">
          <label>Cuisine:</label>
          <select value={filterCuisine} onChange={(e) => setFilterCuisine(e.target.value)}>
            <option value="">All Cuisines</option>
            {cuisines.map(cuisine => (
              <option key={cuisine} value={cuisine}>{cuisine}</option>
            ))}
          </select>
        </div>

        <div className="filter-section">
          <label>Price Range:</label>
          <select value={filterPrice} onChange={(e) => setFilterPrice(e.target.value)}>
            <option value="">All Prices</option>
            <option value="low">Low (Under 1500 KES)</option>
            <option value="medium">Medium (1500-3000 KES)</option>
            <option value="high">High (Above 3000 KES)</option>
          </select>
        </div>

        <div className="filter-buttons">
          <button className="apply-btn" onClick={handleApply}>Apply</button>
          <button className="reset-btn" onClick={handleReset}>Clear</button>
        </div>
      </div>
    </div>
  );
}

export default FilterBar;