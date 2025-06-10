import React from 'react'
const Stats = [
    {count:'5K',  label:"Active Students"},
    {count:'10+',  label:"Mentors"},
    {count:'200+',  label:"Courses"},
    {count:'50+',  label:"Awards"},
];

const StatsComponent = () => {
    
  return (
    <section>

        <div className='flex items-center justify-center'>

            <div className='flex gap-64'>
                {
                    Stats.map ( (data,index) => {
                        return (
                            <div key={index} className='flex flex-col justify-center items-center'>
                                <h1 className='text-[30px] text-richblack-5 font-bold'>
                                    {data.count}
                                </h1>
                                <h2 className='text-[16px] text-richblack-400'>
                                    {data.label}
                                </h2>
                            </div>
                        )
                    })
                }
            </div>

        </div>

    </section>
  )
}

export default StatsComponent