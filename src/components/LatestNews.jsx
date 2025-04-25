import Marquee from 'react-fast-marquee'
import { Link } from 'react-router-dom'

const LatestNews = () => {
   return (
      <div className="bg-[#f3f3f3] p-4 flex gap-4 items-center">
         <p className="bg-[#d72050] text-white py-2 px-6 font-medium text-xl">
            Latest
         </p>
         <Marquee pauseOnHover="true" className="space-x-10">
            <Link to="/news" className="text-[#403F3F] font-semibold text-lg">
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
               accusantium nostrum commodi iusto
            </Link>
            <Link to="/news" className="text-[#403F3F] font-semibold text-lg">
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
               accusantium nostrum commodi iusto
            </Link>
            <Link to="/news" className="text-[#403F3F] font-semibold text-lg">
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
               accusantium nostrum commodi iusto
            </Link>
         </Marquee>
      </div>
   )
}

export default LatestNews
