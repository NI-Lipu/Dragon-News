import { createBrowserRouter, Navigate } from 'react-router-dom'
import HomeLayout from '../layouts/HomeLayout'
import CategoryNews from '../pages/CategoryNews'
import AuthLayout from '../layouts/AuthLayout'
import Login from '../pages/Login'
import Register from '../pages/Register'
import NewsDetails from '../pages/NewsDetails'
import PrivetRoute from './PrivetRoute'

const routes = createBrowserRouter([
   {
      path: '/',
      element: <HomeLayout></HomeLayout>,
      children: [
         {
            path: '/',
            element: <Navigate to={'/category/01'}></Navigate>,
         },
         {
            path: '/category/:id',
            element: <CategoryNews></CategoryNews>,
            loader: ({ params }) =>
               fetch(
                  `https://openapi.programming-hero.com/api/news/category/${params.id}`
               ),
         },
      ],
   },
   {
      path: '/news/:id',
      element: (
         <PrivetRoute>
            <NewsDetails></NewsDetails>
         </PrivetRoute>
      ),
      loader: ({ params }) =>
         fetch(`https://openapi.programming-hero.com/api/news/${params.id}`),
   },
   {
      path: '/auth',
      element: <AuthLayout></AuthLayout>,
      children: [
         {
            path: '/auth/login',
            element: <Login></Login>,
         },
         {
            path: '/auth/register',
            element: <Register></Register>,
         },
      ],
   },
   {
      path: '*',
      element: <h1>ERROR</h1>,
   },
])

export default routes
