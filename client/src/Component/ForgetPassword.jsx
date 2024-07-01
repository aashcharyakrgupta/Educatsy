import React from 'react'
import Button from './Button'

const ForgetPassword = () => {
  return (
    <>
      <section className='d-flex flex-col justify-content-around align-items-center' style={{margin: "10rem 0 20rem 0"}}>
        <article>
          <h1 style={{fontSize: "5rem"}}>Reset Your Password </h1>
        </article>
        <article>
          <form action="" style={{ padding: "2rem 0 " }} >
            <div className='form-input size-48 py-20'>
              <label htmlFor="newPassword">New Password*</label><br />
              <input type="text" name='newPassword' id='newPassword' placeholder='New Password'/>
            </div>
            <div className='form-input size-48 py-20'>
              <label htmlFor="ConfirmNewPassword">Confirm New Password*</label><br />
              <input type="text" name='ConfirmNewPassword' id='ConfirmNewPassword' placeholder='Confirm New Password' />
            </div>

            <Button className="px-10" title="Reset Password"/>
          </form>
        </article>
      </section>
    </>
  )
}

export default ForgetPassword
