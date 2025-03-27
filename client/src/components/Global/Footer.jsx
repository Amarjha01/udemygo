import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-g-8 px-4 py-4">
      <div className="mx-auto max-w-screen-2xl bg-[#EFF0F9] rounded-2xl lg:rounded-3xl shadow-xl">
        <div className="mx-auto max-w-screen-xl flex flex-wrap items-start gap-x-4 gap-y-8 px-5 py-8 sm:py-12 lg:py-16">
          <div className="basis-[220px] md:basis-[360px] lg:basis-[220px] flex-grow shrink-0 basis-full space-y-6 lg:space-y-8">
            <div className="flex w-full">
              <img
                alt="logo"
                loading="lazy"
                width="100"
                height="50"
                decoding="async"
                data-nimg="1"
                className="object-contain w-40"
                style={{ color: 'transparent' }}
                src="/logo-gradient.png"
              />
            </div>
            <p>
              We're more than just an educational platform; we're a catalyst for change. Our mission is to empower
              students through comprehensive support, mentorship, and innovative learning resources.
            </p>
            <div>
              <a
                href="https://wa.me/919310724982?text=Hi%20Eduverticals,%20I%20am%20reaching%20out%20to%20inquire%20about%20your%20services.%20Could%20you%20please%20provide%20more%20information%20on%20your%20student%20programs%20or%20corporate%20partnership%20opportunities?%20Looking%20forward%20to%20hearing%20from%20you.%20Thank%20you!"
                className="relative group z-1"
              >
                <div className="inline-flex items-center justify-center gap-2 rounded-full px-4 py-2.5 lg:py-3 font-semibold relative z-[2] w-full bg-gray-900 text-white rounded-md px-6 py-3.5 whitespace-nowrap">
                  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                    
                  </svg>
                  WhatsApp Us
                </div>
                <img
                  alt="effect"
                  loading="eager"
                  width="0"
                  height="0"
                  decoding="async"
                  data-nimg="1"
                  className="w-32 h-10 top-[50%] object-cover object-bottom border-none absolute blurred-edges select-none pointer-events-none absolute w-40 h-16 border left-1/2 -translate-x-1/2 +top-0 z-[0] -translate-y-[0%] transition-all select-none"
                  style={{ color: 'transparent' }}
                  src="/assets/images/button-effect.svg"
                />
              </a>
            </div>
          </div>
          <div className="basis-[220px] md:basis-[360px] lg:basis-[220px] flex-grow shrink-0 space-y-3">
            <h2 className="font-semibold uppercase opacity-80">Company</h2>
            <ul className="font-medium">
              <li className="flex">
                <a className="text-sm py-2 block capitalize hover:translate-x-1 transition-all" href="/about">
                  About us
                </a>
              </li>
              <li className="flex">
                <a className="text-sm py-2 block capitalize hover:translate-x-1 transition-all" href="/corporate-partnership">
                  Corporate Partnership
                </a>
              </li>
              <li className="flex">
                <a className="text-sm py-2 block capitalize hover:translate-x-1 transition-all" href="/academic-catalog">
                  Academic Catalog
                </a>
              </li>
              <li className="flex">
                <a className="text-sm py-2 block capitalize hover:translate-x-1 transition-all" href="/course-catalog">
                  Course Catalog
                </a>
              </li>
              <li className="flex">
                <a className="text-sm py-2 block capitalize hover:translate-x-1 transition-all" href="/contact">
                  Contact us
                </a>
              </li>
            </ul>
          </div>
          <div className="basis-[220px] md:basis-[360px] lg:basis-[220px] flex-grow shrink-0 space-y-3 flex-grow-[2]">
            <h2 className="font-semibold uppercase opacity-80">Top Universities</h2>
            <ul className="font-medium">
              <li className="flex">
                <a className="text-sm py-2 block capitalize hover:translate-x-1 transition-all" href="/academic-catalog">
                  Indian Institute Of Management (IIM) Kozhikode
                </a>
              </li>
              {/* Add more list items for universities */}
            </ul>
          </div>
          <div className="basis-[220px] md:basis-[360px] lg:basis-[220px] flex-grow shrink-0 space-y-3 flex-grow-[2]">
            <h2 className="font-semibold uppercase opacity-80">Top Courses</h2>
            <ul className="font-medium">
              <li className="flex">
                <a className="text-sm py-2 block capitalize hover:translate-x-1 transition-all" href="/course-catalog">
                  PG Courses
                </a>
              </li>
              {/* Add more list items for courses */}
            </ul>
          </div>
          <div className="basis-[220px] md:basis-[360px] lg:basis-[220px] flex-grow shrink-0 space-y-3">
            <h2 className="font-semibold uppercase opacity-80">Get in touch</h2>
            <div className="flex flex-col items-start gap-2">
              <a href="mailto:contact@eduverticals.com" className="flex items-center gap-2 hover:translate-x-1 transition-all">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon" className="size-5 shrink-0">
                </svg>
                contact@eduverticals.com
              </a>
              {/* Add more contact links */}
            </div>
          </div>
        </div>
        {/* Add footer copyright and other content */}
      </div>
    
  </footer>
  );
};

export default Footer;
