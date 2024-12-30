import React from 'react'
import join from '/public/img/join.jpg'
import location from '/public/img/location.png'
import clock from '/public/img/clock.png'
import { GoArrowRight } from 'react-icons/go'
import { Link } from 'react-router-dom'

const JoinUs = () => {
    return (
        <>
            <section className='w-full py-8 lg:py-16 xl:py-32 bg-white'>
                <div className='w-full px-4 sm:px-8 lg:max-w-container lg:mx-auto'>
                    <div className='flex justify-center'>
                        <div className='text-center'>
                            <label className='font-Roboto_Regular text-xs md:sm lg:text-base text-[#161722] uppercase'>Upcoming SERMONS</label>
                            <h2 className='w-[350px] lg:w-[554px] font-Roboto_Bold text-2xl md:text-3xl lg:text-5xl text-[#161722] lg:leading-[64px] mt-5 uppercase'>join us and become part of something great</h2>
                        </div>
                    </div>
                    <div className='lg:flex mt-16'>
                        <div className='w-full lg:w-[435px] bg-[#FFF5EB] py-[61px] mb-5 lg:mb-0 px-8 lg:px-[90px] relative'>
                            <div className='absolute top-8 right-8 flex flex-col justify-center items-center'>
                                <h5 className='font-Roboto_Bold text-2xl text-[#161722] leading-3'>20</h5>
                                <label className='font-Roboto_Regular text-base text-[#161722]'>JULY</label>
                            </div>
                            <div>
                                <caption className='w-[103px] font-Roboto_Bold text-xs bg-gradient-to-r from-[#A54E2B] to-[#DC9853] inline-block text-transparent bg-clip-text'>Upcoming Event</caption>
                                <h5 className='w-[210px] font-Roboto_Bold text-2xl text-[#161722] leading-7 my-4'>WATCH AND LISTEN TO OUR SERMONS</h5>
                                <p className='w-[256px] font-Roboto_Regular text-base text-[#161722]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                            </div>
                            <div className='my-8'>
                                <div className='flex gap-3'>
                                    <div>
                                        <img src={clock} className='object-cover' alt="" />
                                    </div>
                                    <p className='w-[137px] font-Roboto_Regular text-base text-[#161722]'>Friday 23:39 IST Saturday 11:20 ISD</p>
                                </div>
                                <div className='flex gap-3 mt-4'>
                                    <div>
                                        <img src={location} className='object-cover' alt="" />
                                    </div>
                                    <p className='w-[184px] font-Roboto_Regular text-base text-[#161722]'>No 233 Main St. New York, United States</p>
                                </div>
                            </div>
                            <button className='font-Roboto_Regular py-3 lg:py-6 px-8 lg:px-16 text-base text-[#FFD2A4] bg-[#161722] uppercase rounded-xl'>Register</button>
                        </div>
                        <div className='w-full lg:w-[845px] '>
                            <img src={join} className='w-full h-full object-cover' alt="" />
                        </div>
                    </div>
                    <div className='flex justify-end  items-center gap-1 mt-[50px]'>
                        <Link to='/sermonevent' className='font-Roboto_Regular cursor-pointer text-base lg:text-2xl text-[#161722]'>View all Sermons</Link>
                        <GoArrowRight className='w-[24px] text-[#161722]' />
                    </div>
                </div>
            </section>
        </>
    )
}

export default JoinUs