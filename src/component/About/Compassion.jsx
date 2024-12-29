import React from 'react'
import comp1 from '/public/img/comp1.png'
import comp2 from '/public/img/comp2.png'
import comp3 from '/public/img/comp3.png'
import { GoArrowRight } from 'react-icons/go'

const Compassion = () => {
    return (
        <>
            <section className='py-8 lg:py-16 xl:py-32 bg-white'>
                <div className='w-full px-4 sm:px-8 lg:max-w-container lg:mx-auto'>
                    <div className='flex justify-center'>
                        <div>
                            <h4 className='font-Roboto_Regular text-xs md:text-base text-[#161722] text-center'>Welcome to our CHURCH</h4>
                            <h2 className='font-Roboto_Bold text-2xl md:text-3xl lg:text-5xl text-[#161722] uppercase text-center mb-8 mt-4'>Love and compassion</h2>
                            <p className='w-[370px] md:w-[520px] lg:w-[846px] font-Roboto_Regular text-xs md:text-sm lg:text-base text-[#161722] text-center '>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.</p>                          
                        </div>
                    </div>
                    <div className='xl:w-[1024px] mx-auto gap-2 '>
                        <div className='flex flex-col-3 gap-2 justify-between mt-32'>
                            <div >
                                <img src={comp1} className='' alt="" />
                            </div>
                            <div className='-mt-[60px]'>
                                <img src={comp2} alt="" />
                            </div>
                            <div >
                                <img src={comp3} className='' alt="" />
                            </div>
                        </div>
                    </div>
                    <div className='flex justify-center pt-8 lg:pt-16 gap-6'>
                        <div className="">
                            <label className='font-Roboto_Regular text-base text-[#161722]'> OUR MISSIOn & Vision </label>
                            <h4 className='w-[371px] my-4 font-Roboto_Bold  text-[32px] text-[#161722] leading-[44px]'>STRIVING FOR A BETTER TOMORROW </h4>
                            <p className='w-[372px] my-4 font-Roboto_Regular text-base text-[#161722] leading-6'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.
                            </p>
                        </div>
                        <div className="">
                            <label className='font-Roboto_Regular text-base text-[#161722]'> WHAT WE DO </label>
                            <h4 className='w-[371px] my-4 font-Roboto_Bold  text-[32px] text-[#161722] leading-[44px]'>BRINgING PEACE AND JOY TO THE WORLD </h4>
                            <p className='w-[372px] my-4 font-Roboto_Regular text-base text-[#161722] leading-6'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Compassion