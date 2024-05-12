// Carrito.js
import React from "react";

const Carrito = ({ carrito, onRemoverDelCarrito }) => {
  return (
    <div>
      <h2>Carrito:</h2>
      <ul>
        {carrito.map((producto, index) => (
          <li key={index}>
            {producto.nombre} - ${producto.precio} - Cantidad: {producto.cantidad}{" "}
            <button onClick={() => onRemoverDelCarrito(producto.id)}>Quitar del Carrito</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Carrito;
