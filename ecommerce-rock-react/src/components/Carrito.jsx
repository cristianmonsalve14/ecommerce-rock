import React from 'react';
import './Carrito.css';

function Carrito({ carrito, onRemove, onClear, onCheckout }) {
  const total = carrito.reduce((acc, item) => acc + item.precio * item.cantidad, 0);

  return (
    <section className="carrito-section">
      <h2>Carrito de Compras</h2>
      {carrito.length === 0 ? (
        <p className="carrito-vacio">Tu carrito está vacío.</p>
      ) : (
        <>
          <ul className="carrito-lista">
            {carrito.map(item => (
              <li key={item.id} className="carrito-item">
                <img src={item.imagen} alt={item.nombre} />
                <div className="carrito-info">
                  <h4>{item.nombre}</h4>
                  <span>Cantidad: {item.cantidad}</span>
                  <span>Precio: ${item.precio.toLocaleString()}</span>
                </div>
                <button className="carrito-remove" onClick={() => onRemove(item.id)}>&times;</button>
              </li>
            ))}
          </ul>
          <div className="carrito-total">
            <strong>Total: ${total.toLocaleString()}</strong>
          </div>
          <div className="carrito-actions">
            <button className="btn btn-secondary" onClick={onClear}>Vaciar Carrito</button>
            <button className="btn btn-warning" onClick={onCheckout}>Finalizar Compra</button>
          </div>
        </>
      )}
    </section>
  );
}

export default Carrito;
