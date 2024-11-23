import React from 'react'
import quote from '/public/img/Quote.png'

const AroundUs = () => {
    return (
        <>
            <section className={`w-full py-32 bg-[url('/public/img/around.jpg')] bg-cover`}>
                <div className='max-w-container mx-auto flex justify-center items-center'>
                    <div className='w-[768px] bg-[#FFFFFF] py-[72px] px-12 relative'>
                        <div className='flex justify-between'>
                            <div className='w-[370px]'>
                                <h2 className=' font-Roboto_Bold text-5xl text-[#161722] uppercase'>We want to serve the world around us</h2>
                                <p className='w-[302px] font-Roboto_Regular text-base text-[#161722] my-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.</p>
                                <button className='font-Roboto_Regular text-base text-[#1C1D28] py-6 px-16 rounded-xl bg-[#FFD2A4] uppercase'>Visit</button>
                            </div>
                            <div className='w-[190px] flex items-center'>
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