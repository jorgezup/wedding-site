"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Countdown from './Countdown';

const images = ['/home/175501.jpg', '/home/176323.jpg'];

const Home = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="relative h-screen overflow-hidden">
      {/* Background Images */}
      {images.map((image, index) => (
        <div
          key={image}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentImageIndex ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <Image
            src={image}
            alt={`Wedding photo ${index + 1}`}
            fill
            className="object-cover sm:object-cover sm:rounded-xl"
            priority={index === 0}
            sizes="100vw"
            style={{ objectPosition: 'center 60%' }}
          />
        </div>
      ))}
      
      {/* Dark overlay for better text readability */}
      {/* <div className="absolute inset-0 bg-black bg-opacity-30" /> */}
      
      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center text-white px-4">
        {/* Área superior para mobile com mais espaço */}
        <div className="flex-1 flex flex-col justify-center items-center min-h-0 pt-16 sm:pt-0">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-center mb-4">
            Eiva & Jorge
          </h1>
          <p className="text-xl sm:text-2xl lg:text-3xl text-center mb-8 sm:mb-12">
            14 de Fevereiro de 2026
          </p>
        </div>
        
        {/* Countdown com posicionamento responsivo */}
        <div className="pb-8 sm:pb-16 w-full max-w-4xl">
          <Countdown />
        </div>
      </div>
    </section>
  );
};

export default Home;
