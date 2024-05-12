// ListaProductos.js
import React from "react";
import Producto from "./Producto"; // Ajusta la ruta según tu estructura de carpetas

const ListaProductos = ({ productos, onAgregarAlCarrito }) => {
  return (
    <div>
      {productos.map((producto) => (
        <Producto
          key={producto.id}
          id={producto.id}
          nombre={producto.nombre}
          precio={producto.precio}
          onAgregarAlCarrito={onAgregarAlCarrito}
        />
      ))}
    </div>
  );
};

export default ListaProductos;
