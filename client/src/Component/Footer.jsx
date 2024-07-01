// import React from 'react'
import React from "react"
function Footer() {
     return (
          <>
               <div className="footer">
                    <div className="grid-items">

                         <div className="">
                              <ul className="">
                                   <h1 className="">About</h1>
                                   <li><a href="/AboutUs">Our Story</a></li>
                                   <li><a href="/Footer">Privacy Policy</a></li>
                                   <li><a href="/">FAQ</a></li>
                              </ul>
                         </div>

                         <div className="">
                              <ul className="">
                                   <h1 className="font-weight-bold">Quick links</h1>
                                   <li><a href="/Courses">Couses</a></li>
                                   <li><a href="/Contact">My Account</a></li>
                                   <li><a href="/Courses">Course Dashboard</a></li>

                              </ul>
                         </div>
                         <div className="">
                              <ul className="">
                                   <h1 className="">Social</h1>
                                   <li><a href="/">Youtube</a></li>
                                   <li><a href="/">Instagram</a></li>
                                   <li><a href="/">Github</a></li>
                              </ul>
                         </div>
                    </div>

                    <form className="info">
                         <h1>Newsletter</h1>
                         <p>Stay up-to-date with everything related to our brand and gain invaluable insights for your programming journey by subscribing to our newsletter.</p>

                         <input className="email my-2" style={{ outline: "none", }} type="email" name="footerEmail" id="footerEmail" placeholder="Enter Your Email" /><br />
                         <input className=" my-2 btn btn-primary" type="submit" value="Subscribe" />
                         
                         <p className="my-2">Copyright © 2024 Becodemy | All Rights Reserved</p>
                    </form>
               </div>
          </>
     )
}

export default Footer
