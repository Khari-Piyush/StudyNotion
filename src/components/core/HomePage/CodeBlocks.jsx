import React from 'react'
import CTAButton from "../HomePage/Button"
import { FaArrowRight } from 'react-icons/fa'
import HighlightText from './HighlightText'
import { TypeAnimation } from 'react-type-animation'

const CodeBlocks = ({
  position,heading, subheading, ctabtn1, ctabtn2, codeblock, backgroundGradient, codeColor,section
}) => {
  return (
    <div className={`flex ${position} mx-20 my-20 justify-center gap-20 `}>
      
      {/* Section 1 */}
      <div className='w-[50%] flex flex-col gap-8'>
        {heading}

        <div className='text-richblack-300 font-bold'>
          {subheading}
        </div>

        <div className='flex gap-7 mt-7'>

          <CTAButton active={ctabtn1.active} linkto={ctabtn1.linkto}>
            <div className='flex gap-2 items-center'>
              {ctabtn1.btnText}
              <FaArrowRight/>
            </div>
          </CTAButton>

          <CTAButton active={ctabtn2.active} linkto={ctabtn2.linkto}>
              {ctabtn2.btnText}
          </CTAButton>


        </div>

      </div>

      {/* Section 2 */}
      <div className='h-fit flex flex-row text-[14px] w-[50%] py-4 relative bg-gradient-to-r from-richblack-900/20 to-richblack-900 '>
        
        {/* Hw BG GRADIENT */}
        <div
          className={`w-72 h-72 absolute blur-3xl opacity-25 top-0 right-84 bg-gradient-to-r ${
            section === 1
              ? 'from-[#8A2BE2] via-[#FFA500] to-[#F8F8FF]'
              : 'from-[#1FA2FF] via-[#12D8FA] to-[#A6FFCB]'
          }`}
        />




        <div className='text-center flex flex-col w-[10%] text-richblack-400 font-inter font-bold'>
          <p>1</p>
          <p>2</p>
          <p>3</p>
          <p>4</p>
          <p>5</p>
          <p>6</p>
          <p>7</p>
          <p>8</p>
          <p>9</p>
          <p>10</p>
          <p>11</p>
        </div>

        <div className='w-full h-full relative'>
          <div className={`absolute w-[90%] flex flex-col gap-2 font-bold font-mono ${codeColor} pr-2 `}>
            <TypeAnimation
            sequence={[codeblock, 2000, ""]}
            repeat={Infinity}
            cursor={true}
            style={
              {
                whiteSpace: "pre-line",
                display:"block",

              }
            }
            omitDeletionAnimation={true}
            />
          </div>
        </div>

      </div>

    </div>
  )
}

export default CodeBlocks