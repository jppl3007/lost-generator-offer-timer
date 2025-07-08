
import React from 'react';
import { Check, X } from 'lucide-react';

const PriceComparison: React.FC = () => {
  return (
    <div className="grid md:grid-cols-2 gap-6 my-8">
      {/* Versão DIY */}
      <div className="bg-gray-50 p-6 rounded-lg border-2 border-gray-200 opacity-75">
        <div className="text-center mb-4">
          <h3 className="text-xl font-bold text-gray-600 mb-2">Versão que você comprou</h3>
          <div className="text-2xl font-bold text-gray-500 line-through">R$ 497</div>
          <p className="text-gray-500">Monte você mesmo</p>
        </div>
        <ul className="space-y-2 text-sm">
          <li className="flex items-center gap-2">
            <Check className="w-4 h-4 text-green-500" />
            Manual de construção completo
          </li>
          <li className="flex items-center gap-2">
            <X className="w-4 h-4 text-red-500" />
            Você precisa montar
          </li>
          <li className="flex items-center gap-2">
            <X className="w-4 h-4 text-red-500" />
            Tempo de montagem: 8-12 horas
          </li>
          <li className="flex items-center gap-2">
            <X className="w-4 h-4 text-red-500" />
            Risco de erro na montagem
          </li>
        </ul>
      </div>

      {/* Versão Montada */}
      <div className="bg-orange-50 p-6 rounded-lg border-4 border-orange-500 relative overflow-hidden">
        <div className="absolute top-0 right-0 bg-red-500 text-white px-3 py-1 text-sm font-bold transform rotate-12 translate-x-2 -translate-y-1">
          OFERTA!
        </div>
        <div className="text-center mb-4">
          <h3 className="text-xl font-bold text-orange-800 mb-2">Gerador Perdido Montado</h3>
          <div className="text-3xl font-bold text-orange-600">R$ 397</div>
          <p className="text-orange-700 font-semibold">R$ 100 MENOS que a versão DIY!</p>
        </div>
        <ul className="space-y-2 text-sm">
          <li className="flex items-center gap-2">
            <Check className="w-4 h-4 text-green-500" />
            Totalmente montado e testado
          </li>
          <li className="flex items-center gap-2">
            <Check className="w-4 h-4 text-green-500" />
            Pronto para usar imediatamente
          </li>
          <li className="flex items-center gap-2">
            <Check className="w-4 h-4 text-green-500" />
            Garantia de funcionamento
          </li>
          <li className="flex items-center gap-2">
            <Check className="w-4 h-4 text-green-500" />
            Entrega em casa
          </li>
          <li className="flex items-center gap-2">
            <Check className="w-4 h-4 text-green-500" />
            Manual de operação incluído
          </li>
        </ul>
      </div>
    </div>
  );
};

export default PriceComparison;
