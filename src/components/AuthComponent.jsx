
import React from 'react'
import OngoingElections from './OngoingElections'
import SingUp from '../views/SingUp'
import Logo from '../images/Vector.png'

function AuthComponent({foamAction, children}) {
  return (
    <div className="w-[115rem]  overflow-y-hidden">
    <div className="bg-[#0089ED] h-[615px] flex space-x-3">
      <div className="w-[50%] ml-10">
        <p className="px-8 py-5 ml-10 text-[48px] text-white font-bold">LOGO</p>
        <div className="flex flex-row gap-8 mt-[8rem]">
          <div className="ml-10 px-8 py-4 w-[60%]">
            <p className="text-[40px]  font-bold text-white">{foamAction}</p>
            <p className="text-[26px] font-[400] text-[#FFFFFF] py-1">
              vote for future leaders
            </p>
            <p className="py-8 text-[#FFFFFF] text-[20px] font-[300]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel,
              cupiditate. Eum deleniti accusamus fugit voluptatum enim eius
              soluta quo hic ab in repellat, impedit veritatis vero commodi
              obcaecati minus iusto.
            </p>
          </div>
          <div className="-mt-[4rem] ml-10">
            <img src={Logo} width="120px" height="120px" alt="logo" />
          </div>
        </div>
      </div>
      <div></div>
      <div>
        {children}
      </div>
    </div>
    <div className="m-4">
    <OngoingElections />
    </div>
    </div>
  )
}

export default AuthComponent