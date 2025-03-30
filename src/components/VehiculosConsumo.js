import React, { useState } from 'react';

const VehiculosConsumo = () => {
  const [vehiculos, setVehiculos] = useState([
    { 
      placa: 'ABC-123', 
      tipo: 'Camión', 
      consumoMensual: 1200, 
      eficiencia: 'Alto',
      ultimoMantenimiento: '2024-01-15'
    },
    { 
      placa: 'XYZ-456', 
      tipo: 'Camioneta', 
      consumoMensual: 850, 
      eficiencia: 'Medio',
      ultimoMantenimiento: '2024-02-01'
    },
    { 
      placa: 'DEF-789', 
      tipo: 'Furgoneta', 
      consumoMensual: 620, 
      eficiencia: 'Bajo',
      ultimoMantenimiento: '2024-01-30'
    }
  ]);

  return (
    <div className="p-6 bg-gray-50">
      <div className="bg-white shadow-md rounded-lg p-6">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">Detalle de Vehículos</h2>
        <table className="w-full">
          <thead className="bg-blue-600 text-white">
            <tr>
              <th className="p-3 text-left">Placa</th>
              <th className="p-3 text-left">Tipo</th>
              <th className="p-3 text-left">Consumo Mensual</th>
              <th className="p-3 text-left">Eficiencia</th>
              <th className="p-3 text-left">Último Mantenimiento</th>
            </tr>
          </thead>
          <tbody>
            {vehiculos.map((vehiculo, index) => (
              <tr key={index} className="border-b hover:bg-gray-100">
                <td className="p-3">{vehiculo.placa}</td>
                <td className="p-3">{vehiculo.tipo}</td>
                <td className="p-3">{vehiculo.consumoMensual} Lts</td>
                <td className="p-3">
                  <span className={`
                    px-2 py-1 rounded-full text-xs font-bold
                    ${vehiculo.eficiencia === 'Alto' ? 'bg-green-200 text-green-800' : 
                      vehiculo.eficiencia === 'Medio' ? 'bg-yellow-200 text-yellow-800' : 
                      'bg-red-200 text-red-800'}
                  `}>
                    {vehiculo.eficiencia}
                  </span>
                </td>
                <td className="p-3">{vehiculo.ultimoMantenimiento}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default VehiculosConsumo;