import React from "react";
import { useState } from "react"
import Hr from "./Hr";

function Faq() {

  const [isOpen, setIsOpen] = useState({
    paraOne: false,
    paraTwo: false,
    paraThree: false,
    paraFour: false,

  })

  const plusMinus = (item) => {
    setIsOpen(prevState => ({
      ...prevState,
      [item]: !prevState[item]
    }));
  }

  return (

    <>
      <>
        <section className="faq-launch">
          <div className="faq-heading">
            <h1 className="main-faq">Common <span className="marquee-name">FAQ</span></h1>
            <p className="home-para"><span className="dot"></span>Frequently asked questions</p>
          </div>
          <div className="faq">
            <div className="d-flex justify-content-between">
              <p className="question">Will I receive a certificate for each course?</p>
              <span onClick={() => plusMinus('paraOne')}>
                {isOpen.paraOne ? <i className="fa-solid fa-minus"></i> : <i className="fa-solid fa-plus"></i>}
              </span>
            </div>
            {isOpen.paraOne && (<p className="answer">Yes — each student who completes any course will receive a certificate of completion to acknowledge their proficiency. We encourage students to include these on their LinkedIn profiles and in their job applications!</p>)}
          </div>
          <Hr />



          <div className="faq">
            <div className="d-flex justify-content-between">
              <p className="question">Can I get source code of each course?</p>
              <span onClick={() => plusMinus('paraTwo')}>
                {isOpen.paraTwo ? <i className="fa-solid fa-minus"></i> : <i className="fa-solid fa-plus"></i>}
              </span>
            </div>
            {isOpen.paraTwo && (<p className="answer">Yes - You will get source code of all courses when you will watch the course video.</p>)}
          </div>
          <Hr />



          <div className="faq">
            <div className="d-flex justify-content-between">
              <p className="question">Can I ask about anything related course or if my code dosen&apos;t work?</p>
              <span onClick={() => plusMinus('paraThree')}>
                {isOpen.paraThree ? <i className="fa-solid fa-minus"></i> : <i className="fa-solid fa-plus"></i>}
              </span>
            </div>
            {isOpen.paraThree && (<p className="answer">Yes, you can comment on every part of the videos in the course. We&apos;ll always try to reply to your comment and fix any issues you may have.</p>)}
          </div>
          <Hr />


          <div className="faq">
            <div className="d-flex justify-content-between">
              <p className="question">Can I download any course videos?</p>
              <span onClick={() => plusMinus('paraFour')}>
                {isOpen.paraFour ? <i className="fa-solid fa-minus"></i> : <i className="fa-solid fa-plus"></i>}
              </span>
            </div>
            {isOpen.paraFour && (<p className="answer">For security reasons, course videos cannot be downloaded. However, you have lifetime access to each purchased course and can watch them anytime, anywhere with your account</p>)}
          </div>
        </section>
      </>

    </>

  )
}

export default Faq
