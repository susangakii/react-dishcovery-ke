import RestaurantCard from './RestaurantCard';

function RestaurantList({ restaurants }) {
  if (restaurants.length === 0) {
    return (
      <section className="results-section">
        <div className="no-results">
          <h2>No Results Found</h2>
          <p>Try Adjusting Your Search Criteria or Filters.</p>
        </div>
      </section>
    );
  }

  return (
    <section className="results-section">
      <h2>Found {restaurants.length} Restaurant(s):</h2>
      <div className="results-grid">
        {restaurants.map(restaurant => (
          <RestaurantCard key={restaurant.id} restaurant={restaurant} />
        ))}
      </div>
    </section>
  );
}

export default RestaurantList;