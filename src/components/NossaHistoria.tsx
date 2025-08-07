import React from 'react';
import { Heart, Calendar, MapPin } from 'lucide-react';

const NossaHistoria = () => {
  return (
    <section id="historia" className="py-8 sm:py-12 lg:py-16 bg-gradient-to-br from-rose-50 to-pink-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 sm:mb-12">
          <Heart className="w-8 h-8 sm:w-12 sm:h-12 text-rose-500 mx-auto mb-4" />
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-gray-800 mb-4">
            Nossa História
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
            Uma história de amor que começou com uma vizinhança e se transformou em uma vida
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 lg:p-12">
            <div className="space-y-6 text-gray-700 leading-relaxed">
              <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                <div className="flex items-center gap-2 text-rose-500 font-medium text-sm sm:text-base whitespace-nowrap">
                  <Calendar className="w-4 h-4" />
                  <span>2009</span>
                </div>
                <p className="text-sm sm:text-base">
                  Tudo começou em 2009, em Campo Grande-MS, quando dois estudantes da UFMS viraram vizinhos no condomínio &quot;da Portuguesa&quot;. Ela cursava Química; ele, o calouro de Análise e Desenvolvimento de Sistemas. Éramos apenas dois jovens sonhando com o futuro, cada um no seu mundo... até que a convivência começou a nos aproximar.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                <div className="flex items-center gap-2 text-rose-500 font-medium text-sm sm:text-base whitespace-nowrap">
                  <Heart className="w-4 h-4" />
                  <span>Primeiros momentos</span>
                </div>
                <p className="text-sm sm:text-base">
                  Foi ali, no vai e vem da rotina, que a convivência plantou a semente do que viria a ser uma linda história. As conversas começaram despretensiosas, os encontros foram ficando mais frequentes... e entre bolos preparados por ela e churrascos feitos por ele, o carinho e a conexão foram crescendo.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                <div className="flex items-center gap-2 text-rose-500 font-medium text-sm sm:text-base whitespace-nowrap">
                  <MapPin className="w-4 h-4" />
                  <span>Show Jorge & Mateus</span>
                </div>
                <p className="text-sm sm:text-base">
                  O momento especial veio no show do Jorge & Mateus. No meio da multidão e embalados por canções românticas, trocamos nosso primeiro beijo — e foi ali que tudo realmente começou.
                </p>
              </div>

              <div className="bg-rose-50 rounded-xl p-4 sm:p-6">
                <p className="text-sm sm:text-base text-gray-700 italic">
                  Passamos por tantas fases: formaturas, novos desafios, mudanças de cidade, planos e recomeços. E em cada uma delas, estivemos lado a lado, fortalecendo e amadurecendo um amor construído na amizade, no respeito, nas risadas e, claro, em muitos bolos e churrascos.
                </p>
              </div>

              <div className="text-center pt-4">
                <div className="inline-flex items-center gap-2 text-rose-600 font-medium text-base sm:text-lg">
                  <Heart className="w-5 h-5" />
                  <span>E agora...</span>
                </div>
                <p className="mt-2 text-sm sm:text-base text-gray-700">
                  Chegou o momento de celebrar tudo o que vivemos e tudo o que ainda vamos construir. Nosso casamento é o próximo capítulo dessa história — e estamos muito felizes em dividir esse dia com pessoas tão especiais.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NossaHistoria;
