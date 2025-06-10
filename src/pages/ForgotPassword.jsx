import React, { useState } from 'react'
import { FaArrowLeft } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import { getPasswordResetToken } from '../services/operations/authApi';

const ForgotPassword = () => {

    const [emailSent, setEmailSent] =  useState(false);
    const [email, setEmail] = useState("");
    const {loading} = useSelector( (state) => state.auth );
    const dispatch = useDispatch();

    const handleOnSubmit = (e) => {
        e.preventDefault();
        dispatch(getPasswordResetToken(email,setEmailSent));
    }
    
  return (
    <div className='flex items-center justify-center h-[640px]'>
        {
            loading ? (
                <div className="spinner"></div>
            ) : (
                <div className='flex flex-col gap-2'>
                    <h1 className='text-richblack-5 text-3xl font-semibold'>
                        {
                            !emailSent ? "Reset Your Password" : "Check Your Email"
                        }
                    </h1>

                    <p className='text-richblack-200 w-[400px] text-lg'>
                        {
                            !emailSent ? 
                            "Have no fear. We'll email you instructions to reset your password. If you dont have access to your email we can try account recovery" 
                            : `We have sent the reset email to: ${email}`
                        }
                    </p>

                    <form 
                    onSubmit={handleOnSubmit}
                    className='mt-6 flex justify-center w-full flex-col gap-y-4'>
                        {
                            !emailSent && (
                                <label>
                                    <p className='mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-5'>Email Address 
                                        <span className='text-pink-200'>*</span>
                                    </p>
                                    <input
                                    style={{
                                        boxShadow: "inset 0px -1px 0px rgba(255,255,255,0.18)",
                                    }}
                                    className="w-full rounded-[0.5rem] bg-richblack-800 p-[12px] text-richblack-5"
                                    required
                                    type='email'
                                    name='email'
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder='Enter email Address'
                                    />
                                </label>
                            )
                        }

                        <button className='bg-[#FFD60A] pt-2 pb-2 pl-10 pr-10 rounded-lg text-lg font-semibold' type='submit'>
                            {
                                !emailSent ? "Reset Password" : "Resend Email"
                            }
                        </button>
                    </form>

                    <div>
                        <Link to="/login" className='flex gap-2 items-center pt-4'>
                            <FaArrowLeft className='text-richblack-50'/>
                            <p className='text-richblack-50'>Back to login</p>
                        </Link>
                    </div>
                </div>
            )
        }
    </div>
  )
}

export default ForgotPassword