import React, { useEffect, useState } from 'react';

const ParticlesBackground = () => {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    const generateParticles = () => {
      const newParticles = Array.from({ length: 30 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 3 + 1,
        duration: Math.random() * 20 + 10,
        delay: Math.random() * -20
      }));
      setParticles(newParticles);
    };

    generateParticles();
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none bg-[#0a192f]">
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute rounded-full bg-[#64ffda] opacity-20"
          style={{
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            animation: `float ${particle.duration}s infinite`,
            animationDelay: `${particle.delay}s`
          }}
        />
      ))}
      <style>
        {`
          @keyframes float {
            0%, 100% {
              transform: translate(0, 0);
            }
            25% {
              transform: translate(20px, -20px);
            }
            50% {
              transform: translate(-20px, -40px);
            }
            75% {
              transform: translate(-20px, -20px);
            }
          }
        `}
      </style>
    </div>
  );
};

export default ParticlesBackground;
