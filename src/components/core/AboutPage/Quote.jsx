import React from 'react'
import HighlightText from '../HomePage/HighlightText'

const Quote = () => {
  return (
    <div className='text-richblack-5 w-10/12 mx-auto text-center text-[2.3rem] leading-10 font-bold pt-4'>
        We are passionate about revolutionizing the way we learn. Our innovative platform
        <HighlightText text={"combines technology" }/>
        
        <span className='bg-gradient-to-b from-[#FF512F] to-[#F09819] bg-clip-text text-transparent'>
            expertise
        </span>
        , and community to create an 
        <span className='bg-gradient-to-b from-[#E65C00] to-[#F9D423] bg-clip-text text-transparent'> unparalleled educational experience.</span>
    </div>
  )
}

export default Quote