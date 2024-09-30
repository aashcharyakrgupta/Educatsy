import React, { useState } from 'react'
import Button from './Button'
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const ForgetPassword = () => {
  const [email, setEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate()


  const handleResetPassword = async (e) => {

    e.preventDefault();
    if (!email) {
      toast.error("Email is required");
      return;
    }

    if (newPassword !== confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }
    
    if (newPassword.length < 8) {
      toast.error("Password must be at least 8 characters long");
      return;
    }
    
    try {
    
      const response = await fetch('http://localhost:5000/api/user/reset-password', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, newPassword }),
      });
  
      if (response.ok) {
        // Password reset successful
        toast.success("Password reset successful");
        navigate('/login')
      } else {
        // Handle errors
        const data = await response.json();
        setError(data.message || "Failed to reset password. Please try again.");
      }
    } catch (error) {
      console.error('Error:', error);
      setError("An unexpected error occurred. Please try again.");
    }
  };


  return (
    <>
      <section className='d-flex flex-col justify-content-around align-items-center' style={{ margin: "10rem 0 20rem 0" }}>
        <article>
          <h1 style={{ fontSize: "5rem" }}>Reset Your Password </h1>
        </article>
        <article>
          <form action="" style={{ padding: "2rem 0 " }} onSubmit={handleResetPassword} >

            <div className='form-input size-48 py-20'>
              <label htmlFor="email">Email id*</label><br />
              <input className='text-black' type="email" name='email' id='email' placeholder='Enter your email' value={email} onChange={(e) => setEmail(e.target.value)}/>
            </div>
            <div className='form-input size-48 py-20'>
              <label htmlFor="newPassword">New Password*</label><br />
              <input className='text-black'  type="text" name='newPassword' id='newPassword' placeholder='New Password' value={newPassword} onChange={(e) => setNewPassword(e.target.value)}/>
            </div>
            <div className='form-input size-48 py-20'>
              <label htmlFor="ConfirmNewPassword">Confirm New Password*</label><br />
              <input className='text-black'  type="text" name='ConfirmNewPassword' id='ConfirmNewPassword' placeholder='Confirm New Password' value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
            </div>
            {error && <div className="error">{error}</div>}
            <Button className="px-10" title="Reset Password" />
          </form>
        </article>
      </section>
    </>
  )
}

export default ForgetPassword
