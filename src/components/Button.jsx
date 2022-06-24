import React from 'react'

function Button(props) {
  return (
    <div>
       <button className='bg-[#0089ED] w-[540.39px] h-[55px] rounded-[16px] mt-[6rem] ml-8 text-[30px] text-white font-[400]'>{props.type}</button>
    </div>
  )
}

export default Button