import React from 'react'
import { VactorIconFooter } from '../../svg/Vactor'
import { FacebookIcons, LinkdinIcons, TwitterIcons } from '../../svg/Icons'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <>
            <footer className='w-full py-16 bg-[#161722]'>
                <div className='max-w-container mx-auto flex'>
                    <div className='mr-[259px]'>
                        <div>
                            <VactorIconFooter className='mb-4 bg-gradient-to-r from-[#f2b890] to-[#fdd2a1] inline-block text-transparent bg-clip-text  ' />
                            <caption className='w-[148px] font-Roboto_Regular text-xs text-[#FFFFFF]'>© Copyright Finsweet 2022</caption>
                        </div>
                        <div className='flex flex-col gap-4 pt-8'>
                            <caption className='w-[140px] font-Roboto_Regular text-xs text-[#FFFFFF]'>(480) 555-0103</caption>
                            <caption className='w-[140px] font-Roboto_Regular text-xs text-[#FFFFFF]'>4517 Washington Ave. </caption>
                            <caption className='w-[140px] font-Roboto_Regular text-xs text-[#FFFFFF]'>finsweet@example.com</caption>
                        </div>
                    </div>

                    <div className='mr-[72px]'>
                        <p className='font-Roboto_Regular text-base text-[#FFFFFF] mb-[20px]'>Quicklinks</p>
                        <div className='flex flex-col gap-6 '>
                            <caption className='font-Roboto_Regular text-xs text-[#ccccce] uppercase'>About us</caption>
                            <caption className='font-Roboto_Regular text-xs text-[#ccccce] uppercase'>Sermons</caption>
                            <caption className='font-Roboto_Regular text-xs text-[#ccccce] uppercase'>Events</caption>
                            <caption className='font-Roboto_Regular text-xs text-[#ccccce] uppercase'>Blog</caption>
                        </div>
                    </div>

                    <div className='mr-[105px]'>
                        <p className='font-Roboto_Regular text-base text-[#FFFFFF]'>Connect</p>
                        <div className='flex gap-5 mt-5'>
                            <Link>
                                <FacebookIcons />
                            </Link>
                            <Link>
                                <TwitterIcons />
                            </Link>
                            <Link>
                                <LinkdinIcons />
                            </Link>
                        </div>
                    </div>
                    <div>
                        <h4 className='w-[380px] font-Roboto_Bold text-[32px] text-[#FFFFFF] uppercase'>Subscribe to get Latest Updates and News</h4>
                        <div className='relative mt-8'>
                            <input type="email" className='w-[512px]  p-5 rounded-xl bg-transparent border border-[#393a42] text-white outline-none placeholder:font-Roboto_Regular placeholder:text-base placeholder:text-[#d0d1d3]' placeholder='Yourmail@gmail.com' />
                            <button className='absolute top-0 right-0 font-Roboto_Regular text-base text-[#1C1D28] py-5 px-16 bg-[#FFD2A4] rounded-xl uppercase'>Subscribe</button>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer