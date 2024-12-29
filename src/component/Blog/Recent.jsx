import React from 'react'
import Recentimg from '/public/img/Recent.png'
import { Link } from 'react-router-dom'

const Recent = () => {
    return (
        <div className="py-8 lg:py-16 xl:py-32 bg-[#f5f2f0]">
            <div className='w-full px-4 sm:px-8 lg:max-w-container lg:mx-auto'>
                <div className="flex flex-row justify-center xl:mb-10">
                    <div>
                        <h4 className='font-Roboto_Regular text-xs md:text-base text-[#161722] text-center'>OUR BLOG </h4>
                        <h2 className='lg:w-[440px] font-Roboto_Bold text-2xl md:text-3xl lg:text-5xl text-[#161722] uppercase text-center mb-8 mt-4'>most recent post</h2>
                    </div>
                </div>
                {/* contente */}
                <div className="grid  gap-y-[96px] py-14 bg-white">
                    <div className='flex flex-col-reverse md:flex-row justify-center gap-5'>
                        <div className='w-full'>
                            <img src={Recentimg} alt="" />
                        </div>
                        <div className="flex flex-col justify-center">
                            <div className='pr-7 xl:pr-0 xl:w-[490px] flex justify-between mb-3'>
                                <label className='font-Roboto_Regular text-base text-[#161722] leading-[18px]'>Tuesday 13 May, 2022</label>
                                <label className='font-Roboto_Regular text-base text-[#161722] leading-[18px]'>By John Hunau Deo</label>
                            </div>
                            <h4 className='w-[380px] sm:w-[400px] md:w-[350px] lg:w-[519px] font-Roboto_Bold text-xl sm:text-2xl md:text-xl lg:text-[32px] mb-3 uppercase text-[#161722] lg:leading-[44px]'>Church was doing what he often did when dropped An oracle </h4>
                            <p className='w-[350px] sm:w-[450px] md:w-[300px] lg:w-[500px] font-Roboto_Regular  text-xs md:text-sm lg:text-base text-[#161722] leading-6 '>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor.</p>
                            <Link className=' mt-8'>
                                <button className='font-Roboto_Regular text-xs md:text-base text-[#1C1D28] px-6 md:px-8 lg:px-16 py-2 md:py-4 lg:py-6  bg-[#FFD2A4] rounded-xl uppercase'>Read more</button>
                            </Link>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Recent