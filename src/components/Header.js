import React from 'react';

const Header = ({ onNavChange, usuario }) => {
  return (
    <header className="bg-blue-900 text-white p-4 flex justify-between items-center shadow-md">
      <div className="text-2xl font-bold flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 18.657A8 8 0 0 1 6.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0 1 20 13a7.975 7.975 0 0 1-2.343 5.657z" />
        </svg>
        FuelFlow Pro
      </div>
      <nav className="space-x-4">
        <button 
          onClick={() => onNavChange('dashboard')} 
          className="hover:bg-blue-800 px-3 py-2 rounded transition-colors"
        >
          Inicio
        </button>
        <button 
          onClick={() => onNavChange('despacho')} 
          className="hover:bg-blue-800 px-3 py-2 rounded transition-colors"
        >
          Despacho
        </button>
        <button 
          onClick={() => onNavChange('inventario')} 
          className="hover:bg-blue-800 px-3 py-2 rounded transition-colors"
        >
          Inventario
        </button>
        <button 
          onClick={() => onNavChange('empresas')} 
          className="hover:bg-blue-800 px-3 py-2 rounded transition-colors"
        >
          Empresas
        </button>
        <button 
          onClick={() => onNavChange('reportes')} 
          className="hover:bg-blue-800 px-3 py-2 rounded transition-colors"
        >
          Reportes
        </button>
      </nav>
      <div className="flex items-center">
        <span className="mr-4">{usuario.nombre}</span>
        <button 
          className="bg-red-600 hover:bg-red-700 px-3 py-2 rounded"
        >
          Cerrar Sesión
        </button>
      </div>
    </header>
  );
};

export default Header;