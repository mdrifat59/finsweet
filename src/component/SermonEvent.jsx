import React from 'react'
import sermonimg from '/public/img/sermoneventimg.png'
import location from '/public/img/location.png'
import clock from '/public/img/clock.png'

const SermonEvent = () => {
  return (
    <>
      <div className='py-12 md:py-14 lg:py-16 xl:py-[128px] bg-[#f5f2f0]'>
        <div className='w-full px-4 sm:px-8 lg:max-w-container lg:mx-auto xl:flex justify-between '>
          <div className="md:w-[630px] mx-auto xl:mx-0">
            <img src={sermonimg} alt="" />
            <h4 className='font-Roboto_Regular text-xs md:text-base bg-gradient-to-r from-[#A54E2B] to-[#DC9853] mt-10  text-transparent bg-clip-text'>Upcoming Event </h4>
            <div className='mt-5'>
              <h2 className='w-[639px] font-Roboto_Bold text-2xl md:text-3xl lg:text-4xl 2xl:text-5xl'>HOW TO TRULY TRUST SOMEONE</h2>
              <p className='sm:w-[500px] md:w-[570px] lg:w-[630px] my-6 font-Roboto_Regular text-xs md:text-base lg:text-lg text-[#161722]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui faucibus in ornare quam viverra orci sagittis eu volutpat. Pharetra sit amet aliquam id diam maecenas ultricies.
              </p>
              <div className='flex gap-3'>
                <div className="w-1  bg-[#FFD2A4]"></div>
                <h5 className='sm:w-[500px] md:w-[580px] lg:w-[607px] font-Roboto_Regular text-xs sm:text-base md:text-xl lg:text-2xl text-[#47474f] leading-5 lg:leading-9'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui faucibus in ornare quam viverra orci sagittis eu volutpat.</h5>

              </div>
              <p className='sm:w-[500px] md:w-[570px] lg:w-[630px] my-6 font-Roboto_Regular text-xs md:text-base lg:text-lg text-[#161722]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui faucibus in ornare quam viverra orci sagittis eu volutpat. Pharetra sit amet aliquam id diam maecenas ultricies.</p>

            </div>
          </div>

          {/* Register form */}
          <div className="lg:w-[522px] xl:w-[450px] 2xl:w-[522px] lg:mx-auto xl:mx-0  lg:mt-16 xl:mt-0 bg-white xl:h-[484px]">
            <div className="w-full p-5 lg:p-10">
              <h4 className='font-Roboto_Bold text-xl  md:text-2xl lg:text-[32px] text-[#161722] uppercase '>Register now</h4>
              <div className='my-8 sm:flex  items-center gap-4'>
                <div className='flex gap-3 mt-4'>
                  <div>
                    <img src={location} className='object-cover' alt="" />
                  </div>
                  <p className='w-[184px] font-Roboto_Regular text-base text-[#161722]'>No 233 Main St. New York, United States</p>
                </div>
                <div className='flex gap-3'>
                  <div>
                    <img src={clock} className='object-cover' alt="" />
                  </div>
                  <p className='w-[137px] font-Roboto_Regular text-base text-[#161722]'>13 May, 2018</p>
                </div>
              </div>
              <div>
                <label className='font-Roboto_Medium text-sm text-[#787984]'>Full Name</label><br />
                <input type="text" className='outline-none w-full' placeholder='Enter your name' />
                <hr className='mt-2 ' />
              </div>
              <div className='mt-8'>
                <label className='font-Roboto_Medium text-sm text-[#787984]'>Email</label><br />
                <input type="email" className='outline-none w-full' placeholder='Enter your Email' />
                <hr className='mt-2 ' />
              </div>
              <button className='font-Roboto_Regular text-xs md:text-base text-[#1C1D28] mt-8 px-6 md:px-8 lg:px-16 py-2 md:py-4 lg:py-6 bg-[#FFD2A4] rounded-xl uppercase'>Register now</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default SermonEvent