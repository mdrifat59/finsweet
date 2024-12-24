import React from 'react'
import Carousel from 'react-multi-carousel'
import "react-multi-carousel/lib/styles.css";

const HomeBanner = () => {
    return (
        <>
            <section className='w-full'>
                <Carousel
                    autoPlay
                    arrows={true}
                    autoPlaySpeed={3000}
                    infinite
                    responsive={{
                        desktop: { breakpoint: { max: 3000, min: 1400 }, items: 1 },
                        sm_desktop: { breakpoint: { max: 1400, min: 1024 }, items: 1 },
                        tablet: { breakpoint: { max: 1024, min: 700 }, items: 1 },
                        sm: { breakpoint: { max: 700, min: 464 }, items: 1 },
                        mobile: { breakpoint: { max: 464, min: 0 }, items: 1 }
                    }}
                >
                    <div className={`w-full py-4 md:py-8 lg:py-10 xl:py-14 2xl:py-32 bg-[url('/public/img/Banner.jpg')] bg-cover`}>
                        <div className='w-full px-4 sm:px-8 lg:max-w-container lg:mx-auto' >
                            <div>
                                <h3 className='font-Roboto_Bold text-xs md:text-base text-[#FFFFFF] capitalize'>Welcome to our CHURCH</h3>
                                <h2 className='w-[270px] md:w-[310px] lg:w-[562px] font-Roboto_Bold text-xl sm:text-3xl md:text-4xl lg:text-[64px] lg:leading-[82px] pt-2 lg:pt-4 pb-4 lg:pb-8 text-[#FFFFFF] capitalize'>Become a part of our community</h2>
                                <button className='font-Roboto_Regular text-xs lg:text-base text-[#1C1D28] py-3 lg:py-6 px-8 lg:px-16 bg-[#FFD2A4] capitalize rounded-xl'>Learn more</button>
                                <div className='flex items-start gap-3 pt-8 lg:pt-16 '>
                                    <hr className='w-2 lg:w-[18px] mt-2 lg:mt-3  bg-[#FFD2A4]' />
                                    <p className='w-[170px] sm:w-[200px] lg:w-[308px] font-Roboto_Regular text-xs sm:text-sm lg:text-base text-[#FFFFFF] '>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.</p>
                                </div>
                            </div>

                        </div>
                    </div>

                </Carousel>
            </section>

        </>
    )
}

export default HomeBanner