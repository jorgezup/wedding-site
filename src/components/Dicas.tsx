"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import { MapPin, Phone, Star, Lightbulb } from 'lucide-react';

const PlaceholderImage = ({ type, name }: { type: 'hotel' | 'salon'; name: string }) => (
  <div className="w-full h-40 bg-gradient-to-br from-gray-200 to-gray-300 rounded-t-lg mb-4 flex items-center justify-center">
    <div className="text-center text-gray-500">
      {type === 'hotel' ? (
        <div className="space-y-2">
          <div className="w-12 h-8 bg-gray-400 rounded mx-auto"></div>
          <div className="text-xs font-medium">Hotel</div>
        </div>
      ) : (
        <div className="space-y-2">
          <div className="w-8 h-8 bg-gray-400 rounded-full mx-auto"></div>
          <div className="text-xs font-medium">Salão</div>
        </div>
      )}
    </div>
  </div>
);

const hoteis = [
  { name: 'Hotel Exemplo 1', address: 'Centro da cidade', mapLink: '#', phone: '(67) 3333-4444', rating: 4.5 },
  { name: 'Hotel Exemplo 2', address: 'Próximo ao local da festa', mapLink: '#', phone: '(67) 3333-5555', rating: 4.3 },
  { name: 'Hotel Exemplo 3', address: 'Região nobre', mapLink: '#', phone: '(67) 3333-6666', rating: 4.7 },
];

const saloes = [
  { name: 'Salão Beleza & Arte', address: 'Centro', mapLink: '#', phone: '(67) 3333-7777', services: ['Cabelo', 'Maquiagem', 'Unhas'] },
  { name: 'Studio Glamour', address: 'Jardins', mapLink: '#', phone: '(67) 3333-8888', services: ['Penteados', 'Make', 'Sobrancelha'] },
  { name: 'Espaço Elegante', address: 'Vila Olinda', mapLink: '#', phone: '(67) 3333-9999', services: ['Cabelo', 'Estética', 'Relaxamento'] },
];

const Dicas = () => {
  const [imageErrors, setImageErrors] = useState<{ [key: string]: boolean }>({});

  const handleImageError = (key: string) => {
    setImageErrors(prev => ({ ...prev, [key]: true }));
  };

  return (
    <section id="dicas" className="py-8 sm:py-12 lg:py-16 bg-gradient-to-br from-indigo-50 to-cyan-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 sm:mb-12">
          <Lightbulb className="w-8 h-8 sm:w-12 sm:h-12 text-indigo-500 mx-auto mb-4" />
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-gray-800 mb-4">
            Dicas Especiais
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
            Sugestões para tornar sua estadia ainda mais especial
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto space-y-12 sm:space-y-16">
          {/* Hotéis */}
          <div>
            <h3 className="text-xl sm:text-2xl font-serif font-bold text-center mb-8 text-gray-800 flex items-center justify-center gap-2">
              <MapPin className="w-6 h-6 text-blue-500" />
              Sugestões de Hotéis
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {hoteis.map((hotel, index) => {
                const imageKey = `hotel-${index}`;
                return (
                  <div key={index} className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300">
                    {imageErrors[imageKey] ? (
                      <PlaceholderImage type="hotel" name={hotel.name} />
                    ) : (
                      <div className="relative h-40">
                        <Image 
                          // src={`/hoteis/${index + 1}.jpg`} 
                          src="https://placehold.co/600x400/000000/FFFFFF.png" 
                          alt={hotel.name} 
                          fill
                          className="object-cover"
                          onError={() => handleImageError(imageKey)}
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                      </div>
                    )}
                    <div className="p-4 sm:p-6">
                      <h4 className="font-serif font-bold text-lg mb-2">{hotel.name}</h4>
                      <div className="space-y-2 text-sm text-gray-600">
                        <div className="flex items-center">
                          <MapPin className="w-4 h-4 mr-2 text-blue-500" />
                          <span>{hotel.address}</span>
                        </div>
                        <div className="flex items-center">
                          <Phone className="w-4 h-4 mr-2 text-green-500" />
                          <span>{hotel.phone}</span>
                        </div>
                        <div className="flex items-center">
                          <Star className="w-4 h-4 mr-2 text-yellow-500 fill-current" />
                          <span>{hotel.rating} estrelas</span>
                        </div>
                      </div>
                      <a 
                        href={hotel.mapLink} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="mt-4 inline-flex items-center text-blue-600 hover:text-blue-800 font-medium text-sm transition-colors"
                      >
                        <MapPin className="w-4 h-4 mr-1" />
                        Ver no mapa
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Salões */}
          <div>
            <h3 className="text-xl sm:text-2xl font-serif font-bold text-center mb-8 text-gray-800 flex items-center justify-center gap-2">
              <Star className="w-6 h-6 text-pink-500" />
              Salões de Beleza
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {saloes.map((salao, index) => {
                const imageKey = `salon-${index}`;
                return (
                  <div key={index} className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300">
                    {imageErrors[imageKey] ? (
                      <PlaceholderImage type="salon" name={salao.name} />
                    ) : (
                      <div className="relative h-40">
                        <Image 
                          src={`/saloes/${index + 1}.jpg`} 
                          alt={salao.name} 
                          fill
                          className="object-cover"
                          onError={() => handleImageError(imageKey)}
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                      </div>
                    )}
                    <div className="p-4 sm:p-6">
                      <h4 className="font-serif font-bold text-lg mb-2">{salao.name}</h4>
                      <div className="space-y-2 text-sm text-gray-600 mb-3">
                        <div className="flex items-center">
                          <MapPin className="w-4 h-4 mr-2 text-pink-500" />
                          <span>{salao.address}</span>
                        </div>
                        <div className="flex items-center">
                          <Phone className="w-4 h-4 mr-2 text-green-500" />
                          <span>{salao.phone}</span>
                        </div>
                      </div>
                      <div className="mb-4">
                        <p className="text-xs text-gray-500 mb-2">Serviços:</p>
                        <div className="flex flex-wrap gap-1">
                          {salao.services.map((service, idx) => (
                            <span key={idx} className="bg-pink-100 text-pink-700 px-2 py-1 rounded-full text-xs">
                              {service}
                            </span>
                          ))}
                        </div>
                      </div>
                      <a 
                        href={salao.mapLink} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="inline-flex items-center text-pink-600 hover:text-pink-800 font-medium text-sm transition-colors"
                      >
                        <MapPin className="w-4 h-4 mr-1" />
                        Ver no mapa
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dicas;
