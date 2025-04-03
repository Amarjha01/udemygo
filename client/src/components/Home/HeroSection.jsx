import { IoRocketSharp } from "react-icons/io5";
import { useState, useEffect } from "react";
import { FaWhatsapp } from "react-icons/fa";
import ScrollLogo from "../Global/ScrollLogo";
import { NavLink } from "react-router-dom";
const synonyms = [
  "Boost",
  "Enhance",
  "Advance",
  "Upgrade",
  "Empower",
  "Elevate",
];

const HeroSection = () => {
  const [currentWord, setCurrentWord] = useState(synonyms[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prevWord) => {
        const currentIndex = synonyms.indexOf(prevWord);
        const nextIndex = (currentIndex + 1) % synonyms.length;
        return synonyms[nextIndex];
      });
    }, 2000); // Change word every 2 seconds

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);

  return (
    <section className="flex flex-col md:flex-row justify-between items-center max-h-fit md:max-h-[700px]  pt-40 px-6 mb-20 bg-amber-200 md:bg-gradient-to-b from-gray-50 to-[#dddef8] rounded-4xl">
      {/*  */}
      <div className=" overflow-x-hidden w-[100%] md:w-[50%]">
        <h1 className="flex items-center space-x-2 text-3xl md:text-5xl font-bold anta-900 py-3 ">
          <IoRocketSharp className="text-[#bd1e2d] text-4xl" />
          <span className="text-center">
            <span className="px-4 py-1 bg-white rounded-4xl">
              {currentWord}
            </span>
            Your Future
          </span>
        </h1>

        <h2 className="text-3xl font-semibold text-gray-800 mt-2">
          with UdemyGo
        </h2>

        <p className="text-lg text-gray-600 mt-4 ">
          We are committed to providing top-notch education through a diverse
          range of UG and PG programs designed to equip learners with in-demand
          skills.
        </p>
        <div className=" flex gap-3 mt-12 ">
          <a href="https://api.whatsapp.com/send?phone=918104550586&text=hello%20iam%20intrested">
            <button className=" px-6 py-3 bg-black text-white rounded-xl flex items-center gap-3 font-bold cursor-pointer z-10">
              {" "}
              <span>
                <FaWhatsapp />
              </span>
              Whatsapp
            </button>
          </a>
          <NavLink
            to="/about"
            className="px-6 py-3 border-2 border-[#181e2e] rounded-xl font-bold cursor-pointer z-10 text-center"
          >
            Learn More
          </NavLink>
        </div>
        <ScrollLogo />
      </div>

      {/* image section */}
      <div className=" z-20  md:h-[600px] md:w-[50%] w-[100%] h-[400px]  flex md:p-5 p-2 gap-3 ">
        <div className="overflow-hidden rounded-2xl h-full ">
          <img
            src="https://eduverticals.com/_next/image?url=https%3A%2F%2Fpub-cadcc242bdb44ad0a740f236913e5827.r2.dev%2Fpublic%2Fassets%2Fimages%2Fhero-imgs%2Fhome%2F1.webp&w=1920&q=75"
            alt=""
            className=" h-full object-cover rounded-2xl hover:scale-120 transition duration-200 ease-in"
          />
        </div>
        <div className="w-[50%] min-h-[full flex flex-col gap-3">
          <div className=" w-[100%] overflow-hidden  rounded-2xl">
            <img
              src="https://eduverticals.com/_next/image?url=https%3A%2F%2Fpub-cadcc242bdb44ad0a740f236913e5827.r2.dev%2Fpublic%2Fassets%2Fimages%2Fhero-imgs%2Fhome%2F2.webp&w=1920&q=75"
              alt=""
              className=" h-full object-cover w-[100%] rounded-2xl hover:scale-120 transition duration-200 ease-in"
            />
          </div>
          <div className=" w-[100%] overflow-hidden rounded-2xl  ">
            <img
              src="https://eduverticals.com/_next/image?url=https%3A%2F%2Fpub-cadcc242bdb44ad0a740f236913e5827.r2.dev%2Fpublic%2Fassets%2Fimages%2Fhero-imgs%2Fhome%2F3.webp&w=1920&q=75"
              alt=""
              className=" h-full object-cover w-[100%] rounded-2xl hover:scale-120 transition duration-200 ease-in"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
