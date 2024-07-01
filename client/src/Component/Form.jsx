import React from 'react';
import Button from './Button';

const Form = ({
  title,
  name,
  email,
  password,
  confirmPassword,
  button,
  showUserName,
  showEmail,
  showPassword,
  showConfirmPassword,
  action,
  onSubmit,
  register,
  errors,
  watch,
  icon,
  loginpage
}) => {
  return (
    <main className="flex-main">
      <section className="form-detail size-72 w-full mt-28 h-full">
        <h1>{title}</h1>
        {
          loginpage && (
            <>
              <p className='form-detail-para'>Don&apos;t have account ? Create Account <a className='text-green-800' style={{ textDecoration: "none", textAlign: "center" }} href="/signup">Signup</a><br />
              <a className='form-detail-para text-decoration-none' href="/forgetPassword">Forgot password</a></p>
            </>
          )
        }
      </section>

      <form onSubmit={onSubmit}>
        {showUserName && (
          <div className="form-input size-48 py-20">
            <label htmlFor="username">{name}*</label><br />
            <input
              {...register("username", { required: "Username is required" })}
              className="px-3 text-black"
              type="text"
              placeholder="E.g. John Doe"
            />
            {errors.username && <span className="error">{errors.username.message}</span>}
          </div>
        )}

        {showEmail && (
          <div className="form-input size-48 py-20">
            <label htmlFor="email">{email}*</label><br />
            <input
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Invalid email address"
                }
              })}
              className="p-3 text-black"
              type="email"
              placeholder="youremail@gmail.com"
              name="email"
            />
            {errors.email && <span className="error">{errors.email.message}</span>}
          </div>
        )}

        {showPassword && (
          <div className="form-input size-48 py-20">
            <label htmlFor="password">{password}*</label><br />
            <input {...register("password", { required: "Password is required", minLength: { value: 8, message: "Password must be at least 8 characters long" } })}

              className="p-3 text-black"
              type="password"
              placeholder="Password"
              name='password'
            />
            {errors.password && <span className="error">{errors.password.message}</span>}
          </div>
        )}

        {showConfirmPassword && (
          <div className="form-input size-48 py-20">
            <label htmlFor="confirmPassword">{confirmPassword}*</label><br />
            <input
              {...register("confirmPassword", {
                validate: value => value === watch('password') || "Passwords do not match"
              })}
              className="p-3 text-black"
              type="password"
              placeholder="Confirm Password"
              name='confirmPassword'
            />
            {errors.confirmPassword && <span className="error">{errors.confirmPassword.message}</span>}
          </div>
        )}

        <Button title={button} icon={icon} type="submit" className="bg-orange-700 p-24 btn btn-primary" />

      </form>
    </main>
  );
};

export default Form;
