import React from 'react'
import Header from '../components/Header'
import LatestNews from '../components/LatestNews'
import Navbar from '../components/Navbar'

const HomeLayout = () => {
   return (
      <div className="font-poppins">
         <header>
            <Header></Header>
            <section className="w-10/12 mx-auto">
               <LatestNews></LatestNews>
            </section>
         </header>
         <nav className="w-10/12 mx-auto mt-5 mb-16">
            <Navbar></Navbar>
         </nav>
         <main className="w-10/12 mx-auto">
            <aside>Left Navbar</aside>
            <section>Main Content</section>
            <aside>Right Navbar</aside>
         </main>
      </div>
   )
}

export default HomeLayout
