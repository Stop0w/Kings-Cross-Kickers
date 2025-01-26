import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { format, parse } from 'date-fns';

export function AlbumView() {
  const { date } = useParams();
  const [imageSize, setImageSize] = useState('medium');
  
  const imageSizes = [
    { value: 'small', label: 'Small' },
    { value: 'medium', label: 'Medium' },
    { value: 'large', label: 'Large' },
    { value: 'xl', label: 'Extra Large' }
  ];

  const parsedDate = parse(date, 'yyyy-MM-dd', new Date());

  const getImageSizeClass = () => {
    switch (imageSize) {
      case 'small': return 'grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6';
      case 'medium': return 'grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4';
      case 'large': return 'grid-cols-1 sm:grid-cols-2 md:grid-cols-3';
      case 'xl': return 'grid-cols-1 sm:grid-cols-2';
      default: return 'grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4';
    }
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl font-bold text-white">
          {format(parsedDate, 'MMMM d, yyyy')}
        </h2>
        <select
          value={imageSize}
          onChange={(e) => setImageSize(e.target.value)}
          className="glass-card px-4 py-2 rounded-lg bg-transparent min-w-[120px]"
        >
          {imageSizes.map((size) => (
            <option key={size.value} value={size.value}>
              {size.label}
            </option>
          ))}
        </select>
      </div>

      <div className={`grid ${getImageSizeClass()} gap-6`}>
        {/* Placeholder for album images */}
        {[1, 2, 3, 4, 5, 6].map((item) => (
          <div key={item} className="glass-card p-4 rounded-xl">
            <div className="aspect-square bg-white/5 rounded-lg mb-2 overflow-hidden">
              <div className="w-full h-full bg-gradient-to-br from-white/10 to-white/5" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
