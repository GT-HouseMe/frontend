import "../styles/profile.css";
import { Link } from "react-router-dom";
import galleryimg from './Images/mikeandsully.jpg'
import profilepic from './Images/profile.png'
import Cookies from 'js-cookie';
import axios from 'axios'
import { useState, useEffect } from 'react';
import Listing from './Listing';
import Internship from './Internship';
import { useNavigate } from 'react-router-dom';
import InternshipEdit from './InternshipEdit';
import ListingEdit from './ListingEdit';

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
  const navigate = useNavigate();
  
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
          <th></th>
          <th><h2>Listings</h2></th>
          <th><h2>Internships</h2></th>
        </tr>
        <tr>
          <td valign="top">
            <center>
            <img src={profilepic} width="100px" height="100px"></img>
            <h2>Name:</h2>
            <h3>{name}</h3>
            <h2>Email:</h2>
            <h3>{email}</h3>
            <h2>Description:</h2>
            <h3>{description}</h3>
            </center>
          </td>
          <td valign="top">
            <center>
            {userListings.map(listing => (
              <div>
              <Listing key={listing._id} name={listing.name} location={listing.location} rent={listing.rent} startDate={listing.startDate} endDate={listing.endDate} description={listing.description} />
              <button onClick = {() => navigate(`/listingEdit/${listing._id}`)}>Edit</button>
              </div>
            ))}
            <button onClick = {() => navigate('/createlisting')}>Add Listing</button>
            </center>
          </td>
          <td valign="top">
            <center>
            {userInternships.map(internship => (
              <div>
              <Internship key={internship._id} company={internship.company} location={internship.location} startDate={internship.startDate} endDate={internship.endDate} description={internship.description} />
              <button onClick = {() => navigate(`/internshipEdit/${internship._id}`)}>Edit</button>
              </div>
            ))}
            <button onClick = {() => navigate('/createinternship')}>Add Internship</button>
            </center>
          </td>
        </tr>
      </table>
      </center>
    </div>
  );
};

export default Profile;
