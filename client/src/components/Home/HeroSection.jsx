import { IoRocketSharp } from "react-icons/io5";

const HeroSection = () => {
    return (
      <section className="flex flex-col md:flex-row justify-between items-center h-auto pt-40 px-6">
        <div className="max-w-lg">
          <h1 className="flex items-center space-x-2 text-4xl font-bold">
            <IoRocketSharp className="text-blue-600" />
            <span>Elevate Your Future</span>
          </h1>
  
          <h2 className="text-3xl font-semibold text-gray-800 mt-2">
            with UdemyGo
          </h2>
  
          <p className="text-lg text-gray-600 mt-4">
            We are committed to providing top-notch education through a diverse range of UG and PG programs designed to equip learners with in-demand skills.
          </p>
        </div>
  
        <div>
          <img
            src="https://ifingerstudio.com/eduvalt/wp-content/uploads/2023/07/banner_img.png"
            alt="Online Learning Banner"
            className="max-w-full h-auto"
          />
        </div>
      </section>
    );
  };
  
  export default HeroSection;
  