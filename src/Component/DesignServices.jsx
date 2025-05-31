import React from "react";
import { House, Briefcase, Palette, Lightbulb, Armchair, Sparkles } from "lucide-react";
import Link from "next/link";

const services = [
  {
    icon: <House className="text-white" size={20} />,
    title: "Residential Design",
    description: "Complete home makeovers from living rooms to bedrooms, creating cohesive and beautiful living spaces.",
    points: ["Space Planning", "Color Consultation", "Furniture Selection"],
  },
  {
    icon: <Briefcase className="text-white" size={20} />,
    title: "Commercial Spaces",
    description: "Professional office and retail environments that enhance productivity and customer experience.",
    points: ["Office Design", "Retail Spaces", "Restaurant Interiors"],
  },
  {
    icon: <Palette className="text-white" size={20} />,
    title: "Color Consulting",
    description: "Expert color selection and coordination to create the perfect mood and atmosphere for any space.",
    points: ["Color Psychology", "Paint Selection", "Mood Boards"],
  },
  {
    icon: <Lightbulb className="text-white" size={20} />,
    title: "Lighting Design",
    description: "Strategic lighting solutions that highlight your space's best features and create ambiance.",
    points: ["Ambient Lighting", "Task Lighting", "Accent Features"],
  },
  {
    icon: <Armchair className="text-white" size={20} />,
    title: "Furniture Curation",
    description: "Carefully selected furniture pieces that combine style, comfort, and functionality.",
    points: ["Custom Pieces", "Vintage Finds", "Modern Classics"],
  },
  {
    icon: <Sparkles className="text-white" size={20} />,
    title: "Styling & Staging",
    description: "Final touches and styling that bring your space to life with personality and charm.",
    points: ["Home Staging", "Accessory Selection", "Art Curation"],
  },
];

export const DesignServices = () => {
  return (
    <section className="py-16 px-16 md:px-12 lg:px-32 bg-white">
      <div className="max-w-7xl mx-auto ">
        <h2 className="text-3xl font-semibold mb-4 text-center">Our Design Services</h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-10">
          From initial concept to final styling, we offer comprehensive interior design services
          tailored to your unique vision and lifestyle.
        </p>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-orange-50 p-6 rounded-lg shadow-sm hover:shadow-md transition"
            >
              <div className="w-8 h-8 flex items-center justify-center bg-orange-700 rounded mb-4">
                {service.icon}
              </div>
              <h3 className="font-semibold text-lg mb-2">{service.title}</h3>
              <p className="text-gray-600 text-sm mb-3">{service.description}</p>
              <ul className="text-sm text-orange-800 list-disc ml-5 space-y-1">
                {service.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <button className="bg-orange-700 text-white px-6 py-3 rounded-3xl hover:bg-orange-800 transition">
           <Link href="/Contact-us"> Schedule Consultation  </Link>
          </button>
        </div>
      </div>
    </section>
  );
};


