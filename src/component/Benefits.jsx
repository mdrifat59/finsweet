import React from 'react'
import BenefitCarousel from './carousel/BenefitCarousel'

const Benefits = () => {
    return (
        <>
            <section className='w-full py-32 bg-[#F5F2F0] '>
                <div className='max-w-container mx-auto'>
                    <div className='flex justify-center'>
                        <div className='text-center'>
                            <label className='font-Roboto_Regular text-base text-[#161722] uppercase'>Watch and listen</label>
                            <h2 className='w-[438px] font-Roboto_Bold text-5xl text-[#161722] leading-[64px] mt-5 uppercase'>THE benefits of joining our church</h2>
                        </div>
                    </div>
                    <div className='w-full mt-16'>
                        <BenefitCarousel />
                    </div>
                </div>
            </section>
        </>
    )
}

export default Benefits