import { useRef } from 'react'

import "../styles/base.css"

const Login = () => {
  const emailRef = useRef<HTMLInputElement>(null)
  const passwordRef = useRef<HTMLInputElement>(null)

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    if (emailRef.current && passwordRef.current) {
      console.log(emailRef.current.value, passwordRef.current.value)
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
        </div>
      </div>
    </div>
  );
};

export default Login;
