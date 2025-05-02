import { useContext } from 'react'
import login from '../assets/user.png'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { AuthContext } from '../provider/AuthProvider'

const Navbar = () => {
   const { pathname } = useLocation()

   const { user, loading, signOutUser } = useContext(AuthContext)
   // console.log(user)
   const links = (
      <>
         <li>
            <NavLink
               className={({ isActive }) =>
                  ` ${isActive ? 'font-bold text-black' : 'text-[#706F6F]'}`
               }
               to="/"
            >
               Home
            </NavLink>
         </li>
         <li>
            <NavLink
               className={({ isActive }) =>
                  ` ${isActive ? 'font-bold text-black' : 'text-[#706F6F]'}`
               }
               to="/career"
            >
               Career
            </NavLink>
         </li>
         <li>
            <NavLink
               className={({ isActive }) =>
                  ` ${isActive ? 'font-bold text-black' : 'text-[#706F6F]'}`
               }
               to="/about"
            >
               About
            </NavLink>
         </li>
      </>
   )

   return (
      <div
         className={`navbar px-0 ${
            pathname == '/auth/login' || pathname == '/auth/register'
               ? 'bg-[#f3f3f3]'
               : 'bg-base-100'
         }`}
      >
         <div className="navbar-start">
            {loading ? (
               <span className="loading loading-spinner loading-lg"></span>
            ) : (
               <div className="hidden md:block">{user?.email}</div>
            )}

            <div className="dropdown">
               <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost md:hidden"
               >
                  <svg
                     xmlns="http://www.w3.org/2000/svg"
                     className="h-5 w-5 text-[#706F6F]"
                     fill="none"
                     stroke="currentColor"
                  >
                     <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h8m-8 6h16"
                     />
                  </svg>
               </div>
               <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content bg-base-100 text-[#706F6F] text-lg rounded-box z-[1] mt-3 w-52 p-2 shadow"
               >
                  {links}
               </ul>
            </div>
         </div>
         <div className="navbar-center hidden md:flex">
            <ul className="space-x-8 flex px-1 text-lg">{links}</ul>
         </div>
         <div className="navbar-end">
            <img className="w-10" src={login} alt="" />
            {user ? (
               <button
                  onClick={signOutUser}
                  className="btn bg-[#403f3f] text-white text-xl font-semibold py-1 px-6 rounded-none ml-2"
               >
                  Log-Out
               </button>
            ) : (
               <Link
                  to="/auth/login"
                  className="btn bg-[#403f3f] text-white text-xl font-semibold py-1 px-6 rounded-none ml-2"
               >
                  Login
               </Link>
            )}
         </div>
      </div>
   )
}

export default Navbar
