import React, { useState } from 'react';
import './Carrito.css';

function Carrito({ carrito, onRemove, onClear, onCheckout }) {
  const [showPago, setShowPago] = useState(false);
  const total = carrito.reduce((acc, item) => acc + item.precio * item.cantidad, 0);

  const handlePagarClick = () => {
    setShowPago(true);
  };

  const handleSimularPago = (e) => {
    e.preventDefault();
    alert('¡Pago simulado exitoso con Transbank!');
    setShowPago(false);
    onClear();
  };

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
                  <span className="carrito-desc">{item.descripcion}</span>
                  <span>Cantidad: {item.cantidad}</span>
                  <span>Precio unitario: ${item.precio.toLocaleString()}</span>
                  <span>Subtotal: <strong>${(item.precio * item.cantidad).toLocaleString()}</strong></span>
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
            <button className="btn btn-transbank" onClick={handlePagarClick} style={{background:'#ff0033',color:'#fff',marginLeft:'1rem'}}>Pagar con Transbank</button>
          </div>
          {showPago && (
            <form className="pago-form" onSubmit={handleSimularPago}>
              <h3>Pago con Transbank</h3>
              <label>
                Nombre en la tarjeta
                <input type="text" required placeholder="Ej: Juan Pérez" />
              </label>
              <label>
                Número de tarjeta
                <input type="text" required maxLength={16} pattern="[0-9]{16}" placeholder="1234 5678 9012 3456" />
              </label>
              <div className="pago-row">
                <label>
                  Vencimiento
                  <input type="text" required placeholder="MM/AA" pattern="[0-9]{2}/[0-9]{2}" />
                </label>
                <label>
                  CVC
                  <input type="text" required maxLength={3} pattern="[0-9]{3}" placeholder="123" />
                </label>
              </div>
              <button type="submit" className="btn btn-transbank">Pagar ahora</button>
            </form>
          )}
        </>
      )}
    </section>
  );
}

export default Carrito;
