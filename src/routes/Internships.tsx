import React, { useState, useEffect } from 'react';
import "../styles/base.css";
import Cookies from 'js-cookie';
import { useNavigate, Link } from 'react-router-dom';
import "../styles/listing.css";
import axios from 'axios';
import Internship from './Internship';

// Define a type for the listing to match the data structure
interface Internship {
  _id: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string;
  createdBy: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

// Define a type for the response structure
interface InternshipsResponse {
  count: number;
  data: Internship[];
}

const Internships = () => {
  const [internships, setInternships] = useState<Internship[]>([]);
  const [authenticated, setAuthenticated] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    axios.get<InternshipsResponse>('http://localhost:3000/internshipsDisplay', {
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(response => {
      // Now TypeScript knows the shape of your data
      setInternships(response.data.data);
    })
    .catch(error => {
      console.error("Error fetching internships:", error);
    });
  }, []);
  
  // check for authentication (Grace)
  const checkAuthentication = () => {
    const token = Cookies.get('token');
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
        <h1>Internships Page</h1>
        <div className="listings-grid">
          {internships.map((internship) => (
            <div key={internship._id} className="listing">
              <Link to={`/internshipDetails/${internship._id}`} className="listing-link">
              {/* <div className="listing-image-placeholder" style={{ background: '#ddd', height: '200px', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <span>Image Not Available</span>
              </div>
              <div className="listing-info">
                <h2>{listing.description}</h2>
                <p>Price: ${listing.rent}</p>
                <p>Location: {listing.location}</p>
              </div> */}
              <Internship {...internship} />
              </Link>
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
export default Internships;