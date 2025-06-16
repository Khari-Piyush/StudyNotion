import React, { useState } from 'react'
import {sidebarLinks, SidebarLinks} from "../../../data/dashboard-links"
import {logout} from "../../../services/operations/authApi"
import { useDispatch, useSelector } from 'react-redux'
import SidebarLink from './SidebarLink'
import { VscSettingsGear, VscSignOut } from 'react-icons/vsc'
import { useNavigate } from 'react-router-dom'
import ConfirmationModal from '../../common/ConfirmationModal'

const Sidebar = () => {
    const {user, loading: profileLoading} = useSelector( (state) => state.profile);
    const {loading: authLoading} =  useSelector( (state) => state.auth);
    const [isBlurred, setIsBlurred] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [confirmationModal,setConfirmationModal ] = useState(null);



    if( profileLoading || authLoading ) {
        return(
            <div className="spinner"></div>
        )
    }



  return (
    <div>
        <div className='flex m-w-[222px] flex-col border-r-[1px] border-r-richblack-700 h-full bg-richblack-800 py-10 absolute left-0'>

            <div className='flex flex-col'>
                {
                    sidebarLinks.map( (link, index) => {
                        if(link.type && user?.accountType !== link.type ) return null;

                        return (
                            <SidebarLink key={link.id} link={link} iconName={link.icon}/>
                        )
                    })
                }
            </div>
            
            <div className='mx-auto mt-6 mb-6 h-[1px] w-10/12 bg-richblack-600'></div>

            <div className='flex flex-col relative '>
                <SidebarLink 
                    link={{name:"Settings", path:"dashboard/settings"}}
                    iconName="VscSettingsGear"
                />

                <button onClick={ () => {
                    setIsBlurred(true);
                    setConfirmationModal({
                    
                    text1: "Are you Sure ? ",
                    text2: "You will be logged out of your Account",
                    btn1Text: "Logout",
                    btn2Text: "Cancel",
                    btn1Handler: () => dispatch(logout(navigate)),
                    btn2Handler: () => {
                        setConfirmationModal(null);
                        setIsBlurred(false); // remove blur on cancel
                    },
                    
                })
            }} 
                className='text-sm font-medium text-richblack-300'>
                    <div className='flex items-center gap-x-2 text-richblack-50 py-2 px-8 '>
                        <VscSignOut className="text-lg" />
                        <span>Logout</span>
                    </div>
                </button>
            </div>

        </div>
        {confirmationModal && <ConfirmationModal modalData={confirmationModal} />}
    </div>
  )
}

export default Sidebar