import React from "react"
const Button = (props) => {
  return (
    <>
      <button type="Submit" value={""} className="bg-orange-700 p-24 btn btn-primary">{props.icon} &nbsp; {props.title}</button>
    </>
  )
}

export default Button
