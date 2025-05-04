import React, { useContext, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { AuthContext } from '../provider/AuthProvider'

const Login = () => {
   const { loginExistingUsers, setUser } = useContext(AuthContext)
   const [error, setError] = useState('')
   const location = useLocation()
   const navigate = useNavigate()
   // if (error) {
   //    setError('')
   // }
   const handleLogin = (e) => {
      e.preventDefault()
      const email = e.target.email.value
      const password = e.target.password.value

      // Clear previous errors
      setError('')

      loginExistingUsers(email, password)
         .then((result) => {
            const user = result.user
            setUser(user)
            navigate(location?.state ? location.state : '/')
         })
         .catch((error) => {
            const errorCode = error.code

            setError(errorCode)
         })
   }
   return (
      <div className="flex justify-center items-center h-screen">
         <div className="card bg-base-100 w-full max-w-lg shrink-0 rounded-none p-10">
            <h2 className="text-center font-semibold text-2xl">
               Login your account
            </h2>
            <div className="border-t border-gray-300 mt-10 mb-5"></div>
            <form onSubmit={handleLogin} className="card-body">
               <div className="form-control">
                  <label className="label flex">
                     <span className="label-text text-black text-lg mb-2">
                        Email address
                     </span>
                  </label>
                  <input
                     name="email"
                     type="email"
                     placeholder="email"
                     className="input w-full input-bordered"
                     required
                  />
               </div>
               <div className="form-control">
                  <label className="label">
                     <span className="label-text my-2 text-black text-lg">
                        Password
                     </span>
                  </label>
                  <input
                     name="password"
                     type="password"
                     placeholder="password"
                     className="input w-full input-bordered"
                     required
                  />
               </div>
               {error && (
                  <p className="text-red-600 text-lg font-medium">
                     Please enter Email or Password correctly!
                  </p>
               )}
               <div className="form-control mt-6">
                  <button className="btn btn-neutral w-full">Login</button>
               </div>
               <p>
                  Dont’t Have An Account ?{' '}
                  <Link to="/auth/register" className="text-red-500">
                     Register
                  </Link>
               </p>
            </form>
         </div>
      </div>
   )
}

export default Login
