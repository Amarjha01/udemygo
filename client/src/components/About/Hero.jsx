import React from 'react';
import { TbCircleArrowUpRight } from "react-icons/tb";

const About = () => {
  return (
    <div className='pt-10 flex flex-col px-4'>

      {/* We're hiring button */}
      <div className="ml-2 pt-40 space-y-4 flex items-start gap-2">
        <a
          href="/contact"
          className="flex items-center justify-center border border-black py-2 px-6 rounded-full hover:bg-gray-900 hover:text-white group transition-all"
        >
          <p className="font-medium text-sm lg:text-xl">We're hiring! Get in touch.</p>
          <span className='ml-4 text-3xl lg:text-5xl'>
            <TbCircleArrowUpRight />
          </span>
        </a>
      </div>

      {/* About Company Section */}
      <div className='flex flex-wrap lg:flex-nowrap'>
        {/* Left Section */}
        <div className='mt-4 ml-3 w-full lg:w-2/3'>
          <h2 className='text-3xl md:text-4xl lg:text-5xl font-semibold leading-snug'>
            The Leading Global{' '}
            <span className='text-amber-600 inline'>Marketplace</span>{' '}
            For Learning And Instruction
          </h2>
          <p className='mt-10 font-bold text-lg md:text-xl'>
            Borem ipsum dolor sit amet, consectetur adipiscing eliawe ellus luctus nec ullamcorper mattisBorem
          </p>
          <p className='mt-8 text-base md:text-lg'>
            At UdemyGo, we are dedicated to transforming your educational aspirations into reality by connecting you with top-tier online degree programs from renowned universities worldwide.
          </p>
          <p className='mt-2 text-base md:text-lg'>
            Our mission is to provide a seamless, flexible, and enriching learning experience tailored to meet the demands of today's dynamic professional landscape.
          </p>
        </div>

        {/* Right Section - Image Gallery */}
        <div className='ml-0 mt-6 lg:ml-10 h-[600px] lg:mt-0 flex w-full lg:w-1/3 flex-col sm:flex-row  items-center gap-4'>
          <div className=' h-full w-[50%] object-cover  rounded-3xl overflow-hidden'>
            <img src="src/assets/photo1.jpg" alt="photo" className=' h-full w-full object-cover rounded-3xl' />
          </div>
          <div className='flex h-full w-[50%]  flex-col gap-4 '>
            <div className='h-[50%]  rounded-3xl overflow-hidden'>
              <img src="src/assets/photo2.jpg" alt="photo" className='rounded-3xl' />
            </div>
            <div className=' h-[50%]  bg-amber-50 rounded-3xl overflow-hidden'>
              <img src="src/assets/photo3.jpg" alt="photo" className=' rounded-3xl' />
            </div>
          </div>
        </div>
      </div>

      {/* Life @ Company Section */}
      <div className="relative max-w-screen-2xl mx-auto mt-24">
        {/* Left Scroll Line and Dot (only for large screens) */}
        <div className="hidden lg:flex flex-col items-center absolute left-12 w-px h-[50%] bottom-[15%]">
          <div className="w-px grow bg-[#C8C9EB] mb-2"></div>
          <div className="border border-[#C8C9EB] rounded-full w-4 h-12 flex flex-col items-center py-1 overflow-hidden relative">
            <div className="w-2 h-4 rounded-full bg-[#333347] absolute animate-scroll"></div>
          </div>
          <div className="w-px basis-[25%] bg-[#C8C9EB] mt-2"></div>
        </div>

      </div>

    </div>
  );
};

export default About;
