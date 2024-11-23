import React from 'react'
import join from '/public/img/join.jpg'
import location from '/public/img/location.png'
import clock from '/public/img/clock.png'
import { GoArrowRight } from 'react-icons/go'

const JoinUs = () => {
    return (
        <>
            <section className='w-full py-32 bg-white'>
                <div className='max-w-container mx-auto'>
                    <div className='flex justify-center'>
                        <div className='text-center'>
                            <label className='font-Roboto_Regular text-base text-[#161722] uppercase'>Upcoming SERMONS</label>
                            <h2 className='w-[554px] font-Roboto_Bold text-5xl text-[#161722] leading-[64px] mt-5 uppercase'>join us and become part of something great</h2>
                        </div>
                    </div>
                    <div className='flex mt-16'>
                        <div className='w-[435px] bg-[#FFF5EB] py-[61px] px-[90px] relative'>
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
                            <button className='font-Roboto_Regular py-6 px-16 text-base text-[#FFD2A4] bg-[#161722] uppercase rounded-xl'>Register</button>
                        </div>
                        <div className='w-[845px] '>
                            <img src={join} className='w-full h-full object-cover' alt="" />
                        </div>
                    </div>
                    <div className='flex justify-end items-center gap-1 mt-[50px]'>
                        <label className='font-Roboto_Regular text-2xl text-[#161722]'>View all Sermons</label>
                        <GoArrowRight className='w-[24px] text-[#161722]' />
                    </div>
                </div>
            </section>
        </>
    )
}

export default JoinUs