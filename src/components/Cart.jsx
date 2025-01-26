import React from 'react';
import { useCart } from '../context/CartContext';
import { Trash2, Minus, Plus, ShoppingBag, Loader } from 'lucide-react';

export function Cart() {
  const { 
    cart, 
    removeFromCart, 
    updateQuantity, 
    total,
    isLoading,
    proceedToCheckout 
  } = useCart();

  if (cart.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-16 px-4">
        <ShoppingBag size={48} className="text-gray-500 mb-4" />
        <h2 className="text-2xl font-semibold text-white mb-2">Your cart is empty</h2>
        <p className="text-gray-400">Start shopping to add items to your cart</p>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold text-white mb-8">Shopping Cart</h2>
      <div className="space-y-6">
        {cart.map((item) => (
          <div 
            key={`${item.id}-${item.selectedSize}-${item.selectedColor.name}`} 
            className="glass-card p-6 rounded-xl"
          >
            <div className="flex items-center gap-6">
              <div className="w-24 h-24 flex-shrink-0 overflow-hidden rounded-lg">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-grow min-w-0">
                <h3 className="text-lg font-semibold text-white mb-1">{item.name}</h3>
                <p className="text-sm text-gray-400">Size: {item.selectedSize}</p>
                <p className="text-sm text-gray-400 mb-2">Color: {item.selectedColor.name}</p>
                <p className="text-[#DA1634] font-medium">${item.price.toFixed(2)}</p>
              </div>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => updateQuantity(item.id, item.selectedSize, item.selectedColor, Math.max(0, item.quantity - 1))}
                  className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-white/5 transition-colors"
                  disabled={isLoading}
                >
                  <Minus size={16} className="text-gray-400" />
                </button>
                <span className="w-8 text-center font-medium text-white">{item.quantity}</span>
                <button
                  onClick={() => updateQuantity(item.id, item.selectedSize, item.selectedColor, item.quantity + 1)}
                  className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-white/5 transition-colors"
                  disabled={isLoading}
                >
                  <Plus size={16} className="text-gray-400" />
                </button>
              </div>
              <button
                onClick={() => removeFromCart(item.id, item.selectedSize, item.selectedColor)}
                className="p-2 text-gray-400 hover:text-[#DA1634] transition-colors"
                aria-label="Remove item"
                disabled={isLoading}
              >
                <Trash2 size={20} />
              </button>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-8 glass-card rounded-xl p-6">
        <div className="flex justify-between items-center mb-4">
          <span className="text-lg text-white">Subtotal</span>
          <span className="text-2xl font-bold text-white">${total.toFixed(2)}</span>
        </div>
        <p className="text-sm text-gray-400 mb-6">Shipping and taxes calculated at checkout</p>
        <button
          onClick={proceedToCheckout}
          disabled={isLoading || cart.length === 0}
          className="w-full h-12 bg-[#DA1634] hover:bg-[#DA1634]/90 text-white rounded-lg transition-all duration-200 flex items-center justify-center gap-2 font-medium disabled:opacity-50"
        >
          {isLoading ? (
            <>
              <Loader size={20} className="animate-spin" />
              Creating Checkout...
            </>
          ) : (
            'Proceed to Checkout'
          )}
        </button>
      </div>
    </div>
  );
}
