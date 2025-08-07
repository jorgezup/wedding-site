"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import { Gift, Heart, Copy, Check } from 'lucide-react';

const ListaDePresentes = () => {
  const [copied, setCopied] = useState(false);
  const pixKey = "(67) 99255-3806";

  const handleCopyPix = async () => {
    try {
      await navigator.clipboard.writeText(pixKey);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Falha ao copiar:', err);
    }
  };

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
              <div className="mt-4 flex items-center gap-2 bg-gray-100 rounded-lg px-4 py-2">
                <p className="text-sm text-gray-700 font-mono">{pixKey}</p>
                <button
                  onClick={handleCopyPix}
                  className="text-gray-500 hover:text-gray-700 transition-colors p-1"
                  title="Copiar chave PIX"
                >
                  {copied ? (
                    <Check className="w-4 h-4 text-green-500" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>
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