import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../provider/AuthProvider'

const Register = () => {
   const { createNewUser, setUser } = useContext(AuthContext)

   const handleSubmit = (e) => {
      e.preventDefault()
      const form = new FormData(e.target)
      const name = form.get('name')
      const photo = form.get('photo')
      const email = form.get('email')
      const password = form.get('password')
      console.log({ name, photo, email, password })
      createNewUser(email, password)
         .then((result) => {
            const user = result.user
            setUser(user)
            console.log(user)
         })
         .catch((error) => {
            const errorCode = error.code
            const errorMessage = error.message
            console.log(errorCode, errorMessage)
         })
   }
   return (
      <div className="flex justify-center items-center h-screen">
         <div className="card bg-base-100 w-full max-w-lg shrink-0 rounded-none p-10">
            <h2 className="text-center font-semibold text-2xl">
               Register your account
            </h2>
            <div className="border-t border-gray-300 mt-10 mb-5"></div>
            <form onSubmit={handleSubmit} className="card-body">
               <div className="form-control">
                  <label className="label flex">
                     <span className="label-text text-black text-lg mb-2">
                        Your Name
                     </span>
                  </label>
                  <input
                     name="name"
                     type="text"
                     placeholder="Enter your name"
                     className="input w-full input-bordered"
                     required
                  />
               </div>
               <div className="form-control">
                  <label className="label flex">
                     <span className="label-text text-black text-lg mb-2">
                        Photo URL
                     </span>
                  </label>
                  <input
                     name="photo"
                     type="text"
                     placeholder="Enter your Photo URL"
                     className="input w-full input-bordered"
                     required
                  />
               </div>
               <div className="form-control">
                  <label className="label flex">
                     <span className="label-text text-black text-lg mb-2">
                        Email address
                     </span>
                  </label>
                  <input
                     name="email"
                     type="email"
                     placeholder="Enter your email address"
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
                     placeholder="Enter your password"
                     className="input w-full input-bordered"
                     required
                  />
               </div>
               <div className="form-control mt-6">
                  <button className="btn btn-neutral w-full">Register</button>
               </div>
               <p>
                  Already Have An Account ?{' '}
                  <Link to="/auth/login" className="text-green-400">
                     Login
                  </Link>
               </p>
            </form>
         </div>
      </div>
   )
}

export default Register
