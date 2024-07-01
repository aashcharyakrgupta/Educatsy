import React from "react";
import {
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Navbar from "./Component/Navbar";
import Footer from "./Component/Footer";
import Home from "./Component/Home";
import Courses from "./pages/Courses";
import About from "./pages/About";
import Resources from "./pages/Resources";
import Contact from "./pages/Contact";
import ErrorPage from "./pages/404ErrorPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import { Toaster } from 'react-hot-toast';
import { useAuth } from "./context/authprovider";
import ForgetPassword from "./Component/ForgetPassword";
import CourseDetail from "./Component/CourseDetail";

function App() {
  
  const [authUser] = useAuth()
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/AboutUs" element={<About />} />
        <Route path="/Courses" element={authUser ? <Courses /> : <Navigate to="/login" />} />
        <Route path="course/:id" element={<CourseDetail />} />
        <Route path="/Resources" element={<Resources />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<RegisterPage />} />
        <Route path="/forgetPassword" element={<ForgetPassword />} />
        <Route path="*" element={<ErrorPage/>} />
        </Routes>
        <Toaster />
      <Footer />
      </>
  )
}

export default App
