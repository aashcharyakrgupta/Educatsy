import React from 'react';
import Form from '../Component/Form';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

const LoginPage = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await axios.post("http://localhost:5000/api/user/login", {
        email: data.email,
        password: data.password,
      });

      if (response.data) {
        toast.success("Login successful");
        navigate('/Courses')
          window.location.reload()
      }
      localStorage.setItem("Users", JSON.stringify(response.data.user));
    } catch (err) {
      if(err.response){
        toast.error("Invalid credentials", err.response.data.message);
        console.log("Login error : ", err.response.data.message);
      }
    }
  };

  return (
    <>
    <Form
      title="Login to Your Account"
      name="Username"
      password="Password"
      button="login"
      email="Email"
      showEmail={true}
      showPassword={true}
      action="login"
      onSubmit={handleSubmit(onSubmit)}
      register={register}
      errors={errors}
      loginpage={true}
      />
      </>
  );
};

export default LoginPage;