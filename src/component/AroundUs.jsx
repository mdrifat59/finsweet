import React from 'react'
import quote from '/public/img/Quote.png'

const AroundUs = () => {
    return (
        <>
            <section className={`w-full  py-8 lg:py-16 xl:py-32 bg-[url('/public/img/around.jpg')] bg-cover`}>
                <div className='w-full px-4 sm:px-8 lg:max-w-container lg:mx-auto flex justify-center items-center'>
                    <div className='md:w-[450px] lg:w-[768px] bg-[#FFFFFF] py-5 lg:py-[72px] px-5 lg:px-12 relative'>
                        <div className='flex justify-between'>
                            <div className='w-[200px] md:w-[300px] lg:w-[370px]'>
                                <h2 className='font-Roboto_Bold text-2xl md:text-3xl lg:text-5xl text-[#161722] uppercase'>We want to serve the world around us</h2>
                                <p className='w-[180px] md:w-[250px] lg:w-[302px] font-Roboto_Regular text-xs md:text-base text-[#161722] my-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.</p>
                                <button className='font-Roboto_Regular text-xs md:text-base text-[#1C1D28] py-3 lg:py-6 px-8 lg:px-16 rounded-xl bg-[#FFD2A4] uppercase'>Visit</button>
                            </div>
                            <div className='w-[100px] lg:w-[190px] flex items-center'>
                                <img src={quote} alt="" />
                            </div>
                        </div>
                        <hr className='w-full h-4 absolute bottom-0 left-0 bg-[#FFD2A4]' />
                    </div>
                </div>
            </section>
        </>
    )
}

export default AroundUs