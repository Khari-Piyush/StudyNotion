import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import IconBtn from '../components/common/IconBtn'

const MyProfile = () => {
    const {user} = useSelector( (state) => state.profile )
    const navigate = useNavigate();

  return (
    <div className='text-white flex flex-col items-center justify-center w-full'>
        <h1 className='text-white text-4xl font-semibold pl-5'>
            My Profile
        </h1>

        {/* Section - 1*/}
        <div>
            <div>
                <img 
                src={user?.image}
                alt={`profile-${user?.firstName}`}
                className='aspect-square w-[78px] rounded-full object-cover'/>

                <div>
                    <p>{user?.firstName + " " + user?.lastName}</p>
                    <p>{user?.email}</p>
                </div>
            </div>

            <IconBtn
            text="Edit"
            onclick={ () => {
                navigate("dashboard/settings")
            }}/>
        </div>

        {/* Section - 2 */}
        <div>
            <div>
                <p>About</p>
                <IconBtn
                text="Edit"
                onclick={ () => {
                    navigate("dashboard/settings")
                }}/>
            </div>

            {/* user?.additonalDetails?.about */}
            <p>{user?.additionalDetails?.about ?? "Write something about yourself"}</p>
            
        </div>

        {/* Section-3 */}
        <div>
            <div>
                <p>Personal Details</p>
                <IconBtn
                text="Edit"
                onclick={ () => {
                    navigate("dashboard/settings")
                }}/>
            </div>

            <div>
                <div>
                    <p>First Name</p>
                    <p>{user?.firstName}</p>
                </div>
                <div>
                    <p>Email</p>
                    <p>{user?.email}</p>
                </div>
                <div>
                    <p>Gender</p>
                    <p>{user?.additionalDetails?.gender ?? "Add gender"}</p>
                </div>
                <div>
                    <p>Last Name</p>
                    <p>{user?.lastName}</p>
                </div>
                <div>
                    <p>Phone Number</p>
                    <p>{user?.additionalDetails?.contactNumber ?? "Add contact number"}</p>
                </div>
                <div>
                    <p>Date of Birth</p>
                    <p>{user?.additionalDetails?.dateOfBirth ?? "Add Date of Birth"}</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default MyProfile