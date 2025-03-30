import React, { useState } from 'react';

const Flota = () => {
  const [empresas] = useState([
    'Tollojchi',
    'Altiplano Sur', 
    '27 de Enero',
    'Corporación Uyuni'
  ]);

  const [vehiculos, setVehiculos] = useState([
    {
      id: 1,
      empresa: 'Tollojchi',
      placa: 'TLL-001',
      tipo: 'Camión',
      modelo: 'Volvo FH',
      ultimoDespacho: '2024-02-15',
      consumoPromedio: 45
    },
    {
      id: 2,
      empresa: 'Altiplano Sur',
      placa: 'APS-002',
      tipo: 'Camioneta',
      modelo: 'Toyota Hilux',
      ultimoDespacho: '2024-02-14',
      consumoPromedio: 25
    },
    {
      id: 3,
      empresa: '27 de Enero',
      placa: 'ENE-003',
      tipo: 'Furgoneta',
      modelo: 'Mercedes Sprinter',
      ultimoDespacho: '2024-02-16',
      consumoPromedio: 35
    }
  ]);

  const [nuevoVehiculo, setNuevoVehiculo] = useState({
    empresa: 'Tollojchi',
    placa: '',
    tipo: 'Camión',
    modelo: '',
    consumoPromedio: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNuevoVehiculo(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const registrarVehiculo = (e) => {
    e.preventDefault();
    const vehiculoConId = {
      ...nuevoVehiculo,
      id: Date.now(),
      ultimoDespacho: new Date().toISOString().split('T')[0]
    };
    
    setVehiculos([...vehiculos, vehiculoConId]);
    
    // Resetear formulario
    setNuevoVehiculo({
      empresa: 'Tollojchi',
      placa: '',
      tipo: 'Camión',
      modelo: '',
      consumoPromedio: ''
    });
  };

  return (
    <div className="p-6 bg-gray-50">
      <div className="grid grid-cols-3 gap-6">
        <div className="col-span-1 bg-white shadow-md rounded-lg p-6">
          <h2 className="text-2xl font-bold mb-4">Registrar Vehículo</h2>
          <form onSubmit={registrarVehiculo} className="space-y-4">
            <div>
              <label className="block mb-2">Empresa</label>
              <select
                name="empresa"
                value={nuevoVehiculo.empresa}
                onChange={handleChange}
                className="w-full p-2 border rounded"
              >
                {empresas.map(empresa => (
                  <option key={empresa} value={empresa}>{empresa}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block mb-2">Placa</label>
              <input
                type="text"
                name="placa"
                value={nuevoVehiculo.placa}
                onChange={handleChange}
                className="w-full p-2 border rounded"
                required
                placeholder="Ej. TLL-001"
              />
            </div>
            <div>
              <label className="block mb-2">Tipo de Vehículo</label>
              <select
                name="tipo"
                value={nuevoVehiculo.tipo}
                onChange={handleChange}
                className="w-full p-2 border rounded"
              >
                <option value="Camión">Camión</option>
                <option value="Camioneta">Camioneta</option>
                <option value="Furgoneta">Furgoneta</option>
                <option value="Otro">Otro</option>
              </select>
            </div>
            <div>
              <label className="block mb-2">Modelo</label>
              <input
                type="text"
                name="modelo"
                value={nuevoVehiculo.modelo}
                onChange={handleChange}
                className="w-full p-2 border rounded"
                required
                placeholder="Ej. Volvo FH"
              />
            </div>
            <div>
              <label className="block mb-2">Consumo Promedio (Lts/100km)</label>
              <input
                type="number"
                name="consumoPromedio"
                value={nuevoVehiculo.consumoPromedio}
                onChange={handleChange}
                className="w-full p-2 border rounded"
                required
                placeholder="Ej. 45"
              />
            </div>
            <button 
              type="submit"
              className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700 transition-colors"
            >
              Registrar Vehículo
            </button>
          </form>
        </div>

        <div className="col-span-2 bg-white shadow-md rounded-lg p-6">
          <h2 className="text-2xl font-bold mb-4">Flota de Vehículos</h2>
          <table className="w-full">
            <thead className="bg-blue-600 text-white">
              <tr>
                <th className="p-3 text-left">Empresa</th>
                <th className="p-3 text-left">Placa</th>
                <th className="p-3 text-left">Tipo</th>
                <th className="p-3 text-left">Modelo</th>
                <th className="p-3 text-left">Último Despacho</th>
                <th className="p-3 text-left">Consumo Prom.</th>
              </tr>
            </thead>
            <tbody>
              {vehiculos.map(vehiculo => (
                <tr key={vehiculo.id} className="border-b hover:bg-gray-100">
                  <td className="p-3">{vehiculo.empresa}</td>
                  <td className="p-3">{vehiculo.placa}</td>
                  <td className="p-3">{vehiculo.tipo}</td>
                  <td className="p-3">{vehiculo.modelo}</td>
                  <td className="p-3">{vehiculo.ultimoDespacho}</td>
                  <td className="p-3">{vehiculo.consumoPromedio} Lts/100km</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Flota;