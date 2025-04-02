import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const ExploreUniversities = () => {
  return (
    <div>
      <div className='h-auto bg-amber-50 md:pt-[20%] pt-[50%] p-5 flex flex-col justify-center items-center rounded-4xl'>
        <div className='bg-white max-w-fit p-1 flex gap-4 rounded-4xl'>
          <NavLink 
            to={'/explore-universities/university-catalog'} 
            className={({ isActive }) => `rounded-4xl px-2 py-1 ${isActive ? 'bg-black text-white' : 'text-black'}`}
          >
            University
          </NavLink>
          <NavLink 
            to={'/explore-universities/course-catalog'} 
            className={({ isActive }) => `rounded-4xl px-2 py-1 ${isActive ? 'bg-black text-white' : 'text-black'}`}
          >
            Courses
          </NavLink>
        </div>
        <Outlet />
      </div>
      <div className='bg-amber-800'></div>
    </div>
  );
};

export default ExploreUniversities;
