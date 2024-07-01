import React from "react"
function HomeCard() {
     return (
          <>
               <div className="home-card">
                    <div className="card-item" style={{ backgroundColor: "rgb(62,62,213)" }}>
                         <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="text-7xl icon-gradient text-white" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M14 19a6 6 0 0 0-12 0"></path><circle cx="8" cy="9" r="4"></circle><path d="M22 19a6 6 0 0 0-6-6 4 4 0 1 0 0-8"></path></svg>
                         <div>
                              <h1>10.2k</h1>
                              <p style={{ fontSize: "2rem" }}>Regitered users</p>
                              <div>
                                   <i className="fa-solid fa-star"></i>
                              </div>
                         </div>
                    </div>

                    <div className="card-item" style={{ backgroundColor: "rgba(128,54,203)" }}><svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" className="text-7xl text-white" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" strokeLinejoin="round" strokeWidth="32" d="M480 208H308L256 48l-52 160H32l140 96-54 160 138-100 138 100-54-160z"></path></svg>

                         <div>
                              <h1>4.9/5</h1>
                              <p style={{ fontSize: "2rem" }}>Student&apos;s Rating</p>
                         </div>
                    </div>


                    <div className="card-item" style={{ backgroundColor: "rgb(38,203,127)" }}>

                         <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" className="text-7xl text-white" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><g id="Globe"><path d="M14.645,2.428a8.1,8.1,0,0,0-1.61-.3,9.332,9.332,0,0,0-3.6.28l-.07.02a9.928,9.928,0,0,0,.01,19.15,9.091,9.091,0,0,0,2.36.34,1.274,1.274,0,0,0,.27.02,9.65,9.65,0,0,0,2.63-.36,9.931,9.931,0,0,0,.01-19.15Zm-.27.96a8.943,8.943,0,0,1,5.84,5.11h-4.26a13.778,13.778,0,0,0-2.74-5.35A8.254,8.254,0,0,1,14.375,3.388Zm-2.37-.09a12.78,12.78,0,0,1,2.91,5.2H9.075A12.545,12.545,0,0,1,12.005,3.3Zm3.16,6.2a13.193,13.193,0,0,1,0,5.01H8.845a12.185,12.185,0,0,1-.25-2.5,12.353,12.353,0,0,1,.25-2.51Zm-5.6-6.09.07-.02a9.152,9.152,0,0,1,1.16-.23A13.618,13.618,0,0,0,8.045,8.5H3.8A9,9,0,0,1,9.565,3.408Zm-6.5,8.6a8.71,8.71,0,0,1,.37-2.51h4.39a13.95,13.95,0,0,0-.23,2.51,13.757,13.757,0,0,0,.23,2.5H3.435A8.591,8.591,0,0,1,3.065,12.008Zm6.57,8.61a8.9,8.9,0,0,1-5.84-5.11h4.24a13.632,13.632,0,0,0,2.77,5.35A8.1,8.1,0,0,1,9.635,20.618Zm-.56-5.11h5.84a12.638,12.638,0,0,1-2.91,5.21A12.872,12.872,0,0,1,9.075,15.508Zm5.3,5.11a11.551,11.551,0,0,1-1.17.24,13.8,13.8,0,0,0,2.75-5.35h4.26A8.924,8.924,0,0,1,14.375,20.618Zm1.8-6.11a13.611,13.611,0,0,0,0-5.01h4.39a8.379,8.379,0,0,1,.37,2.51,8.687,8.687,0,0,1-.36,2.5Z"></path></g></svg>

                         <div>
                              <h1>5K+</h1>
                              <p style={{ fontSize: "2rem" }}>Daily Visitors</p>
                         </div>

                    </div>
               </div>
          </>
     )
}

export default HomeCard