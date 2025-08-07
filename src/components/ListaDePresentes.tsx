import React from 'react';
import Image from 'next/image';
import { Gift, Heart } from 'lucide-react';

const ListaDePresentes = () => {
  return (
    <section id="presentes" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800">Lista de Presentes</h2>
          <p className="text-lg text-gray-600 mt-2">Sua presença é o nosso maior presente, mas se desejar, aqui estão algumas opções.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="bg-white p-8 rounded-lg shadow-lg text-center">
            <Heart className="text-pink-500 w-16 h-16 mx-auto mb-6" />
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Lua de Mel</h3>
            <p className="text-gray-600 mb-6">Contribua com qualquer valor para nossa viagem dos sonhos. Agradecemos imensamente seu carinho!</p>
            <div className="flex flex-col items-center">
              <Image src="/qrcode-pix.png" alt="QR Code PIX" width={220} height={220} className="rounded-md" />
              <p className="mt-4 text-sm text-gray-500">Chave PIX: (11) 99999-9999</p>
            </div>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg text-center">
            <Gift className="text-blue-500 w-16 h-16 mx-auto mb-6" />
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Loja Online</h3>
            <p className="text-gray-600 mb-6">Temos uma lista de presentes em uma loja parceira com itens para nosso novo lar.</p>
            <a
              href="https://www.querodecasamento.com.br/lista-de-casamento/eiva-jorge"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-blue-500 text-white font-bold py-3 px-8 rounded-full hover:bg-blue-600 transition duration-300"
            >
              Ver Lista de Presentes
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ListaDePresentes;