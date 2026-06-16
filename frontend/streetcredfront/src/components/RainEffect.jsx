import React from 'react';

const RainEffect = () => {
  // Generate 150 raindrops for a decent downpour effect
  const drops = Array.from({ length: 100 });
  
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-20">
      {drops.map((_, i) => {
        // Randomize position, speed, and delay for natural looking rain
        const left = Math.random() * 100;
        const duration = 0.5 + Math.random() * 0.8;
        const delay = Math.random() * 2;
        const opacity = 0.3 + Math.random() * 0.4;

        return (
          <div
            key={i}
            className="absolute top-[-50px] w-[2px] h-[30px] lg:h-[50px] bg-gradient-to-b from-transparent to-white/60"
            style={{
              left: `${left}%`,
              opacity: opacity,
              animation: `rainFall ${duration}s linear ${delay}s infinite`
            }}
          />
        );
      })}
    </div>
  );
};

export default RainEffect;
