import { useLoaderData } from 'react-router-dom'
import NewsCard from '../components/NewsCard'

const CategoryNews = () => {
   const { data: news } = useLoaderData()

   // console.log(news)
   return (
      <div>
         <h2 className="font-semibold text-xl">Dragon News Home</h2>
         <div>
            {news.map((singleNews) => (
               <NewsCard key={singleNews._id} news={singleNews}></NewsCard>
            ))}
         </div>
      </div>
   )
}

export default CategoryNews
