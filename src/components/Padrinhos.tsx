"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, Users, Heart } from 'lucide-react';

const padrinhos = [
  { name:'Padrinhos/Madrinhas Família', photo: '/padrinhos/familia.jpg', role: 'Padrinhos/Madrinhas' },
  { name:'Padrinho Bruno', photo: '/padrinhos/padrinho-bruno.jpg', role: 'Padrinho' },
  { name:'Padrinhos/Madrinhas Amigos Campo Grande', photo: '/padrinhos/amigos-cg.jpg', role: 'Padrinhos/Madrinhas' },
  { name: 'Padrinho Rafa', photo: '/padrinhos/Rafa.jpg', role: 'Padrinho' },
  // { name: 'Família da Noiva', photo: '/padrinhos/familia-2.jpg', role: 'Padrinhos/Madrinhas Família' },
];

const Padrinhos = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? padrinhos.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === padrinhos.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex: number) => {
    setCurrentIndex(slideIndex);
  };

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        const isLastSlide = prevIndex === padrinhos.length - 1;
        return isLastSlide ? 0 : prevIndex + 1;
      });
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  return (
    <section id="padrinhos" className="py-8 sm:py-12 lg:py-16 bg-gradient-to-br from-emerald-50 to-teal-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 sm:mb-12">
          <Users className="w-8 h-8 sm:w-12 sm:h-12 text-accent mx-auto mb-4" />
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-gray-800 mb-4">
            Nossos Padrinhos
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
            As pessoas especiais que estarão ao nosso lado neste momento único
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div 
            className="relative bg-white rounded-2xl shadow-xl overflow-hidden"
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
          >
            <div className="relative aspect-[4/3] sm:aspect-[3/2] lg:aspect-[16/10]">
              <Image
                src={padrinhos[currentIndex].photo}
                alt={`Foto dos ${padrinhos[currentIndex].name} - ${padrinhos[currentIndex].role} do casamento de Eiva e Jorge`}
                fill
                className="object-cover transition-opacity duration-500"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
                priority={currentIndex === 0}
                quality={85}
              />
              <div className="absolute inset-0 bg-black bg-opacity-20" />
              
              {/* Navigation Buttons */}
              <button 
                onClick={goToPrevious}
                className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-3 sm:p-4 shadow-lg transition-all duration-200 opacity-80 hover:opacity-100 min-w-[44px] min-h-[44px] focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2"
                aria-label={`Foto anterior - ${padrinhos[currentIndex === 0 ? padrinhos.length - 1 : currentIndex - 1].name}`}
              >
                <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-gray-700" />
              </button>
              
              <button 
                onClick={goToNext}
                className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-3 sm:p-4 shadow-lg transition-all duration-200 opacity-80 hover:opacity-100 min-w-[44px] min-h-[44px] focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2"
                aria-label={`Próxima foto - ${padrinhos[currentIndex === padrinhos.length - 1 ? 0 : currentIndex + 1].name}`}
              >
                <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-gray-700" />
              </button>
            </div>
            
            {/* Content */}
            <div className="p-4 sm:p-6 lg:p-8 text-center">
              <div className="flex items-center justify-center mb-2">
                <Heart className="w-5 h-5 text-accent mr-2" />
                <span className="text-sm text-gray-500 uppercase tracking-wider">{padrinhos[currentIndex].role}</span>
              </div>
              {/* <h3 className="text-xl sm:text-2xl font-serif font-bold text-gray-800">
                {padrinhos[currentIndex].name}
              </h3> */}
            </div>
          </div>
          
          {/* Dots Navigation */}
          <div className="flex justify-center mt-6 space-x-2" role="group" aria-label="Navegação de fotos">
            {padrinhos.map((padrinho, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`rounded-full transition-all duration-300 min-w-[44px] min-h-[44px] flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 ${
                  currentIndex === index 
                    ? 'bg-accent w-8 sm:w-12 h-2 sm:h-3' 
                    : 'bg-gray-300 hover:bg-gray-400 w-2 h-2 sm:w-3 sm:h-3'
                }`}
                aria-label={`Ver foto de ${padrinho.name} (${index + 1} de ${padrinhos.length})`}
                aria-current={currentIndex === index ? 'true' : 'false'}
              />
            ))}
          </div>
          
          {/* Progress Bar */}
          <div className="mt-4 max-w-sm mx-auto">
            <div className="w-full bg-gray-200 rounded-full h-1">
              <div 
                className="bg-accent h-1 rounded-full transition-all duration-300"
                style={{ width: `${((currentIndex + 1) / padrinhos.length) * 100}%` }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Padrinhos;
