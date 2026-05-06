import { createFileRoute, Link } from '@tanstack/react-router'
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { authService } from '../services/authService';
import { api } from '../services/api';
import { tokenStore } from '../services/tokenStore';
import Login from './login';
import "../style/register.css";

export const Route = createFileRoute('/register')({
  component: Register,
})

export default function Register() {
 const {
    register,
    handleSubmit,
    formState: { errors, isSubmitSuccessful, isSubmitting },
    getValues,
  } = useForm({ defaultValues: { name: "" }, mode: "onTouched" });

  async  function submit(data) {
await authService.register({username:data.name,email:data.email,password:data.password,role:data.role}).then((value)=>{
  tokenStore.set(value);
  console.log(value)
})
.catch((error)=>{
 
  const data = error.response?.data?.message
  console.log(error.response?.data?.message)
throw error
})
  }

if(isSubmitSuccessful){
  return (
   <Login/>
  )
}


  return (
    



<div className="login-page">
      <form className="login-form" onSubmit={handleSubmit(submit)}>
        <div className="form-header">
          <h1>User Registration</h1>
         
        </div>

        <label className="form-field">
          user name
          <input
            type="text"
            className="form-input"
            {...register("name", { required: "name is required" })}
          />
          {errors.name && <span className="form-error">{errors.name.message}</span>}
        </label>

        <label className="form-field">
          password
          <input
            type="password"
            className="form-input"
            {...register("password", { required: "password is required" })}
            
          />
           {errors.password && <span className="form-error">{errors.password.message}</span>}
        </label>

        <label className="form-field">
          role
          <input
            type="text"
            className="form-input"
            {...register("role", { required: "role is required" })}
          />
           {errors.role && <span className="form-error">{errors.role.message}</span>}
        </label>

        <label className="form-field">
          email
          <input
            type="email"
            className="form-input"
            {...register("email", { required: "email is required" })}
          />
           {errors.email && <span className="form-error">{errors.email.message}</span>}
        </label>

        <button className="form-submit" type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Submitting...." : "Submit"}
        </button>
       {/* <button className='form-submit'> Submit</button> */}
      </form>
    </div>

  )
}
