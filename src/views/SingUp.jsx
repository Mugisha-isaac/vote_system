import React from "react";
import "../index.css";
import Button from "../components/Button";

function SingUp() {
  return (
    <div className="bg-[#FFFFFF] m-2 w-[657px] h-[819px] rounded-[50px] mt-[5rem] drop-shadow-[0px 2px 1px rgba(218, 81, 230, 0.25)]">
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

      <form action="" method="post">
        <input
          type="text"
          name="nid"
          id="nid"
          placeholder="National Id"
          className="w-[520px] h-[55px] border-2 rounded-[16px] focus:outline-none ml-8 mt-[50px] font-[500] text-[21px] px-[4rem]"
        />
        <div className="flex flex-row gap-8">
          <input type="text" name="names" id="name" placeholder="Your Names" className="w-[230px] h-[60px] border-2 mt-[40px] ml-8 rounded-[10px] text-center" />
          <input type="text" name="email" id="email" placeholder="Email Address" className="w-[230px] h-[60px] border-2 mt-[40px] ml-8 rounded-[10px] text-center" />
        </div>
        <input type="password" name="password" id="password" placeholder="password" className="w-[520px] h-[55px] border-2 rounded-[16px] focus:outline-none ml-8 mt-[50px] font-[500] text-[21px] px-[4rem]" />
        <Button type="Signup" />
      </form>
    </div>
  );
}

export default SingUp;
