import React, { useState } from 'react';

const Catalogo = ({ onAgregarCarrito }) => {
  const [productos] = useState([
    {
      id: 1,
      nombre: 'Chaqueta de Cuero',
      precio: 129.99,
      categoria: 'Abrigos',
      imagen: 'https://images.unsplash.com/photo-1551028719-00c7d5d99c6b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
    },
    {
      id: 2,
      nombre: 'Vestido Elegante',
      precio: 89.50,
      categoria: 'Vestidos',
      imagen: 'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80'
    },
    {
      id: 3,
      nombre: 'Jeans Slim',
      precio: 59.99,
      categoria: 'Pantalones',
      imagen: 'https://images.unsplash.com/photo-1602293589930-45aad59fe5b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80'
    }
  ]);

  const [filtroCategoria, setFiltroCategoria] = useState('Todos');

  const categorias = ['Todos', ...new Set(productos.map(p => p.categoria))];

  const productosFiltrados = filtroCategoria === 'Todos' 
    ? productos 
    : productos.filter(p => p.categoria === filtroCategoria);

  return (
    <div className="p-6 bg-gray-50">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-bold">Nuestro Catálogo</h2>
        <div className="space-x-2">
          {categorias.map(categoria => (
            <button
              key={categoria}
              onClick={() => setFiltroCategoria(categoria)}
              className={`
                px-4 py-2 rounded 
                ${filtroCategoria === categoria ? 'bg-black text-white' : 'bg-gray-200'}
              `}
            >
              {categoria}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {productosFiltrados.map(producto => (
          <div 
            key={producto.id} 
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow"
          >
            <img 
              src={producto.imagen} 
              alt={producto.nombre} 
              className="w-full h-64 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-bold mb-2">{producto.nombre}</h3>
              <div className="flex justify-between items-center">
                <span className="text-lg font-bold text-gray-800">${producto.precio}</span>
                <button 
                  onClick={() => onAgregarCarrito(producto)}
                  className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800 transition-colors"
                >
                  Agregar
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Catalogo;