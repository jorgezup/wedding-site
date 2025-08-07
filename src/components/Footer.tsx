import React from 'react';
import { Heart, Code, Calendar, MapPin, Phone, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 text-white">
      <div className="container mx-auto px-4 py-8 sm:py-12">
        {/* Seção Principal */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Informações dos Noivos */}
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start mb-4">
              <Heart className="w-6 h-6 text-rose-400 mr-2" />
              <h3 className="text-xl sm:text-2xl font-serif font-bold">Eiva & Jorge</h3>
            </div>
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-4">
              Celebrando nosso amor e compartilhando nossa alegria com vocês, pessoas especiais que fazem parte da nossa história.
            </p>
            <div className="flex items-center justify-center md:justify-start text-gray-400 text-sm">
              <Calendar className="w-4 h-4 mr-2" />
              <span>14 de Fevereiro de 2026</span>
            </div>
          </div>

          {/* Informações do Evento */}
          <div className="text-center">
            <h4 className="text-lg sm:text-xl font-semibold mb-4 text-gray-200">Informações do Evento</h4>
            <div className="space-y-3">
              <div className="flex items-center justify-center text-gray-300 text-sm">
                <MapPin className="w-4 h-4 mr-2 text-blue-400" />
                <span>Paróquia N. Sra. de Fátima - 16:00h</span>
              </div>
              <div className="flex items-center justify-center text-gray-300 text-sm">
                <MapPin className="w-4 h-4 mr-2 text-yellow-400" />
                <span>Recanto Dangelos - Após cerimônia</span>
              </div>
              <div className="flex items-center justify-center text-gray-300 text-sm">
                <Phone className="w-4 h-4 mr-2 text-green-400" />
                <span>Confirme sua presença</span>
              </div>
            </div>
          </div>

          {/* Links Rápidos */}
          <div className="text-center md:text-right">
            <h4 className="text-lg sm:text-xl font-semibold mb-4 text-gray-200">Navegação</h4>
            <nav className="space-y-2">
              {[
                { href: "#historia", label: "Nossa História" },
                { href: "#padrinhos", label: "Padrinhos" },
                { href: "#cerimonia", label: "Cerimônia" },
                { href: "#festa", label: "Festa" },
                { href: "#presenca", label: "Confirmar Presença" },
              ].map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="block text-gray-300 hover:text-white transition-colors text-sm"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>
        </div>

        {/* Divisor */}
        <div className="border-t border-gray-600 pt-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            {/* Créditos */}
            <div className="flex items-center text-gray-400 text-sm">
              <Code className="w-4 h-4 mr-2" />
              <span>
                Desenvolvido com{' '}
                <Heart className="w-4 h-4 inline text-rose-400 mx-1" />
                por{' '}
                <a 
                  href="https://github.com/jorgezupirolli" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-blue-400 hover:text-blue-300 transition-colors font-medium"
                >
                  Jorge Zupirolli
                </a>
              </span>
            </div>

            {/* Copyright */}
            <div className="text-gray-400 text-sm text-center sm:text-right">
              <p>© {currentYear} Eiva & Jorge. Feito para celebrar nosso amor.</p>
            </div>
          </div>
        </div>

        {/* Mensagem Final */}
        <div className="text-center mt-6 pt-6 border-t border-gray-700">
          <p className="text-gray-300 text-sm sm:text-base italic">
            "O amor não é apenas olhar um para o outro, é olhar juntos na mesma direção."
          </p>
          <p className="text-gray-400 text-xs mt-2">— Antoine de Saint-Exupéry</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
