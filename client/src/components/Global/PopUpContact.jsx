import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import {
  FaUser,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaLinkedin,
} from "react-icons/fa";
import { IoSend } from "react-icons/io5";

const PopUpContact = () => {
    const [close , setClose] = useState(false)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Form Submitted:", data);
  };

  const handleClose = ()=>{
setClose(true);
  }
  return (
    <div className={`  fixed bottom-5 right-3 md:right-10 lg:right-20 z-30 bg-opacity-50 rounded-2xl ${close ? 'hidden' : 'inline-block'}`}>
      <div className="relative p-6 shadow-lg w-72 backdrop-blur-3xl rounded-2xl">
        <div className=" relative text-center text-2xl  ">
           <div  onClick={handleClose} className=" font-extrabold cursor-pointer absolute right-1 -top-2">X</div>
            <h2 className="text-xl font-bold text-center mb-4 ">Contact Us</h2>
        
        </div>
       
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* Full Name */}
          <div className="relative">
            <FaUser className="absolute left-3 top-3 text-gray-500" />
            <input
              {...register("fullName", { required: "Full Name is required" })}
              className="w-full p-2 pl-10 border border-gray-300 rounded-md mt-1 bg-white"
              placeholder="Full Name"
            />
            {errors.fullName && <p className="text-red-500 text-sm">{errors.fullName.message}</p>}
          </div>

          {/* Phone */}
          <div className="relative">
            <FaPhoneAlt className="absolute left-3 top-3 text-gray-500" />
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
            <FaEnvelope className="absolute left-3 top-3 text-gray-500" />
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
            <FaMapMarkerAlt className="absolute left-3 top-3 text-gray-500" />
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
