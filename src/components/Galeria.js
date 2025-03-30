import React, { useState } from 'react';

const Galeria = () => {
  const [imagenes, setImagenes] = useState([
    { 
      id: 1, 
      url: 'https://images.unsplash.com/photo-1615228402326-7adf9a257f2b', 
      titulo: 'Paisaje Montañoso' 
    },
    { 
      id: 2, 
      url: 'https://images.unsplash.com/photo-1470770841072-f978f4a8a788', 
      titulo: 'Lago Tranquilo' 
    },
    { 
      id: 3, 
      url: 'https://images.unsplash.com/photo-1501785888041-4f11a07a6a5a', 
      titulo: 'Atardecer en el Mar' 
    }
  ]);

  const [imagenSeleccionada, setImagenSeleccionada] = useState(null);

  const abrirImagen = (imagen) => {
    setImagenSeleccionada(imagen);
  };

  const cerrarImagen = () => {
    setImagenSeleccionada(null);
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold mb-6 text-center">Galería de Imágenes</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {imagenes.map(imagen => (
            <div 
              key={imagen.id} 
              className="bg-white rounded-lg shadow-md overflow-hidden group cursor-pointer"
              onClick={() => abrirImagen(imagen)}
            >
              <img 
                src={imagen.url} 
                alt={imagen.titulo}
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform"
              />
              <div className="p-4">
                <h3 className="text-lg font-bold">{imagen.titulo}</h3>
              </div>
            </div>
          ))}
        </div>

        {imagenSeleccionada && (
          <div 
            className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-6"
            onClick={cerrarImagen}
          >
            <div className="max-w-4xl max-h-full">
              <img 
                src={imagenSeleccionada.url} 
                alt={imagenSeleccionada.titulo}
                className="max-w-full max-h-full object-contain"
              />
              <p className="text-white text-center mt-4 text-xl">
                {imagenSeleccionada.titulo}
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Galeria;