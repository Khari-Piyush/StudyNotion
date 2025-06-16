import React from 'react'

const IconBtn = ({
    text,
    onclick,
    children,
    disabled,
    outline=false,
    type,
}) => {
  return (
    <button
    disabled={disabled}
    onClick={onclick}
    type={type}
    className='  pl-2 pr-2 pt-1 pb-1 hover:scale-95 transition-all duration-200 text-richblack-900 font-bold'>
        {
            children ? (
                <>
                    <span>
                        {text}
                    </span>
                    {children}
                </>
            ) : (text)
        }
    </button>
  )
}

export default IconBtn