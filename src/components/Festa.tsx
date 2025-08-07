import React from 'react';
import Image from 'next/image';
import { MapPin, Clock, Music } from 'lucide-react';

const Festa = () => {
  return (
    <section id="festa" className="py-8 sm:py-12 lg:py-16 bg-gradient-to-br from-pink-50 to-orange-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 sm:mb-12">
          <Music className="w-8 h-8 sm:w-12 sm:h-12 text-secondary mx-auto mb-4" />
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-gray-800 mb-4">
            Festa
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
            Depois do &quot;Sim&quot;, vamos celebrar juntos com muita alegria, música e dança!
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="relative h-48 sm:h-64 lg:h-80">
              <Image
                src="/festa/local.jpeg"
                alt="Recanto Dangelos"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
              />
              <div className="absolute inset-0 bg-black bg-opacity-20" />
            </div>
            
            <div className="p-4 sm:p-6 lg:p-8">
              <div className="text-center mb-6">
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-serif font-bold text-gray-800 mb-2">
                  Recanto Dangelos
                </h3>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-gray-600">
                  <div className="flex items-center">
                    <Clock className="w-5 h-5 mr-2 text-secondary" />
                    <span className="text-sm sm:text-base">14 de Fevereiro de 2026 após a cerimônia</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="w-5 h-5 mr-2 text-secondary" />
                    <span className="text-sm sm:text-base">Km 6, Trevo para Salmorão</span>
                  </div>
                </div>
              </div>

              <div className="text-center mb-6">
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
                  Entrada pelo trevo para Salmorão, fica no km 6. Venha curtir conosco esse momento maravilhoso com muita música, dança e alegria até o amanhecer!
                </p>
              </div>

              <div className="text-center">
                <a
                  href="https://goo.gl/maps/hDXdeUqzhSZkRGkF7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-secondary text-white px-6 py-3 rounded-full hover:bg-secondary/90 transition-colors text-sm sm:text-base font-medium shadow-lg"
                >
                  <MapPin className="w-4 h-4 mr-2" />
                  Ver no Google Maps
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Festa;
