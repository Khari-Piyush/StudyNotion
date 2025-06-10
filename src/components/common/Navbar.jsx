import React, { useEffect } from 'react'
import logo from "../../assets/Logo/Logo-Full-Light.png"
import { Link, matchPath } from 'react-router-dom'
import { NavbarLinks } from '../../data/navbar-links'
import { useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import ProfileDropDown from '../core/Auth/ProfileDropDown'
import { categories } from '../../services/apis'
import { apiConnector } from '../../services/apiConnector'
import { useState } from 'react'
import { IoIosArrowDown } from "react-icons/io";

const Navbar = () => {
    const {token} = useSelector( (state) => state.auth );
    const {user} = useSelector ((state) => state.profile); 
    const {totalItems} =  useSelector( (state) => state.cart);
    const location = useLocation();
    

    const [subLinks, setSubLinks] = useState([]);
    const fetchSubLinks = async() => {
            try{
                const result = await apiConnector("GET", categories.CATEGORIES_API);
                console.log("Printing SubLinks result:", result);
                setSubLinks(result.data.data);
            }
            catch(error) {
                console.log("Could not fetch the category list");
            }
        }

    useEffect ( () => {
        fetchSubLinks();
    },[] )

    const matchRoute = (route) => {
        return matchPath({path:route}, location.pathname);
    }


  return (
    <div className='flex h-14 items-center justify-center border-b-[1px] border-b-richblack-700'>
        <div className='flex w-11/12 max-w-maxContent items-center justify-between'>
            {/* Image */}
            <Link to="">
                <img src={logo} width={160} height={42} loading='lazy'/>
            </Link>

            {/* Navlinks */}
            <nav>
                <ul className='flex gap-x-6 text-[1.05rem]'>
                {
                    NavbarLinks.map( (link, index) => (
                        <li key={index} className='text-richblack-5'>
                            {
                                link.title === 'Catalog' ? (
                                    <div className='relative flex items-center gap-2 group z-10 cursor-pointer'>

                                        <p>{link.title}</p>

                                        <IoIosArrowDown />

                                        <div className='invisible absolute left-[50%] top-[50%] flex flex-col rounded-md bg-richblack-5 p-4 opacity-0 transition-all translate-x-[-50%] translate-y-[5%] duration-200 group-hover:visible group-hover:opacity-100 lg:w-[300px]'>
                                            <div className='absolute left-[50%] translate-x-[60%] translate-y-[-40%] top-0 h-6 w-8 rotate-45  bg-richblack-5 '>
                                            </div>

                                            {
                                                subLinks.length ? (
                                                    subLinks.map( (subLinks, index)  => (
                                                        <Link to={`${subLinks.link}`} key={index}>
                                                            <p className='hover:bg-richblack-50 rounded-md text-richblack-900 p-4 mt-[6px]'>{subLinks.name}</p>
                                                        </Link>
                                                    ) )
                                                ) : ( <div></div>)
                                            }
                                        </div>
                                    </div>
                                ) : (
                                    <Link to={link?.path}>
                                        <p className={`${matchRoute(link?.path) ? "text-yellow-25" : "text-richblack-25"}`}>
                                            {link.title}
                                        </p>
                                    </Link>
                                )
                            }
                        </li>
                    ))
                }
                </ul>
            </nav>

            {/* LOGIN/SIGNUP/DASHBOARD Buttons */}
            <div className='flex gap-x-4 items-center'>

                {
                    user && user?. accountType != "Instructor" && (
                        <Link to="/dashboard/cart" className='relative' >
                            <AiOutlineShoppingCart/>
                            {
                                totalItems > 0 && (
                                    <span>
                                        {totalItems}
                                    </span>
                                )
                            }
                        </Link>
                    )
                }

                {
                    token == null &&  (
                        <Link to="/login">
                            <button className='border border-richblack-700 bg-richblack-800 px-[12px] py-[6px] text-richblack-100 rounded-md'> 
                                Log In
                            </button>
                        </Link>
                    )
                }

                {
                    token == null &&  (
                        <Link to="/signup">
                            <button className='border border-richblack-700 bg-richblack-800 px-[12px] py-[6px] text-richblack-100 rounded-md'>
                                Sign Up
                            </button>
                        </Link>
                    )
                }

                {
                    token != null && <ProfileDropDown/>
                }




            </div>
        </div>
    </div>
  )
}

export default Navbar