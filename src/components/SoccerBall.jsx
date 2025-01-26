import React from 'react';

export function SoccerBall({ className }) {
  return (
    <div className={`relative ${className}`}>
      <img
        src="https://i.postimg.cc/jSfZHBTp/soccer-ball.png"
        alt="Soccer Ball"
        style={{
          filter: 'invert(100%) brightness(200%) contrast(100%)',
          opacity: '0.15'
        }}
        className="w-full h-full"
      />
    </div>
  );
}