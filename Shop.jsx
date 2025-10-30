import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

// Hero image
import heroImage from "../assets/hero 2.jpeg";

// Product images
import image1 from "../assets/image1.jpeg";
import image2 from "../assets/image2.jpeg";
import image3 from "../assets/image3.jpeg";
import image4 from "../assets/image4.jpeg";
import image5 from "../assets/image5.jpeg";
import image6 from "../assets/image6.jpeg";
import image7 from "../assets/image7.jpeg";
import image9 from "../assets/image9.jpeg";
import image10 from "../assets/image10.jpeg";
import image11 from "../assets/image11.jpeg";
import image12 from "../assets/image12.jpeg";
import image13 from "../assets/image13.jpeg";
import image14 from "../assets/image14.jpeg";
import image15 from "../assets/image15.jpeg";
import image16 from "../assets/image16.jpeg";
import image17 from "../assets/image17.jpeg";
import image18 from "../assets/image18.jpeg";
import image19 from "../assets/image19.jpeg";
import image20 from "../assets/image20.jpeg";
import image21 from "../assets/image21.jpeg";
import image22 from "../assets/image22.jpeg";
import image23 from "../assets/image23.jpeg";
import image24 from "../assets/image24.jpeg";
import image25 from "../assets/image25.jpeg";
import image26 from "../assets/image26.jpeg";
import image27 from "../assets/image27.jpeg";
import image28 from "../assets/image28.jpeg";
import image30 from "../assets/image30.jpeg";
import image31 from "../assets/image31.jpeg";
import image32 from "../assets/image32.jpeg";
import image33 from "../assets/image33.jpeg";
import image34 from "../assets/image34.jpeg";
import image35 from "../assets/image35.jpeg";
import image36 from "../assets/image36.jpeg";
import image37 from "../assets/image37.jpeg";
import image38 from "../assets/image38.jpeg";
import image40 from "../assets/image40.jpeg";
import image42 from "../assets/image42.jpeg";

const Shop = () => {
  const { addToCart } = useCart();

  const products = [
    { id: 2, image: image2, price: "₦850,000" },
    { id: 5, image: image5, price: "₦250,000" },
    { id: 6, image: image6, price: "₦40,000" },
    { id: 7, image: image7, price: "₦1,195,000" },
    
    
    
    { id: 12, image: image13, price: "₦200,000" },
    
    { id: 14, image: image15, price: "₦120,000" },
    
    { id: 16, image: image17, price: "₦3,500,000" },
    { id: 17, image: image18, price: "₦280,000" },
    { id: 18, image: image19, price: "₦500,000" },
    { id: 19, image: image20, price: "₦250,000" },
    { id: 20, image: image21, price: "₦1,200,000" },
    { id: 22, image: image23, price: "₦450,000" },
    { id: 23, image: image24, price: "₦2,200,000" },
    { id: 26, image: image27, price: "₦1,200,000" },
    { id: 38, image: image42, price: "₦200,000" },
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <div className="relative w-full h-[45vh] md:h-[60vh] overflow-hidden rounded-b-3xl shadow-md">
        <img
          src={heroImage}
          alt="Hero Banner"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Products Grid */}
      <div className="px-4 md:px-10 lg:px-16 py-12">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-center">
          Explore Our Products
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-xl shadow-md hover:shadow-lg transition transform hover:-translate-y-1 duration-300"
            >
              <Link to={`/productdetails/${product.id}`}>
                <img
                  src={product.image}
                  alt="Car Part"
                  className="w-full h-44 object-cover rounded-t-xl"
                />
              </Link>
              <div className="p-3 text-center">
                <p className="text-blue-600 font-bold text-lg">{product.price}</p>
                <button
                  onClick={() => addToCart(product)}
                  className="inline-block mt-3 bg-blue-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-700 transition"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-blue-800 text-white text-center py-12 px-6 rounded-t-3xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Get the Best Deals on Car Parts Today!
        </h2>
        <p className="text-lg mb-6">
          Order now and enjoy premium-quality car parts at unbeatable prices.
        </p>
        <Link
          to="/cart"
          className="bg-white text-blue-800 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
        >
          View Your Orders
        </Link>
      </div>
    </div>
  );
};

export default Shop;
