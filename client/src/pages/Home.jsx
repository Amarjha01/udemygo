import CardList from "../components/Home/CardList";
import TestimonialCarousel from "../components/Home/TestimonialCarousel";
import Question from "../components/Home/Question";
import HeroSection from "../components/Home/HeroSection";

const Home = () => {
  return (
    <div>
      {/* Background Wrapper */}
      <div className="w-full bg-gradient-to-b from-gray-50 to-[#dddef8] rounded-t-[2rem]">
        
        {/* Hero Section */}
        <HeroSection />
        
      </div>

    

      {/* Carousel Testimonial */}
      <section>
        <TestimonialCarousel />
      </section>
  {/* clgs & univercity */}
  <section>
        <CardList />
      </section>
      {/* FAQs / Questions */}
      <section>
        <Question />
      </section>
    </div>
  );
};

export default Home;
