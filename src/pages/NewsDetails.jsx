import { Link, useLoaderData } from 'react-router-dom'
import Header from '../components/Header'
import RightNavbar from '../components/layout-component/RightNavbar'
import { FaArrowLeftLong } from 'react-icons/fa6'

const NewsDetails = () => {
   const { data: singleNews } = useLoaderData()

   const { category_id, title, image_url, details } = singleNews[0]
   console.log(category_id)
   return (
      <div>
         <header>
            <Header></Header>
         </header>
         <main className="grid grid-cols-12 gap-4 w-11/12 mx-auto">
            <aside className="col-span-9">
               <h2 className="font-semibold text-xl mb-4">Dragon News</h2>
               <div className="border border-[#e7e7e7] rounded-md ">
                  <figure className="px-8 pt-8">
                     <img
                        src={image_url}
                        alt="Shoes"
                        className="rounded-md w-full h-fit"
                     />
                  </figure>
                  <div className="p-8 ">
                     <h2 className="font-bold text-2xl mb-2">{title}</h2>
                     <p className="text-[#706F6F] text-justify mb-8">
                        {details}
                     </p>
                     <div className="card-actions">
                        <Link
                           to={`/category/${category_id}`}
                           className="btn bg-[#D72050] font-medium text-xl text-white"
                        >
                           <FaArrowLeftLong /> All news in this category
                        </Link>
                     </div>
                  </div>
               </div>
            </aside>
            <aside className="col-span-3">
               <RightNavbar></RightNavbar>
            </aside>
         </main>
      </div>
   )
}

export default NewsDetails
