import React, { useState, useRef } from 'react';

const ImageUploader = () => {
  const [imagenes, setImagenes] = useState([]);
  const fileInputRef = useRef(null);

  const handleImagenSeleccionada = (event) => {
    const archivos = Array.from(event.target.files);
    const imagenesValidas = archivos.filter(archivo => 
      archivo.type.startsWith('image/') && archivo.size <= 5 * 1024 * 1024
    );

    const nuevasImagenes = imagenesValidas.map(archivo => ({
      archivo,
      preview: URL.createObjectURL(archivo),
      nombre: archivo.name,
      tamano: (archivo.size / 1024).toFixed(2) + ' KB'
    }));

    setImagenes([...imagenes, ...nuevasImagenes]);
  };

  const eliminarImagen = (index) => {
    const nuevasImagenes = [...imagenes];
    URL.revokeObjectURL(nuevasImagenes[index].preview);
    nuevasImagenes.splice(index, 1);
    setImagenes(nuevasImagenes);
  };

  const subirImagenes = () => {
    // Lógica de subida de imágenes
    imagenes.forEach(imagen => {
      const formData = new FormData();
      formData.append('imagen', imagen.archivo);
      
      // Simulación de subida
      console.log('Subiendo imagen:', imagen.nombre);
    });

    // Limpiar imágenes después de subir
    imagenes.forEach(imagen => URL.revokeObjectURL(imagen.preview));
    setImagenes([]);
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="max-w-2xl mx-auto bg-white shadow-md rounded-lg p-6">
        <h2 className="text-2xl font-bold mb-6 text-center">Subir Imágenes</h2>
        
        <div 
          className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center mb-6 hover:border-blue-500 transition-colors"
          onClick={() => fileInputRef.current.click()}
        >
          <input 
            type="file" 
            multiple 
            accept="image/*"
            ref={fileInputRef}
            onChange={handleImagenSeleccionada}
            className="hidden"
          />
          <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto mb-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          <p className="text-gray-600">
            Haz clic para seleccionar imágenes
          </p>
        </div>

        {imagenes.length > 0 && (
          <div className="grid grid-cols-3 gap-4 mb-6">
            {imagenes.map((imagen, index) => (
              <div 
                key={index} 
                className="relative group"
              >
                <img 
                  src={imagen.preview} 
                  alt={imagen.nombre}
                  className="w-full h-40 object-cover rounded-lg"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <button 
                    onClick={() => eliminarImagen(index)}
                    className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                  >
                    Eliminar
                  </button>
                </div>
                <div className="mt-2 text-sm text-gray-600 truncate">
                  {imagen.nombre} ({imagen.tamano})
                </div>
              </div>
            ))}
          </div>
        )}

        {imagenes.length > 0 && (
          <div className="flex justify-between">
            <div className="text-gray-600">
              Total de imágenes: {imagenes.length}
            </div>
            <button 
              onClick={subirImagenes}
              className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition-colors"
            >
              Subir Imágenes
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ImageUploader;