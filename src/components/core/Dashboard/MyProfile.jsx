import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import IconBtn from '../../common/IconBtn'
import { FaEdit } from "react-icons/fa";

const MyProfile = () => {
    const {user} = useSelector( (state) => state.profile )
    const navigate = useNavigate();

  return (
    <div className='text-white flex flex-col absolute left-[20%] w-6/12'>

        <h1 className='text-white text-4xl font-semibold pl-5 pb-5'>
            My Profile
        </h1>

        {/* Section - 1*/}
        <div className=' flex items-center bg-richblack-700 mt-5 mb-5 p-5 pl-7 pr-7 rounded-xl justify-between '>
            <div className='flex items-center justify-between gap-5'>
                <img 
                src={user?.image}
                alt={`profile-${user?.firstName}`}
                className='aspect-square w-[78px] rounded-full object-cover'/>

                <div className='flex flex-col'>
                    <p className='text-richblack-5 text-lg'>{user?.firstName + " " + user?.lastName}</p>
                    <p className='text-richblack-300 text-sm'>{user?.email}</p>
                </div>
            </div>

            <div className='flex bg-yellow-100 p-1 rounded-lg items-center justify-center pl-2'>
                    <FaEdit
                        className='text-richblack-900' 
                    />
                    <IconBtn
                        text="Edit"
                        onclick={ () => {
                        navigate("dashboard/settings")
                    }}/>
            </div>

                
        </div>

        {/* Section - 2 */}
        <div className=' flex flex-col bg-richblack-700 p-5 pl-7 pr-7 rounded-xl relative'>
            <div className='flex justify-between items-center w-full '>
                <p className='text-lg font-semibold '>About</p>
                <div className='flex bg-yellow-100 p-1 rounded-lg items-center justify-center pl-2'>
                    <FaEdit
                        className='text-richblack-900' 
                    />
                    <IconBtn
                        text="Edit"
                        onclick={ () => {
                        navigate("dashboard/settings")
                    }}/>
                </div>
            </div>

            {/* user?.additonalDetails?.about */}
            <p className='text-richblack-100 '>{user?.additionalDetails?.about ?? "Write something about yourself"}</p>
        </div>

        {/* Section-3 */}
        <div className=' flex flex-col bg-richblack-700 p-5 pl-7 pr-7 rounded-xl relative mt-5 gap-y-5 '>
            <div className='flex justify-between items-center w-full'>
                <p className='text-lg font-semibold '>Personal Details</p>
                <div className='flex bg-yellow-100 p-1 rounded-lg items-center justify-center pl-2'>
                    <FaEdit
                        className='text-richblack-900' 
                    />
                    <IconBtn
                        text="Edit"
                        onclick={ () => {
                        navigate("dashboard/settings")
                    }}/>
                </div>
            </div>

            <div className='flex flex-col gap-4'>
                {/* Name Div */}
                <div className='flex items-center gap-x-72'>
                    <div className='flex flex-col'>
                        <p className='text-richblack-200'>First Name</p>
                        <p className='text-richblack-5'>{user?.firstName}</p>
                    </div>
                    <div>
                        <p className='text-richblack-200'>Last Name</p>
                        <p>{user?.lastName}</p>
                    </div>
                </div>
                
                {/* Email and phone div */}
                <div className='flex gap-x-[138px]'>
                    <div>
                        <p className='text-richblack-200'>Email</p>
                        <p>{user?.email}</p>
                    </div>
                    <div>
                        <p className='text-richblack-200'>Phone Number</p>
                        <p>{user?.additionalDetails?.contactNumber ?? "Add contact number"}</p>
                    </div>
                </div>

                {/* Gender and DOB */}
                <div className=' flex gap-x-[310px]'>
                    <div>
                        <p className='text-richblack-200'>Gender</p>
                        <p>{user?.additionalDetails?.gender ?? "Add gender"}</p>
                    </div>
                    
                    <div>
                        <p className='text-richblack-200'>Date of Birth</p>
                        <p>{user?.additionalDetails?.dateOfBirth ?? "Add Date of Birth"}</p>
                    </div>
                </div>
            </div>

        </div>
    </div>
  )
}

export default MyProfile