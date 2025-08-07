import React from 'react';
import Image from 'next/image';
import { MapPin, Clock, Heart } from 'lucide-react';

const Cerimonia = () => {
  return (
    <section id="cerimonia" className="py-8 sm:py-12 lg:py-16 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 sm:mb-12">
          <Heart className="w-8 h-8 sm:w-12 sm:h-12 text-primary mx-auto mb-4" />
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-gray-800 mb-4">
            Cerimônia
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
            O momento mais especial de nossas vidas será ainda mais bonito com sua presença
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="relative h-48 sm:h-64 lg:h-80">
              <Image
                src="/cerimonia/local.jpg"
                alt="Paróquia Nossa Senhora de Fátima"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
                priority
              />
              <div className="absolute inset-0 bg-black bg-opacity-20" />
            </div>
            
            <div className="p-4 sm:p-6 lg:p-8">
              <div className="text-center mb-6">
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-serif font-bold text-gray-800 mb-2">
                  Paróquia Nossa Senhora de Fátima
                </h3>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-gray-600">
                  <div className="flex items-center">
                    <Clock className="w-5 h-5 mr-2 text-primary" />
                    <span className="text-sm sm:text-base">14 de Fevereiro de 2026 às 16:00</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="w-5 h-5 mr-2 text-primary" />
                    <span className="text-sm sm:text-base">Endereço completo</span>
                  </div>
                </div>
              </div>

              <div className="text-center mb-6">
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
                  A cerimônia terá início pontualmente às 16 horas. Venha ser testemunha da nossa união e compartilhar conosco este momento único e especial.
                </p>
              </div>

              <div className="text-center">
                <a
                  href="https://goo.gl/maps/ByJPRmEYS94dc1vA6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-primary text-white px-6 py-3 rounded-full hover:bg-primary/90 transition-colors text-sm sm:text-base font-medium shadow-lg"
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

export default Cerimonia;
