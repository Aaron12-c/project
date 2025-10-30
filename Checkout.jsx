import React, { useState } from "react";
import { useCart } from "../context/CartContext";
import { Link, useNavigate } from "react-router-dom";

const Checkout = () => {
  const { cart, clearCart } = useCart(); // optional: clear cart after order
  const navigate = useNavigate();

  // Form state
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Calculate total price
  const getTotal = () => {
    return cart.reduce((sum, item) => {
      const numericPrice = parseInt(item.price.replace(/[^\d]/g, "")) || 0;
      return sum + numericPrice;
    }, 0);
  };

  const handlePayment = (e) => {
    e.preventDefault();

    // ✅ Validate inputs
    if (!formData.fullName || !formData.email || !formData.phone || !formData.address) {
      alert("Please fill all fields before proceeding!");
      return;
    }

    // ⚙️ In production, integrate Flutterwave or real payment gateway here
    alert("✅ Order placed successfully! Redirecting to Orders page...");

    // ✅ Optional: clear cart after successful checkout
    if (clearCart) clearCart();

    // ✅ Redirect to Orders page
    navigate("/orders");
  };

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-5 md:px-10 lg:px-20 font-poppins">
      <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-10">
        Secure <span className="text-blue-700">Checkout</span>
      </h1>

      {cart.length === 0 ? (
        <div className="text-center py-16">
          <p className="text-gray-600 text-lg mb-6">
            Your cart is empty. Add items before checkout.
          </p>
          <Link
            to="/cart"
            className="bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-800 transition duration-300"
          >
            Go to Cart
          </Link>
        </div>
      ) : (
        <form
          onSubmit={handlePayment}
          className="grid grid-cols-1 lg:grid-cols-3 gap-10"
        >
          {/* ===== BILLING FORM ===== */}
          <div className="bg-white p-6 rounded-xl shadow-md lg:col-span-2">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">
              Billing Details
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Full Name */}
              <div>
                <label
                  htmlFor="fullName"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  required
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-600 focus:outline-none"
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  required
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-600 focus:outline-none"
                />
              </div>

              {/* Phone */}
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Enter your phone number"
                  required
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-600 focus:outline-none"
                />
              </div>

              {/* Address */}
              <div className="sm:col-span-2">
                <label
                  htmlFor="address"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Delivery Address
                </label>
                <textarea
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  placeholder="Enter delivery address"
                  required
                  rows={3}
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-600 focus:outline-none"
                ></textarea>
              </div>
            </div>
          </div>

          {/* ===== ORDER SUMMARY ===== */}
          <div className="bg-white p-6 rounded-xl shadow-md h-fit">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Order Summary
            </h2>

            <div className="space-y-4 border-b border-gray-200 pb-4 mb-4 max-h-[250px] overflow-y-auto">
              {cart.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between text-sm text-gray-700"
                >
                  <div className="flex items-center space-x-3">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-12 h-12 rounded-lg object-cover border"
                    />
                    <span>{item.name}</span>
                  </div>
                  <span className="font-medium text-blue-700">{item.price}</span>
                </div>
              ))}
            </div>

            <div className="flex justify-between items-center mb-6">
              <span className="text-lg font-semibold text-gray-700">
                Total:
              </span>
              <span className="text-2xl font-bold text-blue-700">
                ₦{getTotal().toLocaleString()}
              </span>
            </div>

            {/* Payment Button */}
            <button
              type="submit"
              className="w-full bg-blue-700 text-white py-3 rounded-lg font-semibold hover:bg-blue-800 transition duration-300"
            >
              Proceed to Payment
            </button>

            {/* Back Link */}
            <div className="text-center mt-4">
              <Link
                to="/cart"
                className="text-blue-700 hover:underline text-sm font-medium"
              >
                ← Back to Cart
              </Link>
            </div>
          </div>
        </form>
      )}
    </div>
  );
};

export default Checkout;
