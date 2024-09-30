
import React from 'react';
import Form from '../Component/Form';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

const RegisterPage = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors }, 
    watch,
  } = useForm();

  const onSubmit = async (data) => {

    try {
      const response = await axios.post("http://localhost:5000/api/user/signup", {
        username: data.username,
        email: data.email,
        password: data.password,
      });

      if (response.data) {
        toast.success("Signup successful");
        navigate('/login'); // Redirect to login page
      }
      localStorage.setItem("Users", JSON.stringify(response.data.user));
    } catch (err) {
      if(err.response){
        toast.error(err.response.data.message);
      }
    }
  };

  return (
    <Form
      title="Register yourself and grasp the opportunity."
      name="Username"
      email="Email"
      password="Password"
      confirmPassword="Confirm Password"
      button="Register"
      showUserName={true}
      showEmail={true}
      showPassword={true}
      showConfirmPassword={true}
      action="signup"
      onSubmit={handleSubmit(onSubmit)}
      register={register}
      errors={errors}
      watch={watch}
      icon={<i className="fa-solid fa-envelope-open"></i>}
    />
  );
};

export default RegisterPage;