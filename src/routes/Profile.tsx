import "../styles/profile.css";
import { Link, useParams } from "react-router-dom";
import galleryimg from './Images/mikeandsully.jpg'
import profilepic from './Images/profile.png'
import Cookies from 'js-cookie';
import axios from 'axios'
import { useState, useEffect } from 'react';
import Listing from './Listing';
import Internship from './Internship';
import { useNavigate } from 'react-router-dom';
import ClipLoader from "react-spinners/ClipLoader";

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

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

  let [loading, setLoading] = useState(true);
  
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
    fetchData().then(() => setLoading(false));
  }, [userId]);
  const { name, email, password, description } = userData;
  
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-around',
      flexWrap: 'wrap',
      columnGap: "5em",
      gap: "3em",
    }}>
      {loading ? <>
        <ClipLoader
        color="black"
        loading={loading}
        size={75}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
      </>
      :
      <>
      <Card style={{
        flex: 1,
        width: "350px",
        maxWidth: "500px",
        height: "auto",
        minHeight: 0
      }}>
        <CardHeader>
          <CardTitle><h1>Profile</h1></CardTitle>
        </CardHeader>
      <CardContent>
      <table>
        <tr>
          <td valign="top">
            <img src={profilepic} width="100px" height="100px" />
            <br />
            <h2>Name</h2>
            <h3>{name}</h3>
            <br />
            <h2>Email</h2>
            <h3>{email}</h3>
            <br />
            <h2>Description</h2>
            <h3>{description}</h3>
          </td>
        </tr>
      </table>
      <Button variant="outline" style={{color: "red", marginTop: "2em", marginLeft: 0}} onClick={() => {
        Cookies.remove('userId')
        Cookies.remove('token')
        navigate('/')
      }}>Sign Out</Button>
      </CardContent>
      </Card>

      <Card className="w-[500px]">
        <CardHeader>
          <CardTitle><h1>My Listings</h1></CardTitle>
        </CardHeader>
      <CardContent>
        {userListings.map(listing => (
          <div>
          <Listing key={listing._id} name={listing.name} location={listing.location} rent={listing.rent} startDate={listing.startDate} endDate={listing.endDate} description={listing.description} _id={listing._id} showEdit/>
          </div>
        ))}
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline" style={{margin: 0}} onClick={() => navigate('/createlisting')}>Add Listing</Button>
        </CardFooter>
      </Card>

      <Card className="w-[500px]">
        <CardHeader>
          <CardTitle><h1>My Internships</h1></CardTitle>
        </CardHeader>
      <CardContent>
        {userInternships.map(internship => (
          <div>
          <Internship key={internship._id} company={internship.company} location={internship.location} startDate={internship.startDate} endDate={internship.endDate} description={internship.description} _id={internship._id} showEdit/>
          </div>
        ))}
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline" style={{width: "9em", margin: 0}} onClick={() => navigate('/createinternship')}>Add Internship</Button>
        </CardFooter>
      </Card>
      </>}
    </div>
  );
};

export default Profile;
