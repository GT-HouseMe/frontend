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
const ListingDetails = () => {
  const slides = [
    {img: apartment},
    {img: apartmentInside},
    {img: apartmentInside2}
  ]
  const [listings, setListings] = useState<Listing | null>(null)
  // Get the id from the URL params
  const { id } = useParams();
  const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NWVhMjYyYWNkZGI2ZGMzYmNjZGNjNjMiLCJuYW1lIjoiQWxsaXNvbiBUYW5nIiwiaWF0IjoxNzEyMTAwMDg5LCJleHAiOjE3MTQ2OTIwODl9.-000uegzUMHYd5PDtNBeTx0GA7EACkgjLiHgxZUIYcY';
  // Fetch listing details from the server using the id
  useEffect(() => {
    axios.get<Listing>(`http://localhost:3000/listings/${id}`, {
      headers: {
        'Authorization': `Bearer ${token}`,
      }
    }).then((response) => {
      console.log(response);
      setListings(response.data);
      console.log('Listings:', listings);
    }).catch(() => {
      console.log("Axios request failed");
    });
  }, [id]);
  console.log(listings)
  
  return (
    <div>
      <div className='textBox'>
        <h1>{listings?.description}</h1>
        <div className='imgContainer'>
          <ImageSlider slides={slides}/>
        </div>
        <h2>More information</h2>
        <div className='leftSide'>
          <p>Rent: ${listings?.rent}</p>
          <p>Location: {listings?.location}</p>
          <p>Start Date: {listings?.startDate.split('T')[0]}</p>
          <p>End Date: {listings?.endDate.split('T')[0]}</p>
          <h2>Interns</h2>
          <p>Grace Shao, 2nd year, intern @ GAPower</p>
          <p>John Doe, 2nd year, intern @ GAPower</p>
        </div>
        <div className='rightSide'>
          <ReserveMessageSidebar/>
        </div>
      </div>
    </div>
  );
};

export default ListingDetails;
