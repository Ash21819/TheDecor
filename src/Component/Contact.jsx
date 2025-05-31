import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";

 export const Contact = () => {
  return (
    <div className="bg-[#FFFAF0] py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-2">Start Your Design Journey</h2>
        <p className="text-center text-gray-600 mb-10 max-w-xl mx-auto">
          Ready to transform your space? Get in touch with us for a free consultation and let's bring your vision to life.
        </p>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Get In Touch</h3>
            <div className="space-y-6 text-gray-800">
              <div className="flex items-start gap-4">
                <div className="bg-[#A34800] p-2 rounded-md text-white">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-semibold">Phone</p>
                  <p>(555) 123-4567</p>
                  <p className="text-sm text-gray-500">Available Mon–Fri, 9AM–6PM</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-[#A34800] p-2 rounded-md text-white">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-semibold">Email</p>
                  <p>hello@thedecor.com</p>
                  <p className="text-sm text-gray-500">We'll respond within 24 hours</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-[#A34800] p-2 rounded-md text-white">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-semibold">Studio Location</p>
                  <p>Sasni Gate<br />Aligarh, 202001</p>
                  <p className="text-sm text-gray-500">Visits by appointment only</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-[#A34800] p-2 rounded-md text-white">
                  <Clock className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-semibold">Business Hours</p>
                  <p>Monday – Friday: 9:00 AM – 6:00 PM<br />
                    Saturday: 10:00 AM – 4:00 PM<br />
                    Sunday: By appointment</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white shadow-lg rounded-xl p-6">
            <h3 className="text-lg font-semibold mb-4">Free Consultation</h3>
            <form className="space-y-4">
              <div className="flex gap-4">
                <input type="text" placeholder="First Name" className="w-1/2 border px-4 py-2 rounded-md" />
                <input type="text" placeholder="Last Name" className="w-1/2 border px-4 py-2 rounded-md" />
              </div>
              <input type="email" placeholder="Email Address" className="w-full border px-4 py-2 rounded-md" />
              <input type="tel" placeholder="Phone Number" className="w-full border px-4 py-2 rounded-md" />
              <select className="w-full border px-4 py-2 rounded-md">
                <option>Select a project type</option>
                <option>Interior Design</option>
                <option>Office Redesign</option>
                <option>Home Renovation</option>
              </select>
              <textarea placeholder="Describe your vision, space details, timeline..." rows="4" className="w-full border px-4 py-2 rounded-md"></textarea>
              <button type="submit" className="bg-[#A34800] hover:bg-[#8a3b00] text-white px-6 py-3 rounded-md w-full flex justify-center items-center gap-2">
                Send Message <Send className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

