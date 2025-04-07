import { Link } from "react-router-dom";
import { universitiesCoursesData } from '../components/Global/UniversityCourseData.jsx';
import { useState, useEffect } from "react";

const CourseCatalog = () => {
  // Flatten the nested array of university courses
  const allCourses = universitiesCoursesData.flat();

  const [courseData, setCourseData] = useState(allCourses);
  const [selectedFilter, setSelectedFilter] = useState("All");

  // Filter logic
  const handleFilter = (type) => {
    setSelectedFilter(type);
    if (type === "All") {
      setCourseData(allCourses);
    } else if (type === "PG") {
      setCourseData(allCourses.filter(course => course.degree.toLowerCase().includes("master")));
    } else if (type === "UG") {
      setCourseData(allCourses.filter(course => course.degree.toLowerCase() === "ug"));
    }
  };

  return (
    <div className="flex flex-col lg:flex-row gap-6 mt-5">
      
      {/* Left Side Filter */}
      <div className="w-full lg:w-1/4 flex flex-col gap-4">
        <button 
          onClick={() => handleFilter("All")}
          className={`px-4 py-3 rounded-lg text-left ${selectedFilter === "All" ? "bg-gradient-to-r from-blue-400 to-purple-500 text-white" : "bg-gray-100"}`}>
          <h2 className="font-bold text-lg">All Courses</h2>
          <p className="text-sm"> & Culture</p>
        </button>

        <button 
          onClick={() => handleFilter("PG")}
          className={`px-4 py-3 rounded-lg text-left ${selectedFilter === "PG" ? "bg-gradient-to-r from-blue-400 to-purple-500 text-white" : "bg-gray-100"}`}>
          <h2 className="font-bold text-lg">PG Courses</h2>
          <p className="text-sm">After Graduation</p>
        </button>

        <button 
          onClick={() => handleFilter("UG")}
          className={`px-4 py-3 rounded-lg text-left ${selectedFilter === "UG" ? "bg-gradient-to-r from-blue-400 to-purple-500 text-white" : "bg-gray-100"}`}>
          <h2 className="font-bold text-lg">UG Courses</h2>
          <p className="text-sm">After 12th</p>
        </button>
      </div>

      {/* Courses Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 justify-center w-full">
        {courseData.map((uni, index) => (
          <Link key={`${uni.name}-${index}`} to={`/university/${uni.id}`}>
            <div className="bg-indigo-50 p-4 rounded-xl shadow-md w-80">
              <div className="flex items-center space-x-3">
                <img src={uni.logo} alt={`${uni.name} Logo`} className="h-7" />
                {uni.emiPlan && (
                  <span className="bg-blue-500 text-white px-2 py-1 rounded text-xs">
                    Easy EMI
                  </span>
                )}
              </div>
              <h2 className="font-bold text-lg mt-2">{uni.course}</h2>
              <p className="text-blue-700">{uni.name}</p>
              <p className="text-gray-600 text-sm mt-1">
                {uni.degree} • From {uni.fee} • {uni.duration}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CourseCatalog;
