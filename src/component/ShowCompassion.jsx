import React from 'react'
import compassionimg from '/public/img/compassionimg.png'
import BlogShow from './BlogShow'

const ShowCompassion = () => {
    return (
        <div className="py-8 lg:py-16 xl:py-32 bg-[#f5f2f0]">
            <div className='w-full px-4 sm:px-8 lg:max-w-container lg:mx-auto'>
                <div className="flex flex-row justify-center xl:mb-10">
                    <div>
                        <h4 className='font-Roboto_Regular text-xs md:text-base bg-gradient-to-r from-[#A54E2B] to-[#DC9853]  text-transparent bg-clip-text text-center'>Relationship </h4>
                        <h2 className='lg:w-[570px] font-Roboto_Bold text-2xl md:text-3xl lg:text-5xl text-[#161722] uppercase text-center my-3 lg:mb-8 lg:mt-4'>HOW TO SHOW COMPASSION</h2>
                        <div className='flex justify-center gap-2'>
                            <p className='font-Roboto_Regular text-xs md:text-sm lg:text-base text-[#161722]'>13 May, 2018</p>
                            <p className='font-Roboto_Regular text-xs md:text-sm lg:text-base text-[#161722]'>By Mathew Johnson</p>
                        </div>
                    </div>
                </div>
                {/* contente */}
                <div className="mt-5">
                    <img src={compassionimg} alt="" />
                </div>
                <BlogShow />
            </div>
        </div>
    )
}

export default ShowCompassion