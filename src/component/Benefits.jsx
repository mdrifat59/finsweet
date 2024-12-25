import React from 'react'
import BenefitCarousel from './carousel/BenefitCarousel'

const Benefits = () => {
    return (
        <>
            <section className='w-full py-8 lg:py-16 xl:py-32 bg-[#F5F2F0] '>
                <div className='w-full px-4 sm:px-8 lg:max-w-container lg:mx-auto'>
                    <div className='flex justify-center'>
                        <div className='text-center'>
                            <label className='font-Roboto_Regular text-sm md:text-base text-[#161722] uppercase'>Watch and listen</label>
                            <h2 className='lg:w-[438px] font-Roboto_Bold text-2xl md:text-3xl lg:text-5xl text-[#161722] lg:leading-[64px] mt-3 lg:mt-5 uppercase'>THE benefits of joining our church</h2>
                        </div>
                    </div>
                    <div className='w-full mt-8 lg:mt-16'>
                        <BenefitCarousel />
                    </div>
                </div>
            </section>
        </>
    )
}

export default Benefits