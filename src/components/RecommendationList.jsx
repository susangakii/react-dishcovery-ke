import { useState, useEffect } from 'react';
import RestaurantCard from './RestaurantCard';

function RecommendationList({ allRestaurants }) {
  const [recommendations, setRecommendations] = useState([]);

  useEffect(() => {
    if (allRestaurants.length > 0) {
      const flatRestaurants = [];
      
      allRestaurants.forEach(countyData => {
        countyData.restaurants.forEach(restaurant => {
          flatRestaurants.push({
            ...restaurant,
            county: countyData.county
          });
        });
      });

      const shuffled = [...flatRestaurants].sort(() => 0.5 - Math.random());
      const topSix = shuffled.slice(0, 6);
      setRecommendations(topSix);
    }
  }, [allRestaurants]);

  if (recommendations.length === 0) return null;

  return (
    <section className="like-section">
      <h2>You Might Like These:</h2>
      <div className="like-grid">
        {recommendations.map(restaurant => (
          <RestaurantCard key={restaurant.id} restaurant={restaurant} />
        ))}
      </div>
    </section>
  );
}

export default RecommendationList;