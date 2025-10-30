import React from "react";
import heroImage from "../assets/hero 2.jpeg";
import aboutImage from "../assets/hero4.png"; // ✅ Better path consistency

const About = () => {
  return (
    <div className="bg-white text-gray-800 font-poppins">
      {/* ===== HERO SECTION ===== */}
      <section className="relative w-full h-[60vh] md:h-[70vh]">
        <img
          src={heroImage}
          alt="About V-Class Part Hub"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <h1 className="text-white text-4xl md:text-5xl font-bold text-center drop-shadow-lg">
          
          </h1>
        </div>
      </section>

      {/* ===== ABOUT CONTENT ===== */}
      <section className="py-16 px-5 md:px-16 lg:px-24">
        {/* Header Section */}
        <div className="text-center mb-12 px-3">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
          About  {" "}
            <span className="text-[#1E3A8A]">
              V-Class Part Hub Limited
            </span>
          </h1>
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Your trusted destination for durable and high-performance automobile parts.  
            We combine quality, innovation, and reliability to keep your Mercedes-Benz running at its best.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
          {/* Image Section */}
          <div className="flex justify-center">
            <img
              src={aboutImage}
              alt="Mercedes Car Parts Display"
              className="rounded-xl shadow-lg w-full max-w-[450px] sm:max-w-[500px] object-cover"
            />
          </div>

          {/* Text Section */}
          <div className="px-3">
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">
              Who We Are
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed text-base">
              At{" "}
              <span className="font-semibold text-gray-900">
                V-Class Part Hub Limited
              </span>
              , we specialize in authentic, high-performance parts, luxury accessories, and custom upgrades exclusively designed for Mercedes-Benz vehicles.
              From precision-engineered engine and suspension components to elegant body kits, interiors, and tech upgrades — 
              we provide everything you need to keep your Benz running flawlessly and looking stunning.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed text-base">
              With us, it’s more than just maintenance — it’s about unlocking the true potential of your Mercedes-Benz.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mb-3">
              Our Mission
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed text-base">
              To deliver premium automobile parts that meet global quality standards, while ensuring affordability, customer satisfaction, and reliable service across Nigeria and beyond.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mb-3">
              Why Choose Us
            </h2>
            <ul className="space-y-3 text-gray-600 text-base">
              <li>✅ Genuine and certified Mercedes-Benz car parts</li>
              <li>✅ Fast, nationwide delivery service</li>
              <li>✅ Dedicated and friendly customer support</li>
              <li>✅ Trusted by mechanics and luxury car owners across Nigeria</li>
            </ul>
          </div>
        </div>

        {/* ===== CALL TO ACTION ===== */}
        <div className="mt-20 text-center px-3">
          <h3 className="text-2xl font-semibold text-gray-900 mb-3">
            Need Genuine Mercedes-Benz Parts?
          </h3>
          <p className="text-gray-600 mb-6 text-base">
            Contact us today to find the perfect replacement or performance part for your vehicle.
          </p>
          <a
            href="/contact"
            className="bg-[#1E3A8A] text-white px-8 py-3 rounded-full hover:bg-[#1E40AF] transition duration-300 text-base font-medium shadow-md"
          >
            Get in Touch
          </a>
        </div>
      </section>
    </div>
  );
};

export default About;
