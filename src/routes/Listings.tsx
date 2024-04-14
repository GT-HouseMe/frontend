import React, { useState, useEffect } from 'react';
import "../styles/base.css";
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';
import "../styles/listing.css";
import axios from 'axios';

// Define a type for the listing to match the data structure
interface Listing {
  _id: string;
  location: string;
  rent: number;
  startDate: string;
  endDate: string;
  description: string;
  createdBy: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

// Define a type for the response structure
interface ListingsResponse {
  count: number;
  data: Listing[];
}

const Listings = () => {
  const [listings, setListings] = useState<Listing[]>([]);
  const [authenticated, setAuthenticated] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get<ListingsResponse>('http://localhost:3000/listings', {
      headers: {
        'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NWVhMjYyYWNkZGI2ZGMzYmNjZGNjNjMiLCJuYW1lIjoiQWxsaXNvbiBUYW5nIiwiaWF0IjoxNzEyMTAwMDg5LCJleHAiOjE3MTQ2OTIwODl9.-000uegzUMHYd5PDtNBeTx0GA7EACkgjLiHgxZUIYcY`
      }
    })
    .then(response => {
      // Now TypeScript knows the shape of your data
      console.log(response.data.data)
      setListings(response.data.data);
    })
    .catch(error => {
      console.error("Error fetching listings:", error);
    });
  }, []);
  
  // check for authentication (Grace)
  const checkAuthentication = () => {
    const token = Cookies.get('userData');
    // if undef, return false, else true
    return !!token;
  };
  
  useEffect(() => {
    const isAuthenticated = checkAuthentication(); 
    setAuthenticated(isAuthenticated);
  }, []);
  
  const handleLogin = () => {
    // Redirect to the login page
    navigate("/login");
  };
  
  return (
    authenticated ? (
      <div className="listings-container">
        <h1>Listings Page</h1>
        <div className="listings-grid">
          {listings.map((listing) => (
            <div key={listing._id} className="listing">
              <div className="listing-image-placeholder" style={{ background: '#ddd', height: '200px', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <span>Image Not Available</span>
              </div>
              <div className="listing-info">
                <h2>{listing.description}</h2>
                <p>Price: ${listing.rent}</p>
                <p>Location: {listing.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    ) : (
      <div>
        <h1>Not Authenticated</h1>
        <button onClick={handleLogin}>Login</button>
      </div>
    )
  );
};
export default Listings;