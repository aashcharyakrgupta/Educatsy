import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import CourseVideo from "./CourseVideo";
import axios from "axios";

function CourseDetail() {
  const [course, setCourse] = useState(null);
  const [error, setError] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchCourse = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/api/course/${id}`
        );
        setCourse(response.data)
      } catch (err) {
        console.error("Error fetching course:", err);
        setError(err.message);
      }
    };
    fetchCourse();
  }, [id]);

  if (error) return <div style={{ margin: "20rem" }}>Error: {error}</div>;
  if (!course) return <div style={{ margin: "20rem" }}>Loading...</div>;

  return (
    <div className="video">
      {/* <h1>{course.title}</h1> */}
      {course.videoId ? (
        <CourseVideo videoId={course.videoId} />
      ) : (
        <p style={{ fontSize: "3rem" }}>Invalid video URL</p>
      )}
      <div>
        {/* <p style={{fontSize: "3rem"}}>Price: ${course.price}</p> */}
        {/* <p style={{ fontSize: "3rem" }}>Category: {course.category}</p> */}
      </div>
    </div>
  );
}

export default CourseDetail;
