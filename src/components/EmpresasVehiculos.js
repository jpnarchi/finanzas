import React, { useState } from 'react';

const EmpresasVehiculos = () => {
  const [empresas, setEmpresas] = useState([
    {
      nombre: 'Tollojchi',
      vehiculos: [
        { placa: 'TLL-001', tipo: 'Camión', modelo: '2020' },
        { placa: 'TLL-002', tipo: 'Camioneta', modelo: '2019' }
      ]
    },
    {
      nombre: 'Altiplano Sur',
      vehiculos: [
        { placa: 'APS-101', tipo: 'Camión Cisterna', modelo: '2021' },
        { placa: 'APS-102', tipo: 'Camioneta 4x4', modelo: '2020' }
      ]
    },
    {
      nombre: '27 de Enero',
      vehiculos: [
        { placa: '27E-201', tipo: 'Bus', modelo: '2019' },
        { placa: '27E-202', tipo: 'Camión Plataforma', modelo: '2020' }
      ]
    },
    {
      nombre: 'Corporación Uyuni',
      vehiculos: [
        { placa: 'CU-301', tipo: 'Camión Minero', modelo: '2022' },
        { placa: 'CU-302', tipo: 'Camioneta Ejecutiva', modelo: '2021' }
      ]
    }
  ]);

  const [nuevoVehiculo, setNuevoVehiculo] = useState({
    empresa: 'Tollojchi',
    placa: '',
    tipo: '',
    modelo: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNuevoVehiculo(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const agregarVehiculo = (e) => {
    e.preventDefault();
    
    const empresaSeleccionada = empresas.find(emp => emp.nombre === nuevoVehiculo.empresa);
    
    if (empresaSeleccionada) {
      const vehiculoNuevo = {
        placa: nuevoVehiculo.placa,
        tipo: nuevoVehiculo.tipo,
        modelo: nuevoVehiculo.modelo
      };

      setEmpresas(empresas.map(emp => 
        emp.nombre === nuevoVehiculo.empresa
          ? { ...emp, vehiculos: [...emp.vehiculos, vehiculoNuevo] }
          : emp
      ));

      // Resetear formulario
      setNuevoVehiculo({
        empresa: 'Tollojchi',
        placa: '',
        tipo: '',
        modelo: ''
      });
    }
  };

  return (
    <div className="p-6 bg-gray-50">
      <div className="grid grid-cols-3 gap-6">
        <div className="col-span-1 bg-white shadow-md rounded-lg p-6">
          <h2 className="text-2xl font-bold mb-4">Registrar Nuevo Vehículo</h2>
          <form onSubmit={agregarVehiculo} className="space-y-4">
            <div>
              <label className="block mb-2">Empresa</label>
              <select
                name="empresa"
                value={nuevoVehiculo.empresa}
                onChange={handleChange}
                className="w-full p-2 border rounded"
              >
                {empresas.map(emp => (
                  <option key={emp.nombre} value={emp.nombre}>
                    {emp.nombre}
                  </option>
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
              <input
                type="text"
                name="tipo"
                value={nuevoVehiculo.tipo}
                onChange={handleChange}
                className="w-full p-2 border rounded"
                required
                placeholder="Ej. Camión, Camioneta"
              />
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
                placeholder="Año de fabricación"
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
          <h2 className="text-2xl font-bold mb-4">Flota de Vehículos por Empresa</h2>
          {empresas.map((empresa, index) => (
            <div key={index} className="mb-6">
              <h3 className="text-xl font-semibold mb-3">{empresa.nombre}</h3>
              <table className="w-full border-collapse">
                <thead className="bg-blue-600 text-white">
                  <tr>
                    <th className="p-3 text-left">Placa</th>
                    <th className="p-3 text-left">Tipo</th>
                    <th className="p-3 text-left">Modelo</th>
                  </tr>
                </thead>
                <tbody>
                  {empresa.vehiculos.map((vehiculo, idx) => (
                    <tr key={idx} className="border-b hover:bg-gray-100">
                      <td className="p-3">{vehiculo.placa}</td>
                      <td className="p-3">{vehiculo.tipo}</td>
                      <td className="p-3">{vehiculo.modelo}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EmpresasVehiculos;