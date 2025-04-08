import React from "react";

const VisionarySection = () => {
  return (
    <section className="bg-gradient-to-br from-[#ede9fe] to-[#e0e7ff] py-12 px-4 md:px-16 rounded-4xl">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-8 ">
        {/* Left: Image + Visionary Info */}
        <div className="flex flex-col md:flex-row bg-white/70 rounded-3xl shadow-lg overflow-hidden w-full md:w-2/3">
          <div className="md:w-1/3 bg-black flex justify-center items-center">
            <img
              src="/founder.jpeg"
              alt="Mr. Shahjahan"
              className="w-full h-full object-cover grayscale"
            />
          </div>
          <div className="p-6 md:p-8 md:w-2/3 bg-gradient-to-r from-[#ede9fe] to-[#f3f4f6]">
            <p className="text-sm font-semibold text-gray-500 mb-1">Meet The Visionary</p>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Mr. Shahjahan</h2>
            <p className="text-gray-700 mb-4">
              With 14+ years of shaping the education landscape, Shahjahan blends innovation and
              strategy to drive results. As Co-Founder, he leads <strong>EduVerticals</strong> with a
              focus on impactful initiatives, personalized client experiences, and business growth.
            </p>
            <p className="text-gray-700 mb-4">
              His expertise spans corporate affairs, media, and communication strategies, all while
              inspiring teams to excel.
            </p>
            <p className="text-gray-700">
              Known for his visionary leadership, he is passionate about creating transformative
              opportunities for students and businesses alike, making him a game-changer in the
              education field.
            </p>
          </div>
        </div>

        {/* Right: Empowering Box */}
        <div className="w-full md:w-1/3 bg-gradient-to-br from-[#1e293b] to-[#0f172a] text-white rounded-2xl p-6 md:p-8 shadow-xl">
          <h3 className="text-lg font-semibold mb-4">Empowering Through Education</h3>
          <p className="mb-4">
            <strong>EduVerticals</strong> is <span className="text-indigo-400">redefining</span> corporate education by bridging the gap between conventional learning and today&apos;s fast-evolving business landscape.
          </p>
          <p className="mb-4">
            We specialize in tailored online MBA programs that empower professionals to excel and organizations to thrive.
          </p>
          <p className="mb-4">
            With cutting-edge courses in Digital Marketing, AI, Finance, and more, we deliver results-driven learning solutions designed to sharpen leadership skills and boost business growth.
          </p>
          <p className="mb-4">
            Our approach ensures accessibility, flexibility, and measurable impact for learners worldwide.
          </p>
          <p className="font-semibold text-indigo-300">Empower. Innovate. Lead with EduVerticals.</p>
        </div>
      </div>
    </section>
  );
};

export default VisionarySection;
