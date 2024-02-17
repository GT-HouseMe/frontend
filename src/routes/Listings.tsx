import React, { useState, useEffect } from 'react';
import "../styles/base.css";
import "../styles/listing.css";
import image1 from '../assets/images/apartment1.jpeg';
import image2 from '../assets/images/apartment2.jpeg';
import image3 from '../assets/images/apartment3.jpeg';

// Mock data for the listings, now including a placeholder for images
const mockListings = [
  { id: 1, title: "Cozy Studio near Campus", price: "800", bedrooms: 1, location: "Downtown", imageUrl: image1 },
  { id: 2, title: "2 Bedroom Apartment", price: "1200", bedrooms: 2, location: "Suburbs", imageUrl: image2 },
  { id: 3, title: "Shared Room in House", price: "500", bedrooms: 1, location: "Near Park", imageUrl: image3 },
  // Add more listings as needed
];

const Listings = () => {
  const [listings, setListings] = useState([]);

  useEffect(() => {
    setListings(mockListings);
  }, []);

  return (
    <div className="listings-container">
      <h1>Listings Page</h1>
      <div className="search-bar">
        <input type="text" placeholder="Search by location, price, etc..." />
        <button>Search</button>
      </div>
      <div className="filters">
        <select>
          <option value="">Select number of bedrooms</option>
          <option value="1">1 Bedroom</option>
          <option value="2">2 Bedrooms</option>
          <option value="3">3 Bedrooms</option>
          {/* Add more options as needed */}
        </select>
        <input type="range" min="500" max="3000" step="100" />
        <span>Price Range</span>
      </div>
      <div className="listings-grid">
        {listings.map(listing => (
          <div key={listing.id} className="listing">
            <img src={listing.imageUrl} alt={listing.title} className="listing-image" />
            <div className="listing-info">
              <h2>{listing.title}</h2>
              <p>Price: ${listing.price}</p>
              <p>Bedrooms: {listing.bedrooms}</p>
              <p>Location: {listing.location}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Listings;
