import React, { useState } from 'react';

const ConsumoChart = () => {
  const [tipoGrafico, setTipoGrafico] = useState('mensual');

  const datosConsumo = {
    mensual: [
      { mes: 'Ene', consumo: 450 },
      { mes: 'Feb', consumo: 620 },
      { mes: 'Mar', consumo: 580 },
      { mes: 'Abr', consumo: 710 },
      { mes: 'May', consumo: 680 },
      { mes: 'Jun', consumo: 750 }
    ],
    vehicular: [
      { vehiculo: 'Camión 1', consumo: 1200 },
      { vehiculo: 'Camioneta A', consumo: 850 },
      { vehiculo: 'Camión 2', consumo: 1050 },
      { vehiculo: 'Furgoneta', consumo: 620 }
    ]
  };

  return (
    <div className="p-6 bg-gray-50">
      <div className="bg-white shadow-md rounded-lg p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-800">
            {tipoGrafico === 'mensual' ? 'Consumo Mensual' : 'Consumo por Vehículo'}
          </h2>
          <div className="space-x-2">
            <button 
              onClick={() => setTipoGrafico('mensual')}
              className={`
                px-4 py-2 rounded 
                ${tipoGrafico === 'mensual' ? 'bg-blue-600 text-white' : 'bg-gray-200'}
              `}
            >
              Mensual
            </button>
            <button 
              onClick={() => setTipoGrafico('vehicular')}
              className={`
                px-4 py-2 rounded 
                ${tipoGrafico === 'vehicular' ? 'bg-blue-600 text-white' : 'bg-gray-200'}
              `}
            >
              Por Vehículo
            </button>
          </div>
        </div>

        <div className="grid grid-cols-6 gap-2 h-64">
          {tipoGrafico === 'mensual' 
            ? datosConsumo.mensual.map((dato, index) => (
                <div key={index} className="flex flex-col justify-end">
                  <div 
                    className="bg-blue-500 hover:bg-blue-600 transition-all"
                    style={{ height: `${dato.consumo / 10}%` }}
                  />
                  <span className="text-center text-xs mt-2">{dato.mes}</span>
                </div>
              ))
            : datosConsumo.vehicular.map((dato, index) => (
                <div 
                  key={index} 
                  className="bg-blue-500 text-white p-2 rounded flex justify-between items-center"
                >
                  <span>{dato.vehiculo}</span>
                  <span>{dato.consumo} Lts</span>
                </div>
              ))
          }
        </div>
      </div>
    </div>
  );
};

export default ConsumoChart;