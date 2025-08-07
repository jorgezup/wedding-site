"use client"
import React from 'react';
import { MapPin, Phone, Star, Lightbulb } from 'lucide-react';

const hoteis = [
  {
    name: 'Ipê Palace Hotel',
    address: 'Alameda Navarro de Andrade, 276 - Centro, Adamantina',
    mapLink: 'https://www.google.com/maps/place/Ip%C3%AA+Palace+Hotel/@-21.6887914,-51.0712093,17z',
    phone: 'Ver site: ipepalacehotel.com.br',
    rating: 4.8,
    features: ['Piscina', 'Spa', 'Café da manhã', 'Wi-Fi']
  },
  {
    name: 'Hotel Solarium Park',
    address: 'R. Josefina Dall\'Antonia Tiveron, 390 - Centro, Adamantina',
    mapLink: 'https://www.google.com/maps/place/HOTEL+SOLARIUM+PARK/@-21.6869643,-51.0700376,17z',
    phone: 'Contato via reservas',
    rating: 4.3,
    features: ['Jardim', 'Café da manhã', 'Estacionamento']
  },
  {
    name: 'Abaporu Hotéis',
    address: 'Est. de servidão Jose M. Almeida Silva, Adamantina',
    mapLink: 'https://www.google.com/maps/place/Abaporu+Hot%C3%A9is/@-21.6973805,-51.0619808,17z',
    phone: 'Ver site: hotelabaporu.com.br',
    rating: 4.6,
    features: ['2 piscinas', 'Lago de pesca', 'Churrasqueira', 'Wi-Fi']
  },
  {
    name: 'Hotel Restaurante Angatu',
    address: 'R. João Segateli, 25 - Centro, Osvaldo Cruz',
    mapLink: 'https://www.google.com/maps/place/Hotel+Restaurante+Angatu/@-21.7988866,-50.8701841,17z',
    phone: 'Contato via reservas',
    rating: 3.9,
    features: ['Restaurante', 'Piscina', 'Café da manhã', 'Wi-Fi']
  },
  {
    name: 'Hotel Parati',
    address: 'Osvaldo Cruz - SP',
    mapLink: 'https://www.google.com/maps/place/Hotel+Parati/@-21.7893418,-50.792593,17z',
    phone: 'Contato via reservas',
    rating: 4.0,
    features: ['Localização central', 'Estacionamento']
  },
  {
    name: 'Hotel Monte Rei Lucélia',
    address: 'Av. José Silveira Mendonça, 228 - Jardim Bela Vista, Lucélia',
    mapLink: 'https://www.google.com/maps/place/Hotel+Monte+Rei+Luc%C3%A9lia/@-21.7150746,-51.0152098,17z',
    phone: 'Contato via reservas',
    rating: 4.8,
    features: ['Acomodações premium', 'Café da manhã excelente', 'Quartos limpos']
  }
];

const saloes = [
  { name: 'Salão Beleza & Arte', address: 'Centro', mapLink: '#', phone: '(67) 3333-7777', services: ['Cabelo', 'Maquiagem', 'Unhas'] },
  { name: 'Studio Glamour', address: 'Jardins', mapLink: '#', phone: '(67) 3333-8888', services: ['Penteados', 'Make', 'Sobrancelha'] },
  { name: 'Espaço Elegante', address: 'Vila Olinda', mapLink: '#', phone: '(67) 3333-9999', services: ['Cabelo', 'Estética', 'Relaxamento'] },
];

const Dicas = () => {

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
              {hoteis.map((hotel, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300">
                  <div className="p-4 sm:p-6">
                    <h4 className="font-serif font-bold text-lg mb-2">{hotel.name}</h4>
                    <div className="space-y-2 text-sm text-gray-600 mb-3">
                      <div className="flex items-start">
                        <MapPin className="w-4 h-4 mr-2 text-blue-500 mt-0.5 flex-shrink-0" />
                        <span className="break-words">{hotel.address}</span>
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
                    {hotel.features && (
                      <div className="mb-4">
                        <p className="text-xs text-gray-500 mb-2">Comodidades:</p>
                        <div className="flex flex-wrap gap-1">
                          {hotel.features.map((feature, idx) => (
                            <span key={idx} className="bg-blue-100 text-blue-700 px-2 py-1 rounded-full text-xs">
                              {feature}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
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
              ))
              }
            </div>
          </div>

          {/* Salões */}
          <div>
            <h3 className="text-xl sm:text-2xl font-serif font-bold text-center mb-8 text-gray-800 flex items-center justify-center gap-2">
              <Star className="w-6 h-6 text-pink-500" />
              Salões de Beleza
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {saloes.map((salao, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300">
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
              ))
              }
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dicas;
