import login from '../assets/user.png'
import { Link } from 'react-router-dom'

const Navbar = () => {
   const links = (
      <>
         <li>
            <Link to="/home">Home</Link>
         </li>
         <li>
            <Link to="/career">Career</Link>
         </li>
         <li>
            <Link to="/about">About</Link>
         </li>
      </>
   )
   return (
      <div className="navbar px-0 bg-base-100">
         <div className="navbar-start">
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
            <ul className="menu text-[#706F6F] menu-horizontal px-1 text-lg">
               {links}
            </ul>
         </div>
         <div className="navbar-end">
            <img className="w-10" src={login} alt="" />
            <button className="btn bg-[#403f3f] text-white text-xl font-semibold py-1 px-6 rounded-none ml-2">
               Login
            </button>
         </div>
      </div>
   )
}

export default Navbar
