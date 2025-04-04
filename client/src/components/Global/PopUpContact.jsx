import React, { useState } from "react";
import { useForm } from "react-hook-form";
import {
  FaUser,
  FaPhoneAlt,
  FaEnvelope,
  FaGraduationCap,
  FaUserGraduate,
} from "react-icons/fa";
import { IoSend } from "react-icons/io5";

const PopUpContact = () => {
  const [close, setClose] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  // Google Form Action URL and Entry Field IDs
  const FORM_ACTION_URL =
    "https://docs.google.com/forms/u/0/d/e/1FAIpQLSeXU7QU0sS5xarAk5apgoY72aqmTq_StG0TeQ0yNL6CtH5rJg/formResponse";

  const ENTRY_NAME = "entry.209042228";
  const ENTRY_EMAIL = "entry.787613992";
  const ENTRY_PHONE = "entry.1226632416";
  const ENTRY_DEGREE = "entry.1712021602";
  const ENTRY_COURSE = "entry.1641369073";

  const onSubmit = async (data) => {
    const formData = new FormData();
    formData.append(ENTRY_NAME, data.fullName);
    formData.append(ENTRY_EMAIL, data.email);
    formData.append(ENTRY_PHONE, data.phone);
    formData.append(ENTRY_DEGREE, data.degree);
    formData.append(ENTRY_COURSE, data.course);

    try {
      await fetch(FORM_ACTION_URL, {
        method: "POST",
        body: formData,
        mode: "no-cors", // Required for Google Forms
      });
      alert("Form submitted successfully!");
    } catch (error) {
      console.error("Form submission error:", error);
      alert("There was an error submitting the form.");
    }
  };

  const handleClose = () => {
    setClose(true);
  };

  const selectedDegree = watch("degree");

  const ugCourses = ["B.COM", "BCA", "BBA", "BA"];
  const pgCourses = ["MBA", "MCA", "MA"];

  return (
    <div className={`fixed bottom-5 right-3 md:right-10 lg:right-20 z-30 bg-opacity-50 rounded-2xl ${close ? "hidden" : "inline-block"}`}>
      <div className="relative p-6 shadow-lg w-72 backdrop-blur-3xl rounded-2xl">
        <div className="relative text-center items-center text-2xl">
          <div onClick={handleClose} className="absolute cursor-pointer font-extrabold">X</div>
          <h2 className="text-xl font-bold text-center mb-4 w-full">Contact Us</h2>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* Full Name */}
          <div className="relative">
            <FaUser className="absolute left-3 top-4.5 text-gray-500" />
            <input
              {...register("fullName", { required: "Full Name is required" })}
              className="w-full p-2 pl-10 border border-gray-300 rounded-md mt-1 bg-white"
              placeholder="Full Name"
            />
            {errors.fullName && <p className="text-red-500 text-sm">{errors.fullName.message}</p>}
          </div>

          {/* Phone */}
          <div className="relative">
            <FaPhoneAlt className="absolute left-3 top-4.5 text-gray-500" />
            <input
              {...register("phone", {
                required: "Phone number is required",
                pattern: { value: /^[0-9]{10}$/, message: "Enter a valid 10-digit phone number" },
              })}
              className="w-full p-2 pl-10 border border-gray-300 rounded-md mt-1 bg-white"
              placeholder="Phone Number"
            />
            {errors.phone && <p className="text-red-500 text-sm">{errors.phone.message}</p>}
          </div>

          {/* Email */}
          <div className="relative">
            <FaEnvelope className="absolute left-3 top-4.5 text-gray-500" />
            <input
              {...register("email", {
                required: "Email is required",
                pattern: { value: /^\S+@\S+\.\S+$/, message: "Enter a valid email" },
              })}
              className="w-full p-2 pl-10 border border-gray-300 rounded-md mt-1 bg-white"
              placeholder="Email Address"
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
          </div>

          {/* Degree Dropdown */}
          <div className="relative">
            <FaGraduationCap className="absolute left-3 top-4.5 text-gray-500" />
            <select
              {...register("degree", { required: "Please select a degree" })}
              className="w-full p-2 pl-10 border border-gray-300 rounded-md mt-1 bg-white"
            >
              <option value="">Select Degree</option>
              <option value="UG">Undergraduate (UG)</option>
              <option value="PG">Postgraduate (PG)</option>
            </select>
            {errors.degree && <p className="text-red-500 text-sm">{errors.degree.message}</p>}
          </div>

          {/* Course Dropdown - appears instantly when degree is selected */}
          {selectedDegree && (
            <div className="relative">
              <FaUserGraduate className="absolute left-3 top-4.5 text-gray-500" />
              <select
                {...register("course", { required: "Please select a course" })}
                className="w-full p-2 pl-10 border border-gray-300 rounded-md mt-1 bg-white"
              >
                <option value="">Select Course</option>
                {(selectedDegree === "UG" ? ugCourses : pgCourses).map((course, idx) => (
                  <option key={idx} value={course}>{course}</option>
                ))}
              </select>
              {errors.course && <p className="text-red-500 text-sm">{errors.course.message}</p>}
            </div>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-[#bd1e2d] to-[#faa318] text-white p-2 rounded flex items-center justify-center gap-2 transition"
          >
            <IoSend /> Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default PopUpContact;
