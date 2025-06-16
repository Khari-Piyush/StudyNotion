import React from 'react'
import IconBtn from './IconBtn'

const ConfirmationModal = ( {modalData}) => {
  return (
    <div className='absolute top-[30%] left-[40%] '>
        <div className='flex flex-col bg-yellow-50 p-10 rounded-xl gap-2 '>
            <p className='text-3xl font-bold text-richblack-800'>
                {modalData.text1}
            </p>
            <p className='text-xl text-richblack-800'>
                {modalData.text2}
            </p>

            <div className='flex gap-4 '>
                <IconBtn
                    onclick={modalData?.btn1Handler}
                    text = {modalData?.btn1Text}
                    
                />

                <button onClick={modalData?.btn2Handler}>
                    {modalData?.btn2Text}
                </button>
            </div>
            
        </div>
    </div>
  )
}

export default ConfirmationModal