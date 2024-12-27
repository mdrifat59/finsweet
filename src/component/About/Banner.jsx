import React from 'react' 


const Banner = () => {
   return (
      <>
         <div className={`bg-[url('/public/img/AboutBanner.png')] bg-cover bg-center py-10`}>
            <div className='px-[110px] py-[160px] '>
               <span className='font-Roboto_Bold text-base text-[#161722]'>About us</span>
               <h2 className='w-[647px] mt-4 font-Roboto_Bold text-[#161722] text-5xl leading-[64px]'>Serving the world around us</h2>
            </div>
         </div>
      </>
   )
}

export default Banner