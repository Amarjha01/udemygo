import UniversityCardList from "../components/Home/UniversityCardList";
import TestimonialCarousel from "../components/Home/TestimonialCarousel";
import Question from "../components/Home/Question";
import HeroSection from "../components/Home/HeroSection";
import Process from "../components/Home/Process";
import WhyChoose from "../components/Home/WhyChoose";
import CareerBoost from "../components/Home/CareerBoost";
import WhatSetsUsApart from "../components/Home/WhatSetsUsApart";

const Home = () => {
  return (
    <div>
      {/* Background Wrapper */}
      <div className="w-full   rounded-t-[2rem]">
        {/* Hero Section */}
        <HeroSection />
      </div>
      <Process />
      <UniversityCardList />
      <WhyChoose />
    

    
<CareerBoost />
<WhatSetsUsApart />

      {/* Carousel Testimonial */}
      <section>
        <TestimonialCarousel />
      </section>
  {/* clgs & univercity */}



     

    </div>
  );
};

export default Home;
