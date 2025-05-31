import React from "react";
import Image from "next/image";

export const Hero = () => {
  return (
    <>
      <section className="bg-amber-50 py-16 px-6 md:px-12">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">
          {/* Left Content */}
          <div className="md:w-1/2 p-6 text-center sm:text-left">
            <div className="flex items-center gap-2 mb-4 text-sm text-gray-600">
              <span className="text-yellow-500">★★★★★</span>
              <span>Trusted by 500+ clients</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
              Transform Your <br />
              <span className="text-orange-700">Living Spaces</span>
            </h1>
            <p className="text-gray-700 mb-6">
              Award-winning interior design that reflects your personality and
              enhances your lifestyle. From concept to completion, we create
              spaces that inspire.
            </p>
            <div className="flex items-center justify-center gap-4 sm:flex sm:justify-start">
              <button className="bg-orange-700 text-white font-semibold px-6 py-3 rounded-3xl shadow hover:bg-orange-800 transition">
                Start Your Project →
              </button>
              <button className="border border-orange-700 text-orange-700 font-semibold px-6 py-3 rounded-3xl hover:bg-orange-200 transition">
                View Portfolio
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div className="md:w-1/2 relative p-8">
            <div className="rounded-xl overflow-hidden shadow-lg sm:max-w-md bg-black">
              <Image
                src="/images/Heroimg.jpg"
                alt="Interior Design"
                width={300} 
                height={200}
                className="object-cover w-full h-full sm:max-w-md"
              />
            </div>

            {/*Box */}
            <div className="absolute -bottom-6 left-6 rounded-xl p-6 flex gap-10 bg-gradient-to-br from-white/60 to-white/30 backdrop-blur-md p-6 rounded-lg text-gray-900 shadow-lg">
              <div>
                <p className="text-xl font-bold text-gray-800">15+</p>
                <p className="text-sm text-gray-500">Years Experience</p>
              </div>
              <div>
                <p className="text-xl font-bold text-gray-800">500+</p>
                <p className="text-sm text-gray-500">Projects Completed</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};


