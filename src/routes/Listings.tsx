import "../styles/base.css";
import axios from "axios";
import Cookies from 'js-cookie';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

  const Listings = () => {
    const [authenticated, setAuthenticated] = useState(false);
    const [listings, setListings] = useState([]);
    
    const navigate = useNavigate();

    const checkAuthentication = () => {
      const token = Cookies.get('userData');
      // if undef, return false, else true
      return !!token;
    };

    useEffect(() => {
      const isAuthenticated = checkAuthentication(); 
      setAuthenticated(isAuthenticated);
      // Fetch listings from the server (may have merge conflict with Erics, can remove)
      axios.get('http://localhost:3000/', {
        headers: {
          Authorization: `Bearer ${Cookies.get('userData')}`
        }
      })
      .then(response => {
        setListings(response.data.data);
        console.log('Listings:', listings);
      })
      .catch(error => {
        // if the cookie expired or the user is not authenticated, set authenticated to false
        console.error('Failed to fetch listings:', error.message);
        setAuthenticated(false)
      });
    }, []);


    const handleLogin = () => {
      // Redirect to the login page
      navigate("/login");
    };

    return (
      <div>
        {authenticated ? (
          <h1>Listings page, success!</h1>
        ) : (
          <div>
            <h1>Not Authenticated</h1>
            <button onClick={handleLogin}>Login</button>
          </div>
        )}
      </div>
    );
  }

  export default Listings;

