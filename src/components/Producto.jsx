import React from "react";

const Producto = ({ id, nombre, precio, onAgregarCarrito }) => {
  return (
    <div>
      <h3>{nombre}</h3>
      <p>Precio: ${precio}</p>
      <button onClick={() => onAgregarCarrito({ id, nombre, precio })}>
        Agregar al carrito
      </button>
    </div>
  );
};

export default Producto;
