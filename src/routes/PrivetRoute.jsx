import { useContext } from 'react'
import { AuthContext } from '../provider/AuthProvider'
import { Navigate, useLocation } from 'react-router-dom'

const PrivetRoute = ({ children }) => {
   const { user, loading } = useContext(AuthContext)
   const location = useLocation()
   console.log(location)
   if (loading) {
      return (
         <div className="flex items-center justify-center min-h-screen">
            <span className="loading loading-spinner w-20 h-20 text-green-500"></span>
         </div>
      )
   }
   if (user && user?.email) {
      return children
   }
   return <Navigate state={location.pathname} to={'/auth/login'}></Navigate>
}

export default PrivetRoute
