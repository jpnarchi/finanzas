import React, { useState } from 'react';

const Despacho = () => {
  const [despacho, setDespacho] = useState({
    empresa: 'Tollojchi',
    vehiculo: '',
    conductor: '',
    combustible: 'Diesel',
    cantidad: '',
    fecha: new Date().toISOString().split('T')[0]
  });

  const [despachos, setDespachos] = useState([]);

  const empresas = ['Tollojchi', 'Altiplano Sur', '27 de Enero', 'Corporación Uyuni'];

  const vehiculosPorEmpresa = {
    'Tollojchi': ['TLL-001', 'TLL-002'],
    'Altiplano Sur': ['APS-101', 'APS-102'],
    '27 de Enero': ['27E-201', '27E-202'],
    'Corporación Uyuni': ['CU-301', 'CU-302']
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDespacho(prev => ({
      ...prev,
      [name]: value,
      // Resetear vehículo si cambia la empresa
      ...(name === 'empresa' && { vehiculo: '' })
    }));
  };

  const registrarDespacho = (e) => {
    e.preventDefault();
    const nuevoDespacho = {
      ...despacho,
      id: Date.now()
    };
    setDespachos([nuevoDespacho, ...despachos]);
    
    // Resetear formulario
    setDespacho({
      empresa: 'Tollojchi',
      vehiculo: '',
      conductor: '',
      combustible: 'Diesel',
      cantidad: '',
      fecha: new Date().toISOString().split('T')[0]
    });
  };

  return (
    <div className="p-6 bg-gray-50">
      <div className="grid grid-cols-3 gap-6">
        <div className="col-span-1 bg-white shadow-md rounded-lg p-6">
          <h2 className="text-2xl font-bold mb-4">Registrar Despacho</h2>
          <form onSubmit={registrarDespacho} className="space-y-4">
            <div>
              <label className="block mb-2">Empresa</label>
              <select
                name="empresa"
                value={despacho.empresa}
                onChange={handleChange}
                className="w-full p-2 border rounded"
              >
                {empresas.map(empresa => (
                  <option key={empresa} value={empresa}>
                    {empresa}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block mb-2">Vehículo</label>
              <select
                name="vehiculo"
                value={despacho.vehiculo}
                onChange={handleChange}
                className="w-full p-2 border rounded"
                required
              >
                <option value="">Seleccionar Vehículo</option>
                {vehiculosPorEmpresa[despacho.empresa].map(vehiculo => (
                  <option key={vehiculo} value={vehiculo}>
                    {vehiculo}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block mb-2">Conductor</label>
              <input
                type="text"
                name="conductor"
                value={despacho.conductor}
                onChange={handleChange}
                className="w-full p-2 border rounded"
                required
              />
            </div>
            <div>
              <label className="block mb-2">Tipo de Combustible</label>
              <select
                name="combustible"
                value={despacho.combustible}
                onChange={handleChange}
                className="w-full p-2 border rounded"
              >
                <option value="Diesel">Diesel</option>
                <option value="Gasolina">Gasolina</option>
              </select>
            </div>
            <div>
              <label className="block mb-2">Cantidad (Litros)</label>
              <input
                type="number"
                name="cantidad"
                value={despacho.cantidad}
                onChange={handleChange}
                className="w-full p-2 border rounded"
                required
              />
            </div>
            <div>
              <label className="block mb-2">Fecha</label>
              <input
                type="date"
                name="fecha"
                value={despacho.fecha}
                onChange={handleChange}
                className="w-full p-2 border rounded"
                required
              />
            </div>
            <button 
              type="submit"
              className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700 transition-colors"
            >
              Registrar Despacho
            </button>
          </form>
        </div>

        <div className="col-span-2 bg-white shadow-md rounded-lg p-6">
          <h2 className="text-2xl font-bold mb-4">Historial de Despachos</h2>
          <table className="w-full">
            <thead className="bg-blue-600 text-white">
              <tr>
                <th className="p-3 text-left">Empresa</th>
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
                  <td className="p-3">{despacho.empresa}</td>
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
      </div>
    </div>
  );
};

export default Despacho;