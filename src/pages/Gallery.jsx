import React, { useState } from 'react';
import { format } from 'date-fns';
import { Upload, Grid, Grid3X3, LayoutGrid } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { AuthModal } from '../components/AuthModal';
import { useAuth } from '../context/AuthContext';

const albumCovers = [
  {
    date: new Date('2024-03-02'),
    image: 'https://images.unsplash.com/photo-1579952363873-27f3bade9f55?q=80&w=800&auto=format&fit=crop'
  },
  {
    date: new Date('2024-02-24'),
    image: 'https://images.unsplash.com/photo-1560272564-c83b66b1ad12?q=80&w=800&auto=format&fit=crop'
  },
  {
    date: new Date('2024-02-17'),
    image: 'https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?q=80&w=800&auto=format&fit=crop'
  }
];

export function Gallery() {
  const [filter, setFilter] = useState('all');
  const [columnCount, setColumnCount] = useState('4');
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [pendingAction, setPendingAction] = useState(null);
  const navigate = useNavigate();
  const { isAuthenticated, authenticate } = useAuth();

  const handleAction = (action) => {
    if (!isAuthenticated) {
      setShowAuthModal(true);
      setPendingAction(action);
    } else {
      executePendingAction(action);
    }
  };

  const executePendingAction = (action) => {
    if (action.type === 'navigate') {
      navigate(action.path);
    } else if (action.type === 'upload') {
      navigate('/gallery/upload');
    }
  };

  const handleAuthentication = () => {
    authenticate();
    if (pendingAction) {
      executePendingAction(pendingAction);
      setPendingAction(null);
    }
  };

  return (
    <div>
      <div className="flex flex-wrap gap-4 mb-8 items-center">
        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="dropdown-select"
        >
          <option value="all">All Photos</option>
          {albumCovers.map((album) => (
            <option key={album.date.toISOString()} value={album.date.toISOString()}>
              {format(album.date, 'MMMM d, yyyy')}
            </option>
          ))}
        </select>

        <select
          value={columnCount}
          onChange={(e) => setColumnCount(e.target.value)}
          className="dropdown-select flex items-center"
        >
          <option value="6">
            <div className="flex items-center gap-2">
              <Grid size={16} className="text-red-500" />
              6 Columns
            </div>
          </option>
          <option value="4">
            <div className="flex items-center gap-2">
              <Grid3X3 size={16} className="text-red-500" />
              4 Columns
            </div>
          </option>
          <option value="3">
            <div className="flex items-center gap-2">
              <LayoutGrid size={16} className="text-red-500" />
              3 Columns
            </div>
          </option>
        </select>
        
        <button 
          onClick={() => handleAction({ type: 'upload' })}
          className="glass-card px-4 py-2 rounded-lg hover:bg-white/10 transition-colors flex items-center gap-2"
        >
          <Upload size={18} />
          Upload Photo
        </button>
      </div>

      <div className={`grid gap-6 ${
        columnCount === '6' ? 'grid-cols-6' : 
        columnCount === '4' ? 'grid-cols-4' : 
        'grid-cols-3'
      }`}>
        {albumCovers.map((album) => (
          <div 
            key={album.date.toISOString()} 
            className="glass-card p-4 rounded-xl cursor-pointer hover:bg-white/5 transition-colors group"
            onClick={() => handleAction({ 
              type: 'navigate', 
              path: `/gallery/${format(album.date, 'yyyy-MM-dd')}` 
            })}
          >
            <div className="aspect-square rounded-lg mb-2 overflow-hidden">
              <img 
                src={album.image}
                alt={format(album.date, 'MMMM d, yyyy')}
                className="w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <p className="text-sm text-gray-400">
              {format(album.date, 'MMMM d, yyyy')}
            </p>
          </div>
        ))}
      </div>

      {showAuthModal && (
        <AuthModal
          onClose={() => {
            setShowAuthModal(false);
            setPendingAction(null);
          }}
          onAuthenticate={handleAuthentication}
        />
      )}
    </div>
  );
}