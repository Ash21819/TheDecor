import Image from "next/image";

const projects = [
  {
    title: "Modern Minimalist Living",
    tag: "Residential",
    description: "Clean lines and neutral tones create a serene living space.",
    image: "/images/livingarea.jpg",
  },
  {
    title: "Luxury Master Suite",
    tag: "Bedroom Design",
    description:
      "Elegant textures and warm lighting for ultimate comfort.",
    image: "/images/bedrooms.jpg",
  },
  {
    title: "Contemporary Office Space",
    tag: "Commercial",
    description:
      "Productive workspace with biophilic design elements.",
    image: "/images/officespace.jpg",
  },
  {
    title: "Cozy Reading Nook",
    tag: "Residential",
    description:
      "Intimate space designed for relaxation and contemplation.",
    image: "/images/ReadingSpace.jpg",
  },
  {
    title: "Open Concept Kitchen",
    tag: "Kitchen Design",
    description: "Functional design that brings family together.",
    image: "/images/OpenKitchen.jpg",
  },
  {
    title: "Boutique Retail Store",
    tag: "Commercial",
    description:
      "Inviting retail environment that enhances customer experience.",
    image: "/images/BoutiqueRetailStore.jpg",
  },
];

export const FeaturedProjects = () => {
  return (
    <section className="py-16 px-16 md:px-12 lg:px-32 bg-gradient-to-b from-white to-yellow-50">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-semibold mb-2">Featured Projects</h2>
        <p className="text-gray-600 max-w-xl mx-auto mb-12">
          Explore our portfolio of stunning interior designs that showcase our commitment
          to creating beautiful, functional spaces.
        </p>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md overflow-hidden"
            >
              <Image
                src={project.image}
                alt={project.title}
                width={600}
                height={400}
                className="object-cover w-full h-48 transition-transform duration-300 ease-in-out hover:scale-105 hover:brightness-110"
              />
              <div className="p-4 text-left">
                <span className="inline-block bg-orange-100 text-orange-700 text-xs font-semibold px-2 py-1 rounded mb-2">
                  {project.tag}
                </span>
                <h3 className="text-lg font-semibold mb-1">{project.title}</h3>
                <p className="text-sm text-gray-600 mb-3">{project.description}</p>
                <a href="#" className="text-sm text-orange-600 font-medium hover:underline">
                  View Details →
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-10">
          <button className="px-6 py-2 bg-orange-700 text-white font-medium rounded hover:bg-orange-800 transition">
            View Full Portfolio
          </button>
        </div>
      </div>
    </section>
  );
};
