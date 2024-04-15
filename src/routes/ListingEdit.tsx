import { useRef, useEffect, useState } from 'react'
import axios from 'axios'
import "../styles/base.css"
//import { Link } from 'react-router-dom';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';

const ListingEdit = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const [name, setName] = useState('');
    const [location, setLocation] = useState('');
    const [rent, setRent] = useState('');
    const [start, setStart] = useState('');
    const [end, setEnd] = useState('');
    const [description, setDescription] = useState('');


    useEffect(() => {
        axios.get(`http://localhost:3000/listings/${id}`, {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${Cookies.get('token')}`
          }
        }).then((response) => {
          setName(response.data.name);
            setLocation(response.data.location);
            setRent(response.data.rent);
            setStart(response.data.startDate.split('T')[0]);
            setEnd(response.data.endDate.split('T')[0]);
            setDescription(response.data.description);
        }).catch((error) => {
          console.log(error);
        });
      }, [id]);
  
    const handleFormSubmit = async (e: React.FormEvent) => {
      e.preventDefault()
  
        await editIntern({
            name,
            location,
            rent,
            startDate: start,
            endDate: end,
            description
        })
    }
  
    async function editIntern(data) {
    console.log('data: ', data)
      try {
        await axios.put(`http://localhost:3000/listings/${id}`, data, {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${Cookies.get('token')}`
          }
        });
        navigate('/profile');
      } catch (error) {
        console.error('An error occurred:', error);
        throw error; // Propagate the error for handling further up the chain if needed
      }
    }
  
    return (
      <div>
        <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
              <form className="space-y-6" onSubmit={handleFormSubmit}>
                <div>
                    <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">Residence Name</label>
                      <div className="mt-2">
                      <input id="name" name="name" value = {name} onChange = {(e) => setName(e.target.value)} autoComplete="company" required className="p-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                    </div>
                </div>
  
                <div>
                    <label htmlFor="location" className="block text-sm font-medium leading-6 text-gray-900">Location</label>
                      <div className="mt-2">
                      <input id="location" name="location" value = {location} onChange = {(e) => setLocation(e.target.value)} autoComplete="location" required className="p-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                    </div>
                </div>

                <div>
                    <label htmlFor="rent" className="block text-sm font-medium leading-6 text-gray-900">Rent (per month)</label>
                      <div className="mt-2">
                      <input id="rent" name="rent" value = {rent} onChange = {(e) => setRent(e.target.value)} autoComplete="company" required className="p-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                    </div>
                </div>

                <div>
                    <div className="flex items-center justify-between">
                      <label htmlFor="start" className="block text-sm font-medium leading-6 text-gray-900">Start Date</label>
                    </div>
                    <div className="mt-2">
                      <input id="start" name="start" value = {start} onChange = {(e) => setStart(e.target.value)} autoComplete="start date" required className="p-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                    </div>
                </div>

                <div>
                    <div className="flex items-center justify-between">
                      <label htmlFor="end" className="block text-sm font-medium leading-6 text-gray-900">End Date</label>
                    </div>
                    <div className="mt-2">
                      <input id="end" name="end" value = {end} onChange = {(e) => setEnd(e.target.value)} autoComplete="end date" required className="p-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                    </div>
                </div>
  
                <div>
                    <div className="flex items-center justify-between">
                      <label htmlFor="description" className="block text-sm font-medium leading-6 text-gray-900">Description</label>
                    </div>
                    <div className="mt-2">
                      <input id="description" name="description" value = {description} onChange = {(e) => setDescription(e.target.value)} autoComplete="description" required className="p-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                    </div>
                </div>
  
                <div>
                    <button type="submit" className="flex w-full justify-center rounded-md bg-indigo-600 mx-0 px-0 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Edit Listing</button>
                </div>
              </form>
          </div>
        </div>
      </div>
    );
}

export default ListingEdit