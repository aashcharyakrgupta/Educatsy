import React from "react"
import Banner from "./Banner"
import Hr from "./Hr"
import Animation from "./Animation"
import HomeCard from "./HomeCard"
import Marquee from "./Marquee"
import Courses from "../pages/Courses"
import Faq from "../Component/Faq"
import { useAuth } from "../context/authprovider"
import { Navigate } from "react-router-dom"

function Home() {
     const {authUser} = useAuth()
     return (
          <>
               <Banner />
               <Hr />
               <Animation />
               <HomeCard />
               <Marquee />
               <Faq />
          </>
     )
}

export default Home