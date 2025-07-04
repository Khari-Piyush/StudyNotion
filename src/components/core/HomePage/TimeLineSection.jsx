import React from 'react'

import { TfiLineDotted } from 'react-icons/tfi';
import Logo1 from "../../../assets/TimeLineLogo/Logo1.svg";
import Logo2 from "../../../assets/TimeLineLogo/Logo2.svg";
import Logo3 from "../../../assets/TimeLineLogo/Logo3.svg";
import Logo4 from "../../../assets/TimeLineLogo/Logo4.svg";
import timelineImage from "../../../assets/Images/TimelineImage.png";

const timeline = [
    {
        Logo: Logo1,
        heading: "Leadership",
        Description: "Fully committed to the success of the company",
    },
    {
        Logo: Logo2,
        heading: "Responsibility",
        Description: "Student will always be our top priority",
    },
    {
        Logo: Logo3,
        heading: "Flexibility",
        Description: "The ability to switch is an improtant skill",
    },
    {
        Logo: Logo4,
        heading: "Solve the problem",
        Description: "Code your way to a solution",
    },
]

const TimeLineSection = () => {
    return (

        <div>

            <div className='flex flex-row gap-15 items-center'>

                <div className='w-[45%] flex flex-col gap-16'> {
                    timeline.map((element, index) => {
                        return (
                            <div className='flex flex-row gap-6 relative' key={index}>
                                {index !== timeline.length - 1 && (
                                    <TfiLineDotted className='absolute rotate-90 text-4xl top-16 left-2 text-richblack-100 ' />
                                )}
                                
                                <div className=' relative z-10 w-[50px] h-[50px] bg-white flex rounded-full shadow-md items-center justify-center text-xl '>

                                    <img src={element.Logo} />

                                </div>
                                
                                <div className='relative z-10'>
                                    <h2
                                        className='font-semibold text-[18px]'>{element.heading}</h2>
                                    <p className='text-base'>{element.Description}</p>
                                </div>

                            </div>
                        )
                    })
                }
                </div>

                <div className=' relative '>

                    <div className='relative '>
                        <img src={timelineImage} className='pr-4 shadow-lg object-cover h-fit relative z-10' />

                        <div className="w-[100%] h-[150px] top-[35%] absolute blur-3xl bg-gradient-to-r from-[#9CECFB] via-[#65C7F7] to-[#0052D4]"/>
                    </div>

                    <div className='absolute z-10 bg-caribbeangreen-700 flex flex-row text-white uppercase py-7 left-[50%] translate-x-[-50%] translate-y-[-50%]'>

                        <div className='flex flex-row gap-5 items-center border-r border-caribbeangreen-300 px-7'>

                            <p className='text-3xl font-bold'>10</p>
                            <p className='text-caribbeangreen-300 text-sm'>Years of Experience</p>

                        </div>

                        <div className='flex gap-5 items-center px-7'>
                            <p className='text-3xl font-bold'>250</p>

                            <p className='text-caribbeangreen-300 text-sm'>Type of Courses</p>
                        </div>

                    </div>
                </div>

            </div>

        </div>

    )
}

export default TimeLineSection