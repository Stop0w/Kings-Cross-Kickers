import React, { useState } from 'react';
import { format } from 'date-fns';
import { Upload } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { AuthModal } from '../components/AuthModal';
import { useAuth } from '../context/AuthContext';

export function Gallery() {
  const [filter, setFilter] = useState('all');
  const [imageSize, setImageSize] = useState('medium');
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [pendingAction, setPendingAction] = useState(null);
  const navigate = useNavigate();
  const { isAuthenticated, authenticate } = useAuth();
  
  const dates = [
    new Date('2024-03-02'),
    new Date('2024-02-24'),
    new Date('2024-02-17')
  ];

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
          className="glass-card px-4 py-2 rounded-lg bg-transparent min-w-[150px]"
        >
          <option value="all">All Photos</option>
          {dates.map((date) => (
            <option key={date.toISOString()} value={date.toISOString()}>
              {format(date, 'MMMM d, yyyy')}
            </option>
          ))}
        </select>

        <select
          value={imageSize}
          onChange={(e) => setImageSize(e.target.value)}
          className="glass-card px-4 py-2 rounded-lg bg-transparent min-w-[120px]"
        >
          {/* ... size options ... */}
        </select>
        
        <button 
          onClick={() => handleAction({ type: 'upload' })}
          className="glass-card px-4 py-2 rounded-lg hover:bg-white/10 transition-colors flex items-center gap-2"
        >
          <Upload size={18} />
          Upload Photo
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {dates.map((date) => (
          <div 
            key={date.toISOString()} 
            className="glass-card p-4 rounded-xl cursor-pointer hover:bg-white/5 transition-colors"
            onClick={() => handleAction({ 
              type: 'navigate', 
              path: `/gallery/${format(date, 'yyyy-MM-dd')}` 
            })}
          >
            <div className="aspect-square bg-white/5 rounded-lg mb-2 overflow-hidden">
              <div className="w-full h-full bg-gradient-to-br from-[#DA1634]/20 to-transparent" />
            </div>
            <p className="text-sm text-gray-400">
              {format(date, 'MMMM d, yyyy')}
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
