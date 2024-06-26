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
interface Internship {
  _id: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string;
  createdBy: {
    _id: string;
    name: string;
    email: string;
  };
  createdAt: string;
  updatedAt: string;
  __v: number;
}
const InternshipDetails = () => {
//   const slides = [
//     {img: apartment},
//     {img: apartmentInside},
//     {img: apartmentInside2}
//   ]
  const [internship, setInternship] = useState<Internship | null>(null)
  // Get the id from the URL params
  const { id } = useParams();
  // Fetch listing details from the server using the id
  useEffect(() => {
    axios.get<Internship>(`http://localhost:3000/internshipsDisplay/${id}`, {
      headers: {
        'Content-Type': 'application/json'
      }
    }).then((response) => {
      console.log(response);
      setInternship(response.data);
      console.log('Internship:', internship);
    }).catch(() => {
      console.log("Axios request failed");
    });
  }, [id]);
  console.log(internship)
  
  return (
    <div>
      <div className='textBox'>
        <h1>{internship?.company}</h1>
        {/* <div className='imgContainer'>
          <ImageSlider slides={slides}/>
        </div> */}

        <div style={{
            display: 'flex',
            justifyContent: 'row',
            gap: "5em",
            flexWrap: 'wrap'
          }}>
          <div>
          <h2>Information</h2>
          <div>
            <p>Location: {internship?.location}</p>
            <p>Start Date: {internship?.startDate.split('T')[0]}</p>
            <p>End Date: {internship?.endDate.split('T')[0]}</p>
          </div>
          </div>
          <div>
            <h2>Contact Information</h2>
              <div>
                <p>Name: {internship?.createdBy.name}</p>
                <p>Email: {internship?.createdBy.email}</p>
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

export default InternshipDetails;
