import '../styles/listingDetails.css'
import ImageSlider from "../components/ImageSlider";
import apartment from '../assets/apartment.jpg'
import apartmentInside from '../assets/apartmentInside.jpg'
import apartmentInside2 from '../assets/apartmentInside2.jpg'
import axios from 'axios';
import { useEffect } from 'react';
import React from 'react';
import ReserveMessageSidebar from '../components/ReserveMessageSidebar';
import Cookies from 'js-cookie';
const ListingDetails = () => {
  const slides = [
    {img: apartment},
    {img: apartmentInside},
    {img: apartmentInside2}
  ]
  const [listings, setListings] = React.useState([])
  // useEffect(() => {
  //   axios.get('http://localhost:3000/listings').then((response) => {
  //     setListings(response.data)
  //   })
  // }, [])
  console.log(listings)
  
  return (
    <div>
      <div className='textBox'>
        <h1>Apartment Name</h1>
        <div className='imgContainer'>
          <ImageSlider slides={slides}/>
        </div>
        <h2>apartment/suite/townshouse at location</h2>
        <div className='leftSide'>
          <p>$rent details</p>
          <p>3 bath, 3 bed</p>
          <h2>Interns</h2>
          <p>Grace Shao, 2nd year, intern @ GAPower</p>
          <p>John Doe, 2nd year, intern @ GAPower</p>
          <h2>More discreptions about room</h2>
        </div>
        <div className='rightSide'>
          <ReserveMessageSidebar/>
        </div>
      </div>
    </div>
  );
};

export default ListingDetails;
