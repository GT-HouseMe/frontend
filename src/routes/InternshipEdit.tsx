import { useRef, useEffect, useState } from 'react'
import axios from 'axios'
import "../styles/base.css"
//import { Link } from 'react-router-dom';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';

const InternshipEdit = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const [company, setCompany] = useState('');
    const [location, setLocation] = useState('');
    const [start, setStart] = useState('');
    const [end, setEnd] = useState('');
    const [description, setDescription] = useState('');


    useEffect(() => {
        axios.get(`http://localhost:3000/internships/${id}`, {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${Cookies.get('token')}`
          }
        }).then((response) => {
          setCompany(response.data.company);
            setLocation(response.data.location);
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
            company,
            location,
            startDate: start,
            endDate: end,
            description
        })
    }
  
    async function editIntern(data) {
    console.log('data: ', data)
      try {
        await axios.put(`http://localhost:3000/internships/${id}`, data, {
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
                    <label htmlFor="company" className="block text-sm font-medium leading-6 text-gray-900">Company</label>
                      <div className="mt-2">
                      <input id="company" name="company" value = {company} onChange = {(e) => setCompany(e.target.value)} autoComplete="company" required className="p-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                    </div>
                </div>
  
                <div>
                    <label htmlFor="location" className="block text-sm font-medium leading-6 text-gray-900">Location</label>
                      <div className="mt-2">
                      <input id="location" name="location" value = {location} onChange = {(e) => setLocation(e.target.value)} autoComplete="location" required className="p-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
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
                    <button type="submit" className="flex w-full justify-center rounded-md bg-indigo-600 mx-0 px-0 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Edit Internship</button>
                </div>
              </form>
          </div>
        </div>
      </div>
    );
}

export default InternshipEdit