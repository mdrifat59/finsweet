import React from 'react'
import location from '/public/img/location.png'
import clock from '/public/img/clock.png'

const Events = () => {
    return (
        <>
            <section className='w-full py-8 lg:pb-16 xl:pb-32 bg-white'>
                <div className='w-full px-4 sm:px-8 lg:max-w-container lg:mx-auto'>
                    <div className='text-center mb-8 sm:mb-12 lg:mb-16'>
                        <h2 className='font-Roboto_Bold text-2xl md:text-3xl lg:text-5xl uppercase text-[#161722] mt-4'>View All Events</h2>
                    </div>
                    <div className='w-full flex flex-wrap 2xl:flex-nowrap  gap-4 justify-center'>
                        <div className='w-[302px] bg-[#FFF5EB] group block'>
                            <div className='py-12 px-8'>
                                <caption className='font-Roboto_Bold text-xs bg-gradient-to-r from-[#A54E2B] to-[#DC9853] inline-block text-transparent bg-clip-text'>Upcoming Event</caption>
                                <h5 className='w-[218px] font-Roboto_Bold text-2xl text-[#161722] py-4 uppercase'>100 random acts of kindness</h5>
                                <p className='w-[238px] font-Roboto_Regular text-base text-[#161722]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                <div className='pt-12'>
                                    <div className='flex gap-3'>
                                        <div>
                                            <img src={clock} className='object-cover' alt="" />
                                        </div>
                                        <p className='w-[137px] font-Roboto_Regular text-base text-[#161722]'>Friday 23:39 IST Saturday 11:20 ISD</p>
                                    </div>
                                    <div className='flex gap-3 mt-4'>
                                        <div>
                                            <img src={location} className='object-cover' alt="" />
                                        </div>
                                        <p className='w-[184px] font-Roboto_Regular text-base text-[#161722]'>No 233 Main St. New York, United States</p>

                                    </div>
                                </div>
                            </div>
                            <div className='relative after:absolute after:content-[""] after:bottom-0 after:left-0 after:w-0 after:h-4 after:bg-[#FFD0A0] after:transition-all after:duration-1000 group-hover:after:w-full'></div>
                        </div>
                        <div className='w-[302px] bg-[#FFF5EB] group block'>
                            <div className='py-12 px-8'>
                                <caption className='font-Roboto_Bold text-xs bg-gradient-to-r from-[#A54E2B] to-[#DC9853] inline-block text-transparent bg-clip-text'>Upcoming Event</caption>
                                <h5 className='w-[218px] font-Roboto_Bold text-2xl text-[#161722] py-4 uppercase'>Faith is a process, not a destination</h5>
                                <p className='w-[238px] font-Roboto_Regular text-base text-[#161722]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                <div className='pt-12'>
                                    <div className='flex gap-3'>
                                        <div>
                                            <img src={clock} className='object-cover' alt="" />
                                        </div>
                                        <p className='w-[137px] font-Roboto_Regular text-base text-[#161722]'>Friday 23:39 IST Saturday 11:20 ISD</p>
                                    </div>
                                    <div className='flex gap-3 mt-4'>
                                        <div>
                                            <img src={location} className='object-cover' alt="" />
                                        </div>
                                        <p className='w-[184px] font-Roboto_Regular text-base text-[#161722]'>No 233 Main St. New York, United States</p>
                                    </div>
                                </div>
                            </div>
                            <div className='relative after:absolute after:content-[""] after:bottom-0 after:left-0 after:w-0 after:h-4 after:bg-[#FFD0A0] after:transition-all after:duration-1000 group-hover:after:w-full'></div>
                        </div>
                        <div className='w-[302px] bg-[#FFF5EB] group block'>
                            <div className='py-12 px-8'>
                                <caption className='font-Roboto_Bold text-xs bg-gradient-to-r from-[#A54E2B] to-[#DC9853] inline-block text-transparent bg-clip-text'>Upcoming Event</caption>
                                <h5 className='w-[218px] font-Roboto_Bold text-2xl text-[#161722] py-4 uppercase'>there is nothing impossible</h5>
                                <p className='w-[238px] font-Roboto_Regular text-base text-[#161722]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                <div className='pt-12'>
                                    <div className='flex gap-3'>
                                        <div>
                                            <img src={clock} className='object-cover' alt="" />
                                        </div>
                                        <p className='w-[137px] font-Roboto_Regular text-base text-[#161722]'>Friday 23:39 IST Saturday 11:20 ISD</p>
                                    </div>
                                    <div className='flex gap-3 mt-4'>
                                        <div>
                                            <img src={location} className='object-cover' alt="" />
                                        </div>
                                        <p className='w-[184px] font-Roboto_Regular text-base text-[#161722]'>No 233 Main St. New York, United States</p>
                                    </div>
                                </div>
                            </div>
                            <div className='relative after:absolute after:content-[""] after:bottom-0 after:left-0 after:w-0 after:h-4 after:bg-[#FFD0A0] after:transition-all after:duration-1000 group-hover:after:w-full'></div>
                        </div>
                        <div className='w-[302px] bg-[#FFF5EB] group block'>
                            <div className='py-12 px-8'>
                                <caption className='font-Roboto_Bold text-xs bg-gradient-to-r from-[#A54E2B] to-[#DC9853] inline-block text-transparent bg-clip-text'>Upcoming Event</caption>
                                <h5 className='w-[218px] font-Roboto_Bold text-2xl text-[#161722] py-4 uppercase'>WATCH AND LISTEN TO OUR SERMONS</h5>
                                <p className='w-[238px] font-Roboto_Regular text-base text-[#161722]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                <div className='pt-12'>
                                    <div className='flex gap-3'>
                                        <div>
                                            <img src={clock} className='object-cover' alt="" />
                                        </div>
                                        <p className='w-[137px] font-Roboto_Regular text-base text-[#161722]'>Friday 23:39 IST Saturday 11:20 ISD</p>
                                    </div>
                                    <div className='flex gap-3 mt-4'>
                                        <div>
                                            <img src={location} className='object-cover' alt="" />
                                        </div>
                                        <p className='w-[184px] font-Roboto_Regular text-base text-[#161722]'>No 233 Main St. New York, United States</p>
                                    </div>
                                </div>
                            </div>
                            <div className='relative after:absolute after:content-[""] after:bottom-0 after:left-0 after:w-0 after:h-4 after:bg-[#FFD0A0] after:transition-all after:duration-1000 group-hover:after:w-full'></div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Events