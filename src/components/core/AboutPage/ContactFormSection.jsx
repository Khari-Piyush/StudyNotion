import React from 'react'
import ContactUsForm from '../ContactPage/ContactUsForm'

const ContactFormSection = () => {
  return (
    <div className='flex flex-col items-center justify-center gap-4'>
        <h1 className='text-richblack-50 font-semibold text-4xl'>Get in Touch</h1>
        <p className='text-richblack-300 text-base'>We'd love to here for you, Please fill out this form.</p>

        <div className=''>
            <ContactUsForm/>
        </div>
    </div>
  )
}

export default ContactFormSection