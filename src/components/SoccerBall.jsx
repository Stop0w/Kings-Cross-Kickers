import React from 'react';

export function SoccerBall({ className }) {
  return (
    <div className={`relative ${className}`}>
      <img
        src="https://photos.app.goo.gl/6SRsTyaq8qWpJYha7"
        alt="Soccer Ball"
        className="w-36 h-36 filter-sepia saturate-150 brightness-75 animate-spin-slow"
      />
    </div>
  );
}
