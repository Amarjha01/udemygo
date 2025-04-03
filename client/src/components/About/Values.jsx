import React from 'react';
import { CiStar } from 'react-icons/ci';
import gradientimg1 from '../../assets/gradientimg1.webp'
import { FaGraduationCap } from "react-icons/fa";

function Values() {
  return (
    <div className=" relative bg-[#181E2E] p-4 rounded-2xl h-[270px] overflow-hidden">
    <div className=" absolute h-full w-full    ">
               
               <img src={gradientimg1} alt="" className="  absolute bottom-0 w-[100%] -translate-x-[50%] " />
               <img src={gradientimg1} alt="" className="  absolute rotate-180 top-[99.9%] w-[100%] -translate-x-[50%] " />
           </div>
      <div className="text-center mb-6">
        <p className="text-white text-left ml-10 font-bold text-3xl md:text-4xl">Our Core Values</p>
        <p className="text-white text-lg md:text-md">The Pillars of UdemyGo</p>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {/* Value 1 */}
        <div className="flex flex-col items-center justify-center bg-[#2D3A50] p-4 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-200">
          <div className="text-[#FFD700] text-2xl mb-2">
            <CiStar />
          </div>
          <h1 className="text-white font-semibold text-md mb-1">Innovation in Learning</h1>
          <p className="text-center text-xs text-[#A0A7B5]">
            Pioneering new methods and technologies in education.
          </p>
        </div>

        {/* Value 2 */}
        <div className="flex flex-col items-center justify-center bg-[#2D3A50] p-4 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-200">
          <div className="text-[#FFD700] text-2xl mb-2">
            <FaGraduationCap />
          </div>
          <h1 className="text-white font-semibold text-md mb-1">Customized Excellence</h1>
          <p className="text-center text-xs text-[#A0A7B5]">
            Tailoring solutions to meet unique needs.
          </p>
        </div>

        {/* Value 3 */}
        <div className="flex flex-col items-center justify-center bg-[#2D3A50] p-4 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-200">
          <div className="text-[#FFD700] text-2xl mb-2">
            <CiStar />
          </div>
          <h1 className="text-white font-semibold text-md mb-1">Global Perspective</h1>
          <p className="text-center text-xs text-[#A0A7B5]">
            Bringing worldwide insights to local challenges.
          </p>
        </div>

        {/* Value 4 */}
        <div className="flex flex-col items-center justify-center bg-[#2D3A50] p-4 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-200">
          <div className="text-[#FFD700] text-2xl mb-2">
            <CiStar />
          </div>
          <h1 className="text-white font-semibold text-md mb-1">Lifelong Growth</h1>
          <p className="text-center text-xs text-[#A0A7B5]">
           Fostering continuous growth at every career stage.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Values;
