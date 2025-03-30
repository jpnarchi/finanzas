import React, { useState } from 'react';

const Inventario = () => {
  const [inventario, setInventario] = useState([
    { 
      id: 1, 
      tipo: 'Diesel', 
      existencias: 5420, 
      precioCompra: 45.50, 
      precioVenta: 52.75 
    },
    { 
      id: 2, 
      tipo: 'Gasolina', 
      existencias: 3750, 
      precioCompra: 42.25, 
      precioVenta: 49.80 
    }
  ]);

  const [nuevoRegistro, setNuevoRegistro] = useState({
    tipo: 'Diesel',
    cantidad: '',
    precioCompra: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNuevoRegistro(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const registrarEntrada = (e) => {
    e.preventDefault();
    const itemExistente = inventario.find(item => item.tipo === nuevoRegistro.tipo);
    
    if (itemExistente) {
      setInventario(inventario.map(item => 
        item.tipo === nuevoRegistro.tipo
          ? {
              ...item, 
              existencias: item.existencias + parseFloat(nuevoRegistro.cantidad),
              precioCompra: parseFloat(nuevoRegistro.precioCompra)
            }
          : item
      ));
    }

    // Resetear formulario
    setNuevoRegistro({
      tipo: 'Diesel',
      cantidad: '',
      precioCompra: ''
    });
  };

  return (
    <div className="p-6 bg-gray-50">
      <div className="grid grid-cols-3 gap-6">
        <div className="col-span-1 bg-white shadow-md rounded-lg p-6">
          <h2 className="text-2xl font-bold mb-4">Registrar Entrada</h2>
          <form onSubmit={registrarEntrada} className="space-y-4">
            <div>
              <label className="block mb-2">Tipo de Combustible</label>
              <select
                name="tipo"
                value={nuevoRegistro.tipo}
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
                value={nuevoRegistro.cantidad}
                onChange={handleChange}
                className="w-full p-2 border rounded"
                required
              />
            </div>
            <div>
              <label className="block mb-2">Precio de Compra por Litro</label>
              <input
                type="number"
                name="precioCompra"
                value={nuevoRegistro.precioCompra}
                onChange={handleChange}
                className="w-full p-2 border rounded"
                step="0.01"
                required
              />
            </div>
            <button 
              type="submit"
              className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700 transition-colors"
            >
              Registrar Entrada
            </button>
          </form>
        </div>

        <div className="col-span-2 bg-white shadow-md rounded-lg p-6">
          <h2 className="text-2xl font-bold mb-4">Existencias Actuales</h2>
          <table className="w-full">
            <thead className="bg-blue-600 text-white">
              <tr>
                <th className="p-3 text-left">Tipo</th>
                <th className="p-3 text-left">Existencias (Lts)</th>
                <th className="p-3 text-left">Precio Compra</th>
                <th className="p-3 text-left">Precio Venta</th>
                <th className="p-3 text-left">Valor Total</th>
              </tr>
            </thead>
            <tbody>
              {inventario.map(item => (
                <tr key={item.id} className="border-b hover:bg-gray-100">
                  <td className="p-3">{item.tipo}</td>
                  <td className="p-3">{item.existencias}</td>
                  <td className="p-3">${item.precioCompra.toFixed(2)}</td>
                  <td className="p-3">${item.precioVenta.toFixed(2)}</td>
                  <td className="p-3">${(item.existencias * item.precioVenta).toFixed(2)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Inventario;