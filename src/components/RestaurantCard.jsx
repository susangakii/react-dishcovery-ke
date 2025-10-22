import { useState } from 'react';

function RestaurantCard({ restaurant }) {
  const [showDetails, setShowDetails] = useState(false);
  const [showContact, setShowContact] = useState(false);

  const imageUrl = restaurant.images && restaurant.images.length > 0 
    ? restaurant.images[0] 
    : null;

  return (
    <>
      <div className="restaurant-card">
        {imageUrl ? (
          <img src={imageUrl} alt={restaurant.name} className="restaurant-image" />
        ) : (
          <div className="restaurant-image-placeholder">No Image Available</div>
        )}
        <h3>{restaurant.name}</h3>
        <p><strong>Location:</strong> {restaurant.county}</p>
        <p><strong>Cuisine:</strong> {restaurant.cuisine}</p>
        <p><strong>Price Range:</strong> {restaurant.price_range}</p>
        <p><strong>Rating:</strong> {'⭐'.repeat(Math.floor(restaurant.rating))} {restaurant.rating}/5</p>
        
        <div className="restaurant-actions">
          <button className="details-btn" onClick={() => setShowDetails(true)}>
            View Details
          </button>
          <button className="reserve-btn" onClick={() => setShowContact(true)}>
            Get in Touch
          </button>
        </div>
      </div>

      {showDetails && (
        <div className="modal" onClick={() => setShowDetails(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <span className="close-modal" onClick={() => setShowDetails(false)}>&times;</span>
            {imageUrl && <img src={imageUrl} alt={restaurant.name} className="restaurant-image" />}
            <h2>{restaurant.name}</h2>
            <p><strong>Cuisine:</strong> {restaurant.cuisine}</p>
            <p><strong>Price Range:</strong> {restaurant.price_range}</p>
            <p><strong>Rating:</strong> {'⭐'.repeat(Math.floor(restaurant.rating))} {restaurant.rating}/5</p>
            <p><strong>Address:</strong> {restaurant.address}</p>
            <p><strong>Phone:</strong> {restaurant.phone}</p>
            <p><strong>Email:</strong> {restaurant.email}</p>
            <p><strong>Special Features:</strong> {restaurant.special_features}</p>
            
            {restaurant.dishes && restaurant.dishes.length > 0 && (
              <>
                <h3>Menu Items:</h3>
                <div className="menu-items">
                  {restaurant.dishes.map((dish, index) => (
                    <div key={index} className="menu-item">
                      <strong>{dish.name}</strong>: {dish.description}
                    </div>
                  ))}
                </div>
              </>
            )}
            
            {restaurant.drinks && restaurant.drinks.length > 0 && (
              <>
                <h3>Drinks:</h3>
                <div className="drinks-items">
                  {restaurant.drinks.map((drink, index) => (
                    <div key={index} className="menu-item">
                      <strong>{drink.name}</strong>: {drink.description}
                    </div>
                  ))}
                </div>
              </>
            )}
            
            {restaurant.operating_hours && restaurant.operating_hours.length > 0 && (
              <>
                <h3>Operating Hours:</h3>
                <div className="hours">
                  {restaurant.operating_hours.map((hour, index) => (
                    <p key={index}>{hour}</p>
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      )}

      {showContact && (
        <div className="modal" onClick={() => setShowContact(false)}>
          <div className="contact-content" onClick={(e) => e.stopPropagation()}>
            <span className="close-contact" onClick={() => setShowContact(false)}>&times;</span>
            <h2>Contact {restaurant.name}</h2>
            {restaurant.phone && <p><strong>📞 Phone:</strong> <a href={`tel:${restaurant.phone}`}>{restaurant.phone}</a></p>}
            {restaurant.email && <p><strong>📧 Email:</strong> <a href={`mailto:${restaurant.email}`}>{restaurant.email}</a></p>}
            {restaurant.website && <p><strong>🌐 Website:</strong> <a href={restaurant.website} target="_blank" rel="noreferrer">Visit Site</a></p>}
          </div>
        </div>
      )}
    </>
  );
}

export default RestaurantCard;