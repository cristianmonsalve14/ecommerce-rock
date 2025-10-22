import React from 'react';

function Catalogo() {
  return (
    <section id="catalogo" className="container py-5">
      <h2 className="text-center mb-4">Nuestro Catálogo</h2>
      <div className="row" id="productos-lista">
        {/* Producto 1 */}
        <div className="col-12 col-md-6 col-xl-6 mb-4">
          <div className="card product-card h-100">
            <img src="/img/deep-purple.jpg" className="card-img-top" alt="Polera Deep Purple" />
            <div className="card-body">
              <h5 className="card-title">Polera Deep Purple</h5>
              <p className="card-text">Polera de rock de alta calidad con diseño exclusivo inspirado en Deep Purple.</p>
              <ul>
                <li>Material: Algodón 100%</li>
                <li>Color: Negro</li>
                <li>Tamaño: S, M, L, XL</li>
              </ul>
              <p><em>Grupo: Deep Purple</em></p>
              <button className="btn btn-warning add-to-cart-btn">Añadir al Carrito</button>
            </div>
          </div>
        </div>
        {/* Producto 2 */}
        <div className="col-12 col-md-6 col-xl-6 mb-4">
          <div className="card product-card h-100">
            <img src="/img/guns-roses.jpg" className="card-img-top" alt="Polera Guns N' Roses" />
            <div className="card-body">
              <h5 className="card-title">Polera Guns N' Roses</h5>
              <p className="card-text">Polera con el icónico diseño de Guns N' Roses.</p>
              <ul>
                <li>Material: Algodón 100%</li>
                <li>Color: Blanco</li>
                <li>Tamaño: S, M, L, XL</li>
              </ul>
              <p><em>Grupo: Guns N' Roses</em></p>
              <button className="btn btn-warning add-to-cart-btn">Añadir al Carrito</button>
            </div>
          </div>
        </div>
        {/* Puedes agregar más productos aquí */}
      </div>
    </section>
  );
}

export default Catalogo;
