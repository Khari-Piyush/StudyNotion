import React from 'react'
import HighlightText from '../components/core/HomePage/HighlightText'
import BannerImage1 from '../assets/Images/aboutus1.webp'
import BannerImage2 from '../assets/Images/aboutus2.webp'
import BannerImage3 from '../assets/Images/aboutus3.webp'
import Quote from '../components/core/AboutPage/Quote'
import FoundingStory from '../assets/Images/FoundingStory.png'
import StatsComponent from '../components/core/AboutPage/StatsComponent'
import LearningGrid from '../components/core/AboutPage/LearningGrid'
import ContactFormSection from '../components/core/AboutPage/ContactFormSection'
import Footer from "../components/common/Footer"

const About = () => {
  return (
    <div className='flex flex-col items-center '>

        {/* Section - 1 */}
        <div className=' flex flex-col items-center justify-center w-full pt-20 bg-richblack-700 rel'>

            <div className='relative flex flex-col '>
                <h1 className='text-richblack-5 text-4xl font-semibold w-[800px] text-center m-2'>Driving Innovation in Online Education for a 
                  <HighlightText text={"Brighter Future"}/>
              </h1>

              <p className='text-richblack-300 w-[800px] text-center text-[1rem] m-2'>Studynotion is at the forefront of driving innovation in online education. We're passionate about creating a brighter future by offering cutting-edge courses, leveraging emerging technologies, and nurturing a vibrant learning community.</p>
            </div>

            <div className='h-[260px]'></div>

            <div className="flex justify-center gap-x-8 mx-auto py-8 absolute bottom-1">
              <img src={BannerImage1} className=" object-cover " />
              <img src={BannerImage2} className=" object-cover " />
              <img src={BannerImage3} className=" object-cover " />
            </div>

        </div>

        {/* Section - 2 */}
        <div className='pt-32 pb-44'>
          <Quote/>
          <div className='border-richblack-600 border-b-[1px] mt-16'></div>
        </div>

        {/* Section - 3 */}
        <div>
          {/* FOUNDING STORY SECTION */}
          <div className='flex w-10/12 mx-auto items-center justify-center pb-64'>

            <div className='flex flex-col gap-10'>

              <h2 className='bg-gradient-to-b from-[#833AB4] via-[#FD1D1D] to-[#FCB045] bg-clip-text text-transparent text-3xl font-bold'>Our Founding Story</h2>

              <p className='text-richblack-400 w-[65%]'>Our e-learning platform was born out of a shared vision and passion for transforming education. It all began with a group of educators, technologists, and lifelong learners who recognized the need for accessible, flexible, and high-quality learning opportunities in a rapidly evolving digital world.</p>

              <p className='text-richblack-400 w-[65%]'>As experienced educators ourselves, we witnessed firsthand the limitations and challenges of traditional education systems. We believed that education should not be confined to the walls of a classroom or restricted by geographical boundaries. We envisioned a platform that could bridge these gaps and empower individuals from all walks of life to unlock their full potential.</p>

            </div>

            <div className='relative w-full'>
              <div className="w-[372.95px] h-[257.05px] absolute blur-2xl top-3 left-3 bg-gradient-to-r from-[#EC008C] to-[#FC6767]"/>
              <img src={FoundingStory} width={"534px"} height={"342px"} className='relative'/>
            </div>

          </div>

          {/* VISION MISSION SECTION */}
          <div className='flex gap-52 w-10/12 mx-auto items-center justify-center pb-20'>

            {/* VISION */}
            <div className='flex flex-col gap-16'>

              <h2 className='bg-gradient-to-b from-[#FF512F] to-[#F09819] bg-clip-text text-transparent text-4xl font-semibold'>Our Vision</h2>

              <p className='text-richblack-400'>With this vision in mind, we set out on a journey to create an e-learning platform that would revolutionize the way people learn. Our team of dedicated experts worked tirelessly to develop a robust and intuitive platform that combines cutting-edge technology with engaging content, fostering a dynamic and interactive learning experience.</p>

            </div>

            {/* MISSION */}
            <div className='flex flex-col gap-16'>

              <h2 className='bg-gradient-to-b from-[#1FA2FF] via-[#12D8FA] to-[#A6FFCB] bg-clip-text text-transparent text-4xl font-semibold'>Our Misson</h2>

              <p className='text-richblack-400'>Our mission goes beyond just delivering courses online. We wanted to create a vibrant community of learners, where individuals can connect, collaborate, and learn from one another. We believe that knowledge thrives in an environment of sharing and dialogue, and we foster this spirit of collaboration through forums, live sessions, and networking opportunities.</p>
            </div>
          </div>

        </div>

        {/* SECTION-4 */}
        <div className='bg-richblack-700 w-full flex items-center justify-center p-4'>
          <StatsComponent/>
        </div>

        {/* Section - 5 */}
        <section className='flex mx-auto items-center justify-center flex-col gap-5 mb-20'>
          <LearningGrid/>
          <ContactFormSection/>
        </section>

        <section>
          <div className='text-richblack-50 text-bold text-4xl font-semibold'>
            Review from other learners
          </div>
        </section>

        <div className='w-full'>
          <Footer/>
        </div>


        
    </div>
  )
}

export default About