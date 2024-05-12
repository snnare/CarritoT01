import React, { useState } from 'react';
import Producto from './components/Producto';
import Carrito from './components/Carrito';

function App() {
  const [carrito, setCarrito] = useState([]);
      // Lista de productos
      const productos = [
        { id: 1, nombre: "Laptop Lenovo ThinkPad", precio: 12000, img: "./assets/LenovoThinkPad" },
        { id: 2, nombre: "Monitor Dell UltraSharp 27 pulgadas", precio: 3500, img: "./assets/DellUltraSharp" },
        { id: 3, nombre: "Teclado mecánico Razer BlackWidow", precio: 1500, img: "../assets/RazerBlackWidow" },
        { id: 4, nombre: "Mouse inalámbrico Logitech MX Master 3", precio: 1900, img: "assets/LogitechMXMaster" },
        { id: 5, nombre: "Disco duro externo Samsung T5 1TB", precio: 1450, img: "assets/SamsungT5" },
        { id: 6, nombre: "Tarjeta gráfica NVIDIA GeForce RTX 3080", precio: 14000, img: "assets/NVIDIAGeForceRTX3080" },
        { id: 7, nombre: "Memoria RAM Corsair Vengeance LPX 16GB", precio: 1200, img: "assets/CorsairVengeanceLPX" },
        { id: 8, nombre: "Procesador AMD Ryzen 9 5900X", precio: 4525, img: "assets/AMDRyzen95900X" },
        { id: 9, nombre: "Impresora multifuncional HP OfficeJet Pro", precio: 2360, img: "assets/HPOfficeJetPro" },
        { id: 10, nombre: "Router WiFi Mesh TP-Link Deco X20", precio: 2400, img: "assets/TPLinkDecoX20" },
        { id: 11, nombre: "Auriculares gaming HyperX Cloud Alpha", precio: 879, img: "assets/HyperXCloudAlpha" },
        { id: 12, nombre: "Webcam Logitech C920 HD Pro", precio: 1400, img: "assets/LogitechC920HDPro" }
    ];

  // Función para agregar un producto al carrito
  const agregarAlCarrito = (producto) => {
    const itemExistente = carrito.find(item => item.id === producto.id);
    if (itemExistente) {
      setCarrito(carrito.map(item => item.id === producto.id ? { ...item, cantidad: item.cantidad + 1 } : item));
    } else {
      setCarrito([...carrito, { ...producto, cantidad: 1 }]);
    }
  };

  // Función para eliminar un producto del carrito
  const quitarDelCarrito = (id) => {
    setCarrito(carrito.filter(item => item.id !== id));
  };

  // Calcular subtotal, IVA y total
  const subtotal = carrito.reduce((total, item) => total + item.precio * item.cantidad, 0);
  const iva = subtotal * 0.16;
  const total = subtotal + iva;

  return (
    <div className="bg-gray-100 h-screen py-8">
      <h1 className="text-2xl font-bold mb-4">Productos</h1>
      <div className="container mx-auto px-5 py-4 grid grid-cols-1 md:grid-cols-4 gap-4" id="productosContainer">
        {/* Mapear la lista de productos */}
        {productos.map(producto => (
          <Producto key={producto.id} {...producto} agregarAlCarrito={() => agregarAlCarrito(producto)} />
        ))}
      </div>
      {/* Pasar props al componente Carrito */}
      <Carrito carrito={carrito} quitarDelCarrito={quitarDelCarrito} subtotal={subtotal} iva={iva} total={total} />
    </div>
  );
}

export default App;
