
import React, { useState, useEffect } from 'react';
import { Package } from 'lucide-react';

const UnitCounter: React.FC = () => {
  const [unitsLeft, setUnitsLeft] = useState(3);

  return (
    <div className="bg-orange-100 border-2 border-orange-500 p-6 rounded-lg text-center">
      <div className="flex items-center justify-center gap-2 mb-3">
        <Package className="w-8 h-8 text-orange-600" />
        <span className="text-xl font-bold text-orange-800">ESTOQUE LIMITADO</span>
      </div>
      <div className="text-5xl font-bold text-orange-600 mb-2">{unitsLeft}</div>
      <p className="text-orange-700 font-semibold">
        Unidades restantes do Gerador Perdido Montado
      </p>
      <div className="flex justify-center mt-4 gap-2">
        {[...Array(3)].map((_, index) => (
          <div
            key={index}
            className={`w-4 h-4 rounded-full ${
              index < unitsLeft ? 'bg-orange-500' : 'bg-gray-300'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default UnitCounter;
