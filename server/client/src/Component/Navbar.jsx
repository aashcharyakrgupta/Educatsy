import React from "react"
import { Link } from "react-router-dom"
import { useState } from "react"
import { useAuth } from "../context/authprovider"
import Logout from "./Logout"
function Navbar() {

     const [setNav, isSetNav] = useState(0)
     const [authUser] = useAuth()
     console.log(authUser);
     return (
          <>
               <nav className="navigation d-flex justify-content-between">
                    <div className="logo">

                         <Link to="/" className="logo-name" >Educatsy</Link>

                         {["Home", "About Us", "Courses", "Contact"].map((item, index) => (
                               <li style={{listStyle: "none", padding:"2.5rem", color: "white"}} key={index} onClick={() => isSetNav(index)} className={`${index === setNav ? "active" : ""} list-none`}>
                                  <Link className="text-white text-decoration-none" to={`/${item.replace(/\s+/g, '')}`}>{item}</Link>
                                  </li>
                              
                         ))}

                    </div>

                    <form className=" navbar-form d-flex justify-content-between " action="">
                         {
                              authUser ? <Logout /> : <Link to="/login"><button className="btn btn-warning" type="submit">Login</button></Link>
                         }
                    </form>
               </nav>
          </>
     )
}

export default Navbar
