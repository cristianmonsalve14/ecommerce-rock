import React from 'react';

function BlogAside() {
  return (
    <aside className="col-lg-4 mt-5 mt-lg-0">
      <h3 className="text-center mb-4" style={{color:'#f39c12', fontFamily:'Rock Salt, cursive'}}>Últimas Noticias</h3>
      <div className="card mb-3">
        <img src="/img/blog1.jpg" className="card-img-top" alt="Blog 1" />
        <div className="card-body">
          <h5 className="card-title">¡Nuevos diseños exclusivos!</h5>
          <p className="card-text">Descubre la nueva colección de poleras inspiradas en bandas legendarias. <a href="#">Leer más</a></p>
        </div>
      </div>
      <div className="card mb-3">
        <img src="/img/blog2.jpg" className="card-img-top" alt="Blog 2" />
        <div className="card-body">
          <h5 className="card-title">¿Por qué el algodón es el mejor material?</h5>
          <p className="card-text">Te contamos por qué nuestras poleras son cómodas y resistentes. <a href="#">Leer más</a></p>
        </div>
      </div>
    </aside>
  );
}

export default BlogAside;
