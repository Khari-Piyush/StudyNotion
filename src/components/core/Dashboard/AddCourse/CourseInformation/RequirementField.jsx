import React, { useEffect, useState } from 'react'

const RequirementField = ({name, label, register, errors, setValue, getValues}) => {
    const [requirement, setRequirement] = useState("");
    const [requirementList, setRequirementList] = useState([]);

    useEffect (() => {
        register(name, {
            required:true,
            validate: (value) => value.length > 0
        })
    },[])

    useEffect( () => {
        setValue(name, requirementList)
    },[requirementList])

    const handleAddRequirement = () => {
        if(requirement) {
            setRequirementList([...requirementList, requirement]);
            setRequirement("");
        }
    }

    const handleRemoveRequirement = (index) => {
        const updatedRequirementlist = [...requirementList];
        updatedRequirementlist.splice(index,1);
        setRequirementList(updatedRequirementlist);
    }

    
  return (
    <div >
        <label htmlFor={name}>{label}<sup className='text-pink-200 text-sm'>*</sup></label>
        <div className='flex flex-col justify-center items-start gap-2'>
            <input
                type='text'
                id={name}
                value={requirement}
                onChange={ (e) => setRequirement(e.target.value)}
                style={{
                            boxShadow: "inset 0px -1px 0px rgba(255,255,255, 0.18)",
                        }}
                className="form-style w-full"
            />
            <button
            type='button'
            onClick={handleAddRequirement}
            className='pl-2 pr-2 pt-1 pb-1 hover:scale-95 transition-all duration-200 text-yellow-50 font-bold'>
                ADD
            </button>
        </div>
        {
            requirementList.length > 0 && (
                <ul>
                    {
                        requirementList.map((requirement, index) => (
                            <li key={index} className='flex items-center pl-2 text-richblack-5 gap-5 text-sm'>
                                <span>{requirement}</span>
                                <button
                                type='button'
                                onClick={()=> handleRemoveRequirement(index)}
                                className='text-xs text-pure-greys-300 hover:text-richblack-25'>
                                    Clear
                                </button>
                            </li>
                        ))
                    }
                </ul>
            )
        }
        {
            errors[name] && (
                <span>
                    {label} is required
                </span>
            )
        }
    </div>
  )
}

export default RequirementField