import React from 'react'
import comp1 from '/public/img/comp1.png'
import comp2 from '/public/img/comp2.png'
import comp3 from '/public/img/comp3.png'
import { GoArrowRight } from 'react-icons/go'

const Compassion = () => {
    return (
        <>
            <section className='py-32 bg-white'>
                <div className='max-w-container mx-auto'>
                    <div className='flex justify-center'>
                        <div>
                            <h4 className='font-Roboto_Regular text-base text-[#161722] text-center'>SUB-HEADLINE</h4>
                            <h2 className='font-Roboto_Bold text-5xl text-[#161722] uppercase text-center mb-8 mt-4'>love and compassion</h2>
                            <p className='w-[846px] font-Roboto_Regular text-base text-[#161722] text-center '>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                            <div className='flex justify-center mt-[56px]'>
                                <button className='font-Roboto_Regular text-base text-[#1C1D28] px-16 py-6 bg-[#FFD2A4] rounded-xl uppercase'>Read more</button>
                            </div>
                        </div>
                    </div>
                    <div className='w-[1024px] mx-auto gap-2 -mt-7'>
                        <div className='flex flex-col-3 justify-between'>
                            <div >
                                <img src={comp1} className='' alt="" />
                            </div>
                            <div className='mt-16'>
                                <img src={comp2} alt="" />
                            </div>
                            <div >
                                <img src={comp3} className='' alt="" />
                            </div>
                        </div>
                    </div>
                    <div className='flex justify-center pt-16'>
                        <div className='text-center'>
                            <label className='font-Roboto_Regular text-base text-[#161722] uppercase'>our mission & vision</label>
                            <h4 className='font-Roboto_Bold text-[32px] text-[#161722] uppercase my-4'>celebrate WITH US</h4>
                            <p className='w-[512px] font-Roboto_Regular text-base text-[#161722]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            <div className='flex justify-center items-center gap-2 pt-4'>
                                <h5 className='font-Roboto_Regular text-sm text-[#161722]'>Read More</h5>
                                <div>
                                    <GoArrowRight className='w-[18px] text-[#33343E]' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Compassion