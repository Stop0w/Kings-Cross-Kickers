import React, { createContext, useContext, useState } from 'react';
import { createShopifyCheckout } from '../utils/shopify';

const CartContext = createContext(undefined);

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [checkoutUrl, setCheckoutUrl] = useState(null);

  const addToCart = async (product, size, color) => {
    setCart(currentCart => {
      const existingItem = currentCart.find(
        item => item.id === product.id && 
               item.selectedSize === size && 
               item.selectedColor.name === color.name
      );

      if (existingItem) {
        return currentCart.map(item =>
          item.id === product.id && 
          item.selectedSize === size && 
          item.selectedColor.name === color.name
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [...currentCart, { 
        ...product, 
        quantity: 1, 
        selectedSize: size,
        selectedColor: color 
      }];
    });
  };

  const removeFromCart = (productId, size, color) => {
    setCart(currentCart => currentCart.filter(item => 
      !(item.id === productId && 
        item.selectedSize === size && 
        item.selectedColor.name === color.name)
    ));
  };

  const updateQuantity = (productId, size, color, quantity) => {
    if (quantity === 0) {
      removeFromCart(productId, size, color);
      return;
    }

    setCart(currentCart =>
      currentCart.map(item =>
        item.id === productId && 
        item.selectedSize === size && 
        item.selectedColor.name === color.name
          ? { ...item, quantity }
          : item
      )
    );
  };

  const proceedToCheckout = async () => {
    try {
      setIsLoading(true);
      const checkout = await createShopifyCheckout(cart);
      setCheckoutUrl(checkout.webUrl);
      window.location.href = checkout.webUrl;
    } catch (error) {
      console.error('Checkout error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <CartContext.Provider value={{ 
      cart, 
      addToCart, 
      removeFromCart, 
      updateQuantity, 
      total,
      isLoading,
      proceedToCheckout
    }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}
