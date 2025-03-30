import React, { useState } from 'react';

const DespachoForm = ({ onAddDespacho }) => {
  const [despacho, setDespacho] = useState({
    vehiculo: '',
    conductor: '',
    combustible: 'Diesel',
    cantidad: '',
    fecha: new Date().toISOString().split('T')[0]
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDespacho(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddDespacho(despacho);
    // Resetear formulario
    setDespacho({
      vehiculo: '',
      conductor: '',
      combustible: 'Diesel',
      cantidad: '',
      fecha: new Date().toISOString().split('T')[0]
    });
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Nuevo Despacho</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-gray-700 mb-2">Vehículo</label>
          <input
            type="text"
            name="vehiculo"
            value={despacho.vehiculo}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <div>
          <label className="block text-gray-700 mb-2">Conductor</label>
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
          <label className="block text-gray-700 mb-2">Tipo de Combustible</label>
          <select
            name="combustible"
            value={despacho.combustible}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          >
            <option value="Diesel">Diesel</option>
            <option value="Gasolina">Gasolina</option>
            <option value="Premium">Premium</option>
          </select>
        </div>
        <div>
          <label className="block text-gray-700 mb-2">Cantidad (Litros)</label>
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
          <label className="block text-gray-700 mb-2">Fecha</label>
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
  );
};

export default DespachoForm;