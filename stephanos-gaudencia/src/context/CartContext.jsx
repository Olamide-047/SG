import React, { useState, useEffect } from "react";
import { CartContext } from "../context/CartContext";
import { CURRENCIES } from "../constants/currencies";

export function CartProvider ({ children }){
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("sg_cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  const [currency, setCurrency] = useState(() => {
    return localStorage.getItem("sg_currency") || "USD";
  });

  useEffect(() => {
    localStorage.setItem("sg_cart", JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    localStorage.setItem("sg_currency", currency);
  }, [currency]);

  const addToCart = (product) => {
    setCart((prev) => {
      const existingItem = prev.find((item) => item.id === product.id && item.color === product.color && item.size === product.size);
      if (existingItem) {
        return prev.map((item) =>
          item === existingItem ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (id, color, size) => {
    setCart((prev) => prev.filter((item) => !(item.id === id && item.color === color && item.size === size)));
  };

  const updateQuantity = (id, color, size, delta) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id && item.color === color && item.size === size
          ? { ...item, quantity: Math.max(1, item.quantity + delta) }
          : item
      )
    );
  };

  const clearCart = () => setCart([]);

  const formatPrice = (usdAmount) => {
    const curr = CURRENCIES[currency];
    const amount = (usdAmount * curr.rate).toFixed(0);
    return `${curr.symbol}${Number(amount).toLocaleString()}`;
  };

  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);
  const cartTotal = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <CartContext.Provider value={{ 
      cart, 
      addToCart, 
      removeFromCart, 
      updateQuantity, 
      clearCart, 
      cartCount, 
      cartTotal,
      currency,
      setCurrency,
      formatPrice,
      currencies: Object.values(CURRENCIES)
    }}>
      {children}
    </CartContext.Provider>
  );
};
