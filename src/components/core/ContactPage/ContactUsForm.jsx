import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
import { apiConnector } from '../../../services/apiConnector';
import { contactusEndpoint } from '../../../services/apis';
import CountryCode from "../../../data/countrycode.json"

const ContactUsForm = () => {
    const [loading, setLoading] = useState(false);
    const {
        register,
        handleSubmit,
        reset,
        formState: {errors, isSubmitSuccessful}
    } = useForm();

    // Services ke andar operation ke andar iss ko likhna tha
    const submitContactForm = async(data) => {
        console.log("Logging Data", data);
        try{

            setLoading(true);
            const response = await apiConnector("POST", contactusEndpoint.CONTACT_US_API,data);
            console.log("logging Response", response);
            setLoading(false);

        }catch(error) {
            console.log("Error:", error.message)
            setLoading(false);
        }
    }

    useEffect ( () => {
        if(isSubmitSuccessful) {
            reset({
                email:"",
                firstname:"",
                lastname:"",
                message:"",
                countrycode:"",
                phoneNo:"",

            })
        }
    },[reset,isSubmitSuccessful]);
  return (
    <form onSubmit={handleSubmit(submitContactForm)}>
        <div className='flex gap-5 flex-col justify-center mt-4'>

            {/* Name */}
            <div className='flex gap-5'>
                {/* First name */}
                <div className='flex flex-col gap-2'>
                    <label htmlFor='firstname' className='text-richblack-100 font-semibold text-[14px]'>First Name</label>
                    <input
                        type='text'
                        name='firstname'
                        id='firstname'
                        placeholder='Enter first name'
                        {...register("firstname", {required:true})}
                        style={{
                            boxShadow: "inset 0px -1px 0px rgba(255,255,255, 0.18)",
                        }}
                        className="form-style"

                    />
                    {
                        errors.firstname && (
                            <span>
                                Please enter your name
                            </span>
                        )
                    }
                </div>

                {/* Last name */}
                <div className='flex flex-col gap-2'>
                    <label htmlFor='lastname' className='text-richblack-100 font-semibold text-[14px]'>Last Name</label>
                    <input
                        type='text'
                        name='lastname'
                        id='lastname'
                        placeholder='Enter last name'
                        {...register("lastname")}
                        style={{
                            boxShadow: "inset 0px -1px 0px rgba(255,255,255, 0.18)",
                        }}
                        className="form-style"
                    
                    />
                </div>
            </div>
            
            {/* Email Address */}
            <div className='flex flex-col gap-2'>
                <label className='text-richblack-100 font-semibold text-[14px]'>Email Address</label>
                <input
                    type='email'
                    name='email'
                    id='email'
                    placeholder='Enter email address'
                    // iska mtlb hai iss field ki state ko maintain karna hai aur yeh particular validation lagani hai
                    {...register("email", {required:true})}
                    style={{
                            boxShadow: "inset 0px -1px 0px rgba(255,255,255, 0.18)",
                        }}
                    className="form-style"
                />
                {
                    errors.email && (
                        <span>
                            Please enter your email address
                        </span>
                    )
                }
            </div>


            {/* Phone Number */}
            <div className='flex flex-col  gap-2'>
                <label htmlFor='phonenumber' className='text-richblack-100 font-semibold text-[14px]'>Phone Number</label>
                <div className='flex gap-5 justify-between'>
                    {/* Country Code */}
                    <div className='flex w-[81px] flex-col gap-2'>
                        <select
                            name='dropdown'
                            id='dropdown'
                            {...register("countrycode", {required:true})}
                            
                            style={{
                                boxShadow: "inset 0px -1px 0px rgba(255,255,255, 0.18)",
                             }}
                            className="form-style"
                        >
                            {
                                CountryCode.map( (element,index) => {
                                    return (
                                        <option selected={element.code === "+91"} key={index} value={element.code}>
                                            
                                            {element.code} - {element.country}
                                        </option>
                                    )
                                })
                            }
                        </select>
                    </div>

                    {/* Input Number waali */}
                    <div className='flex flex-col w-full'>
                        <input
                            type='number'
                            id='phonenumber'
                            name='phonenumber'
                            placeholder='12345 67890'
                            style={{
                                    boxShadow: "inset 0px -1px 0px rgba(255,255,255, 0.18)",
                                }}
                            className="form-style "
                            {...register("phoneNo", {
                                required:{value:true, message:"Please enter Phone Number"},
                                maxLength: {value:10, message:"Invalid Phone Number"},
                                minLength: {value:8, message:"Invalid Phone Number"}
                            })}
                        />{
                            errors.phoneNo && (
                                <span>
                                    {errors.phoneNo.message}
                                </span>
                            )
                        }
                    </div>
                    

                </div>
            </div>

            {/* message */}
            <div className='flex flex-col gap-2'>
                <label htmlFor='message' className='text-richblack-100 font-semibold text-[14px]'>Message</label>
                <textarea
                    name='message'
                    id='message'
                    cols="30"
                    rows="7"
                    placeholder='Enter your message here'
                    {...register("message", {required:true})}
                    style={{
                            boxShadow: "inset 0px -1px 0px rgba(255,255,255, 0.18)",
                        }}
                    className="form-style"

                />
                {
                    errors.message && (
                        <span>
                            Please enter your message
                        </span>
                    )
                }
            </div> 
        </div>
        
        {/* Send Message Button */}
        <button type='submit' className="mt-6 rounded-[8px] bg-yellow-50 py-[8px] px-[12px] font-medium text-richblack-900 w-full ">
                Send Message
        </button>

    </form>
  )
}

export default ContactUsForm