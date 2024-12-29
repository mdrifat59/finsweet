import React from 'react'
import Carousel from 'react-multi-carousel'
import "react-multi-carousel/lib/styles.css";
import team_1 from '/public/img/team-1.png'
import team_2 from '/public/img/team-2.png'
import team_3 from '/public/img/team-3.png'
import team_4 from '/public/img/team-4.png'
import { Link } from 'react-router-dom';
import { FacebookIcons, LinkdinIcons, TwitterIcons } from '../../svg/Icons';


const AboutCarousel = () => {
    const responsive = {
        desktop: { breakpoint: { max: 3000, min: 1400 }, items: 4 },
        sm_desktop: { breakpoint: { max: 1400, min: 1200 }, items: 4 },
        tablet: { breakpoint: { max: 1200, min: 992 }, items: 3 },
        sm: { breakpoint: { max: 992, min: 768 }, items: 2 },
        mobile: { breakpoint: { max: 768, min: 0 }, items: 1 }
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
                    >
                        {/* Example items with styling */}
                        <div className='flex justify-center items-center'>
                            <div className={`w-[330px]  md:w-[330px] lg:w-[280px] h-[384px] p-8 bg-[#F5F2F0]   flex justify-center items-center`}>
                                <div className='flex flex-col justify-center items-center'>
                                    <img src={team_1} alt="" />
                                    <h5 className='font-Roboto_Bold text-2xl text-[#161722] mt-6'> Kim Bowen</h5>
                                    <p className='font-Roboto_Regular text-base text-[#595960] my-4'>Pastor, Church</p>
                                    <div className='flex gap-5'>
                                        <Link >
                                            <FacebookIcons />
                                        </Link>
                                        <Link>
                                            <TwitterIcons />
                                        </Link>
                                        <Link>
                                            <LinkdinIcons />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>


                        {/* second slides */}
                        <div className="flex justify-center items-center">
                            <div className={`w-[330px] md:w-[330px] lg:w-[280px] h-[384px] p-8 bg-[#F5F2F0]   flex justify-center items-center`}>
                                <div className='flex flex-col justify-center items-center'>
                                    <img src={team_2} alt="" />
                                    <h5 className='font-Roboto_Bold text-2xl text-[#161722] mt-6'>Danielle Watkins</h5>
                                    <p className='font-Roboto_Regular text-base text-[#595960] my-4'>Pastor, Church</p>
                                    <div className='flex gap-5'>
                                        <Link >
                                            <FacebookIcons />
                                        </Link>
                                        <Link>
                                            <TwitterIcons />
                                        </Link>
                                        <Link>
                                            <LinkdinIcons />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Third slider */}
                        <div className="flex justify-center items-center">
                            <div className={`w-[330px] md:w-[330px] lg:w-[280px] h-[384px] p-8 bg-[#F5F2F0]   flex justify-center items-center`}>
                                <div className='flex flex-col justify-center items-center'>
                                    <img src={team_3} alt="" />
                                    <h5 className='font-Roboto_Bold text-2xl text-[#161722] mt-6'>Naomi Craig</h5>
                                    <p className='font-Roboto_Regular text-base text-[#595960] my-4'>Pastor, Church</p>
                                    <div className='flex gap-5'>
                                        <Link >
                                            <FacebookIcons />
                                        </Link>
                                        <Link>
                                            <TwitterIcons />
                                        </Link>
                                        <Link>
                                            <LinkdinIcons />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* four slider */}
                        <div className="flex justify-center items-center">
                            <div className={`w-[330px] md:w-[330px] lg:w-[280px] h-[384px] p-8 bg-[#F5F2F0]   flex justify-center items-center`}>
                                <div className='flex flex-col justify-center items-center'>
                                    <img src={team_4} alt="" />
                                    <h5 className='font-Roboto_Bold text-2xl text-[#161722] mt-6'>Santos Payne</h5>
                                    <p className='font-Roboto_Regular text-base text-[#595960] my-4'>Pastor, Church</p>
                                    <div className='flex gap-5'>
                                        <Link >
                                            <FacebookIcons />
                                        </Link>
                                        <Link>
                                            <TwitterIcons />
                                        </Link>
                                        <Link>
                                            <LinkdinIcons />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Carousel>
                </div>
            </div>
        </>
    )
}

export default AboutCarousel