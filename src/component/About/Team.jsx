import React from 'react'
import AboutCarousel from '../carousel/AboutCarousel'

const Team = () => {
  return (
     <>
          <section className='w-full py-8 lg:py-16 xl:py-32'>
                <div className='w-full px-4 sm:px-8 lg:max-w-container lg:mx-auto'>
                    <div className='flex justify-center'>
                        <div className='text-center'>
                            <label className='font-Roboto_Regular text-sm md:text-base text-[#161722] uppercase'>church members</label>
                            <h2 className='lg:w-[650px] font-Roboto_Bold text-2xl md:text-3xl lg:text-5xl text-[#161722] lg:leading-[64px] mt-3 lg:mt-5 uppercase'>meet our Inspirational team</h2>
                        </div>
                    </div>
                    <div className='w-full mt-8 lg:mt-16'>
                        <AboutCarousel />
                    </div>
                </div>
            </section>
     </>
  )
}

export default Team