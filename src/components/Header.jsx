import moment from 'moment'
import logo from '../assets/logo.png'
const Header = () => {
   const weekday = moment().format('dddd')
   const restOfDate = moment().format('MMMM D, YYYY')

   return (
      <div className="flex flex-col justify-center items-center py-5">
         <div className="logo mb-4">
            <img className="w-96" src={logo} alt="" />
         </div>
         <h2 className="text-lg text-[#706F6F]">
            Journalism Without Fear or Favour
         </h2>
         <p className="font-medium text-xl mt-3 mb-7">
            <span className="">{weekday}, </span>
            <span className="text-[#706F6F]">{restOfDate}</span>
         </p>
      </div>
   )
}

export default Header
