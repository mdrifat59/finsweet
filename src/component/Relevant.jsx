import React from 'react'
import rele1 from '/public/img/rele1.png'
import rele2 from '/public/img/rele2.png'
import rele3 from '/public/img/rele3.png'

const Relevant = () => {
    return (
        <>
            <section className='w-full py-8 lg:py-16 xl:py-32 bg-white'>
                <div className='w-full px-4 sm:px-8 lg:max-w-container lg:mx-auto'>
                    <div className=''>
                        <p className='font-Roboto_Regular text-center text-sm md:text-base text-[#161722] uppercase'>sub-headline</p>
                        <h2 className='font-Roboto_Bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center text-[#161722] uppercase pt-4'>a church that's relevant</h2>
                        <div className='flex lg:flex-col-3 flex-wrap xl:flex-nowrap justify-center gap-6 mt-8 lg:mt-16'>
                            <div className='p-10 lg:p-14 2xl:p-20 bg-[#FFF5EB] relative border border-transparent hover:border-[#452205] transition-all duration-300 group'>
                                <img src={rele1} className='group-hover:animate-shake' alt="" />
                                <h4 className='font-Roboto_Bold text-[32px] text-[#161722] uppercase mt-4 mb-2'>About us</h4>
                                <p className='w-[251px] font-Roboto_Regular text-base text-[#161722] '>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                <hr className='w-full h-4 absolute bottom-0 left-0 hover:rounded-[12px] bg-[#FFD2A4]' />
                            </div>
                            <div className='p-10 lg:p-14 2xl:p-20 bg-[#FFF5EB] relative border border-transparent hover:border-[#452205] transition-all duration-300 group'>
                                <img src={rele2} className='group-hover:animate-shake' alt="" />
                                <h4 className='font-Roboto_Bold text-[32px] text-[#161722] uppercase mt-4 mb-2'>Get involved</h4>
                                <p className='w-[251px] font-Roboto_Regular text-base text-[#161722] '>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                <hr className='w-full h-4 absolute bottom-0 left-0 hover:rounded-[12px] bg-[#FFD2A4]' />
                            </div>
                            <div className='p-10 lg:p-14 2xl:p-20 bg-[#FFF5EB] relative border border-transparent hover:border-[#452205] transition-all duration-300 group'>
                                <img src={rele3} className='group-hover:animate-shake' alt="" />
                                <h4 className='font-Roboto_Bold text-[32px] text-[#161722] uppercase mt-4 mb-2'>Giving back</h4>
                                <p className='w-[251px] font-Roboto_Regular text-base text-[#161722] '>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                <hr className='w-full h-4 absolute bottom-0 left-0 hover:rounded-[12px] bg-[#FFD2A4]' />
                            </div>
                        </div>
                    </div>
                </div>

            </section>
        </>
    )
}

export default Relevant