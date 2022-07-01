
import React from 'react'
import CandidateCard from '../components/CandidateCard'
import LiveUpdate from './LiveUpdate'

const VotingComponent = () => {
  return (
    <div>
      <p className='font-[600] text-[28px] py-[34px] px-[214px]'>PRESIDENTIAL ELECTIONS</p>
      <div className='flex flex-rows gap-10'>
       <CandidateCard />
       <LiveUpdate />
      </div>
    </div>
  )
}

export default VotingComponent;