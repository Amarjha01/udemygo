import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-g-8 px-4 py-4">
      <div className="mx-auto max-w-screen-2xl bg-[#EFF0F9] rounded-2xl lg:rounded-3xl shadow-xl">
        <div className="mx-auto max-w-screen-xl flex flex-wrap items-start gap-x-4 gap-y-8 px-5 py-8 sm:py-12 lg:py-16">
          <div className="basis-[220px] md:basis-[360px] lg:basis-[220px] flex-grow shrink-0 space-y-6 lg:space-y-8">
            <div className="flex w-full">
              <img
                alt="logo"
                loading="lazy"
                width="100"
                height="50"
                className="object-contain w-40"
                src="/logo-gradient.png"
              />
            </div>
            <p>
              We're more than just an educational platform; we're a catalyst for change. Our mission is to empower
              students through comprehensive support, mentorship, and innovative learning resources.
            </p>
            <div>
              <a
                href=""
                className="relative group z-1"
              >
                <div className="inline-flex items-center justify-center gap-2 rounded-full px-4 py-2.5 lg:py-3 font-semibold w-full bg-gray-900 text-white ">
                  WhatsApp Us
                </div>
              </a>
            </div>
          </div>
          <div className="basis-[220px] md:basis-[360px] lg:basis-[220px] flex-grow shrink-0 space-y-3">
            <h2 className="font-semibold uppercase opacity-80">Company</h2>
            <ul className="font-medium">
              <li><a className="text-sm py-2 block capitalize hover:translate-x-1 transition-all" href="/about">About us</a></li>
              <li><a className="text-sm py-2 block capitalize hover:translate-x-1 transition-all" href="/corporate-partnership">Corporate Partnership</a></li>
              <li><a className="text-sm py-2 block capitalize hover:translate-x-1 transition-all" href="/academic-catalog">Academic Catalog</a></li>
              <li><a className="text-sm py-2 block capitalize hover:translate-x-1 transition-all" href="/course-catalog">Course Catalog</a></li>
              <li><a className="text-sm py-2 block capitalize hover:translate-x-1 transition-all" href="/contact">Contact us</a></li>
            </ul>
          </div>
          <div className="basis-[220px] md:basis-[360px] lg:basis-[220px] flex-grow shrink-0 space-y-3">
            <h2 className="font-semibold uppercase opacity-80">Top Universities</h2>
            <ul className="font-medium">
              <li><a className="text-sm py-2 block capitalize hover:translate-x-1 transition-all" href="/academic-catalog">Indian Institute Of Management (IIM) Kozhikode</a></li>
            </ul>
          </div>
          <div className="basis-[220px] md:basis-[360px] lg:basis-[220px] flex-grow shrink-0 space-y-3">
            <h2 className="font-semibold uppercase opacity-80">Top Courses</h2>
            <ul className="font-medium">
              <li><a className="text-sm py-2 block capitalize hover:translate-x-1 transition-all" href="/course-catalog">PG Courses</a></li>
            </ul>
          </div>
          <div className="basis-[220px] md:basis-[360px] lg:basis-[220px] flex-grow shrink-0 space-y-3">
            <h2 className="font-semibold uppercase opacity-80">Get in touch</h2>
            <div className="flex flex-col items-start gap-2">
              <a href="mailto:contact@eduverticals.com" className="flex items-center gap-2 hover:translate-x-1 transition-all">
                contact@eduverticals.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
