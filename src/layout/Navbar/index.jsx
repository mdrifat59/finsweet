import React from 'react'
import { VactorIcon } from '../../svg/Vactor'
import { Link, NavLink } from 'react-router-dom'
import { IoIosMenu } from 'react-icons/io'

const Navbar = () => {
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
    return (
        <>
            <nav className='bg-[#0D0D0D] md:py-3'>
                <div className='w-full px-4 sm:px-8 lg:max-w-container lg:mx-auto '>
                    <div className='grid grid-cols-2 md:grid-cols-[1fr,3fr,1fr] py-3 justify-between items-center'>
                        <div className='w-full '>
                            <Link to='/'>
                                <VactorIcon />
                            </Link>
                        </div>
                        <div className='w-full hidden lg:block'>
                            <ul className='flex gap-x-12 justify-center'>
                                {
                                    menuData.map((item, index) => (
                                        <li key={index}>
                                            <div className='font-Roboto_Regular text-base text-[#FFFFFF] relative after:absolute after:content-[""] after:bottom-[-2px] after:left-0 after:w-0 after:h-px after:bg-white after:transition-all after:duration-300 hover:after:w-full'>
                                                <NavLink to={item.url} className=''>
                                                    {item.text}
                                                </NavLink>
                                            </div>
                                        </li>

                                    ))
                                }
                            </ul>
                        </div>
                        {/* short menu */}
                        <div className="flex justify-end md:justify-center lg:hidden">
                            <IoIosMenu color='white' size={25} />
                        </div>
                        <div className='w-full flex justify-center '>
                            <button className='w-[120px] lg:w-[180px] py-3 lg:py-5 hidden md:block text-[#1C1D28]  bg-[#FFD2A4] font-Roboto_Regular rounded-xl '>CONTACT US</button>
                        </div>
                    </div>

                </div>
            </nav>
        </>
    )
}

export default Navbar