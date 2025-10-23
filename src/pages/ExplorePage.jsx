import { useState, useEffect } from 'react';
import FilterBar from '../components/FilterBar';
import SearchForm from '../components/SearchForm';
import RestaurantList from '../components/RestaurantList';
import RecommendationList from '../components/RecommendationList';

function ExplorePage() {
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const [sortBy, setSortBy] = useState('');
  const [filterCuisine, setFilterCuisine] = useState('');
  const [filterPrice, setFilterPrice] = useState('');

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

  //apply filters
  const applyFilters = () => {
    let results = [...filteredRestaurants];

    if (filterCuisine) {
      results = results.filter(r => r.cuisine === filterCuisine);
    }

    if (filterPrice) {
      results = results.filter(r => {
        const priceRange = r.price_range.toLowerCase();
        const priceNumbers = priceRange.match(/\d+/g);

        if (priceNumbers && priceNumbers.length > 0) {
          const minPrice = parseInt(priceNumbers[0]);

          if (filterPrice === 'low') return minPrice < 1500;
          if (filterPrice === 'medium') return minPrice >= 1500 && minPrice <= 3000;
          if (filterPrice === 'high') return minPrice > 3000;
        }
        return true;
      });
    }

    if (sortBy === 'rating') {
      results.sort((a, b) => b.rating - a.rating);
    }

    return results;
  };

  const resetFilters = () => {
    setSortBy('');
    setFilterCuisine('');
    setFilterPrice('');
  };

  return (
    <main className="main-content explore-page">
      <div className="page-header">
        <h1>Explore Restaurants</h1>
        <p>Discover the best dining experiences across Kenya</p>
      </div>

      {showResults && filteredRestaurants.length > 0 && (
        <FilterBar
          sortBy={sortBy}
          setSortBy={setSortBy}
          filterCuisine={filterCuisine}
          setFilterCuisine={setFilterCuisine}
          filterPrice={filterPrice}
          setFilterPrice={setFilterPrice}
          onApply={applyFilters}
          onReset={resetFilters}
        />
      )}

      <SearchForm onSearch={handleSearch} counties={allRestaurants.map(c => c.county)} />

      {showResults && (
        <RestaurantList restaurants={applyFilters()} />
      )}

      <RecommendationList allRestaurants={allRestaurants} />
    </main>
  );
}

export default ExplorePage;