import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const ExploreUniversities = () => {
  return (
    <div>
      <div className='h-auto bg-amber-50 md:pt-[20%] pt-[50%] lg:px-10 flex flex-col justify-center items-center rounded-4xl'>
        <div className='bg-white max-w-fit p-1 flex gap-4 rounded-4xl'>
          <NavLink 
            to={'/explore-universities/university-catalog'} 
            className={({ isActive }) => `rounded-4xl px-2 py-1  ${isActive ? 'bg-black text-white font-bold' : 'text-black font-medium'}`}
          >
            University
          </NavLink>
          <NavLink 
            to={'/explore-universities/course-catalog'} 
            className={({ isActive }) => `rounded-4xl px-2 py-1 ${isActive ? 'bg-black text-white font-bold' : 'text-black font-medium'}`}
          >
            Courses
          </NavLink>
        </div>
        <div className=' my-5 text-4xl font-black text-gray-800 flex flex-col justify-center items-center'>
          <p>
            Your Next 
            <span className=' px-3 py-2 bg-white rounded-4xl'>
              Academic
            </span>
          </p>
          <p>Journey Awaits.</p>
        </div>
        <Outlet />
      </div>
      
    </div>
  );
};

export default ExploreUniversities;
