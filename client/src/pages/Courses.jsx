
import React, { useEffect, useState } from "react"
import axios from "axios";
import { Link } from "react-router-dom";

function Courses() {

  const [courses, setCourses] = useState([]);
  // const [rating, setRating] = useState(0)
  const handleClick = (courseId, starIndex) => {
    const newRating = starIndex + 1;
    setCourses(courses.map(course => 
      course._id === courseId ? {...course, rating: starIndex + 1} : course
    ));
  };


  useEffect(() => {
    const getCourse = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/course`)
        setCourses(response.data.map(course => ({...course, rating: 0})))
      } catch (error) {
        console.log(error);
      }
    }
    getCourse()
  }, [])



  return (
    <>

      <div className="courses">
        <h1>Popular <span className="marquee-name">Courses</span></h1>
        <p className="home-para"><span className="dot"></span>our comprehensive project based courses</p><br />
        <span style={{ margin: "3rem" }}></span>

        <a className="main-card">
          {courses.map((course) => (
            <div key={course._id} course={course} className="card">
              <div className="card-poster">
                <img loading="lazy" src={course.image} alt={course.name} />
                <Link to={`/course/${course._id}`}>{course.title}</Link>
                <div className="rating">
                  <ul className="stars">
                    {[...Array(5)].map((_, index) => (<li key={index}><i className={`fa-regular fa-star ${index < course.rating ? "fas filled-star" : "far"}`} onClick={() => handleClick(course._id, index)}></i></li>))}
                  </ul>
                  <span className=" fs-3">100 Student</span>
                </div>
                <div className="rating fs-1 justify-content-between" style={{ fontSize: "1rem", padding: "1rem 1.3rem" }}>
                  <div className="price" style={{ fontSize: "1.5rem" }}>$ {course.price}</div>
                  <section className="d-flex align-items-center px-2" style={{ fontSize: "1.5rem" }} >
                    <i className="fa-solid fa-bars px-2"></i>
                    <span >{course.lectures}</span>
                  </section>

                </div>
              </div>
            </div>
          ))}
        </a>
      </div>
    </>
  )
}

export default Courses
