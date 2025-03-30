import React, { useState, useEffect } from 'react';

const Reportes = () => {
  const [filtro, setFiltro] = useState({
    fechaInicio: '',
    fechaFin: '',
    empresa: 'Todas'
  });

  const [reporteGenerado, setReporteGenerado] = useState(null);

  const empresas = ['Todas', 'Tollojchi', 'Altiplano Sur', '27 de Enero', 'Corporación Uyuni'];

  const datosReportes = {
    consumoPorEmpresa: [
      { empresa: 'Tollojchi', consumo: 5420, color: 'bg-blue-500' },
      { empresa: 'Altiplano Sur', consumo: 4230, color: 'bg-green-500' },
      { empresa: '27 de Enero', consumo: 3750, color: 'bg-red-500' },
      { empresa: 'Corporación Uyuni', consumo: 2980, color: 'bg-purple-500' }
    ],
    consumoPorCombustible: [
      { tipo: 'Diesel', cantidad: 12350, color: 'bg-blue-600' },
      { tipo: 'Gasolina', cantidad: 6420, color: 'bg-green-600' }
    ],
    resumenMensual: [
      { mes: 'Enero', total: 24500 },
      { mes: 'Febrero', total: 28750 },
      { mes: 'Marzo', total: 22980 },
      { mes: 'Abril', total: 26540 },
      { mes: 'Mayo', total: 30120 },
      { mes: 'Junio', total: 27890 }
    ]
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFiltro(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const generarReporte = () => {
    // Simulación de generación de reporte
    const nuevoReporte = {
      fechaInicio: filtro.fechaInicio,
      fechaFin: filtro.fechaFin,
      empresa: filtro.empresa,
      totalConsumo: datosReportes.consumoPorEmpresa.reduce((total, empresa) => total + empresa.consumo, 0),
      detalle: datosReportes.consumoPorEmpresa.filter(
        empresa => filtro.empresa === 'Todas' || empresa.empresa === filtro.empresa
      )
    };

    setReporteGenerado(nuevoReporte);
  };

  return (
    <div className="p-6 bg-gray-50">
      <div className="grid grid-cols-4 gap-6 mb-6">
        {/* Tarjetas de Resumen */}
        <div className="bg-white shadow-md rounded-lg p-6 text-center">
          <h3 className="text-xl font-bold mb-2 text-gray-700">Consumo Total</h3>
          <div className="text-3xl font-extrabold text-blue-600">16,380 Lts</div>
        </div>
        <div className="bg-white shadow-md rounded-lg p-6 text-center">
          <h3 className="text-xl font-bold mb-2 text-gray-700">Ingreso Total</h3>
          <div className="text-3xl font-extrabold text-green-600">$782,450</div>
        </div>
        <div className="bg-white shadow-md rounded-lg p-6 text-center">
          <h3 className="text-xl font-bold mb-2 text-gray-700">Promedio Diario</h3>
          <div className="text-3xl font-extrabold text-purple-600">546 Lts</div>
        </div>
        <div className="bg-white shadow-md rounded-lg p-6 text-center">
          <h3 className="text-xl font-bold mb-2 text-gray-700">Empresas</h3>
          <div className="text-3xl font-extrabold text-red-600">4</div>
        </div>
      </div>

      {/* Filtros de Reporte */}
      <div className="bg-white shadow-md rounded-lg p-6 mb-6">
        <h2 className="text-2xl font-bold mb-4">Generar Reporte Detallado</h2>
        <div className="grid grid-cols-3 gap-4">
          <div>
            <label className="block mb-2">Empresa</label>
            <select
              name="empresa"
              value={filtro.empresa}
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
            <label className="block mb-2">Fecha Inicio</label>
            <input
              type="date"
              name="fechaInicio"
              value={filtro.fechaInicio}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            />
          </div>
          <div>
            <label className="block mb-2">Fecha Fin</label>
            <input
              type="date"
              name="fechaFin"
              value={filtro.fechaFin}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            />
          </div>
        </div>
        <button 
          onClick={generarReporte}
          className="w-full mt-4 bg-blue-600 text-white p-2 rounded hover:bg-blue-700 transition-colors"
        >
          Generar Reporte Detallado
        </button>
      </div>

      {/* Resultado del Reporte */}
      {reporteGenerado && (
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-2xl font-bold mb-4">Reporte Generado</h2>
          <div className="grid grid-cols-3 gap-4 mb-4">
            <div>
              <strong>Empresa:</strong> {reporteGenerado.empresa}
            </div>
            <div>
              <strong>Fecha Inicio:</strong> {reporteGenerado.fechaInicio}
            </div>
            <div>
              <strong>Fecha Fin:</strong> {reporteGenerado.fechaFin}
            </div>
          </div>

          <div className="bg-gray-100 p-4 rounded">
            <h3 className="text-xl font-bold mb-2">Consumo Total: {reporteGenerado.totalConsumo} Lts</h3>
            <table className="w-full">
              <thead className="bg-blue-600 text-white">
                <tr>
                  <th className="p-2 text-left">Empresa</th>
                  <th className="p-2 text-left">Consumo (Lts)</th>
                  <th className="p-2 text-left">Porcentaje</th>
                </tr>
              </thead>
              <tbody>
                {reporteGenerado.detalle.map((item, index) => (
                  <tr key={index} className="border-b">
                    <td className="p-2">{item.empresa}</td>
                    <td className="p-2">{item.consumo} Lts</td>
                    <td className="p-2">
                      {((item.consumo / reporteGenerado.totalConsumo) * 100).toFixed(2)}%
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Gráficos de Consumo */}
      <div className="grid grid-cols-2 gap-6 mt-6">
        {/* Consumo por Empresa */}
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-2xl font-bold mb-4 text-center">Consumo por Empresa</h2>
          <div className="space-y-4">
            {datosReportes.consumoPorEmpresa.map((dato, index) => (
              <div key={index} className="flex items-center">
                <div className={`w-4 h-4 mr-3 ${dato.color}`}></div>
                <div className="flex-grow">
                  <div className="flex justify-between">
                    <span>{dato.empresa}</span>
                    <span>{dato.consumo} Lts</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5 mt-1">
                    <div 
                      className={`${dato.color} h-2.5 rounded-full`} 
                      style={{width: `${(dato.consumo / 5420) * 100}%`}}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Consumo por Combustible */}
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-2xl font-bold mb-4 text-center">Consumo por Combustible</h2>
          <div className="grid grid-cols-2 gap-4">
            {datosReportes.consumoPorCombustible.map((dato, index) => (
              <div 
                key={index} 
                className={`${dato.color} text-white rounded-lg p-4 text-center`}
              >
                <div className="text-2xl font-bold">{dato.cantidad} Lts</div>
                <div className="text-sm">{dato.tipo}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reportes;

// DONE