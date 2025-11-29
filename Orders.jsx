import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Orders = () => {
  const [orders, setOrders] = useState([]);

  
  useEffect(() => {
    const savedOrders = JSON.parse(localStorage.getItem("orders")) || [];
    setOrders(savedOrders);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-5 md:px-10 lg:px-20 font-poppins">
      <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-10">
        Your <span className="text-blue-700">Orders</span>
      </h1>

      {orders.length === 0 ? (
        <div className="text-center py-16 bg-white rounded-xl shadow-sm">
          <p className="text-gray-600 text-lg mb-6">
            You haven’t placed any orders yet.
          </p>
          <Link
            to="/shop"
            className="bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-800 transition duration-300"
          >
            Go to Shop
          </Link>
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white shadow-md rounded-xl overflow-hidden">
            <thead className="bg-blue-700 text-white">
              <tr>
                <th className="py-3 px-4 text-left text-sm md:text-base">Order ID</th>
                <th className="py-3 px-4 text-left text-sm md:text-base">Date</th>
                <th className="py-3 px-4 text-left text-sm md:text-base">Items</th>
                <th className="py-3 px-4 text-left text-sm md:text-base">Total</th>
                <th className="py-3 px-4 text-left text-sm md:text-base">Status</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order, index) => (
                <tr
                  key={index}
                  className="border-b hover:bg-gray-50 transition duration-200"
                >
                  <td className="py-3 px-4 text-gray-700">#{order.id}</td>
                  <td className="py-3 px-4 text-gray-600">{order.date}</td>
                  <td className="py-3 px-4 text-gray-600">
                    {order.items?.map((item) => item.name).join(", ")}
                  </td>
                  <td className="py-3 px-4 font-semibold text-blue-700">
                    ₦{order.total?.toLocaleString()}
                  </td>
                  <td className="py-3 px-4">
                    <span
                      className={`px-3 py-1 rounded-full text-sm font-medium ${
                        order.status === "Delivered"
                          ? "bg-green-100 text-green-700"
                          : order.status === "Pending"
                          ? "bg-yellow-100 text-yellow-700"
                          : "bg-gray-100 text-gray-600"
                      }`}
                    >
                      {order.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      <div className="text-center mt-10">
        <Link
          to="/checkout"
          className="inline-block bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-800 transition duration-300"
        >
          Place New Order
        </Link>
      </div>
    </div>
  );
};

export default Orders;

