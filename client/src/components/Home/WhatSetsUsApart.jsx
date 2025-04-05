import React from "react";
import { Link } from "react-router-dom";

const WhatSetsUsApart = () => {
  return (
    <div className="bg-gradient-to-b from-white to-indigo-100 p-8 md:p-16 rounded-xl my-2">
      <div className="max-w-7xl mx-auto">
        {/* Heading and Button */}
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">What Sets us Apart</h2>
          <Link to={"/about"}><button className="border border-gray-300 px-5 py-2 rounded-lg text-gray-900 hover:bg-gray-100 transition-all flex items-center gap-2">
            About us ↗
          </button></Link>
        </div>

        {/* Feature Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-10">
          {/* Dark Grid */}
          <div className="bg-gradient-to-br from-slate-900 to-slate-800 text-white p-6 rounded-xl grid grid-cols-2 gap-6">
            <div>
              <h4 className="font-bold mb-1">Personal Mentorship</h4>
              <p className="text-sm">One-on-one career coaching with industry leaders.</p>
            </div>
            <div>
              <h4 className="font-bold mb-1">Human Support</h4>
              <p className="text-sm">Real people guide students through assignments and exams.</p>
            </div>
            <div>
              <h4 className="font-bold mb-1">True Value</h4>
              <p className="text-sm">We offer significant, lasting value – not superficial discounts.</p>
            </div>
            <div>
              <h4 className="font-bold mb-1">A Strong Community</h4>
              <p className="text-sm">We thrive together, not in isolation.</p>
            </div>
          </div>

          {/* Thriving Card */}
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h4 className="italic font-semibold text-lg mb-2">Thriving, not just surviving.</h4>
            <p className="mb-4 text-sm text-gray-700">Reduce Stress, Boost Performance.</p>

            <h5 className="font-semibold mb-1">Doings</h5>
            <ul className="list-disc list-inside text-sm text-gray-600 mb-4">
              <li>Personalized help with assignments and projects.</li>
              <li>Encouraging academic success through expert-led guidance and support.</li>
            </ul>

            <h5 className="font-semibold mb-1">Outcomes</h5>
            <ul className="list-disc list-inside text-sm text-gray-600">
              <li>Not feeling forced to do assignments instead gaining knowledge.</li>
              <li>Excelling in your field of expertise.</li>
            </ul>
          </div>
        </div>

        {/* Bottom Two Cards */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Image + Text */}
          <div className="bg-white rounded-xl overflow-hidden shadow-md grid grid-cols-1 md:grid-cols-2">
            <img
              src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1"
              alt="students"
              className="object-cover h-full w-full"
            />
            <div className="p-6">
              <h4 className="italic font-semibold mb-2">Honest guidance, real results.</h4>
              <p className="text-sm text-gray-600 mb-2">More Than Generic Advice.</p>

              <h5 className="font-semibold mb-1">Doings</h5>
              <ul className="list-disc list-inside text-sm text-gray-600 mb-4">
                <li>Direct mentorship with industry experts, tailored to individual goals.</li>
                <li>Expert help with resume building and strategic career moves.</li>
                <li>Access to exclusive certifications from premier institutes like IIMs.</li>
              </ul>

              <h5 className="font-semibold mb-1">Outcomes</h5>
              <ul className="list-disc list-inside text-sm text-gray-600">
                <li>Learning from the experts, creates another expert.</li>
                <li>Sustainability, as you pursue what you love and enjoy a productive career.</li>
              </ul>
            </div>
          </div>

          {/* Community Card */}
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h4 className="italic font-semibold mb-2">No more going at it alone.</h4>
            <p className="text-sm text-gray-700 mb-2">Build Connections, Not Credentials.</p>

            <h5 className="font-semibold mb-1">Doings</h5>
            <ul className="list-disc list-inside text-sm text-gray-600 mb-4">
              <li>You become part of a supportive community, sharing your journey with peers and mentors.</li>
              <li>Collaboration and connection fosters a richer academic experience.</li>
            </ul>

            <h5 className="font-semibold mb-1">Outcomes</h5>
            <ul className="list-disc list-inside text-sm text-gray-600">
              <li>You excel in teamwork which boosts your corporate journey.</li>
              <li>Learn leadership skills and the process of becoming a future leader.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatSetsUsApart;
