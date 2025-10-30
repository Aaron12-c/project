import React from "react";
import { Routes, Route } from "react-router-dom";

// ✅ Import Cart Context
import { CartProvider } from "./context/CartContext";

// ✅ Import Pages
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp"; // fixed naming
import Checkout from "./pages/Checkout";
import ProductDetails from "./pages/ProductDetails";
import Orders from "./pages/Orders";

// ✅ Import Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const App = () => {
  return (
    // ✅ Wrap everything inside CartProvider
    <CartProvider>
      <div className="flex flex-col min-h-screen bg-gray-50">
        {/* ===== Navbar ===== */}
        <Navbar />

        {/* ===== Main Content Area ===== */}
        <main className="flex-grow px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw] py-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/productdetails/:id" element={<ProductDetails />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/orders" element={<Orders />} />
            
          </Routes>
        </main>

        {/* ===== Footer ===== */}
        <Footer />
      </div>
    </CartProvider>
  );
};

export default App;
