import React, { useState } from 'react';

const TablasConexion = () => {
  const [tablas, setTablas] = useState([
    { 
      nombre: 'Clientes', 
      registros: 250, 
      ultimaActualizacion: '2024-02-15' 
    },
    { 
      nombre: 'Productos', 
      registros: 120, 
      ultimaActualizacion: '2024-02-14' 
    },
    { 
      nombre: 'Ventas', 
      registros: 500, 
      ultimaActualizacion: '2024-02-15' 
    }
  ]);

  const [conexion, setConexion] = useState({
    estado: 'Conectado',
    servidor: 'LocalHost',
    baseDatos: 'MiBaseDatos.accdb'
  });

  return (
    <div className="p-6 bg-gray-50">
      <div className="bg-white shadow-md rounded-lg p-6 mb-6">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">Estado de Conexión</h2>
        <div className="grid grid-cols-3 gap-4">
          <div>
            <span className="font-bold">Estado:</span>
            <span className={`ml-2 ${conexion.estado === 'Conectado' ? 'text-green-600' : 'text-red-600'}`}>
              {conexion.estado}
            </span>
          </div>
          <div>
            <span className="font-bold">Servidor:</span>
            <span className="ml-2">{conexion.servidor}</span>
          </div>
          <div>
            <span className="font-bold">Base de Datos:</span>
            <span className="ml-2">{conexion.baseDatos}</span>
          </div>
        </div>
      </div>

      <div className="bg-white shadow-md rounded-lg p-6">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">Tablas en la Base de Datos</h2>
        <table className="w-full bg-white shadow-md rounded-lg overflow-hidden">
          <thead className="bg-green-600 text-white">
            <tr>
              <th className="p-3 text-left">Nombre</th>
              <th className="p-3 text-left">Registros</th>
              <th className="p-3 text-left">Última Actualización</th>
              <th className="p-3 text-center">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {tablas.map((tabla, index) => (
              <tr key={index} className="border-b hover:bg-gray-100">
                <td className="p-3">{tabla.nombre}</td>
                <td className="p-3">{tabla.registros}</td>
                <td className="p-3">{tabla.ultimaActualizacion}</td>
                <td className="p-3 text-center">
                  <button className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600 mr-2">
                    Ver
                  </button>
                  <button className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600">
                    Editar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TablasConexion;