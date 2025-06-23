import React from 'react'
import { FaCheck } from 'react-icons/fa';
import { useSelector } from 'react-redux'
import CourseInformationForm from './CourseInformation/CourseInformationForm';
import CourseBuilderForm from './CourseBuilder/CourseBuilderForm';

const RenderSteps = () => {
    const {step} =  useSelector( (state) => state.course);
    const steps = [
        {
            id: 1,
            title: "Course Information",
        },
        {
            id: 2,
            title: "Course Builder",
        },
        {
            id: 3,
            title: "Publish",
        }
    ]
  return (
    <>
    <div className='flex items-center justify-around'>
        {steps.map( (item) => (
            <>
                <div className='flex items-center justify-center'>
                    <div 
                        className={`flex  items-center  justify-center rounded-full h-10 w-10 text-lg ${step === item.id 
                        ? "bg-yellow-900 border-yellow-5 border-[1px] text-yellow-50" 
                        : "border-richblack-700 bg-richblack-800 text-richblack-300"}
                    `}>
                        {
                            step > item.id ? (<FaCheck />) : (item.id)
                        }
                    </div>
                </div>
                {/* code for dashes */}
            </>
        ) )}
    </div>

    <div className='flex items-center justify-around'>
        {
            steps.map ((item)=> (
                <>
                    <div className=''>
                        <p className='text-sm'>{item.title}</p>
                    </div>
                
                </>
            ))
        }
    </div>
    {
        step === 1 && <CourseInformationForm/>
    }
    {
        step === 2 && <CourseBuilderForm/>
    }
    {/* {
        step === 3 && <PublishCourse/>
    } */}
    </>
  )
}

export default RenderSteps