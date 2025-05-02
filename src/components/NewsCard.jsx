import { FaEye, FaShareAlt } from 'react-icons/fa'
import { FaRegBookmark } from 'react-icons/fa6'
import { AiFillStar } from 'react-icons/ai'
import { Link } from 'react-router-dom'

const NewsCard = ({ news }) => {
   const { title, _id, author, total_view, image_url, details, rating } = news

   return (
      <div className="border rounded-lg p-5 shadow-md bg-white mt-4">
         {/* Top Author Section */}
         <div className="flex justify-between items-center mb-4">
            <div className="flex items-center gap-3">
               <img
                  src={author?.img}
                  alt={author?.name}
                  className="w-10 h-10 rounded-full object-cover"
               />
               <div>
                  <h3 className="font-semibold">{author?.name}</h3>
                  <p className="text-xs text-gray-400">
                     {author?.published_date}
                  </p>
               </div>
            </div>
            <div className="flex gap-3 text-gray-500 text-lg">
               <FaRegBookmark className="cursor-pointer" />
               <FaShareAlt className="cursor-pointer" />
            </div>
         </div>

         {/* Title */}
         <h2 className="text-xl font-bold mb-3">{title}</h2>

         {/* Image */}
         <img
            src={image_url}
            alt="News"
            className="w-full md:h-60 lg:h-full object-cover rounded mb-4"
         />

         {/* Details */}
         <p className="text-sm text-gray-700 mb-4">
            {details.length > 250 ? (
               <>
                  {details.slice(0, 250)}...{' '}
                  <Link
                     to={`/news/${_id}`}
                     className="text-orange-500 cursor-pointer"
                  >
                     Read More
                  </Link>
               </>
            ) : (
               details
            )}
         </p>

         {/* Footer - Ratings and Views */}
         <div className="flex justify-between items-center pt-3 border-t">
            <div className="flex items-center gap-1 text-orange-400">
               {/* 5 static stars, you can make dynamic if you want */}
               {[...Array(5)].map((_, idx) => (
                  <AiFillStar key={idx} />
               ))}
               <span className="text-gray-600 ml-2">{rating?.number}</span>
            </div>

            <div className="flex items-center gap-1 text-gray-600">
               <FaEye />
               <span>{total_view}</span>
            </div>
         </div>
      </div>
   )
}

export default NewsCard
