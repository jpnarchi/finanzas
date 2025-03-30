import React, { useState } from 'react';

const DespachoTable = () => {
  const [despachos, setDespachos] = useState([
    { 
      id: 1, 
      vehiculo: 'Camión Rojo', 
      conductor: 'Juan Pérez', 
      combustible: 'Diesel', 
      cantidad: 450, 
      fecha: '2024-02-15'
    },
    { 
      id: 2, 
      vehiculo: 'Camioneta Blanca', 
      conductor: 'María García', 
      combustible: 'Gasolina', 
      cantidad: 120, 
      fecha: '2024-02-15'
    }
  ]);

  return (
    <div className="p-6 bg-gray-50">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Registro de Despachos</h2>
      <table className="w-full bg-white shadow-md rounded-lg overflow-hidden">
        <thead className="bg-blue-600 text-white">
          <tr>
            <th className="p-3 text-left">Vehículo</th>
            <th className="p-3 text-left">Conductor</th>
            <th className="p-3 text-left">Combustible</th>
            <th className="p-3 text-left">Cantidad (Lts)</th>
            <th className="p-3 text-left">Fecha</th>
          </tr>
        </thead>
        <tbody>
          {despachos.map(despacho => (
            <tr key={despacho.id} className="border-b hover:bg-gray-100">
              <td className="p-3">{despacho.vehiculo}</td>
              <td className="p-3">{despacho.conductor}</td>
              <td className="p-3">{despacho.combustible}</td>
              <td className="p-3">{despacho.cantidad}</td>
              <td className="p-3">{despacho.fecha}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DespachoTable;