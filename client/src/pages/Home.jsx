import { IoRocketSharp } from "react-icons/io5";
import CardList from '../components/CardList.jsx'
import CarouselComponent from "../components/CarouselComponent.jsx";
import TestimonialCarousel from "../components/TestimonialCarousel.jsx";
const Home = () => {
  return (
    <div className=" w-full bg-gradient-to-b from-gray-50 to-violet-200  rounded-t-4xl  -z-10">
      <div className=" relative  top-[35%] px-6 w-full  ">
        {/* hero section */}
        <section className="flex justify-between  items-center h-auto pt-48">
          <div className=" ">
            <h1 className="flex items-center space-x-2">
              <span className="flex items-center space-x-2">
                <IoRocketSharp />
                <span>Elevate</span>
              </span>
              <span>Your Future</span>
            </h1>

            <h2>with UdemyGo</h2>
            <p>
              we are committed to providing top-notch education through a
              diverse range of UG and PG programs designed to equip learners
              with in-demand skills.
            </p>
          </div>
          <div>
            <img src="https://ifingerstudio.com/eduvalt/wp-content/uploads/2023/07/banner_img.png" alt="" className="" />
          </div>
        </section>
{/* testimonials */}
<section>
  <CardList />
</section>

{/* Carousel testimonial */}
<section>
  <TestimonialCarousel />
</section>
      </div>
    </div>
  );
};

export default Home;
