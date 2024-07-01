import React from "react"
import { Link } from "react-router-dom"

function ErrorPage() {
     return (
          <>
               <div className="page-error" style={{ textAlign: "center", marginBottom: "30px" }}>

                    <h1 className="error-text" style={{ fontSize: "20rem" }}>404</h1>
                    <span>Sorry! Page is not found</span>
                    <p style={{ margin: "auto", width: "60rem" }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis dolor nulla perferendis distinctio nihil, quam quis sit sequi fugit.</p>
               </div>

               <div style={{ display: "flex", alignItems: "center", justifyContent: "space-around", margin: "auto", width: "60rem", marginBottom: "30px" }}>

                    <Link to="/Home"><button className="btn btn-success" >Return Home</button></Link>
                    <Link to="/contact"><button className="btn btn-success" >Report Problem</button></Link>

               </div>
          </>
     )
}

export default ErrorPage
