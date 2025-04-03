import { useParams } from "react-router-dom";
import React from "react";

import {universityDetailData} from '../components/Home/UniversityData.jsx'

const University = () => {
  const { id } = useParams();
  const university = universityDetailData[id] || null;

  if (!university) {
    return <div className="text-center text-xl font-bold pt-[10%]">University not found! 😕</div>;
  }

  return (
<div className=" min-h-fit md:py-[10%] pt-[30%] p-5  bg-amber-400 rounded-4xl">
<div className="max-w-6xl mx-auto p-8  bg-gradient-to-r from-gray-100 to-purple-100 rounded-lg shadow-md">
      <div className="flex flex-col md:flex-row items-center gap-6">
        {/* University Info */}
        <div className="flex-1">
          <div className="flex items-center gap-2">
            <img src={university.logo} alt="University Logo" className="h-12" />
            {university.emiPlan && <span className="bg-blue-500 text-white px-3 py-1 text-xs rounded">EMI Plan</span>}
          </div>
          <h1 className="text-4xl font-bold mt-2">{university.name}</h1>
          <p className="text-gray-600 text-lg">{university.location}</p>
          <p className="mt-4 text-gray-700">{university.description}</p>

          {/* Stats Section */}
          <div className="flex items-center gap-3 mt-6">
            <span className="bg-gray-200 px-3 py-1 rounded text-sm">{university.naac} NAAC</span>
            <span className="bg-gray-200 px-3 py-1 rounded text-sm">{university.rank} Rank</span>
            <span className="bg-gray-200 px-3 py-1 rounded text-sm">{university.founded} Founded</span>
            <span className="bg-purple-600 text-white px-3 py-1 rounded text-sm">{university.year}</span>
          </div>

          {/* Buttons */}
          <div className="mt-6 flex gap-4">
            <button className="bg-black text-white px-6 py-2 rounded flex items-center gap-2">
              <span>📱 WhatsApp</span>
            </button>
            <button className="bg-white border px-6 py-2 rounded text-black">Learn More</button>
          </div>
        </div>

        {/* Image & Fee Details */}
        <div className="flex-1">
          <img src={university.image} alt="University" className="w-full rounded-lg shadow-md" />

          {/* Fee Details */}
          <div className="mt-4 grid grid-cols-2 gap-3 text-center">
            <div className="bg-white shadow-md rounded p-3">
              <h3 className="text-lg font-bold">{university.creditPoints}</h3>
              <p className="text-gray-500 text-sm">Credit Points</p>
            </div>
            <div className="bg-white shadow-md rounded p-3">
              <h3 className="text-lg font-bold">{university.semesters}</h3>
              <p className="text-gray-500 text-sm">Semesters</p>
            </div>
            <div className="bg-white shadow-md rounded p-3">
              <h3 className="text-lg font-bold">{university.duration}</h3>
              <p className="text-gray-500 text-sm">Duration</p>
            </div>
            <div className="bg-white shadow-md rounded p-3">
              <h3 className="text-lg font-bold">{university.course}</h3>
              <p className="text-gray-500 text-sm">Course</p>
            </div>
            <div className="bg-white shadow-md rounded p-3 col-span-2">
              <h3 className="text-lg font-bold">{university.semesterFees}</h3>
              <p className="text-gray-500 text-sm">Semester Fees</p>
            </div>
            <div className="bg-white shadow-md rounded p-3 col-span-2">
              <h3 className="text-lg font-bold">{university.applicationFees}</h3>
              <p className="text-gray-500 text-sm">Application Fees</p>
            </div>
            <div className="bg-white shadow-md rounded p-3 col-span-2">
              <h3 className="text-lg font-bold">{university.totalFees}</h3>
              <p className="text-gray-500 text-sm">Total Fees</p>
            </div>
          </div>
        </div>
      </div>
    </div>
</div>
  );
};

export default University;

