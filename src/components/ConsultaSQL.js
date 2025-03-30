import React, { useState } from 'react';

const ConsultaSQL = () => {
  const [consulta, setConsulta] = useState('');
  const [resultados, setResultados] = useState([]);
  const [error, setError] = useState(null);

  const handleConsulta = async () => {
    try {
      // Simulación de consulta a base de datos
      const respuesta = [
        { id: 1, nombre: 'Juan Pérez', edad: 35 },
        { id: 2, nombre: 'María García', edad: 28 }
      ];
      
      setResultados(respuesta);
      setError(null);
    } catch (err) {
      setError('Error al ejecutar la consulta');
      setResultados([]);
    }
  };

  return (
    <div className="p-6 bg-gray-50">
      <div className="bg-white shadow-md rounded-lg p-6">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">Consulta SQL</h2>
        <div className="mb-4">
          <textarea
            className="w-full p-2 border rounded h-32"
            placeholder="Escriba su consulta SQL aquí..."
            value={consulta}
            onChange={(e) => setConsulta(e.target.value)}
          />
        </div>
        <button 
          onClick={handleConsulta}
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition-colors"
        >
          Ejecutar Consulta
        </button>

        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mt-4">
            {error}
          </div>
        )}

        {resultados.length > 0 && (
          <div className="mt-6">
            <h3 className="text-xl font-bold mb-4">Resultados</h3>
            <table className="w-full bg-white shadow-md rounded-lg overflow-hidden">
              <thead className="bg-green-600 text-white">
                <tr>
                  {Object.keys(resultados[0]).map((key) => (
                    <th key={key} className="p-3 text-left">{key}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {resultados.map((fila, index) => (
                  <tr key={index} className="border-b hover:bg-gray-100">
                    {Object.values(fila).map((valor, idx) => (
                      <td key={idx} className="p-3">{valor}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default ConsultaSQL;