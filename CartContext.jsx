import React, { createContext, useContext, useState } from "react";

// Create Context
const CartContext = createContext();

// Custom hook to use Cart Context
export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // ➕ Add product to cart
  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);

      if (existingItem) {
        // If product already exists, increase quantity
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      // Add new product with quantity = 1
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  // ❌ Remove product from cart
  const removeFromCart = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  // 🔄 Update product quantity
  const updateQuantity = (id, newQty) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, newQty) } // never below 1
          : item
      )
    );
  };

  // 🧹 Clear entire cart
  const clearCart = () => setCart([]);

  // 💰 Calculate total price
  const getTotal = () =>
    cart.reduce((acc, item) => {
      const priceNumber = parseInt(item.price.toString().replace(/[₦,]/g, ""));
      return acc + priceNumber * item.quantity;
    }, 0);

  // ✅ Provide everything to children components
  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        clearCart,
        updateQuantity,
        getTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
