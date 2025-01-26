import React, { useState } from 'react';
import { ShoppingCart } from 'lucide-react';
import { useCart } from '../context/CartContext';

export function ProductCard({ product }) {
  const [selectedSize, setSelectedSize] = useState(product.sizes[0]);
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const { addToCart } = useCart();

  return (
    <div className="glass-card rounded-xl overflow-hidden flex flex-col h-full transform transition-all duration-300 hover:scale-[1.02]">
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex-grow">
          <div className="flex justify-between items-start mb-2">
            <h3 className="text-xl font-semibold text-white">{product.name}</h3>
            <span className="text-lg font-bold text-[#F6D001]">
              ${product.price.toFixed(2)}
            </span>
          </div>
          <p className="text-gray-400 mb-4 line-clamp-2">{product.description}</p>
        </div>
        
        <div className="space-y-4">
          <div className="relative">
            <label className="block text-sm font-medium text-gray-300 mb-1">
              Size:
            </label>
            <select
              value={selectedSize}
              onChange={(e) => setSelectedSize(e.target.value)}
              className="w-full h-10 pl-3 pr-10 text-white bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#DA1634] focus:border-transparent appearance-none"
            >
              {product.sizes.map((size) => (
                <option key={size} value={size} className="bg-dark text-white">
                  {size}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Color:
            </label>
            <div className="flex gap-2">
              {product.colors.map((color) => (
                <button
                  key={color.name}
                  onClick={() => setSelectedColor(color)}
                  className={`w-8 h-8 rounded-full border-2 transition-all ${
                    selectedColor.name === color.name 
                      ? 'border-[#DA1634] scale-110' 
                      : 'border-transparent hover:border-white/30'
                  }`}
                  style={{ backgroundColor: color.value }}
                  title={color.name}
                >
                  <span className="sr-only">{color.name}</span>
                </button>
              ))}
            </div>
          </div>
          
          <button
            onClick={() => addToCart(product, selectedSize, selectedColor)}
            className="w-full h-12 bg-[#DA1634] hover:bg-[#DA1634]/90 text-white rounded-lg transition-all duration-200 flex items-center justify-center gap-2 font-medium"
          >
            <ShoppingCart size={20} />
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
