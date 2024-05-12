import React from 'react';

const Producto = ({ nombre, precio, img, agregarAlCarrito }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md mx-auto px-5 py-4">
    <img src={img} alt={nombre} className="mx-auto h-32 object-cover mb-2 rounded-md" />
    <h3 className="text-lg font-semibold mb-1">{nombre}</h3>
    <p className="text-gray-500">${precio.toFixed(2)}</p>
    <button className="agregar bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded" onClick={agregarAlCarrito}>
      Agregar
    </button>
  </div>


  );
};

export default Producto;
