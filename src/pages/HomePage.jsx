import { useState, useEffect } from 'react';
import FilterBar from '../components/FilterBar';
import SearchForm from '../components/SearchForm';
import RestaurantList from '../components/RestaurantList';

function HomePage() {
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [showResults, setShowResults] = useState(false);

  // fetch restaurants on start (GET)
  useEffect(() => {
    fetch('http://localhost:4000/restaurants')
      .then(res => res.json())
      .then(data => {
        setAllRestaurants(data.restaurants || data);
      })
      .catch(error => console.error('Error Fetching Restaurants:', error));
  }, []);

  // handle search
  const handleSearch = (county, dishName) => {
    let results = [];
    let dataToSearch = allRestaurants;

    if (county) {
      dataToSearch = dataToSearch.filter(
        countyData => countyData.county.toLowerCase() === county.toLowerCase()
      );
    }

    dataToSearch.forEach(countyData => {
      countyData.restaurants.forEach(restaurant => {
        let matches = false;

        if (dishName) {
          matches = restaurant.dishes.some(dish =>
            dish.name.toLowerCase().includes(dishName.toLowerCase()) ||
            dish.description.toLowerCase().includes(dishName.toLowerCase())
          );
        } else {
          matches = true;
        }

        if (matches) {
          results.push({
            ...restaurant,
            county: countyData.county
          });
        }
      });
    });

    setFilteredRestaurants(results);
    setShowResults(true);
  };

  return (
    <main className="main-content">

      <SearchForm onSearch={handleSearch} counties={allRestaurants.map(c => c.county)} />

      {showResults && (
        <RestaurantList restaurants={filteredRestaurants} />
      )}

    </main>
  );
}

export default HomePage;