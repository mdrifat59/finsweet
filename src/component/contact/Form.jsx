import React from 'react'
import { Link } from 'react-router-dom'
import { FacebookIcons, LinkdinIcons, TwitterIcons } from '../../svg/Icons'

const Form = () => {
  return (
    <div className='py-12 md:py-14 lg:py-16 xl:py-[128px] bg-[#f5f2f0]'>
      <div className='w-full px-4 sm:px-8 lg:max-w-container lg:mx-auto xl:flex justify-between '>
        <div className="md:w-[624px] mx-auto xl:mx-0">
          <div className="w-full p-5 lg:p-10">
            <h4 className='font-Roboto_Bold text-xl  md:text-2xl lg:text-[32px] text-[#161722] uppercase '>Contact form:</h4>
            <div className='flex flex-col gap-5 mt-3 lg:mt-8'>
              <input type="text" className='p-5 rounded-lg outline-none w-full placeholder:text-[#161722]' placeholder='Your full Name' />
              <input type="text" className='p-5 rounded-lg outline-none w-full placeholder:text-[#161722]' placeholder='Your Email' />
              <input type="text" className='p-5 rounded-lg outline-none w-full placeholder:text-[#161722]' placeholder='Query Related' />
              <textarea rows={4} type="text" className='p-5 rounded-lg outline-none w-full resize-none placeholder:text-[#161722]' placeholder='Message' />
            </div>
            <button className='w-full font-Roboto_Regular text-xs md:text-base text-[#1C1D28] mt-8 px-6 md:px-8 lg:px-16 py-2 md:py-4 lg:py-6 bg-[#FFD2A4] rounded-xl uppercase'>Send message</button>
          </div>
        </div>

        {/* Address bar */}
        <div className="lg:w-[522px] xl:w-[450px] 2xl:w-[552px] lg:mx-auto xl:mx-0  flex flex-col justify-center items-center xl:items-start  lg:mt-16 xl:mt-0 bg-[#f5f2f0] xl:h-[484px]">
          <div className='flex flex-col  gap-1'>
            <label className='font-Roboto_Regular text-lg text-[#5e5c5b]'>Address</label>
            <h5 className='w-[242px] font-Roboto_Bold text-2xl text-[#161722] leading-7 uppercase'>NH 234   Public Square
              San Francisco  65368</h5>
          </div>
          <div className='my-8 flex flex-col gap-1'>
            <label className='font-Roboto_Regular text-lg text-[#5e5c5b]'>Contact Details</label>
            <h5 className='w-[242px] font-Roboto_Bold text-2xl text-[#161722] leading-7 uppercase'> (480) 555-0103 </h5>
            <h4 className='w-[242px] font-Roboto_Bold text-2xl text-[#161722] leading-7 mt-2 uppercase'> finsweet@example.com</h4>
          </div>
          <div className='flex flex-col gap-1'>
            <label className='font-Roboto_Regular text-lg text-[#5e5c5b]'>Find us here</label>
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

    </div>
  )
}

export default Form