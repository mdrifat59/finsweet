import React from 'react'

const Banner = () => {
    return (
        <div className={`w-full bg-[url('/public/img/Contactimg.png')] bg-cover   py-10`}>
            <div className='px-5 sm:px-10 md:px-[110px] md:py-10 xl:py-20 2xl:py-24 3xl:py-[160px] '>
                <span className='font-Roboto_Bold text-xs lg:text-base uppercase text-white'>Contact</span>
                <h2 className='lg:w-[409px] lg:mt-4 font-Roboto_Bold text-white uppercase text-2xl md:text-3xl lg:text-5xl lg:leading-[64px]'>Get in touch with our CHURCH</h2>
            </div>
        </div>
    )
}

export default Banner