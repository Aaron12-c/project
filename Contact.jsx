import React from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaClock } from "react-icons/fa";

const Contact = () => {
  return (
    <section className="bg-gradient-to-b from-gray-50 to-gray-100 py-20">
      <div className="max-w-7xl mx-auto px-6">
      
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-4 tracking-tight">
            Get in Touch
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            We’d love to hear from you! Whether you have questions, feedback, or
            a business inquiry, our team is ready to assist you promptly.
          </p>
        </div>

        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        
          <div className="bg-white p-10 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
            <h2 className="text-2xl font-semibold text-gray-800 mb-8">
              Contact Information
            </h2>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <FaMapMarkerAlt className="text-blue-600 text-2xl mt-1" />
                <div>
                  <h3 className="text-lg font-medium text-gray-700">Address</h3>
                  <p className="text-gray-600">
                    Apo Mechanic Village, Estate Gate 3, Abuja, Nigeria
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <FaPhoneAlt className="text-blue-600 text-2xl mt-1" />
                <div>
                  <h3 className="text-lg font-medium text-gray-700">Phone</h3>
                  <p className="text-gray-600">
                    <a href="tel:+2348085651716" className="hover:underline">
                      +234 808 565 1716
                    </a>
                  </p>
                  <p className="text-gray-600">
                    <a href="tel:+2349061605827" className="hover:underline">
                      +234 906 160 5827
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <FaEnvelope className="text-blue-600 text-2xl mt-1" />
                <div>
                  <h3 className="text-lg font-medium text-gray-700">Email</h3>
                  <p className="text-gray-600">
                    <a
                      href="mailto:casmirchimaobi471@gmail.com"
                      className="text-blue-600 font-semibold hover:underline"
                    >
                      casmirchimaobi471@gmail.com
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <FaClock className="text-blue-600 text-2xl mt-1" />
                <div>
                  <h3 className="text-lg font-medium text-gray-700">Working Hours</h3>
                  <p className="text-gray-600">Mon - Fri: 8:00 AM - 6:00 PM</p>
                  <p className="text-gray-600">Sat: 9:00 AM - 4:00 PM</p>
                  <p className="text-gray-600">Sun: Closed</p>
                </div>
              </div>
            </div>
          </div>

          
          <div>
            <form className="bg-white p-10 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 space-y-6">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Send Us a Message
              </h2>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="Enter your full name"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  rows="5"
                  placeholder="Write your message..."
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none resize-none"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>

        
        <div className="mt-20 rounded-2xl overflow-hidden shadow-lg">
          <iframe
            title="Company Location Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.132634888137!2d7.476298874703915!3d8.983009690033908!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e0b9270874c07%3A0xa171df2a9e3cdb08!2sApo%20Mechanic%20Village!5e0!3m2!1sen!2sng!4v1730000000000!5m2!1sen!2sng"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Contact;

