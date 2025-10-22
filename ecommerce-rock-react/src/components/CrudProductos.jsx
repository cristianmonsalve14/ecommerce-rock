import React, { useState, useEffect } from 'react';
import {
  getProductos,
  addProducto,
  updateProducto,
  deleteProducto
} from '../data/dataProductos';

function CrudProductos() {
  const [productos, setProductos] = useState([]);
  const [nuevo, setNuevo] = useState({ nombre: '', descripcion: '', precio: '', stock: '', imagen: '' });
  const [editando, setEditando] = useState(null);
  const [mensaje, setMensaje] = useState('');
  const [error, setError] = useState('');

  // Cargar productos al montar el componente
  useEffect(() => {
    setProductos(getProductos());
  }, []);

  // Crear producto
  const handleNuevoChange = e => {
    setNuevo({ ...nuevo, [e.target.name]: e.target.value });
    setError('');
    setMensaje('');
  };
  const handleAgregar = e => {
    e.preventDefault();
    if (!nuevo.nombre || !nuevo.precio || !nuevo.stock || !nuevo.imagen) {
      setError('Completa todos los campos obligatorios.');
      return;
    }
    if (productos.some(p => p.nombre === nuevo.nombre)) {
      setError('Ya existe un producto con ese nombre.');
      return;
    }
    const nuevosProductos = addProducto({
      ...nuevo,
      precio: Number(nuevo.precio),
      stock: Number(nuevo.stock)
    });
    setProductos(nuevosProductos);
    setNuevo({ nombre: '', descripcion: '', precio: '', stock: '', imagen: '' });
    setMensaje('Producto agregado exitosamente.');
  };

  // Editar producto
  const handleEditar = producto => {
    setEditando(producto);
    setMensaje('');
    setError('');
  };
  const handleEditChange = e => setEditando({ ...editando, [e.target.name]: e.target.value });
  const handleGuardar = e => {
    e.preventDefault();
    if (!editando.nombre || !editando.precio || !editando.stock || !editando.imagen) {
      setError('Completa todos los campos obligatorios.');
      return;
    }
    const nuevosProductos = updateProducto({
      ...editando,
      precio: Number(editando.precio),
      stock: Number(editando.stock)
    });
    setProductos(nuevosProductos);
    setEditando(null);
    setMensaje('Producto actualizado.');
  };

  // Eliminar producto
  const handleEliminar = id => {
    if (window.confirm('¿Seguro que deseas eliminar este producto?')) {
      const nuevosProductos = deleteProducto(id);
      setProductos(nuevosProductos);
      setMensaje('Producto eliminado.');
    }
  };

  return (
    <div>
      <h3>Listado de Productos</h3>
      {mensaje && <div className="alert alert-success">{mensaje}</div>}
      {error && <div className="alert alert-danger">{error}</div>}
      <table className="table table-striped table-bordered align-middle">
        <thead className="table-dark">
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
              <td><img src={producto.imagen} alt={producto.nombre} width={50} style={{borderRadius:'6px',border:'2px solid #f39c12'}} /></td>
              <td>{producto.nombre}</td>
              <td>{producto.descripcion}</td>
              <td>${producto.precio.toLocaleString()}</td>
              <td>{producto.stock}</td>
              <td>
                <button className="btn btn-sm btn-primary me-2" onClick={() => handleEditar(producto)}>Editar</button>
                <button className="btn btn-sm btn-danger" onClick={() => handleEliminar(producto.id)}>Eliminar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <h4 className="mt-4">{editando ? 'Editar Producto' : 'Agregar Nuevo Producto'}</h4>
      <form className="mb-4 row g-2" onSubmit={editando ? handleGuardar : handleAgregar}>
        <div className="col-md-3">
          <input type="text" className="form-control" name="nombre" placeholder="Nombre" value={editando ? editando.nombre : nuevo.nombre} onChange={editando ? handleEditChange : handleNuevoChange} required />
        </div>
        <div className="col-md-3">
          <input type="text" className="form-control" name="descripcion" placeholder="Descripción" value={editando ? editando.descripcion : nuevo.descripcion} onChange={editando ? handleEditChange : handleNuevoChange} />
        </div>
        <div className="col-md-2">
          <input type="number" className="form-control" name="precio" placeholder="Precio" value={editando ? editando.precio : nuevo.precio} onChange={editando ? handleEditChange : handleNuevoChange} required min={0} />
        </div>
        <div className="col-md-2">
          <input type="number" className="form-control" name="stock" placeholder="Stock" value={editando ? editando.stock : nuevo.stock} onChange={editando ? handleEditChange : handleNuevoChange} required min={0} />
        </div>
        <div className="col-md-2">
          <input type="text" className="form-control" name="imagen" placeholder="/img/ejemplo.jpg" value={editando ? editando.imagen : nuevo.imagen} onChange={editando ? handleEditChange : handleNuevoChange} required />
        </div>
        <div className="col-12 mt-2">
          <button type="submit" className="btn btn-success me-2">{editando ? 'Guardar' : 'Agregar'}</button>
          {editando && <button type="button" className="btn btn-secondary" onClick={() => setEditando(null)}>Cancelar</button>}
        </div>
      </form>
    </div>
  );
}

export default CrudProductos;
