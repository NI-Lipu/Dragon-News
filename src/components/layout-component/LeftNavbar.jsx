import { useEffect, useState } from 'react'

const LeftNavbar = () => {
   const [categories, setCategories] = useState([])
   useEffect(() => {
      fetch(
         'https://raw.githubusercontent.com/NI-Lipu/Dragon-News/refs/heads/main/categories.json'
      )
         .then((res) => res.json())
         .then((data) => setCategories(data))
   }, [])

   return (
      <div>
         <h2 className="font-semibold text-xl">
            All Category({categories.length})
         </h2>
         <div className="flex flex-col gap-2 mt-4">
            {categories.map((category) => (
               <button className="btn" key={category.id}>
                  {category.name}
               </button>
            ))}
         </div>
      </div>
   )
}

export default LeftNavbar
