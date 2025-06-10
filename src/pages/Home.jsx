import React from 'react'
import { Link } from 'react-router-dom'
import { FaArrowRight } from 'react-icons/fa'
import HighlightText from '../components/core/HomePage/HighlightText'
import CodeBlocks from '../components/core/HomePage/CodeBlocks'

import CTAButton from '../components/core/HomePage/Button'
import Banner from "../assets/Images/banner.mp4"

import TimeLineSection from '../components/core/HomePage/TimeLineSection'

import LearningLanguageSection from '../components/core/HomePage/LearningLanguageSection'
import InstructorSection from '../components/core/HomePage/InstructorSection'
import Footer from '../components/common/Footer'
import ExploreMore from '../components/core/HomePage/ExploreMore'

const Home = () => {
  return (
    <div>
        {/* Section 1 */}
        <div className='relative mx-auto flex flex-col w-11/12 items-center text-white justify-between max-w-maxContent '>

            {/* BECOME INSTRUCTOR BUTTON */}
            <Link to ={"/signup"}>
                <div className='group mt-16 p-1 mx-auto rounded-full bg-richblack-800 font-bold text-richblack-200 transition-all duration-200 hover:scale-95 w-fit'  >
                    {/* button */}
                    <div className='flex flex-row items-center gap-2 rounded-full px-10 py-[5px] transition-all duration-200 group-hover: bg-richblack-900'  >
                        {/* content */}
                        <p>Become an Instructor</p>
                        <FaArrowRight/>
                    </div>
                </div>
            </Link>

            {/* HEADING -1 DIV */}
            <div className='text-center text-4xl font-semibold mt-7'>
                Empower Your Future with
                <HighlightText text = {"Coding Skills"} />
            </div>

            {/* PARA 1 DIV */}
            <div className='mt-4 w-[90%] text-center text-lg font-bold text-richblack-200'>
                With our online coding courses, you can learn at your own pace, from anywhere in the world, and get access to a wealth of resources, including hands-on projects, quizzes, and personalized feedback from instructors. 
            </div>

            {/* Phele do button */}
            <div className='flex flex-row gap-7 mt-8'>
                <CTAButton active={true} linkto={"/signup"}>
                    Learn More
                </CTAButton>
                <CTAButton active={false} linkto={"/login"}>
                    Book a Demo
                </CTAButton>
            </div>

            {/* Video wala div */}
            <div className='mx-3 my-12 relative '>

                <div className="w-[100%] h-full absolute blur-xl bg-gradient-to-r from-[#9CECFB] via-[#65C7F7] to-[#0052D4]"/>
                <div className='absolute top-4 bg-white h-[100%] w-[100%] left-4'></div>
                <video muted loop autoPlay className='relative border-[1px] border-black '>
                    <source src={Banner} type='video/mp4'/>
                </video>
                
                
            </div>

            <div className="flex flex-col">
                {/* Code Section 1 */}
                <div className='flex justify-between'>
                    <CodeBlocks 
                        position={"lg:flex-row "}
                        heading={
                            <div className='text-4xl font-semibold w-[70%]'>
                                Unlock Your
                                <HighlightText text={"coding potential"}/>
                                with our Online Courses
                            </div>

                        }
                        subheading={
                            <div className='w-[85%]'>
                                Our courses are designed and taught by industry experts who have years of experience in coding and are passionate about sharing their knowledge with you.
                            </div>
                        }  
                        ctabtn1={
                            {
                                btnText: "Try it Yourself",
                                linkto: "/signup",
                                active: true, 
                            }
                        }
                        ctabtn2={
                            {
                                btnText: "Learn More",
                                linkto: "/login",
                                active: false, 
                            }
                        }
                        codeblock={`<!DOCTYPE html>\n<html>\nhead><title>Example</\ntitle><linkrel="stylesheet"href="styles.css">\n/head>\nbody>\nh1><ahref="/">Header</a>\n/h1>\nnav><ahref="one/">One</a><ahref="two/">Two</\na><ahref="three/">Three</a>\n/nav>`}
                        codeColor={"bg-gradient-to-r from-[white] via-[#D43D63] to-[#E7BC5B] bg-clip-text text-transparent"}
                        section={1}
                    
                    />
                </div>

                {/* Code Section 2 */}
                <div className='flex justify-between'>
                    <CodeBlocks
                        position={"lg:flex-row-reverse"}
                        heading={
                            <div className='text-6xl font-semibold w-[100%]'>
                                Start
                                <HighlightText text={"coding in seconds"}/>
                            </div>

                        }
                        subheading={
                            <div className='w-[100%]'>
                                Go ahead, give it a try. Our hands-on learning environment means you'll be writing real code from your very first lesson.
                            </div>
                        }  
                        ctabtn1={
                            {
                                btnText: "Try it Yourself",
                                linkto: "/signup",
                                active: true, 
                            }
                        }
                        ctabtn2={
                            {
                                btnText: "Learn More",
                                linkto: "/login",
                                active: false, 
                            }
                        }
                        codeblock={`<!DOCTYPE html>\n<html>\nhead><title>Example</\ntitle><linkrel="stylesheet"href="styles.css">\n/head>\nbody>\nh1><ahref="/">Header</a>\n/h1>\nnav><ahref="one/">One</a><ahref="two/">Two</\na><ahref="three/">Three</a>\n/nav>`
                        }
                        codeColor={"bg-gradient-to-r from-[white] via-[#D43D63] to-[#E7BC5B] bg-clip-text text-transparent"}
                        section={2}
                    />
                </div>
            </div>
            
            <div className='flex flex-col'>
                <ExploreMore/>
            </div>

        </div>


        {/* Section 2 */}
        <div className='bg-pure-greys-5 text-richblack-700 '> 
            
            {/* First Div */}
            <div className='homepage_bg h-[310px]'>

                <div className='w-11/12 max-w-maxContent flex flex-col items-center gap-5 mx-auto justify-between'>

                    <div className=' h-[150px]'></div>

                        <div className='flex flex-row gap-7 text-white'>
                            {/* FIRST BUTTON */}
                            <CTAButton
                            active={true} linkto = {"/signup"}>

                                <div className='flex items-center gap-3'>
                                    Explore Full Catalog
                                    <FaArrowRight />
                                </div>

                            </CTAButton>

                            {/* SECOND BUTTON */}
                            <CTAButton
                            active={false} linkto={"/login"}>
                                <div>
                                    Learn More
                                </div>

                            </CTAButton>
                        </div>

                    </div>

            </div>
            
            {/* Second Div -  */}
            <div className='w-11/12 max-w-maxContent flex flex-col items-center gap-5 mx-auto justify-between'>

                    <div className='flex flex-row mb-10 mt-[95px] gap-16 '>

                        <div className='text-4xl font-semibold w-[45%]'>
                            Get the Skills you need for a 
                            <HighlightText text={"Job that is in demand"}/>
                        </div>

                        <div className='flex flex-col gap-10 w-[40%] items-start'>
                            <div className='text-16px'>
                                The modern StudyNotion dictates in its own terms. Today, to be a competitive specialist requires more than professional skills.
                            </div>

                            <CTAButton active={true} linkto={"/signup"}>
                                <div>
                                    Learn More
                                </div>
                            </CTAButton>
                        </div>
                        
                    </div>

                    <TimeLineSection/>

                    <LearningLanguageSection/>
            </div>

        </div>
        
        {/* Section 3 */}
        <div className='w-11/12 mx-auto max-w-maxContent flex flex-col items-center justify-between gap-8 first-letter bg-richblack-900 text-white'>
                    
                    <InstructorSection/>

                    <h2 className='text-center text-4xl font-semibold mt-10'>Review from Other Learners</h2>

                    {/* Review Slider */}

        </div>

        {/* Footer */}
        <Footer/>
    </div>
  )
}

export default Home