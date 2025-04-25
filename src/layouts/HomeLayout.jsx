import React from 'react'
import Header from '../components/Header'
import LatestNews from '../components/LatestNews'
import Navbar from '../components/Navbar'
import LeftNavbar from '../components/layout-component/LeftNavbar'
import RightNavbar from '../components/layout-component/RightNavbar'

const HomeLayout = () => {
   return (
      <div className="font-poppins">
         <header>
            <Header></Header>
            <section className="w-11/12 mx-auto">
               <LatestNews></LatestNews>
            </section>
         </header>
         <nav className="w-11/12 mx-auto mt-5 mb-16">
            <Navbar></Navbar>
         </nav>
         <main className="w-11/12 mx-auto grid grid-cols-12 gap-4">
            <aside className="col-span-3">
               <LeftNavbar></LeftNavbar>
            </aside>
            <section className="col-span-6">Main Content</section>
            <aside className="col-span-3">
               <RightNavbar></RightNavbar>
            </aside>
         </main>
      </div>
   )
}

export default HomeLayout
