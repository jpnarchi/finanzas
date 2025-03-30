import React, { useState } from 'react';

const Pago = ({ carrito, onCompraExitosa }) => {
  const [datoPago, setDatoPago] = useState({
    nombre: '',
    tarjeta: '',
    expiracion: '',
    cvv: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDatoPago(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulación de pago
    onCompraExitosa();
  };

  const total = carrito.reduce((acc, item) => acc + item.precio * item.cantidad, 0);

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div className="bg-white shadow-md rounded-lg p-8">
          <h2 className="text-3xl font-bold text-center mb-6">Finalizar Compra</h2>
          
          <div className="mb-6">
            <h3 className="text-xl font-bold mb-2">Resumen de Compra</h3>
            {carrito.map(item => (
              <div key={item.id} className="flex justify-between mb-2">
                <span>{item.nombre} x {item.cantidad}</span>
                <span>${(item.precio * item.cantidad).toFixed(2)}</span>
              </div>
            ))}
            <div className="border-t mt-2 pt-2 flex justify-between font-bold">
              <span>Total</span>
              <span>${total.toFixed(2)}</span>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block mb-2">Nombre en la Tarjeta</label>
              <input
                type="text"
                name="nombre"
                value={datoPago.nombre}
                onChange={handleChange}
                required
                className="w-full p-2 border rounded"
                placeholder="Nombre completo"
              />
            </div>
            <div>
              <label className="block mb-2">Número de Tarjeta</label>
              <input
                type="text"
                name="tarjeta"
                value={datoPago.tarjeta}
                onChange={handleChange}
                required
                className="w-full p-2 border rounded"
                placeholder="1234 5678 9012 3456"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block mb-2">Expiración</label>
                <input
                  type="text"
                  name="expiracion"
                  value={datoPago.expiracion}
                  onChange={handleChange}
                  required
                  className="w-full p-2 border rounded"
                  placeholder="MM/AA"
                />
              </div>
              <div>
                <label className="block mb-2">CVV</label>
                <input
                  type="text"
                  name="cvv"
                  value={datoPago.cvv}
                  onChange={handleChange}
                  required
                  className="w-full p-2 border rounded"
                  placeholder="123"
                />
              </div>
            </div>
            <button
              type="submit"
              className="w-full bg-black text-white py-3 rounded hover:bg-gray-800 transition-colors"
            >
              Pagar Ahora
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Pago;