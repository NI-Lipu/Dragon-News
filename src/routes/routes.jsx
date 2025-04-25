import { createBrowserRouter } from 'react-router-dom'
import HomeLayout from '../layouts/HomeLayout'

const routes = createBrowserRouter([
   {
      path: '/',
      element: <HomeLayout></HomeLayout>,
   },
   {
      path: 'news',
      element: <h1>This is news</h1>,
   },
   {
      path: 'auth',
      element: <h1>This is Auth</h1>,
   },
   {
      path: '*',
      element: <h1>ERROR</h1>,
   },
])

export default routes
