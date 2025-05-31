import Image from "next/image";

 export const AboutSection = () => {
  return (
    <section className="py-20 px-4 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
      {/* Text Content */}
      <div>
        <h2 className="text-4xl font-semibold leading-snug mb-6">
          Creating Spaces That Tell Your Story
        </h2>
        <p className="text-gray-700 mb-4">
          At Elegant Spaces, we believe that great design goes beyond aesthetics.
          It's about understanding how you live, work, and dream, then translating
          that into spaces that enhance your daily experience.
        </p>
        <p className="text-gray-700 mb-6">
          Founded in 2009, our award-winning team has transformed hundreds of
          homes and commercial spaces across the region. We pride ourselves on our
          collaborative approach, attention to detail, and commitment to
          sustainable design practices.
        </p>

        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="bg-orange-50 p-4 rounded-md text-center">
            <p className="text-2xl font-bold">15+</p>
            <p className="text-sm text-gray-600">Years of Experience</p>
          </div>
          <div className="bg-orange-50 p-4 rounded-md text-center">
            <p className="text-2xl font-bold">500+</p>
            <p className="text-sm text-gray-600">Happy Clients</p>
          </div>
          <div className="bg-orange-50 p-4 rounded-md text-center">
            <p className="text-2xl font-bold">25+</p>
            <p className="text-sm text-gray-600">Design Awards</p>
          </div>
          <div className="bg-orange-50 p-4 rounded-md text-center">
            <p className="text-2xl font-bold">100%</p>
            <p className="text-sm text-gray-600">Client Satisfaction</p>
          </div>
        </div>

        <button className="bg-orange-800 text-white px-6 py-2 rounded-3xl hover:bg-orange-700 transition">
          Meet Our Team
        </button>
      </div>

      {/* Image Grid */}
      <div className="grid grid-cols-2 grid-rows-2 gap-2 relative p-12">
        {/* Quote Box */}
        <div className="absolute top-[3px] left-[100px]  p-4 rounded-lg z-10 w-1/2 bg-gradient-to-br from-white/60 to-white/30 backdrop-blur-md p-6 rounded-lg text-gray-900 shadow-lg ">
          <p className="text-sm italic text-gray-600 font-semibold">
            "Design is not just what it looks like — design is how it works."
          </p>
          <p className="text-xs mt-2 text-gray-00 font-semibold">— Our Design Philosophy</p>
        </div>

        {/* Images */}
        <div className="aspect-square overflow-hidden rounded-md ">
          <Image
            src="/images/bedrooms.jpg"
            alt="Interior 1"
            width={300}
            height={200}
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          />
        </div>
        <div className="aspect-square overflow-hidden rounded-md">
          <Image
            src="/images/officespace.jpg"
            alt="Interior 2"
            width={300}
            height={200}
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          />
        </div>
        <div className="aspect-square  overflow-hidden rounded-md">
          <Image
            src="/images/Openkitchen.jpg"
            alt="Interior 3"
            width={300}
            height={200}
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          />
        </div>
        <div className="aspect-square  overflow-hidden rounded-md">
          <Image
            src="/images/livingarea.jpg"
            alt="Interior 4"
            width={300}
            height={200}
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          />
        </div>
      </div>
    </section>
  );
};


