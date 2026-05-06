import { createFileRoute } from '@tanstack/react-router'
import React, { useState,useEffect } from "react";
import { useForm } from "react-hook-form";
import { authService } from '../services/authService';
import { api } from '../services/api';
import { tokenStore } from '../services/tokenStore';
import "../style/register.css"
import User from './user';


export const Route = createFileRoute('/login')({
  component: Login,
})

export default function Login() {
 const {
    register,
    handleSubmit,
    formState: { errors, isSubmitSuccessful, isSubmitting },
    getValues,
  } = useForm({ defaultValues: { username: "" }, mode: "onTouched" });
const [kuchh,setData]=useState(false)

async function submit (data){
await authService.login({username:data.username,password:data.password}).then((data)=>{ tokenStore.set(data);
   tokenStore.set(data);
  console.log(data)})
.catch((error)=>{
setData(true)
  console.log(error.message)
  console.log(error.toJSON())
    throw error
})
}

  if(isSubmitSuccessful){
    return (
     <User/>
    )
  }


  return  (
    
    <div className="login-page">
      {kuchh && <div className="error-toast">
  <div className="error-icon">⚠️</div>
  <div>
    <h2 className="error-title">Login Failed</h2>
    <p className="error-text">
      Invalid credentials. Please try again.
    </p>
  </div>
</div>}
      <form className="login-form" onSubmit={handleSubmit(submit)}>
        <div className="form-header">
          <h1>User Login</h1>
         
        </div>

        
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
          username
          <input
            type="username"
            className="form-input"
            {...register("username", { required: "username is required" })}
          />
           {errors.username && <span className="form-error">{errors.username.message}</span>}
        </label>

        <button className="form-submit" type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Submitting...." : "Submit"}
        </button>
       {/* <button className='form-submit'> Submit</button> */}
      </form>
    </div>
  )
}
