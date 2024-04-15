import { useRef } from 'react'
import axios from 'axios'
import "../styles/base.css"
//import { Link } from 'react-router-dom';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';

const CreateListing = () => {
    const nameRef = useRef<HTMLInputElement>(null)
    const locationRef = useRef<HTMLInputElement>(null)
    const rentRef = useRef<HTMLInputElement>(null)
    const startRef = useRef<HTMLInputElement>(null)
    const endRef = useRef<HTMLInputElement>(null)
    const descriptionRef = useRef<HTMLInputElement>(null)
    const navigate = useNavigate();
  
    const handleFormSubmit = async (e: React.FormEvent) => {
      e.preventDefault()
  
      const name = nameRef.current?.value;
      const location = locationRef.current?.value;
      const rent = rentRef.current?.value;
      const start = startRef.current?.value;
      const end = endRef.current?.value;
      const description = descriptionRef.current?.value;
  
        await createListing({
            name,
            location,
            rent,
            startDate: start,
            endDate: end,
            description
        })
    }
  
    async function createListing(data) {
      try {
        await axios.post('http://localhost:3000/listings', data, {
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
                      <input ref={nameRef} id="name" name="name" autoComplete="name" required className="p-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                    </div>
                </div>
  
                <div>
                    <label htmlFor="location" className="block text-sm font-medium leading-6 text-gray-900">Location</label>
                      <div className="mt-2">
                      <input ref={locationRef} id="location" name="location" autoComplete="location" required className="p-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                    </div>
                </div>

                <div>
                    <label htmlFor="rent" className="block text-sm font-medium leading-6 text-gray-900">Rent (per month)</label>
                      <div className="mt-2">
                      <input ref={rentRef} id="rent" name="rent" autoComplete="rent" required className="p-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                    </div>
                </div>
  
                <div>
                    <div className="flex items-center justify-between">
                      <label htmlFor="start" className="block text-sm font-medium leading-6 text-gray-900">Start Date</label>
                    </div>
                    <div className="mt-2">
                      <input ref={startRef} id="start" name="start" autoComplete="MM/DD/YYYY" required className="p-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                    </div>
                </div>

                <div>
                    <div className="flex items-center justify-between">
                      <label htmlFor="end" className="block text-sm font-medium leading-6 text-gray-900">End Date</label>
                    </div>
                    <div className="mt-2">
                      <input ref={endRef} id="end" name="end" autoComplete="MM/DD/YYYY" required className="p-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                    </div>
                </div>
  
                <div>
                    <div className="flex items-center justify-between">
                      <label htmlFor="description" className="block text-sm font-medium leading-6 text-gray-900">Description</label>
                    </div>
                    <div className="mt-2">
                      <input ref={descriptionRef} id="description" name="description" autoComplete="description" required className="p-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                    </div>
                </div>
  
                <div>
                    <button type="submit" className="flex w-full justify-center rounded-md bg-indigo-600 mx-0 px-0 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Add Listing</button>
                </div>
              </form>
          </div>
        </div>
      </div>
    );
}

export default CreateListing