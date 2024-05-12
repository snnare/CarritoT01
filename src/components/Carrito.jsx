import React from 'react';

const Carrito = ({ carrito, quitarDelCarrito, subtotal, iva, total }) => {
  return (
    <div className="container mx-auto px-5">
      <h1 className="text-2xl font-semibold mb-4">Carrito de Compras</h1>
      <div className="flex flex-col md:flex-row gap-4">
        <div className="md:w-3/4">
          <div className="bg-white rounded-lg shadow-md p-6 mb-4">
            <table className="w-full">
              <thead>
                <tr>
                  <th className="text-left font-semibold">Producto</th>
                  <th className="text-left font-semibold">Precio</th>
                  <th className="text-left font-semibold">Cantidad</th>
                  <th className="text-left font-semibold">Total</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {carrito.map(item => (
                  <tr key={item.id}>
                    <td className="py-4">
                      <div className="flex items-center">
                        <img src={`${item.img}.jpg`} alt={item.nombre} className="mx-auto h-32 object-cover mb-2 rounded-md" />
                        <span className="font-semibold">{item.nombre}</span>
                      </div>
                    </td>
                    <td className="py-4">${item.precio.toFixed(2)}</td>
                    <td className="py-4">
                      <span className="text-center w-8">{item.cantidad}</span>
                    </td>
                    <td className="py-4">${(item.precio * item.cantidad).toFixed(2)}</td>
                    <td className="py-4">
                      <button
                        className="eliminar bg-red-500 hover:bg-red-600 px-5 py-2 text-sm text-white uppercase"
                        onClick={() => quitarDelCarrito(item.id)}
                      >
                        Eliminar
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className="md:w-1/4">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-lg font-semibold mb-4">Cuenta total</h2>
            <div className="flex justify-between mb-2">
              <span>Subtotal</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between mb-2">
              <span>IVA</span>
              <span>${iva.toFixed(2)}</span>
            </div>
            <hr className="my-2" />
            <div className="flex justify-between mb-2">
              <span className="font-semibold">Total</span>
              <span className="font-semibold">${total.toFixed(2)}</span>
            </div>
            <button className="bg-blue-500 text-white py-2 px-4 rounded-lg mt-4 w-full">Checkout</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carrito;
