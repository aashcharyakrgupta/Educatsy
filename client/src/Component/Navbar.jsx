import React from "react"
import { Link } from "react-router-dom"
import { useState, useEffect } from "react"
import { useAuth } from "../context/authprovider"
import Logout from "./Logout"
import { Container, Nav, Navbar } from 'react-bootstrap';

function NavBar() {

     const [authUser] = useAuth()
     console.log(authUser);

     const [isDarkMode, setIsDarkMode] = useState(true);

     const handleToggleDarkMode = () => {
          setIsDarkMode(!isDarkMode);
     };
     useEffect(() => {
          document.body.classList.toggle('dark', isDarkMode);
     }, [isDarkMode]);
     return (
          <>
               <Navbar expand="lg" className="text-white fs-1 fixed-top transparent" bg="dark" >
                    <Container className="text-white">
                         <Navbar.Toggle aria-controls="basic-navbar-nav shadow-none text-white" />
                         <Navbar.Brand href="/Home" className="text-white fs-1" animation="glow">Educatsy</Navbar.Brand>
                         <Navbar.Collapse id="basic-navbar-nav justify-content-between">
                              <Nav className="me-auto m-auto text-white">
                                   <Nav.Link href="/Home" className="text-white fs-2">Home</Nav.Link>
                                   <Nav.Link href="/AboutUs" className="text-white fs-2">About</Nav.Link>
                                   <Nav.Link href="/Courses" className="text-white fs-2">Courses</Nav.Link>
                                   <Nav.Link href="/Contact" className="text-white fs-2">Contact</Nav.Link>
                              </Nav>
                         </Navbar.Collapse>
                         <div className="d-flex flex-end">
                              <section className="d-flex align-items-center mx-5">
                                   <i className={`fa fa-moon ${isDarkMode ? 'd-none' : ''}`} onClick={handleToggleDarkMode}></i>
                                   <i className={`fa fa-sun ${isDarkMode ? '' : 'd-none'}`} onClick={handleToggleDarkMode}></i>
                              </section>
                              <form className="navbar-form">
                                   {
                                        authUser ? <Logout /> : <Link to="/login"><button className="btn btn-warning " type="submit">Login</button></Link>
                                   }
                              </form>

                         </div>
                    </Container>
               </Navbar>
          </>
     )
}

export default NavBar
