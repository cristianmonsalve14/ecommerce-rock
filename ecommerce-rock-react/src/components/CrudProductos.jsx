import React, { useState } from 'react';

const productosIniciales = [
  {
    id: 1,
    nombre: "Polera Deep Purple",
    descripcion: "Polera de rock de alta calidad con diseño exclusivo inspirado en Deep Purple.",
    precio: 15990,
    stock: 10,
    imagen: "/img/deep-purple.jpg"
  },
  {
    id: 2,
    nombre: "Polera Guns N' Roses",
    descripcion: "Polera con el icónico diseño de Guns N' Roses.",
    precio: 14990,
    stock: 8,
    imagen: "/img/guns-roses.jpg"
  }
];

function CrudProductos() {
  const [productos, setProductos] = useState(productosIniciales);
  const [nuevo, setNuevo] = useState({ nombre: '', descripcion: '', precio: '', stock: '', imagen: '' });
  const [editando, setEditando] = useState(null);

  // Crear producto
  const handleNuevoChange = e => setNuevo({ ...nuevo, [e.target.name]: e.target.value });
  const handleAgregar = e => {
    e.preventDefault();
    setProductos([...productos, { ...nuevo, id: Date.now(), precio: Number(nuevo.precio), stock: Number(nuevo.stock) }]);
    setNuevo({ nombre: '', descripcion: '', precio: '', stock: '', imagen: '' });
  };

  // Editar producto
  const handleEditar = producto => setEditando(producto);
  const handleEditChange = e => setEditando({ ...editando, [e.target.name]: e.target.value });
  const handleGuardar = e => {
    e.preventDefault();
    setProductos(productos.map(p => p.id === editando.id ? { ...editando, precio: Number(editando.precio), stock: Number(editando.stock) } : p));
    setEditando(null);
  };

  // Eliminar producto
  const handleEliminar = id => setProductos(productos.filter(p => p.id !== id));

  return (
    <div>
      <h3>Listado de Productos</h3>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Imagen</th>
            <th>Nombre</th>
            <th>Descripción</th>
            <th>Precio</th>
            <th>Stock</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {productos.map(producto => (
            <tr key={producto.id}>
              <td><img src={producto.imagen} alt={producto.nombre} width={50} /></td>
              <td>{producto.nombre}</td>
              <td>{producto.descripcion}</td>
              <td>${producto.precio}</td>
              <td>{producto.stock}</td>
              <td>
                <button className="btn btn-sm btn-primary me-2" onClick={() => handleEditar(producto)}>Editar</button>
                <button className="btn btn-sm btn-danger" onClick={() => handleEliminar(producto.id)}>Eliminar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Formulario para agregar nuevo producto */}
      <h4>Agregar Nuevo Producto</h4>
      <form className="mb-4" onSubmit={handleAgregar}>
        <div className="row g-2">
          <div className="col">
            <input type="text" className="form-control" name="nombre" placeholder="Nombre" value={nuevo.nombre} onChange={handleNuevoChange} required />
          </div>
          <div className="col">
            <input type="text" className="form-control" name="descripcion" placeholder="Descripción" value={nuevo.descripcion} onChange={handleNuevoChange} required />
          </div>
          <div className="col">
            <input type="number" className="form-control" name="precio" placeholder="Precio" value={nuevo.precio} onChange={handleNuevoChange} required min={0} />
          </div>
          <div className="col">
            <input type="number" className="form-control" name="stock" placeholder="Stock" value={nuevo.stock} onChange={handleNuevoChange} required min={0} />
          </div>
          <div className="col">
            <input type="text" className="form-control" name="imagen" placeholder="URL Imagen" value={nuevo.imagen} onChange={handleNuevoChange} />
          </div>
          <div className="col-auto">
            <button type="submit" className="btn btn-success">Agregar</button>
          </div>
        </div>
      </form>

      {/* Formulario para editar producto */}
      {editando && (
        <form className="mb-4" onSubmit={handleGuardar}>
          <h4>Editar Producto</h4>
          <div className="row g-2">
            <div className="col">
              <input type="text" className="form-control" name="nombre" value={editando.nombre} onChange={handleEditChange} required />
            </div>
            <div className="col">
              <input type="text" className="form-control" name="descripcion" value={editando.descripcion} onChange={handleEditChange} required />
            </div>
            <div className="col">
              <input type="number" className="form-control" name="precio" value={editando.precio} onChange={handleEditChange} required min={0} />
            </div>
            <div className="col">
              <input type="number" className="form-control" name="stock" value={editando.stock} onChange={handleEditChange} required min={0} />
            </div>
            <div className="col">
              <input type="text" className="form-control" name="imagen" value={editando.imagen} onChange={handleEditChange} />
            </div>
            <div className="col-auto">
              <button type="submit" className="btn btn-primary">Guardar</button>
              <button type="button" className="btn btn-secondary ms-2" onClick={() => setEditando(null)}>Cancelar</button>
            </div>
          </div>
        </form>
      )}
    </div>
  );
}

export default CrudProductos;
