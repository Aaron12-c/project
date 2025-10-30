import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

// Hero image
import heroImage from "../assets/hero 2.jpeg";

// Updated product images
import image2 from "../assets/image2.jpeg";
import image5 from "../assets/image5.jpeg";
import image6 from "../assets/image6.jpeg";
import image7 from "../assets/image7.jpeg";
import image13 from "../assets/image13.jpeg";
import image15 from "../assets/image15.jpeg";

const Home = () => {
  const { addToCart } = useCart();

  const products = [
    { id: 2, image: image2, price: "₦850,000" },
    { id: 5, image: image5, price: "₦250,000" },
    { id: 6, image: image6, price: "₦40,000" },
    { id: 7, image: image7, price: "₦1,195,000" },
    { id: 12, image: image13, price: "₦200,000" },
    
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* ===== HERO SECTION ===== */}
      <div className="relative w-full h-[50vh] md:h-[70vh] overflow-hidden">
        <img
          src={heroImage}
          alt="Hero Banner"
          className="w-full h-full object-cover"
        />
      </div>

      {/* ===== INTRO & PRODUCT SHOWCASE ===== */}
      <section className="px-6 md:px-12 lg:px-20 py-16 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">
          Premium Car Parts for Your Benz
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-10">
          Discover quality, durability, and performance in every product.  
          Whether you’re replacing or upgrading — we’ve got you covered.
        </p>

        {/* Products */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition transform hover:-translate-y-1 duration-300"
            >
              <img
                src={product.image}
                alt="Car Part"
                className="w-full h-44 object-cover rounded-t-xl"
              />
              <div className="p-3 text-center">
                <p className="text-blue-700 font-semibold text-lg mb-1">
                  {product.price}
                </p>
                <button
                  onClick={() => addToCart(product)}
                  className="bg-blue-700 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-800 transition"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ===== WHY CHOOSE US ===== */}
      <section className="bg-white py-20 px-6 md:px-16 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-12">
          Why Choose <span className="text-blue-700">V-Class Part Hub</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
          <div className="p-8 bg-gray-50 rounded-2xl shadow-lg hover:shadow-xl transition">
            <div className="text-blue-700 text-4xl mb-3">🛠️</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              Genuine Mercedes Parts
            </h3>
            <p className="text-gray-600">
              Every part is original, durable, and engineered to keep your Benz performing like new.
            </p>
          </div>

          <div className="p-8 bg-gray-50 rounded-2xl shadow-lg hover:shadow-xl transition">
            <div className="text-blue-700 text-4xl mb-3">🚚</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              Fast Nationwide Delivery
            </h3>
            <p className="text-gray-600">
              Get your products delivered quickly and safely to your doorstep, anywhere in Nigeria.
            </p>
          </div>

          <div className="p-8 bg-gray-50 rounded-2xl shadow-lg hover:shadow-xl transition">
            <div className="text-blue-700 text-4xl mb-3">💬</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              Trusted Customer Support
            </h3>
            <p className="text-gray-600">
              Our support team is always ready to help you find the right parts and answer your questions.
            </p>
          </div>
        </div>
      </section>

      {/* ===== TESTIMONIALS ===== */}
      <section className="py-20 bg-gray-100 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-12">
          What Our Customers Are Saying
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 px-6 md:px-20 max-w-7xl mx-auto">
          <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition transform hover:-translate-y-1">
            <p className="text-gray-600 italic mb-4 leading-relaxed">
              “The parts were exactly what I needed. My mechanic was impressed — top quality and fast delivery!”
            </p>
            <h4 className="text-blue-700 font-semibold">— David O.</h4>
            <p className="text-gray-500 text-sm">Lagos, Nigeria</p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition transform hover:-translate-y-1">
            <p className="text-gray-600 italic mb-4 leading-relaxed">
              “V-Class Part Hub made car maintenance so easy. Reliable, professional, and worth every naira.”
            </p>
            <h4 className="text-blue-700 font-semibold">— Adebayo.</h4>
            <p className="text-gray-500 text-sm">Abuja, Nigeria</p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition transform hover:-translate-y-1">
            <p className="text-gray-600 italic mb-4 leading-relaxed">
              “I got my Benz brake pads the next day. Genuine parts and excellent customer care — highly recommended!”
            </p>
            <h4 className="text-blue-700 font-semibold">— Kelvin A.</h4>
            <p className="text-gray-500 text-sm">Port Harcourt, Nigeria</p>
          </div>
        </div>
      </section>

      {/* ===== CALL TO ACTION ===== */}
      <section className="bg-blue-800 text-white text-center py-20 px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Get the Best Car Parts Today!
        </h2>
        <p className="text-lg mb-6 max-w-2xl mx-auto">
          Upgrade your vehicle’s performance and durability with quality car parts from trusted sources.
        </p>
        <Link
          to="/shop"
          className="bg-white text-blue-800 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
        >
          Visit Our Shop
        </Link>
      </section>
    </div>
  );
};

export default Home;
