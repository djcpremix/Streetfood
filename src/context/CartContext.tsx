'use client';

import React, { createContext, useState, useContext, ReactNode } from 'react';
import type { RawMaterial } from '@/lib/placeholder-data';

interface CartItem extends RawMaterial {
  quantity: number;
}

interface CartContextType {
  cart: CartItem[];
  addToCart: (item: RawMaterial) => void;
  // In the future, we can add more functions like removeFromCart, updateQuantity, etc.
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<CartItem[]>([]);

  const addToCart = (item: RawMaterial) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((cartItem) => cartItem.id === item.id);
      if (existingItem) {
        // If item already exists, increase quantity
        return prevCart.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      } else {
        // If item doesn't exist, add it to the cart with quantity 1
        return [...prevCart, { ...item, quantity: 1 }];
      }
    });
  };

  return (
    <CartContext.Provider value={{ cart, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
