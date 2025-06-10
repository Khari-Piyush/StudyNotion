import React from 'react'
import HighlightText from '../HomePage/HighlightText';
import CTAButton from "../HomePage/Button"

const LearningGridArray = [
    {
      order: -1,
      heading: "World-Class Learning for",
      highlightText: "Anyone, Anywhere",
      description:
        "Studynotion partners with more than 275+ leading universities and companies to bring flexible, affordable, job-relevant online learning to individuals and organizations worldwide.",
      BtnText: "Learn More",
      BtnLink: "/",
    },
    {
      order: 1,
      heading: "Curriculum Based on Industry Needs",
      description:
        "Save time and money! The Belajar curriculum is made to be easier to understand and in line with industry needs.",
    },
    {
      order: 2,
      heading: "Our Learning Methods",
      description:
        "Studynotion partners with more than 275+ leading universities and companies to bring",
    },
    {
      order: 3,
      heading: "Certification",
      description:
        "Studynotion partners with more than 275+ leading universities and companies to bring",
    },
    {
      order: 4,
      heading: `Rating "Auto-grading"`,
      description:
        "Studynotion partners with more than 275+ leading universities and companies to bring",
    },
    {
      order: 5,
      heading: "Ready to Work",
      description:
        "Studynotion partners with more than 275+ leading universities and companies to bring",
    },
  ];


const LearningGrid = () => {



  return (
    <div className='grid mx-auto lg:grid-cols-4 grid-cols-1 mb-20 mt-20 w-10/12'>
        {
            LearningGridArray.map( (card,index) => {
                return(

                    <div
                    key={index}
                    className={`${index === 0 && "lg:col-span-2"}
                    ${ card.order === -1 && "bg-transparent"}
                    ${
                        card.order % 2 === 1 ? "bg-richblack-700" : "bg-richblack-800"
                    }
                    ${card.order === 3 && "lg:col-start-2"}
                    `}
                    >
                    {
                        card.order < 0 
                        ? (
                            <div className='w-[80%] p-4 flex flex-col gap-7'>

                                <div className='text-white font-bold text-4xl'>
                                    {card.heading}
                                    <HighlightText text={card.highlightText}/>
                                </div>

                                <p className='text-richblack-300 font-semibold'>{card.description}</p>

                                <div className='flex text-5xl font-bold' >
                                    <CTAButton active={true} linkto={card.BtnLink}>
                                        {card.BtnText}
                                    </CTAButton>
                                </div>
                            </div>
                        )
                        : (<div className='flex flex-col gap-5 pb-36 pt-10 pl-10 pr-10 justify-center '>
                            <h1 className='text-richblack-50 text-lg font-bold'>{card.heading}</h1>
                            <p className='text-richblack-400 font-semibold'>{card.description}</p>
                        </div>)
                    }
                    </div>
                )
            })
        }
    </div>
  )
}

export default LearningGrid