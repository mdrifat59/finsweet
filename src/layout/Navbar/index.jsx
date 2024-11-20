import React from 'react'
import { VactorIcon } from '../../svg/Vactor'
import { Link, NavLink } from 'react-router-dom'

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
            <nav className='bg-[#0D0D0D] py-3 '>
                <div className='max-w-container mx-auto '>
                    <div className='grid grid-cols-[1fr,3fr,1fr] py-3 justify-center items-center'>
                        <div className='w-full '>
                            <Link to='/'>
                            <VactorIcon />
                            </Link>
                        </div>
                        <div className='w-full '>
                            <ul className='flex gap-x-12 '>
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
                        <div className='w-full flex justify-center'>
                            <button className='w-[180px] py-5 text-[#1C1D28]  bg-[#FFD2A4] font-Roboto_Regular rounded-xl '>CONTACT US</button>
                        </div>
                    </div>

                </div>
            </nav>
        </>
    )
}

export default Navbar