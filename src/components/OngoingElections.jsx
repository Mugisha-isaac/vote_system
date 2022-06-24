
import React from 'react'
import DeputyElections from '../images/deputy.png'
import PresidentialElections from '../images/president.png'

const OngoingElections = () => {
  return (
    <div className='mt-4 ml-10 px-8'>
       <p className='font-[400] text-[20px] text-[#000000] mb-2'>On going elections</p>
       <div className='flex flex-row gap-10'>
          <div className='w-[197px] h-[230px] bg-[#DEEEEF] object-cover'>
            <img src={DeputyElections} width="119px" height="124px" className='mx-auto py-2' />
            <p className='text-center text-[18px] font-[700]'>Deputy elections</p>
            <p className='text-small font-[100] text-center py-1'>1 day to go</p>
          </div>
          <div className='w-[197px] h-[230px] bg-[#DEEEEF] object-cover'>
            <img src={PresidentialElections} width="119px" height="124px" className='mx-auto py-2' />
            <p className='text-center text-[18px] font-[700]'>Presidential elections</p>
            <p className='text-small font-[100] text-center py-1'>1 day to go</p>
          </div>
       </div>
    </div>
  )
}

export default OngoingElections