import React from 'react'
import { useAuth } from '../context/authprovider'
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const Logout = (e) => {
                    //   game changer point
     const navigate = useNavigate();

     const [authUser, setAuthUser] = useAuth()
     // console.log(authUser);                       // used to see login information in console                         

     const handleLogout = () => {
          try {
               setAuthUser({
                    ...authUser,
                    user: null
               })
               localStorage.removeItem("Users")
               toast.success("Logout Successfully")
               setTimeout(() => {
                    navigate('/login', { replace: true })
                    window.location.reload()
               }, 1000)
               
          } catch (error) {
               toast.error("Error : " + error.data.message)
          }
     }

     return (
          <>
               <button className="logout px-20 btn btn-danger" type='button' onClick={handleLogout}> Logout</button>
          </>
     )
}

export default Logout




