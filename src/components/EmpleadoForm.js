import React, { useState } from 'react';

const EmpleadoForm = () => {
  const [empleado, setEmpleado] = useState({
    nombre: '',
    apellido: '',
    documento: '',
    email: '',
    departamento: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmpleado(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica para guardar empleado
    console.log('Empleado registrado:', empleado);
    // Resetear formulario
    setEmpleado({
      nombre: '',
      apellido: '',
      documento: '',
      email: '',
      departamento: ''
    });
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Registrar Empleado</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-gray-700 mb-2">Nombre</label>
            <input
              type="text"
              name="nombre"
              value={empleado.nombre}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-2">Apellido</label>
            <input
              type="text"
              name="apellido"
              value={empleado.apellido}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>
        </div>
        <div>
          <label className="block text-gray-700 mb-2">Documento</label>
          <input
            type="text"
            name="documento"
            value={empleado.documento}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <div>
          <label className="block text-gray-700 mb-2">Email</label>
          <input
            type="email"
            name="email"
            value={empleado.email}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <div>
          <label className="block text-gray-700 mb-2">Departamento</label>
          <select
            name="departamento"
            value={empleado.departamento}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          >
            <option value="">Seleccionar Departamento</option>
            <option value="Ventas">Ventas</option>
            <option value="Sistemas">Sistemas</option>
            <option value="Recursos Humanos">Recursos Humanos</option>
            <option value="Finanzas">Finanzas</option>
          </select>
        </div>
        <button 
          type="submit" 
          className="w-full bg-indigo-600 text-white p-2 rounded hover:bg-indigo-700 transition-colors"
        >
          Registrar Empleado
        </button>
      </form>
    </div>
  );
};

export default EmpleadoForm;