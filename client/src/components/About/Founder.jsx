import React from 'react';

function Founder() {
  return (
    <section className="py-4 px-4">
      <div className="mx-auto max-w-screen-2xl">
        <div className="flex flex-col xl:flex-row items-stretch gap-6">

          {/* First Card: Meet the Visionary */}
          <div className=" bg-gradient-to-r from-white to-[#DDDEF8] rounded-2xl lg:rounded-3xl relative overflow-hidden flex flex-col">
            
            <div className="flex flex-wrap gap-4 relative h-full">
              <div className="basis-full lg:aspect-auto lg:basis-[50%] xl:basis-[36%] grow-0 rounded-2xl lg:rounded-3xl">
                <img
src="src/assets/photo1.jpg"                  alt=""
                  className="h-full w-full object-cover rounded-2xl lg:rounded-3xl"
                />
              </div>
              <div className="basis-1 grow shrink-0\\ p-5 mb-26 space-y-  overflow-hidden">
                <h4 className="text-lg font-semibold text-gray-800">Meet The Visionary</h4>
                <h2 className="text-3xl font-bold text-gray-900 mt-2">Mr. Shahjahan</h2>
                <p className="text-sm text-gray-600 mt-4 leading-relaxed">
                  With 14+ years of shaping the education landscape, Shahjahan blends innovation and strategy to drive results. As Co-Founder, he leads <strong>EduVerticals</strong> with a focus on impactful initiatives, personalized client experiences, and business growth.
                </p>
                <p className="text-sm text-gray-600 mt-2 leading-relaxed">
                  His expertise spans corporate affairs, media, and communication strategies, all while inspiring teams to excel.
                </p>
              </div>
            </div>
          </div>

          {/* Second Card: Empowering Through Education */}
          <div className="bg-[#181E2E] text-white w-full rounded-2xl relative overflow-hidden flex flex-col">
            
            <div className="px-6 py-8 relative flex-grow items-center">
              <h3 className="text-lg font-semibold">Empowering Through Education</h3>
              <div className="items-center">
                <p className="text-sm mt-4 leading-relaxed">
                  EduVerticals is <strong>redefining</strong> corporate education by bridging the gap between conventional learning and today's fast-evolving business landscape.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Founder;
