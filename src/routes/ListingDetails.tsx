import '../styles/listingDetails.css'
import ImageSlider from "../components/ImageSlider";
import apartment from '../assets/apartment.jpg'
import apartmentInside from '../assets/apartmentInside.jpg'
import apartmentInside2 from '../assets/apartmentInside2.jpg'
import axios from 'axios';
import { useEffect, useState } from 'react';
import ReserveMessageSidebar from '../components/ReserveMessageSidebar';
import { useParams } from 'react-router-dom';

import Cookies from 'js-cookie';
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
  createdBy: {
    _id: string;
    name: string;
    email: string;
  };
  photo_file_names: string[];
  createdAt: string;
  updatedAt: string;
  __v: number;
  name: string;
}
const ListingDetails = () => {
  let slides = [
    {img: apartment},
    {img: apartmentInside},
    {img: apartmentInside2}
  ]
  const [listings, setListings] = useState<Listing | null>(null)
  // Get the id from the URL params
  const { id } = useParams();
  // Fetch listing details from the server using the id
  useEffect(() => {
    axios.get<Listing>(`http://localhost:3000/listingsDisplay/${id}`, {
      headers: {
        'Content-Type': 'application/json'
      }
    }).then((response) => {
      console.log(response);
      setListings(response.data);
      console.log('Listings:', listings);
    }).catch(() => {
      console.log("Axios request failed");
    });
  }, [id]);

  if (listings?.photo_file_names.length > 0) {
    slides = [];
    for (let i = 0; i < listings?.photo_file_names.length; i++) {
      slides.push({img: `http://localhost:3000/${listings?.photo_file_names[i]}`})
    }
  }
  
  return (
    <div>
      <div className='textBox'>
        <h1>{listings?.name}</h1>
        <br />
        <div className='imgContainer'>
          <ImageSlider slides={slides}/>
        </div>
        <br />

        <div style={{
            display: 'flex',
            justifyContent: 'row',
            gap: "5em",
            flexWrap: 'wrap'
          }}>
          <div >
            <h2>Information</h2>
            <div>
              <p>Rent: ${listings?.rent}/month</p>
              <p>Location: {listings?.location}</p>
              <p>Start Date: {listings?.startDate.split('T')[0]}</p>
              <p>End Date: {listings?.endDate.split('T')[0]}</p>
            </div>
          </div>
          

          <div>
            <h2>Contact Information</h2>
            <div>
              <p>Name: {listings?.createdBy.name}</p>
              <p>Email: {listings?.createdBy.email}</p>
          </div>
          
          </div>
        </div>
        
        {/* <div className='rightSide'>
          <ReserveMessageSidebar/>
        </div> */}
      </div>
    </div>
  );
};

export default ListingDetails;
