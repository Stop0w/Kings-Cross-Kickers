import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Schedule } from './pages/Schedule';
import { Gallery } from './pages/Gallery';
import { AlbumView } from './pages/AlbumView';
import { PhotoUpload } from './pages/PhotoUpload';
import { Navigation } from './components/Navigation';
import { SoccerBall } from './components/SoccerBall';
import { CartProvider } from './context/CartContext';
import { AuthProvider } from './context/AuthContext';

function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <Router>
          <div className="min-h-screen flex flex-col text-white glass-effect relative overflow-x-hidden bg-[#121212]">
            <div className="fixed top-[10%] right-[5%] transform">
              <SoccerBall className="soccer-ball-top" />
            </div>
            <div className="fixed bottom-[10%] left-[5%] transform">
              <SoccerBall className="soccer-ball-bottom" />
            </div>

            <Navigation />

            <main className="flex-grow pt-20 relative z-10">
              <div className="max-w-7xl mx-auto px-6 py-8">
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/schedule" element={<Schedule />} />
                  <Route path="/gallery" element={<Gallery />} />
                  <Route path="/gallery/upload" element={<PhotoUpload />} />
                  <Route path="/gallery/:date" element={<AlbumView />} />
                </Routes>
              </div>
            </main>

            <footer className="glass-card w-full mt-auto z-10">
              <div className="max-w-7xl mx-auto px-6 py-6">
                <p className="text-center text-gray-400">
                  © 2024 Kings Cross Kickers. All rights reserved.
                </p>
              </div>
            </footer>
          </div>
        </Router>
      </CartProvider>
    </AuthProvider>
  );
}

export default App;
