
import React, { useEffect } from 'react'
import { useState } from 'react';
import '../index.css'
import AuthComponent from '../components/AuthComponent';
import Button from '../components/Button';

function SignIn() {


  const [user,setUser] = useState({
    email:"",
    password:""
  });
  const [message,setMessage] = useState();
  const [showMessage,setShowMessage] = useState(true);

  const validate = ()=>{
    let errors = {}

    if(!email) errors.email = "Email is required";
    if(!password) errors.password = "Password is required";
      
    return errors;
  }


  useEffect(()=>{
     setTimeout(()=>{
        setShowMessage(false);
      }
      ,3000);
  },[showMessage]);

  const handleSubmit = async(e)=>{
    e.preventDefault();
    let errors = validate();
    
    if(Object.keys(errors).length) return setErrors(errors);
   
    await SignIn();
  }
  const handleChange = (e)=>{
    const {name,value} = e.target;
    setUser({...user,[name]:value});
  }

  const SignIn = async()=>{
      try{
        const response = await fetch('http://localhost:3300/auth/login',{
          method:'POST',
          headers:{
            'Content-Type':'application/json'
          },
          body:JSON.stringify(user)
        })

        const data = await response.json();
        if(data.message ==  "Login Successfully completed.."){
          setMessage(data.message);
        }  
      }
      catch(err){
        console.log(err);
      }
  }

  return (
    <AuthComponent foamAction="Sign in to">
      <div className="bg-[#FFFFFF] m-2 w-[657px] h-[819px] rounded-[50px] mt-[5rem] shadow-lg">
      <div className="flex flex-row space-x-[10rem]">
        <div className=" px-10 flex flex-row gap-1 py-[25px]">
          <p className="text-[21px] font-[400]">Welcome to</p>
          <p className="text-[21px] font-[400] text-[#0089ED]">VOAPP</p>
        </div>
        <div className="mt-[22px]">
          <p className="text-[18px] font-[400] opacity-50">Don't have an account yet ?</p>
          <a className="text-[18px] font-[400] text-[#0089ED] py-2" href="#">
            Sign up here
          </a>
        </div>
      </div>

      <p className="text-[64px] font-[600] mt-[77px] px-[35px]">Sign in </p>

      <form onSubmit = {handleSubmit}>
        <input
          type="text"
          name="email"
          id="email"
          placeholder="Email"
          className="w-[520px] h-[55px] border-2 rounded-[16px] focus:outline-none ml-8 mt-[50px] font-[500] text-[21px] px-[4rem] focus:border-[#0089ED]"
          onChange = {handleChange}
          autoFocus
        />
        
        <input
          type="password"
          name="password"
          id="password"
          placeholder="password"
          className="w-[520px] h-[55px] border-2 rounded-[16px] focus:outline-none ml-8 mt-[50px] font-[500] text-[21px] px-[4rem] focus:border-[#0089ED]"
          autoFocus
          onChange = {handleChange}
        />
        <Button type="Sign in" />
      </form>

      {
        message  && (
          <div className="text-[21px] font-[600] mt-[50px] bg-green-600 text-center p-3 w-96 text-white mx-auto rounded-sm">{message}</div>
        )
      }
    </div>
    </AuthComponent>
  )
}

export default SignIn