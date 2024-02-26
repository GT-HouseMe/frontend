import '../styles/listingDetails.css'
import ImageSlider from "../components/ImageSlider";
import apartment from '../assets/apartment.jpg'
import apartmentInside from '../assets/apartmentInside.jpg'
import apartmentInside2 from '../assets/apartmentInside2.jpg'

const ListingDetails = () => {
  const slides = [
    {img: apartment},
    {img: apartmentInside},
    {img: apartmentInside2}
  ]
  return (
    <div>
      <h1>Listing details page</h1>
      <div className='containerStyle'>
        <ImageSlider slides={slides}/>
      </div>

    </div>
  );
};

export default ListingDetails;
