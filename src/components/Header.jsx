
import React from 'react'
import SearchIcon from '../images/search.png';
import Profile from '../images/profile.png';

function Header() {
  return (
    <div>
      <div className='border-b-[1px] border-b-[#868080]'>
      <div className='flex flex-row space-x-10 ml-40  m-1 mt-3 gap-48 mb-3  '>
       <p className='text-[#0089ED] font-[700]  w-[138px] h-[58px] text-[48px]'>LOGO</p>
       <div>
        <div className='flex flex-row-reverse relative'>  
       <input type="text" name="search" placeholder='search...' className=' px-28 text-[#635A5A] font-[500] text-[24px] border-2 py-2 w-[698px] h-[70px] bg-[rgba(223, 222, 239, 0.65)] rounded-[60px] bg-[#EAE9F4]' />
       <img src={SearchIcon} alt="search" width={30} height={30} className="absolute top-4 left-4" />
       </div>
       </div>
       <div className='flex flex-row gap-4'>
        <img src={Profile} alt="profile" width="80px" height="80px" />
        <p className='text-[24px] font-[500] py-4'>Isaac</p>
       </div>
       </div>
       </div>
    </div>
  )
}

export default Header;