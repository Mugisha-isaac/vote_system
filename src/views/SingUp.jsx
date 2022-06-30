import React, { useState } from "react";
import "../index.css";
import Button from "../components/Button";

function SingUp() {

  const [user,setUser] = useState({
    nationalId:"",
    names:"",
    email:"",
    password:""
  });
  
  
  const [isSubmit,setIsSubmit] = useState(false);
  const [errors,setErrors] = useState({});
  const [message,setMessage] = useState();
  const {nationalId,names,email,password} = user;



  const validate = ()=>{
    let errors = {}

    if(!nationalId) errors.nationalId = "National ID is required";
    if(!names) errors.names = "Names are required";
    if(!email) errors.email = "Email is required";
    if(!password) errors.password = "Password is required";
      
    return errors;
  }


  const handleSubmit = async(e)=>{
     e.preventDefault();
     let errors = validate();
     
     if(Object.keys(errors).length) return setErrors(errors);
      setIsSubmit(true);

      await createUser();
  }

  const handleChange = (e)=>{
    const {name,value} = e.target;
    setUser({...user,[name]:value});
  }

  const createUser = async()=>{
    try{
     const response =  await fetch('http://localhost:3300/auth/signup',{
        method:'POST',
        headers:{
          "Content-Type":"application/json"
        },
        body:JSON.stringify(user)
      });
      
      if(response.status == 201) setMessage("Account created successfully");

    }
    catch(err){
      throw new Error("Error found   while signup ");
    }
  }


  return (
    <div className="bg-[#FFFFFF] m-2 w-[657px] h-[819px] rounded-[50px] mt-[5rem] shadow-lg">
      <div className="flex flex-row space-x-[10rem]">
        <div className=" px-10 flex flex-row gap-1 py-[25px]">
          <p className="text-[21px] font-[400]">Welcome to</p>
          <p className="text-[21px] font-[400] text-[#0089ED]">VOAPP</p>
        </div>
        <div className="mt-[22px]">
          <p className="text-[18px] font-[400] opacity-50">Have an account?</p>
          <a className="text-[18px] font-[400] text-[#0089ED] py-2" href="#">
            Sign in
          </a>
        </div>
      </div>

      <p className="text-[64px] font-[600] mt-[77px] px-[35px]">Sign Up </p>

      <form onSubmit = {handleSubmit}>
        <input
          type="text"
          name="nationalId"
          id="nationalId"
          placeholder="National Id"
          className="w-[520px] h-[55px] border-2 rounded-[16px] focus:outline-none ml-8 mt-[50px] font-[500] text-[21px] px-[4rem] focus:border-[#0089ED]"
          onChange = {handleChange}
          autoFocus
        />
        <div className="flex flex-row gap-8">
          <input
            type="text"
            name="names"
            id="names"
            placeholder="Your Names"
            className="w-[230px] h-[60px] border-2 mt-[40px] ml-8 rounded-[10px] text-center focus:outline-none focus:border-[#0089ED]"
            onChange = {handleChange}
            autoFocus
          />
          <input
            type="text"
            name="email"
            id="email"
            placeholder="Email Address"
            className="w-[230px] h-[60px] border-2 mt-[40px] ml-8 rounded-[10px] text-center focus:outline-none focus:border-[#0089ED]"
            autoFocus
            onChange = {handleChange}
          />
        </div>
        <input
          type="password"
          name="password"
          id="password"
          placeholder="password"
          className="w-[520px] h-[55px] border-2 rounded-[16px] focus:outline-none ml-8 mt-[50px] font-[500] text-[21px] px-[4rem] focus:border-[#0089ED]"
          autoFocus
          onChange = {handleChange}
        />
        <Button type="Sign up" />
      </form>
      {
        message && (
          <div className="text-[21px] font-[600] mt-[50px] bg-green-600 text-center p-3 w-96 text-white mx-auto rounded-sm">{message}</div>
        )
      }
    </div>
  );
}

export default SingUp;
