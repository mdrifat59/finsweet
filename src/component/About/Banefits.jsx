import React from 'react'
import Banefit_1 from '/public/img/Banefit_1.png'
import Banefit_2 from '/public/img/Banefit_2.png'
import Banefit_3 from '/public/img/Banefit-3.png'
import Banefit_4 from '/public/img/Banefit-4.png'

const Banefits = () => {
    return (
        <>
            <div className="py-8 lg:py-16 xl:py-32 bg-white">
                <div className='w-full px-4 sm:px-8 lg:max-w-container lg:mx-auto'>
                    <div className="flex flex-row justify-center xl:mb-10">
                        <div>
                            <h4 className='font-Roboto_Regular text-xs md:text-base text-[#161722] text-center'>BENEFITS </h4>
                            <h2 className='lg:w-[440px] font-Roboto_Bold text-2xl md:text-3xl lg:text-5xl text-[#161722] uppercase text-center mb-8 mt-4'> THE benefits of joining our church</h2>
                        </div>
                    </div>
                    {/* contente */}
                    <div className="grid gap-y-[96px]">

                        <div className='flex flex-col md:flex-row justify-center gap-5'>
                            <div className="flex flex-col  justify-center">
                                <h4 className='font-Roboto_Bold text-xl sm:text-2xl lg:text-[32px] mb-3 uppercase text-[#161722] '>find fulfillment and joy</h4>
                                <p className=' md:w-[350px] lg:w-[500px] font-Roboto_Regular text-xs md:text-sm lg:text-base text-[#161722] leading-6 '>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.</p>
                            </div>
                            <div>
                                <img src={Banefit_1} alt="" />
                            </div>
                        </div>
                        <div className='flex flex-col-reverse md:flex-row justify-center gap-5'>
                            <div className='lg:mr-12'>
                                <img src={Banefit_2} alt="" />
                            </div>
                            <div className="flex flex-col justify-center">
                                <h4 className='font-Roboto_Bold text-xl sm:text-2xl lg:text-[32px] mb-3 uppercase text-[#161722] '>shared values</h4>
                                <p className='md:w-[350px] lg:w-[500px] font-Roboto_Regular  text-xs md:text-sm lg:text-base text-[#161722] leading-6 '>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.</p>
                            </div>
                        </div>
                        <div className='flex flex-col md:flex-row justify-center gap-5'>
                            <div className="flex flex-col  justify-center">
                                <h4 className='font-Roboto_Bold text-xl sm:text-2xl lg:text-[32px] mb-3 uppercase text-[#161722] '>charity events</h4>
                                <p className=' md:w-[350px] lg:w-[500px] font-Roboto_Regular text-xs md:text-sm lg:text-base text-[#161722] leading-6 '>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.</p>
                            </div>
                            <div>
                                <img src={Banefit_3} alt="" />
                            </div>
                        </div>
                        <div className='flex flex-col-reverse md:flex-row justify-center gap-5'>
                            <div className='lg:mr-12'>
                                <img src={Banefit_4} alt="" />
                            </div>
                            <div className="flex flex-col justify-center">
                                <h4 className='font-Roboto_Bold text-xl sm:text-2xl lg:text-[32px] mb-3 uppercase text-[#161722]'>All are welcome</h4>
                                <p className='md:w-[350px] lg:w-[500px] font-Roboto_Regular  text-xs md:text-sm lg:text-base text-[#161722] leading-6 '>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Banefits