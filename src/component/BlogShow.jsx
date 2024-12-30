import React from 'react'
import image from '/public/img/showimg.png'

const BlogShow = () => {
    return (
        <>
            <div className='md: sm:w-[500px] md:w-[650px] lg:w-[768px] mx-auto py-16'>
                <div>
                    <h2 className='font-Roboto_Bold text-2xl md:text-3xl lg:text-5xl'>LOREM IPSUM DOLOR SIT AMET</h2>
                    <p className='sm:w-[500px] md:w-[650px] lg:w-[768px] my-6 font-Roboto_Regular text-xs md:text-base lg:text-lg text-[#161722]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation. Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Non tellus orci ac auctor augue mauris augue neque gravida.</p>
                    <p className='sm:w-[500px] md:w-[650px] lg:w-[768px] my-6 font-Roboto_Regular text-xs md:text-base lg:text-lg text-[#161722]'>Aenean vel elit scelerisque mauris. Imperdiet sed euismod nisi porta lorem mollis aliquam. Quis vel eros donec ac odio tempor orci dapibus ultrices. Elementum eu facilisis sed odio morbi. Nam at lectus urna duis convallis convallis tellus id. Feugiat pretium nibh ipsum consequat nisl vel. Elementum pulvinar etiam non quam lacus. Sit amet porttitor eget.</p>
                    <img src={image} alt="" />
                </div>
                <div className='mt-10'>
                    <h4 className='font-Roboto_Bold text-xl  md:text-2xl lg:text-[32px]'>LOREM IPSUM DOLOR SIT AMET</h4>
                    <p className=' sm:w-[500px] md:w-[650px] lg:w-[768px] my-6 font-Roboto_Regular text-xs md:text-base lg:text-lg text-[#161722]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation. Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Non tellus orci ac auctor augue mauris augue neque gravida.</p>
                    <div className='flex gap-3'>
                        <div className="w-1  bg-[#FFD2A4]"></div>
                        <h5 className='sm:w-[500px] md:w-[650px] lg:w-[740px] font-Roboto_Regular text-xs sm:text-base md:text-xl lg:text-2xl text-[#47474f] leading-5 lg:leading-9'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui faucibus in ornare quam viverra orci sagittis eu volutpat.</h5>

                    </div>
                    <p className=' sm:w-[500px] md:w-[650px] lg:w-[768px] my-6 font-Roboto_Regular text-xs md:text-base lg:text-lg text-[#161722]'>Aenean vel elit scelerisque mauris. Imperdiet sed euismod nisi porta lorem mollis aliquam. Quis vel eros donec ac odio tempor orci dapibus ultrices. Elementum eu facilisis sed odio morbi. Nam at lectus urna duis convallis convallis tellus id. Feugiat pretium nibh ipsum consequat nisl vel. Elementum pulvinar etiam non quam lacus. Sit amet porttitor eget.</p>

                </div>
                <div className='mt-10'>
                    <h4 className='font-Roboto_Bold text-xl  md:text-2xl lg:text-[32px]'>LOREM IPSUM DOLOR SIT AMET CONSECTETUR</h4>
                    <p className=' sm:w-[500px] md:w-[650px] lg:w-[768px] my-6 font-Roboto_Regular text-xs md:text-base lg:text-lg text-[#161722]'>We both celebrate and challenge the culture around us as we orient our lives around Jesus. We want to serve the world around us. It’s why we support mission work all across the globe Regardless of what your next step in faith is, we want to help you take that next step Our church is10% of our annual income to</p>

                    <ul>
                        <li>
                            <div className='flex items-center gap-2'>
                                <div className="w-1 h-1 bg-black rounded-full"></div> <p className='font-Roboto_Regular text-xs md:text-base lg:text-lg text-[#161722]'>Lorem ipsum dolor sit amet, consectetur adipiscing</p>
                            </div>
                        </li>
                        <li>
                            <div className='flex items-center gap-2'>
                                <div className="w-1 h-1 bg-black rounded-full"></div> <p className='font-Roboto_Regular text-xs md:text-base lg:text-lg text-[#161722]'>Purus sit amet luctus venenatis lectus magna </p>
                            </div>
                        </li>
                        <li>
                            <div className='flex items-center gap-2'>
                                <div className="w-1 h-1 bg-black rounded-full"></div> <p className='font-Roboto_Regular text-xs md:text-base lg:text-lg text-[#161722]'>Aenean vel elit scelerisque mauris. Imperdiet sed euismod </p>
                            </div>
                        </li>

                    </ul>
                    <p className=' sm:w-[500px] md:w-[650px] lg:w-[768px] my-6 font-Roboto_Regular text-xs md:text-base lg:text-lg text-[#161722]'>Aenean vel elit scelerisque mauris. Imperdiet sed euismod nisi porta lorem mollis aliquam. Quis vel eros donec ac odio tempor orci dapibus ultrices. Elementum eu facilisis sed odio morbi. Nam at lectus urna duis convallis convallis tellus id. Feugiat pretium nibh ipsum consequat nisl vel. Elementum pulvinar etiam non quam lacus. Sit amet porttitor eget.</p>
                    <p className=' sm:w-[500px] md:w-[650px] lg:w-[768px] my-6 font-Roboto_Regular text-xs md:text-base lg:text-lg text-[#161722]'>Saepe magni aut maxime vel voluptatem. Ab eveniet neque placeat qui porro ab minus voluptas. Dicta praesentium neque vero mollitia aperiam sed enim. Lacinia quis vel eros donec ac odio.</p>

                </div>

            </div>
        </>
    )
}

export default BlogShow