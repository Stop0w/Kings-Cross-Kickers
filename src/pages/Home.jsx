import React from 'react';
import { ProductCard } from '../components/ProductCard';
import { products } from '../data/products';

export function Home() {
  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <div className="relative h-[400px] rounded-xl overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
          alt="Soccer field"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent">
          <div className="absolute bottom-0 left-0 p-8">
            <h1 className="text-4xl font-bold mb-2">Kings Cross Kickers</h1>
            <p className="text-xl">Join us every Saturday for exciting matches</p>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="glass-card p-8 rounded-xl">
        <h2 className="text-2xl font-bold mb-4">About Our Club</h2>
        <p className="text-gray-300">
          Welcome to our soccer community where we foster young talent and create lasting memories.
          Join us every Saturday for competitive matches and skill development.
        </p>
      </div>

      {/* Products Section */}
      <div>
        <h2 className="text-2xl font-bold mb-6">Club Gear</h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}
