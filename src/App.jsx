import { useState } from "react";
import SingUp from "./views/SingUp";
import "./index.css";

function App() {
  return (
    <div className="w-[115rem] m-1 max-h-fit bg-[#0089ED] flex space-x-3">
      <div className="w-[40%] ml-10">
        <p className="px-8 py-5 ml-10 text-[48px] text-white font-bold">LOGO</p>
        <div className="flex flex-row gap-2 mt-12">
          <div className="ml-10 px-8 py-4 w-[60%]">
              <p className="text-[40px]  font-bold text-white">Sign Up to</p>
              <p className="text-[26px] font-[400] text-[#FFFFFF] py-1">vote for future leaders</p>
              <p className="py-8 text-[#FFFFFF] text-[20px] font-[300]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, cupiditate. Eum deleniti accusamus fugit voluptatum enim eius soluta quo hic ab in repellat, impedit veritatis vero commodi obcaecati minus iusto.</p>
          </div>
          <div>
            <img src="./images/Vector.png" width="300px" height="300px" alt="logo" />
          </div>
          </div>
      </div>
      <div>
        <SingUp />
      </div>
    </div>
  );
}

export default App;
