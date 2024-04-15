import "../styles/profile.css";
import { Link } from "react-router-dom";
import galleryimg from './Images/mikeandsully.jpg'
import profilepic from './Images/profile.png'
import Cookies from 'js-cookie';
import axios from 'axios'
import { useState, useEffect } from 'react';
import Listing from './Listing';
import Internship from './Internship';

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
  name: string;
}

// Define a type for the response structure
interface ListingsResponse {
  count: number;
  data: Listing[];
}

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

const Profile = () => {
  const userId = Cookies.get('userId');
  const token = Cookies.get('token');
  const [userData, setUserData] = useState({name: '', email: '', password: '', description: ''});
  const [userListings, setUserListings] = useState<Listing[]>([]);
  const [userInternships, setUserInternships] = useState<Internship[]>([]);
  console.log('token: ', token)
  useEffect(() => {
    const fetchData = async () => {
      await axios.get(`http://localhost:3000/auth/details/${userId}`, {
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then(response => {
        // Now TypeScript knows the shape of your data
        setUserData(response.data);
      });
      await axios.get<ListingsResponse>(`http://localhost:3000/listings`, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        }
      })
      .then(response => {
        // Now TypeScript knows the shape of your data
        setUserListings(response.data.data);
      });
      await axios.get<InternshipsResponse>(`http://localhost:3000/internships`, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        }
      })
      .then(response => {
        // Now TypeScript knows the shape of your data
        setUserInternships(response.data.data);
      });
    };
    fetchData();
  }, [userId]);
  const { name, email, password, description } = userData;
  
  return (
    <div>
      <center>
        <h1>Profile</h1>
      <br />
      <br />
      <table>
        <tr>
          <th>
          <center><img src={profilepic} width="100px" height="100px"></img></center>
          <h2></h2></th>
          <th><h2>Listings</h2></th>
          <th><h2>Internships</h2></th>
        </tr>
        <tr>
          <td>
            <center>
            <h2>Name:</h2>
            <h3>{name}</h3>
            <h2>Email:</h2>
            <h3>{email}</h3>
            <h2>Description:</h2>
            <h3>{description}</h3>
            </center>
          </td>
          <td>
            <center>
            {userListings.map(listing => (
              <Listing key={listing._id} name={listing.name} location={listing.location} rent={listing.rent} startDate={listing.startDate} endDate={listing.endDate} description={listing.description} />
            ))}
            </center>
          </td>
          <td>
            <center>
            {userInternships.map(internship => (
              <Internship key={internship._id} company={internship.company} location={internship.location} startDate={internship.startDate} endDate={internship.endDate} description={internship.description} />
            ))}
            </center>
          </td>
        </tr>
      </table>
      </center>
    </div>
  );
};

export default Profile;
