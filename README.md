# 🍽️ DishCovery KE

**Find Your Next Bite, Fast!**

DishCovery KE is a modern React-based web application that helps food lovers discover Kenya's best restaurant experiences. Search for specific dishes, explore restaurants by location, share reviews, and connect with the best dining spots across all 47 counties.

---

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Project Structure](#project-structure)
- [Screenshots](#screenshots)
- [Contributing](#contributing)
- [License](#license)

---

## Features

### Core Functionality
- **Eye-catching Landing Page**: Modern, engaging homepage with hero section, features showcase, and team information
- **Smart Restaurant Search**: Search by county and/or dish name to find restaurants serving your favorite foods
- **Advanced Filtering**: Apply filters by cuisine type, price range, and sort by rating
- **Detailed Restaurant Information**: View comprehensive details including menu items, drinks, operating hours, and contact information
- **Review System**: Write and share restaurant reviews
- **User Authentication**: Sign up and login system for personalized experience
- **Personalized Recommendations**: Discover new restaurants through curated suggestions

### Technical Features
- Single Page Application (SPA) with React Router
- RESTful API integration with json-server
- GET requests for fetching restaurants and reviews
- POST requests with controlled forms for adding reviews
- State management with React Hooks (useState, useEffect)
- Client-side routing with programmatic navigation
- Responsive design for all screen sizes
- Modern UI with gradient backgrounds and smooth animations

---

## Technologies Used

- **Frontend**: React
- **Routing**: React Router v6
- **Backend**: JSON Server (RESTful API)
- **Styling**: Custom CSS with modern design patterns
- **HTTP Client**: Fetch API

---

## Installation

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn
- json-server (for backend)

### Setup Instructions

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/dishcovery-ke.git
   cd dishcovery-ke
   ```

2. **Install dependencies**
   ```bash
   npm install
   npm install react-router-dom
   ```

3. **Set up the backend (json-server)**
   
   Create a `db.json` file in your backend folder with the following structure:
   ```json
   {
     "restaurants": [...],
     "reviews": []
   }
   ```
   
   In a separate terminal, run:
   ```bash
   json-server --watch db.json --port 4000
   ```

4. **Start the React application**
   ```bash
   npm start
   ```

5. **Open your browser**
   
   Navigate to `http://localhost:3000`

---

## Usage

### Home Page (Landing Page)
The homepage features a beautiful landing page with:
- **Hero Section**: Eye-catching introduction with statistics and call-to-action buttons
- **About Section**: Overview of DishCovery KE's mission and key features
- **How It Works**: Step-by-step guide on using the platform
- **Popular Cuisines**: Showcase of cuisine types available
- **Team Section**: Meet the founder, Susan Gakii
- **Call-to-Action**: Encouraging users to start exploring

### Explore Page
- Search for restaurants by county and/or dish name
- Apply filters to refine your search results (cuisine, price, rating)
- View recommended restaurants
- Click on restaurant cards to see detailed information
- Get contact information to reach out to restaurants

### Reviews Page
- **Write Reviews**: Write and submit restaurant reviews using a controlled form

### Auth Page
- **Sign Up**: Create a new account with name, email, and password
- **Sign In**: Login to existing account
- **Toggle Between Modes**: Easy switch between sign up and login

---

## API Endpoints

The application uses json-server to provide a RESTful API:

### Restaurants Endpoints
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/restaurants` | Fetch all restaurants |
| GET | `/restaurants/:id` | Fetch a specific restaurant |

### Reviews Endpoints
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/reviews` | Fetch all reviews |
| POST | `/reviews` | Add a new review (controlled form) |
| GET | `/reviews/:id` | Fetch a specific review |

### Example db.json Structure

```json
{
  "restaurants": [
    {
      "county": "Nairobi",
      "restaurants": [
        {
          "id": "1",
          "name": "Jiko Restaurant",
          "address": "Tribe Hotel, Village Market",
          "cuisine": "African",
          "dishes": [...],
          "drinks": [...],
          "price_range": "2500-4000 KES pp",
          "rating": 4.8,
          ...
        }
      ]
    }
  ],
  "reviews": [
    {
      "id": "1",
      "restaurantName": "Jiko Restaurant",
      "reviewerName": "John Doe",
      "rating": 5,
      "reviewText": "Amazing experience!",
      "county": "Nairobi",
      "date": "10/22/2025"
    }
  ]
}
```

---

## Project Structure

```
dishcovery-ke/
├── public/
│   └── index.html
│
├── src/
│   ├── components/                 # Reusable UI components
│   │   ├── Header.js              # Navigation header
│   │   ├── Footer.js              # Site footer
│   │   ├── FilterBar.js           # Filter and sort bar
│   │   ├── SearchForm.js          # Restaurant search form
│   │   ├── RestaurantCard.js      # Restaurant card display
│   │   ├── RestaurantList.js      # Restaurant results container
│   │   └── RecommendationList.js  # Recommendations display
│   │
│   ├── pages/                      # Page components (routes)
│   │   ├── HomePage.js            # Landing page
│   │   ├── ExplorePage.js         # Search & explore restaurants
│   │   ├── ReviewsPage.js         # Write & submit restaurant reviews 
│   │   └── AuthPage.js            # Login/Signup page
│   │
│   ├── App.js                      # Main app with routing
│   ├── App.css                     # Global styles
│   └── index.js                    # Application entry point
│
├── db.json                          # JSON Server database
├── package.json                     # Dependencies
└── README.md                        # Documentation
```

---

## Screenshots

### Home Page - Hero Section
*Beautiful landing page with engaging hero section and call-to-action*

### Explore Page - Restaurant Search
*Advanced search with filtering capabilities*

### Reviews Page - Write Reviews
*Submit restaurant reviews with controlled form (POST request)*

### Auth Page - User Authentication
*Sign up and login for personalized experience*

---

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a new branch (`git checkout -b feature/YourFeature`)
3. Commit your changes (`git commit -m 'Add some feature'`)
4. Push to the branch (`git push origin feature/YourFeature`)
5. Open a Pull Request

---

## License

This project is licensed under the MIT License.

---

## Author

**Susan Gakii**
- Role: Founder & CEO
- GitHub: [@susangakii](https://github.com/susangakii)

---

## Acknowledgments

- Restaurant data sourced from various Kenyan establishments
- Images from Unsplash
- Inspired by the vibrant Kenyan food scene

---

## Future Enhancements

- User profile management
- Advanced search with restaurant name
- Social media integration
- Email notifications
- Mobile app version
- Restaurant owner dashboard
- Food delivery integration

---

*Discover. Review. Connect.*