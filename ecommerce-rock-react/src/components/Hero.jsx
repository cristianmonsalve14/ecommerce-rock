import React from 'react';

function Hero() {
  return (
    <section className="hero bg-dark text-white text-center py-5">
      <div className="container">
        <h1 className="display-4">Bienvenido a Poleras de Rock</h1>
        <p className="lead">Las mejores poleras para los verdaderos fans del rock</p>
        <a href="#catalogo" className="btn btn-warning btn-lg">Ver Catálogo</a>
      </div>
    </section>
  );
}

export default Hero;
