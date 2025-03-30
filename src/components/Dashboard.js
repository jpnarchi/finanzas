import React from 'react';

const Dashboard = () => {
  const estadisticas = [
    { 
      titulo: 'Combustible Despachado', 
      valor: '5,420 Lts', 
      icono: '⛽',
      color: 'bg-blue-500'
    },
    { 
      titulo: 'Ingresos Hoy', 
      valor: '$124,500', 
      icono: '💰',
      color: 'bg-green-500'
    },
    { 
      titulo: 'Existencias', 
      valor: '12,350 Lts', 
      icono: '📦',
      color: 'bg-red-500'
    }
  ];

  const ultimosDespachos = [
    { 
      vehiculo: 'Camión Rojo', 
      conductor: 'Juan Pérez', 
      cantidad: 450, 
      fecha: '2024-02-15' 
    },
    { 
      vehiculo: 'Camioneta Blanca', 
      conductor: 'María García', 
      cantidad: 120, 
      fecha: '2024-02-15' 
    }
  ];

  return (
    <div className="p-6 bg-gray-50">
      <div className="grid grid-cols-3 gap-6 mb-8">
        {estadisticas.map((stat, index) => (
          <div 
            key={index} 
            className={`${stat.color} text-white rounded-lg shadow-md p-6 flex items-center justify-between`}
          >
            <div>
              <h3 className="text-xl font-bold mb-2">{stat.titulo}</h3>
              <div className="text-3xl font-extrabold">{stat.valor}</div>
            </div>
            <div className="text-4xl">{stat.icono}</div>
          </div>
        ))}
      </div>

      <div className="bg-white shadow-md rounded-lg p-6">
        <h2 className="text-2xl font-bold mb-4">Últimos Despachos</h2>
        <table className="w-full">
          <thead className="bg-blue-600 text-white">
            <tr>
              <th className="p-3 text-left">Vehículo</th>
              <th className="p-3 text-left">Conductor</th>
              <th className="p-3 text-left">Cantidad (Lts)</th>
              <th className="p-3 text-left">Fecha</th>
            </tr>
          </thead>
          <tbody>
            {ultimosDespachos.map((despacho, index) => (
              <tr key={index} className="border-b hover:bg-gray-100">
                <td className="p-3">{despacho.vehiculo}</td>
                <td className="p-3">{despacho.conductor}</td>
                <td className="p-3">{despacho.cantidad}</td>
                <td className="p-3">{despacho.fecha}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashboard;