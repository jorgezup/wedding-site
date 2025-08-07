"use client";
import React, { useState, useEffect } from 'react';

interface TimeLeft {
  dias: number;
  horas: number;
  minutos: number;
  segundos: number;
}

const Countdown = () => {
  const weddingDate = new Date('2026-02-14T00:00:00-03:00');
  const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(null);
  const [hasMounted, setHasMounted] = useState(false);

  const calculateTimeLeft = (): TimeLeft | null => {
    const difference = +weddingDate - +new Date();

    if (difference > 0) {
      return {
        dias: Math.floor(difference / (1000 * 60 * 60 * 24)),
        horas: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutos: Math.floor((difference / 1000 / 60) % 60),
        segundos: Math.floor((difference / 1000) % 60),
      };
    }

    return null;
  };

  useEffect(() => {
    setHasMounted(true);
    setTimeLeft(calculateTimeLeft());

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  if (!hasMounted) {
    return (
      <div className="text-center">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3 max-w-xs sm:max-w-md mx-auto">
          {['dias', 'horas', 'minutos', 'segundos'].map((unit) => (
            <div key={unit} className="bg-white/10 backdrop-blur-sm rounded-xl p-2 sm:p-3 animate-pulse">
              <div className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-1">
                --
              </div>
              <div className="text-xs font-medium text-gray-200 uppercase tracking-wider">
                {unit}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="text-center">
      {timeLeft ? (
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3 max-w-xs sm:max-w-md mx-auto">
          {Object.entries(timeLeft).map(([unit, value]) => (
            <div 
              key={unit} 
              className="bg-white/20 backdrop-blur-sm rounded-xl p-2 sm:p-3 border border-white/30 shadow-lg hover:bg-white/30 transition-all duration-300 group"
            >
              <div className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-1 group-hover:scale-105 transition-transform duration-300">
                {String(value).padStart(2, '0')}
              </div>
              <div className="text-xs font-medium text-gray-200 uppercase tracking-wider">
                {unit}
              </div>
              <div className="w-full bg-white/20 rounded-full h-0.5 mt-1.5">
                <div 
                  className="bg-white h-0.5 rounded-full transition-all duration-1000"
                  style={{ 
                    width: unit === 'segundos' ? `${(60 - value) * 100 / 60}%` :
                           unit === 'minutos' ? `${(60 - value) * 100 / 60}%` :
                           unit === 'horas' ? `${(24 - value) * 100 / 24}%` :
                           '100%'
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-white/30 shadow-xl max-w-md mx-auto">
          <div className="text-4xl mb-4">🎉</div>
          <h3 className="text-xl sm:text-2xl text-white font-bold mb-2">
            O grande dia chegou!
          </h3>
          <p className="text-gray-200 text-sm sm:text-base">
            Hoje celebramos nosso amor
          </p>
        </div>
      )}
    </div>
  );
};

export default Countdown;
