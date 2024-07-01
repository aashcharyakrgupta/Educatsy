import React from "react"
import { Link } from "react-router-dom"
import banner from "../assets/banner.8a9f498b.webp"

const Banner = () => {
  return (
    <>
      <div className="home">
                         <div>
                              <img className="banner-image" src={banner} alt="banner" />
                         </div>
                         <div className="text">
                              <h1 className="home-heading">Start your
                                   <span className="highlight-text font-weight-bold"> programming</span><br />
                                   <span className="highlight-text font-weight-bold">Journey </span>
                                   with our <br />
                                   Dedicated community!
                              </h1>
                              <p className="home-para size-20">Begin your coding adventure in our community, where learning is always appreciated and valued</p>
                              <Link className="explore" to="/Courses">Explore Resources</Link>
                         </div>
                    </div>
    </>
  )
}

export default Banner
