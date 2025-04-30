import { createContext, useEffect, useState } from 'react'
import app from '../firebase/firebase.config'
import {
   createUserWithEmailAndPassword,
   getAuth,
   onAuthStateChanged,
   signInWithEmailAndPassword,
   signOut,
} from 'firebase/auth'

export const AuthContext = createContext()
const auth = getAuth(app)

const AuthProvider = ({ children }) => {
   const [user, setUser] = useState(null)
   const [loading, setLoading] = useState(true)
   // console.log(user)
   // console.log(loading)

   const createNewUser = (email, password) => {
      return createUserWithEmailAndPassword(auth, email, password)
   }

   const signOutUser = () => {
      signOut(auth)
         .then(() => {
            alert('Sign Out Successfully')
         })
         .catch((error) => {
            console.error('Error signing out:', error)
         })
   }

   const loginExistingUsers = (email, password) => {
      return signInWithEmailAndPassword(auth, email, password)
   }
   // console.log(loginExistingUsers)

   const authInfo = {
      user,
      setUser,
      createNewUser,
      loginExistingUsers,
      signOutUser,
      loading,
   }

   useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
         setUser(currentUser)
         setLoading(false)
      })
      return () => {
         unsubscribe()
      }
   }, [])

   return (
      <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
   )
}

export default AuthProvider
