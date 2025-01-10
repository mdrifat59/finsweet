import React, { useState } from 'react'
import { VactorIcon } from '../../svg/Vactor'
import { Link, NavLink } from 'react-router-dom'
import { IoIosMenu } from 'react-icons/io'

const Navbar = () => {
    const [isOpenMenu, setIsOpenMenu] = useState(false)
    let menuData = [
        {
            id: 0,
            text: "Home",
            url: "/",
            dropdown: null,
        },
        {
            id: 1,
            text: "ABOUT US",
            url: "/about",
            dropdown: null,
        },
        {
            id: 2,
            text: "SERMON",
            url: "/sermon",
            dropdown: null,
        },
        {
            id: 3,
            text: "BLOG",
            url: "/blog",
            dropdown: null,
        },
    ]
    const handleOneClick = () => {
        setIsOpenMenu(!isOpenMenu)
    }
    return (
        <>
            <nav className='bg-[#0D0D0D] md:py-3'>
                <div className='w-full px-4 sm:px-8 lg:max-w-container lg:mx-auto '>
                    <div className='grid grid-cols-2 md:grid-cols-3 py-3 md:justify-between md:items-center'>
                        <div className='w-full '>
                            <Link to='/'>
                                <VactorIcon />
                            </Link>
                        </div>
                        <div className='w-full hidden xl:block'>
                            <ul className='flex gap-x-12 justify-start'>
                                {
                                    menuData.map((item, index) => (
                                        <li key={index}>
                                            <div className='font-Roboto_Regular text-base text-[#FFFFFF] uppercase relative after:absolute after:content-[""] after:bottom-[-2px] after:left-0 after:w-0 after:h-px after:bg-white after:transition-all after:duration-300 hover:after:w-full'>
                                                <NavLink to={item.url} >
                                                    {item.text}
                                                </NavLink>
                                            </div>
                                        </li>

                                    ))
                                }
                            </ul>
                        </div>
                        {/* short menu */}

                        <div className=" h-[30px]   md:h-[40px]  xl:hidden  flex justify-end md:justify-center items-center cursor-pointer" onClick={handleOneClick}>
                            <IoIosMenu color='white' size={25} />
                        </div>
                        {
                            isOpenMenu &&
                            <div className='xl:hidden absolute top-[50px] md:top-[90px] left-0 w-full bg-[#1e1e1e] p-5 shadow-lg z-[999] transition-all duration-300 content-[""]'>
                                <div className='flex flex-col items-start md:items-center gap-5 text-white'>

                                    <ul className='text-[#FFFFFF] grid gap-2 '>
                                        {
                                            menuData.map((item, index) => (
                                                <li key={index}>
                                                    <div className='font-Roboto_Regular text-base text-[#FFFFFF] uppercase relative after:absolute after:content-[""] after:bottom-[-2px] after:left-0 after:w-0 after:h-px after:bg-white after:transition-all after:duration-300 hover:after:w-full'>
                                                        <NavLink to={item.url} >
                                                            {item.text}
                                                        </NavLink>
                                                    </div>
                                                </li>

                                            ))
                                        }
                                    </ul>
                                    <div className='md:hidden '>
                                        <button className='w-[150px] font-Roboto-Bold py-3 px-6 text-[#1C1D28] bg-[#FFD2A4] uppercase text-base'>CONTACT US</button>
                                    </div>
                                </div>
                            </div>


                        }
                        <div className='w-full flex md:justify-end  justify-center '>
                            <Link to="/contact">
                                <button className='w-[120px] lg:w-[180px] py-3 lg:py-5 hidden md:block text-[#1C1D28]  bg-[#FFD2A4] font-Roboto_Regular rounded-xl '>CONTACT US</button>
                            </Link>
                        </div>
                    </div>

                </div>
            </nav>
        </>
    )
}

export default Navbar