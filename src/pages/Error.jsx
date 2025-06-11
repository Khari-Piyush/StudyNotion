import React from 'react'
import { BiError } from "react-icons/bi";
import maleFigure from "../assets/Images/5.png"
import { Link } from 'react-router-dom';

const Error = () => {
  return (
    <div className='flex flex-col items-center justify-center gap-2'>
        <h1 className='text-richblack-25 font-bold text-5xl pt-4'>404</h1>
        <div className='flex  gap-2'>
          <h2 className='text-richblack-50 font-semibold text-3xl'>Page Not Found </h2>
          <BiError className='text-yellow-5 text-3xl' />
        </div>

        <p className='text-richblack-200'>We couldn't find the page you are looking for.</p>

        <img src={maleFigure} width="640px"/>

        <Link type='submit' to={"/"} className="text-center text-[13px] mt-3 px-6 py-3 rounded-md font-bold bg-yellow-50 text-black hover:scale-95 transition-all duration-200">
          Back to Home
        </Link>
    </div>
  )
}

export default Error