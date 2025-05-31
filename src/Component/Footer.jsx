import {
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
} from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-[#0C101A] text-white pt-12 pb-6 px-4 text-center">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10 border-b border-gray-700 pb-8">
        {/* Brand Info */}
        <div>
          <h2 className="text-2xl font-bold text-yellow-400 mb-4">TheDecor</h2>
          <p className="text-sm text-gray-300 mb-4">
            Transform your living and working spaces with our award-winning interior design services.
            We create beautiful, functional environments that reflect your unique style and enhance your lifestyle.
          </p>
          <div className="flex justify-center gap-4 mt-4 text-gray-400 ">
            <Facebook className="hover:text-white cursor-pointer" />
            <Instagram className="hover:text-white cursor-pointer" />
            <Twitter className="hover:text-white cursor-pointer" />
            <Linkedin className="hover:text-white cursor-pointer" />
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><a href="#" className="hover:text-white">Home</a></li>
            <li><a href="#" className="hover:text-white">Services</a></li>
            <li><a href="#" className="hover:text-white">Portfolio</a></li>
            <li><a href="#" className="hover:text-white">About Us</a></li>
            <li><a href="#" className="hover:text-white">Contact</a></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Services</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><a href="#" className="hover:text-white">Residential Design</a></li>
            <li><a href="#" className="hover:text-white">Commercial Spaces</a></li>
            <li><a href="#" className="hover:text-white">Color Consulting</a></li>
            <li><a href="#" className="hover:text-white">Lighting Design</a></li>
            <li><a href="#" className="hover:text-white">Home Staging</a></li>
          </ul>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="max-w-7xl mx-auto mt-6 flex flex-col md:flex-row items-center justify-between text-xs text-gray-400 px-2">
        <p>© 2024 TheDecor. All rights reserved.</p>
        <p>Made with <span className="text-red-500">♥</span> for beautiful spaces</p>
      </div>
    </footer>
  );
};


