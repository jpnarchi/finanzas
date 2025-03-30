import React, { useState } from 'react';

const AccessTable = () => {
  const [registros, setRegistros] = useState([
    { id: 1, nombre: 'Juan Pérez', entrada: '08:30', salida: '17:45', fecha: '2024-02-15' },
    { id: 2, nombre: 'María García', entrada: '09:15', salida: '18:20', fecha: '2024-02-15' }
  ]);

  return (
    <div className="p-6 bg-gray-100">
      <h2 className="text-2xl font-bold mb-4">Registros de Acceso</h2>
      <table className="w-full bg-white shadow-md rounded-lg overflow-hidden">
        <thead className="bg-blue-500 text-white">
          <tr>
            <th className="p-3 text-left">Nombre</th>
            <th className="p-3 text-left">Fecha</th>
            <th className="p-3 text-left">Entrada</th>
            <th className="p-3 text-left">Salida</th>
          </tr>
        </thead>
        <tbody>
          {registros.map(registro => (
            <tr key={registro.id} className="border-b hover:bg-gray-100">
              <td className="p-3">{registro.nombre}</td>
              <td className="p-3">{registro.fecha}</td>
              <td className="p-3">{registro.entrada}</td>
              <td className="p-3">{registro.salida}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AccessTable;