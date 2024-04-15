import { useRef } from 'react'
import axios from 'axios'
import "../styles/base.css"
import { Link } from 'react-router-dom';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  //const [cookies, setCookie, removeCookie] = useCookies(['cookie-name']);

  const emailRef = useRef<HTMLInputElement>(null)
  const passwordRef = useRef<HTMLInputElement>(null)
  const navigate = useNavigate();

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    const email = emailRef.current?.value;
    const password = passwordRef.current?.value;
    
    if (emailRef.current && passwordRef.current) {
      console.log(emailRef.current.value, passwordRef.current.value)
      const userData = await loginUser({
        email,
        password
      })
      console.log('User data from cookie:', Cookies.get('userData'));
    }
  }
  async function loginUser(credentials) {
    try {
      const response = await axios.post('http://localhost:3000/auth/login', credentials, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      const userData = response.data.userId;
      console.log('User data:', userData);
      Cookies.set('userData', userData, { expires: 7 });  //expires in 7 days
      navigate('/listings');
      return userData;
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
                  <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">Email address</label>
                    <div className="mt-2">
                    <input ref={emailRef} id="email" name="email" type="email" autoComplete="email" required className="p-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                  </div>
              </div>

              <div>
                  <div className="flex items-center justify-between">
                    <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">Password</label>
                  </div>
                  <div className="mt-2">
                    <input ref={passwordRef} id="password" name="password" type="password" autoComplete="current-password" required className="p-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                  </div>
              </div>

              <div>
                <button type="submit" className="flex w-full justify-center rounded-md bg-indigo-600 mx-0 px-0 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign in</button>
              </div>
            </form>
            <div>New to HouseMe? <Link to="/SignUp">Create Account.</Link></div>
        </div>
      </div>
    </div>
  );
};

export default Login;
