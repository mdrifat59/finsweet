import React from 'react'
import Carousel from 'react-multi-carousel'
import "react-multi-carousel/lib/styles.css";


const BenefitCarousel = () => {
    const responsive = {
        desktop: { breakpoint: { max: 3000, min: 1400 }, items: 4 },
        sm_desktop: { breakpoint: { max: 1400, min: 1024 }, items: 3 },
        tablet: { breakpoint: { max: 1024, min: 576 }, items: 2 },
        sm: { breakpoint: { max: 576, min: 464 }, items: 1 },
        mobile: { breakpoint: { max: 464, min: 0 }, items: 1 }
    };
    return (
        <>
            <div>
                <div className="w-full">
                    <Carousel
                        responsive={responsive}
                        infinite={true}
                        autoPlay={true}
                        autoPlaySpeed={2000}
                        keyBoardControl={true}
                        showDots={false}
                        arrows={false}
                    // centerMode={true}
                    >
                        {/* Example items with styling */}

                        <div className={`w-full sm:w-[240px] md:w-[330px] lg:w-[302px] h-[384px] p-8 bg-[url('/public/img/benefit1.png')] flex items-end bg-cover`}>
                            <div>
                                <h5 className='font-Roboto_Bold text-2xl text-[#FFFFFF]'>WATCH AND LISTEN TO OUR SERMONS</h5>
                                <p className='font-Roboto_Regular text-base text-[#c8c8c8] mt-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.</p>
                            </div>
                        </div>
                        <div className={`w-full sm:w-[240px] md:w-[330px] lg:w-[302px] h-[384px] p-8 bg-[url('/public/img/benefit2.png')] flex items-end bg-cover`}>
                            <div>
                                <h5 className='font-Roboto_Bold text-2xl text-[#FFFFFF]'>WATCH AND LISTEN TO OUR SERMONS</h5>
                            </div>
                        </div>
                        <div className={`w-full sm:w-[240px] md:w-[330px] lg:w-[302px] h-[384px] p-8 bg-[url('/public/img/benefit3.png')] flex items-end bg-cover`}>
                            <div>
                                <h5 className='font-Roboto_Bold text-2xl text-[#FFFFFF]'>WATCH AND LISTEN TO OUR SERMONS</h5>
                            </div>
                        </div>
                        <div className={`w-full sm:w-[240px] md:w-[330px] lg:w-[302px] h-[384px] p-8 bg-[url('/public/img/benefit4.png')] flex items-end bg-cover`}>
                            <div>
                                <h5 className='font-Roboto_Bold text-2xl text-[#FFFFFF]'>WATCH AND LISTEN TO OUR SERMONS</h5>
                            </div>
                        </div>
                    </Carousel>
                </div>
            </div>
        </>
    )
}

export default BenefitCarousel