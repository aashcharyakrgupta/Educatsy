import React, { useEffect, useState } from "react"
import Button from "../Component/Button"
import { useAuth } from "../context/authprovider"
import axios from "axios"
import toast from 'react-hot-toast';

const Contact = () => {
  const defaultContactForm = {
    username: "",
    email: "",
    message: ""
  }

  const [contact, setContact] = useState(defaultContactForm)
  const {authUser} = useAuth()

  useEffect(() => {
    if (authUser) {
      setContact(prevContact => ({
        ...prevContact,
        username: authUser.username,
        email: authUser.email,
        message: ""
      }))
    } else {
      setContact(defaultContactForm)
    }
  
    }, [authUser])
  
const handleInput = (e) => {
  const name = e.target.name;
  const value = e.target.value;
  setContact(prevContact => ({
    ...prevContact,
    [name]: value
  }))
}

const handleSubmit = async (e) => {
  e.preventDefault()
  console.log("this is e: ", e);
  try {
    const response = await axios.post("/api/form/contact", contact)
    if (response.status === 200) {
      setContact(authUser ? { ...contact, message: "" } : defaultContactForm);
      toast.success("Form Submitted Successfully")
    }
  }
  catch (error) {
    console.log(error);
    toast.error("Something went wrong")
  }
}


return (
  <>

    <main className="flex-main">
      <section>
        <article className="form-detail-contact">
          <h1>Need Additonal Information</h1>
          <p className="form-detail-contact-para">Lorem ipsud dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet.</p>
          <div className="contact-icons">
            <a className="text-white " href="/Contact"><i className="fa-solid fa-envelope-open"></i>6386314268</a>
            <a className="text-white " href="/Contact"><i className="fa-solid fa-envelope-open"></i>vibemagnet23@gmail.com</a>
            <a className="text-white " href="/contact"><i className="fa-solid fa-envelope-open"></i>India, Uttar Pradesh</a>
          </div>
        </article>
      </section>
      <section >
        <form className="form-input" method="post" onSubmit={handleSubmit}>
          <div >
            <label htmlFor="username" >Username*</label>
            <input className="text-black" type="text" value={contact.username} onChange={handleInput} placeholder="E.g. John Doe" name="username" id="username" required autoComplete="true" /><br /><br />
          </div>
          <div>
            <label htmlFor="email">Email*</label>
            <input className="text-black" type="email" value={contact.email} onChange={handleInput} placeholder="Youremail@gmail.com" name="email" id="email" required autoComplete="true" /><br /><br />
          </div>
          <div>
            <label htmlFor="message">Feedback</label>
            <textarea value={contact.message} onChange={handleInput} className="text-black" name="message" id="message" cols="12" rows="5" placeholder="Write Here...."></textarea><br />
          </div>
          <Button title="Submit" type="submit" />
        </form>
      </section>
    </main>
  </>
)
}

export default Contact
