import React, { useState } from 'react';
import { X } from 'lucide-react';

export function AuthModal({ onClose, onAuthenticate, title = "Authentication Required" }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username === 'KXC' && password === 'K!ck3r$') {
      onAuthenticate();
      onClose();
    } else {
      setError('Invalid credentials');
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center">
      <div className="glass-card w-full max-w-md p-6 rounded-xl relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white"
        >
          <X size={20} />
        </button>

        <h2 className="text-xl font-bold text-white mb-6">{title}</h2>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          {error && (
            <div className="bg-[#DA1634]/10 border border-[#DA1634]/20 text-[#DA1634] px-4 py-2 rounded-lg text-sm">
              {error}
            </div>
          )}
          
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">
              Username
            </label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full h-10 px-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#DA1634] focus:border-transparent text-white"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full h-10 px-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#DA1634] focus:border-transparent text-white"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full h-12 bg-[#DA1634] hover:bg-[#DA1634]/90 text-white rounded-lg transition-all duration-200 font-medium"
          >
            Access Photos
          </button>
        </form>
      </div>
    </div>
  );
}
