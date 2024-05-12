import React, { useState } from "react";
import Producto from "./components/Producto"; // Ajusta la ruta según tu estructura de carpetas
const productos = [
  { id: 1, nombre: "Producto 1", precio: 10 },
  { id: 2, nombre: "Producto 2", precio: 20 },
  { id: 3, nombre: "Producto 3", precio: 30 }
];

function App() {
  const [carrito, setCarrito] = useState([]);

  const agregarAlCarrito = producto => {
    const existente = carrito.find(item => item.id === producto.id);
    if (existente) {
      const nuevoCarrito = carrito.map(item =>
        item.id === producto.id ? { ...item, cantidad: item.cantidad + 1 } : item
      );
      setCarrito(nuevoCarrito);
    } else {
      setCarrito([...carrito, { ...producto, cantidad: 1 }]);
    }
  };

  const caluclarTotal = () => {
    return carrito.reduce((total, producto) => total + producto.precio * producto.cantidad,0);
  }

  return (
    <div className="App">
      <h1>Carrito de Compras</h1>
      <div>
        {productos.map(producto => (
          <Producto
            key={producto.id}
            id={producto.id}
            nombre={producto.nombre}
            precio={producto.precio}
            onAgregarCarrito={agregarAlCarrito}
          />
        ))}
      </div>
      <h2>Carrito:</h2>
      <ul>
        {carrito.map((producto, index) => (
          <li key={index}>{producto.nombre} - ${producto.precio} - Cantidad: {producto.cantidad}</li>
        ))}
      </ul>
      <p> Total: ${caluclarTotal()}</p>
      <button> Comprar Ahora!</button>
    </div>
  );
}

export default App;
