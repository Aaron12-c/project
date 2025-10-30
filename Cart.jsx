import React from "react";
import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cart, removeFromCart, updateQuantity, getTotal, clearCart } = useCart();

  if (cart.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 text-gray-700 px-6">
        <p className="text-3xl font-semibold mb-4">Your cart is empty 🛒</p>
        <Link
          to="/shop"
          className="bg-blue-700 text-white px-8 py-3 rounded-lg hover:bg-blue-800 transition font-medium shadow-md"
        >
          Go to Shop
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen py-10 px-4 sm:px-8 md:px-16">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-10 text-center">
        Your Shopping Cart
      </h2>

      <div className="max-w-6xl mx-auto bg-white shadow-xl rounded-2xl overflow-hidden">
        {/* Desktop Table */}
        <div className="hidden md:block">
          <table className="w-full border-collapse">
            <thead className="bg-blue-800 text-white">
              <tr>
                <th className="p-4 text-left text-sm font-semibold">Product</th>
                <th className="p-4 text-sm font-semibold">Price</th>
                <th className="p-4 text-sm font-semibold">Quantity</th>
                <th className="p-4 text-sm font-semibold">Action</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item) => (
                <tr
                  key={item.id}
                  className="border-b hover:bg-gray-50 transition duration-200"
                >
                  <td className="p-4 flex items-center gap-4">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-16 h-16 object-cover rounded-lg shadow-sm"
                    />
                    <span className="font-medium text-gray-800">{item.name}</span>
                  </td>
                  <td className="p-4 text-blue-700 font-semibold">
                    {item.price}
                  </td>
                  <td className="p-4 text-center">
                    <div className="flex items-center justify-center gap-3">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        disabled={item.quantity <= 1}
                        className="w-8 h-8 flex items-center justify-center bg-gray-200 hover:bg-gray-300 text-gray-800 rounded-full text-lg font-bold disabled:opacity-50"
                      >
                        −
                      </button>
                      <span className="font-semibold text-gray-800">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="w-8 h-8 flex items-center justify-center bg-blue-700 hover:bg-blue-800 text-white rounded-full text-lg font-bold"
                      >
                        +
                      </button>
                    </div>
                  </td>
                  <td className="p-4 text-center">
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-red-600 hover:text-red-800 font-semibold transition"
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile View */}
        <div className="block md:hidden divide-y">
          {cart.map((item) => (
            <div
              key={item.id}
              className="flex flex-col sm:flex-row items-center justify-between gap-4 p-4 hover:bg-gray-50 transition duration-200"
            >
              <div className="flex items-center gap-4 w-full sm:w-auto">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-20 h-20 object-cover rounded-lg shadow-sm"
                />
                <div>
                  <p className="font-semibold text-gray-800">{item.name}</p>
                  <p className="text-blue-700 font-semibold">{item.price}</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <button
                  onClick={() => updateQuantity(item.id, item.quantity - 1)}
                  disabled={item.quantity <= 1}
                  className="w-8 h-8 flex items-center justify-center bg-gray-200 hover:bg-gray-300 text-gray-800 rounded-full text-lg font-bold disabled:opacity-50"
                >
                  −
                </button>
                <span className="font-semibold text-gray-800">
                  {item.quantity}
                </span>
                <button
                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  className="w-8 h-8 flex items-center justify-center bg-blue-700 hover:bg-blue-800 text-white rounded-full text-lg font-bold"
                >
                  +
                </button>
              </div>

              <button
                onClick={() => removeFromCart(item.id)}
                className="text-red-600 hover:text-red-800 font-semibold transition"
              >
                Remove
              </button>
            </div>
          ))}
        </div>

        {/* Cart Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center px-6 py-6 border-t bg-gray-100">
          <p className="text-xl font-semibold text-gray-800 mb-4 md:mb-0">
            Total:{" "}
            <span className="text-blue-700 font-bold">
              ₦{getTotal().toLocaleString()}
            </span>
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={clearCart}
              className="border border-red-600 text-red-600 px-6 py-2 rounded-lg hover:bg-red-50 transition"
            >
              Clear Cart
            </button>

            {/* ✅ Updated Link to Checkout Page */}
            <Link
              to="/checkout"
              className="bg-blue-700 text-white px-6 py-2 rounded-lg hover:bg-blue-800 transition text-center shadow-md"
            >
              Proceed to Checkout
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
