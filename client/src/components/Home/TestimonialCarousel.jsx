import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";

import gradientimg1 from '../../assets/gradientimg1.webp'

const testimonials = [
  {
    name: "Rachel Green",
    title: "Founder",
    text: "I want to thank you for creating such an amazing platform which helps entrepreneurs like me to take their product to the next level.",
  },
  {
    name: "Matt Le’Blanc",
    title: "Director",
    text: "The support and guidance I received have been truly outstanding. This has helped me refine my strategies and grow.",
  },
  {
    name: "Sarah Johnson",
    title: "CEO, StartupX",
    text: "Amazing experience! The insights gained have been a game changer for my business journey.",
  },
];

const TestimonialCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
   <div className=" ">
     <div className="relative flex items-center justify-center h-[400px] bg-[#181e2e] rounded-4xl  ">
        <div className=" absolute h-full w-full    ">
            
            <img src={gradientimg1} alt="" className="  absolute bottom-0 w-[100%] -translate-x-[50%] " />
            <img src={gradientimg1} alt="" className="  absolute rotate-180 top-[99.9%] w-[100%] -translate-x-[50%] " />
        </div>
      {/* Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 text-white p-2 bg-black/20 rounded-full"
      >
        <ArrowLeft size={24} />
      </button>

      {/* Testimonial Content */}
      <div className="relative w-full max-w-lg">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="bg-white p-6 rounded-lg shadow-xl text-center relative"
          >
            <div className="text-purple-500 text-4xl font-serif">“</div>
            <p className="text-gray-700 text-lg">{testimonials[currentIndex].text}</p>
            <div className="mt-4 border-t pt-2">
              <h3 className="font-semibold">{testimonials[currentIndex].name}</h3>
              <p className="text-gray-500 text-sm">{testimonials[currentIndex].title}</p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Next Button */}
      <button
        onClick={nextSlide}
        className="absolute right-4 text-white p-2 bg-black/20 rounded-full"
      >
        <ArrowRight size={24} />
      </button>
    </div>
   </div>
  );
};

export default TestimonialCarousel;
