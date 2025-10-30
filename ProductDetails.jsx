import React from "react";
import { useParams, Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

// Import all product images
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

const ProductDetails = () => {
  const { id } = useParams();
  const { addToCart } = useCart();

  // Products array
  const products = [
    { id: 1, image: image1, price: "₦12,000" },
    { id: 2, image: image2, price: "₦45,000" },
    { id: 3, image: image3, price: "₦8,500" },
    { id: 4, image: image4, price: "₦70,000" },
    { id: 5, image: image5, price: "₦5,000" },
    { id: 6, image: image6, price: "₦3,000" },
    { id: 7, image: image7, price: "₦25,000" },
    { id: 8, image: image9, price: "₦40,000" },
    { id: 9, image: image10, price: "₦2,500" },
    { id: 10, image: image11, price: "₦55,000" },
    { id: 11, image: image12, price: "₦38,000" },
    { id: 12, image: image13, price: "₦10,000" },
    { id: 13, image: image14, price: "₦90,000" },
    { id: 14, image: image15, price: "₦22,000" },
    { id: 15, image: image16, price: "₦14,000" },
    { id: 16, image: image17, price: "₦18,500" },
    { id: 17, image: image18, price: "₦7,000" },
    { id: 18, image: image19, price: "₦28,000" },
    { id: 19, image: image20, price: "₦6,000" },
    { id: 20, image: image21, price: "₦12,500" },
    { id: 21, image: image22, price: "₦4,000" },
    { id: 22, image: image23, price: "₦35,000" },
    { id: 23, image: image24, price: "₦15,000" },
    { id: 24, image: image25, price: "₦8,000" },
    { id: 25, image: image26, price: "₦5,500" },
    { id: 26, image: image27, price: "₦30,000" },
    { id: 27, image: image28, price: "₦3,000" },
    { id: 28, image: image30, price: "₦65,000" },
    { id: 29, image: image31, price: "₦6,500" },
    { id: 30, image: image32, price: "₦35,000" },
    { id: 31, image: image33, price: "₦18,000" },
    { id: 32, image: image34, price: "₦20,000" },
    { id: 33, image: image35, price: "₦25,000" },
    { id: 34, image: image36, price: "₦4,000" },
    { id: 35, image: image37, price: "₦16,000" },
    { id: 36, image: image38, price: "₦5,000" },
    { id: 37, image: image40, price: "₦75,000" },
    { id: 38, image: image42, price: "₦60,000" },
  ];

  const product = products.find((item) => item.id === parseInt(id));

  if (!product) {
    return (
      <div className="text-center py-24 text-gray-700">
        <p className="text-xl font-semibold">Product not found</p>
        <Link to="/shop" className="text-blue-600 hover:underline mt-4 block">
          Back to Shop
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen flex justify-center items-center py-10 px-4">
      <div className="max-w-5xl bg-white rounded-2xl shadow-lg overflow-hidden w-full">
        {/* Product Image */}
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2">
            <img
              src={product.image}
              alt="Car Part"
              className="w-full h-80 md:h-full object-cover"
            />
          </div>

          {/* Product Info */}
          <div className="md:w-1/2 p-6 md:p-10 flex flex-col justify-center">
            <h1 className="text-3xl font-bold text-gray-800 mb-2">Car Part</h1>
            <p className="text-blue-700 text-2xl font-semibold mb-4">
              {product.price}
            </p>

            <p className="text-gray-600 leading-relaxed mb-6">
              This high-quality Mercedes-Benz part ensures optimal performance and
              durability. Crafted with precision, it's designed to fit perfectly
              and keep your vehicle running smoothly. Suitable for various Benz
              models.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => addToCart(product)}
                className="bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-800 transition w-full sm:w-auto"
              >
                Add to Cart
              </button>
              <Link
                to="/shop"
                className="border border-blue-700 text-blue-700 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition w-full sm:w-auto text-center"
              >
                Back to Shop
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
