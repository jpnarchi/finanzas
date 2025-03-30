import React, { useState } from 'react';

const RegistroAcceso = () => {
  const [registros, setRegistros] = useState([
    {
      id: 1,
      nombre: 'Juan Pérez',
      entrada: '08:30',
      salida: '17:45',
      fecha: '2024-02-15',
      estado: 'Completado'
    },
    {
      id: 2,
      nombre: 'María García',
      entrada: '09:15',
      salida: '18:20',
      fecha: '2024-02-15',
      estado: 'Completado'
    }
  ]);

  return (
    <div className="p-6 bg-gray-50">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Registro de Accesos</h2>
      <table className="w-full bg-white shadow-md rounded-lg overflow-hidden">
        <thead className="bg-indigo-600 text-white">
          <tr>
            <th className="p-3 text-left">Nombre</th>
            <th className="p-3 text-left">Fecha</th>
            <th className="p-3 text-left">Entrada</th>
            <th className="p-3 text-left">Salida</th>
            <th className="p-3 text-left">Estado</th>
          </tr>
        </thead>
        <tbody>
          {registros.map(registro => (
            <tr key={registro.id} className="border-b hover:bg-gray-100">
              <td className="p-3">{registro.nombre}</td>
              <td className="p-3">{registro.fecha}</td>
              <td className="p-3">{registro.entrada}</td>
              <td className="p-3">{registro.salida}</td>
              <td className="p-3">
                <span className={`
                  px-2 py-1 rounded-full text-xs font-bold
                  ${registro.estado === 'Completado' ? 'bg-green-200 text-green-800' : 'bg-yellow-200 text-yellow-800'}
                `}>
                  {registro.estado}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RegistroAcceso;