import { Link } from "react-router-dom";

import {universitiesCoursesData} from '../components/Global/UniversityCourseData.jsx'

const CourseCatalog = () => {
  return (
    <div className=" my-5 grid grid-cols-1 lg:grid-cols-3 gap-4 justify-center ">
      {universitiesCoursesData.map((uni) => (
       <Link to={`/university/${uni.id}`}>
        <div key={uni.id} className="bg-indigo-50 p-4 rounded-xl shadow-md w-80">
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
  );
};

export default CourseCatalog;
