import React from 'react';

const Carrito = ({ items, onEliminarItem, onNavChange }) => {
  const total = items.reduce((acc, item) => acc + item.precio * item.cantidad, 0);

  return (
    <div className="p-6 bg-gray-50">
      <h2 className="text-3xl font-bold mb-6">Carrito de Compras</h2>
      {items.length === 0 ? (
        <div className="text-center text-gray-600">
          Tu carrito está vacío
        </div>
      ) : (
        <>
          <div className="space-y-4">
            {items.map(item => (
              <div 
                key={item.id} 
                className="bg-white p-4 rounded-lg flex justify-between items-center shadow-md"
              >
                <div className="flex items-center">
                  <img 
                    src={item.imagen} 
                    alt={item.nombre} 
                    className="w-16 h-16 object-cover rounded mr-4"
                  />
                  <div>
                    <h3 className="font-bold">{item.nombre}</h3>
                    <p className="text-gray-600">${item.precio}</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <span className="mr-4">Cantidad: {item.cantidad}</span>
                  <button 
                    onClick={() => onEliminarItem(item.id)}
                    className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                  >
                    Eliminar
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6 bg-white p-4 rounded-lg shadow-md">
            <div className="flex justify-between">
              <span className="text-xl font-bold">Total:</span>
              <span className="text-xl font-bold">${total.toFixed(2)}</span>
            </div>
            <button 
              onClick={() => onNavChange('pago')}
              className="w-full bg-black text-white py-3 rounded mt-4 hover:bg-gray-800 transition-colors"
            >
              Finalizar Compra
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Carrito;