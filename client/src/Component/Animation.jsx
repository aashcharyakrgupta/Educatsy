import React from "react"
import { Link } from "react-router-dom"
import hand from "../assets/hand.webp"

const Animation = () => {
  return (
    <>
      <div className="home-text">
                         <h1>
                              We support your programming journey in our community. Let’s have a look at
                              <span className="highlight-text"> how to navigate</span> the Educatsy Website Effectively
                         </h1>
                    </div>
                    <div className="lol">
                         <div className="circle1"></div>
                         <div className="circle1"></div>
                         <Link className="home-video" to="">
                              <i className="fa-regular fa-circle-play"></i>
                              <p>Click Here to Preview The Video</p>
                         </Link>
                    </div>
                    <img className="hand " src={hand} alt="" />
    </>
  )
}

export default Animation
