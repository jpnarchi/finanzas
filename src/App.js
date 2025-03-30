import React, { useState } from 'react';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import Despacho from './components/Despacho';
import Inventario from './components/Inventario';
import Reportes from './components/Reportes';
import EmpresasVehiculos from './components/EmpresasVehiculos';

function App() {
  const [currentView, setCurrentView] = useState('dashboard');
  const [usuario] = useState({
    nombre: 'Admin',
    rol: 'Administrador'
  });

  const handleNavChange = (view) => {
    setCurrentView(view);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Header 
        onNavChange={handleNavChange} 
        usuario={usuario}
      />
      {currentView === 'dashboard' && <Dashboard />}
      {currentView === 'despacho' && <Despacho />}
      {currentView === 'inventario' && <Inventario />}
      {currentView === 'empresas' && <EmpresasVehiculos />}
      {currentView === 'reportes' && <Reportes />}
    </div>
  );
}

export default App;

// DONE