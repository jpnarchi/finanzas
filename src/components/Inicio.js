import React from 'react';

const Inicio = ({ onNavChange }) => {
  return (
    <div className="relative h-screen">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80)',
          filter: 'brightness(0.7)'
        }}
      />
      <div className="relative z-10 flex flex-col justify-center items-center h-full text-white text-center">
        <h1 className="text-5xl font-bold mb-6">Descubre tu Estilo</h1>
        <p className="text-xl mb-8 max-w-2xl">
          Explora nuestra última colección y encuentra la ropa perfecta que refleje tu personalidad única.
        </p>
        <button 
          onClick={() => onNavChange('catalogo')}
          className="bg-white text-black px-8 py-3 rounded-full hover:bg-gray-200 transition-colors"
        >
          Ver Catálogo
        </button>
      </div>
    </div>
  );
};

export default Inicio;