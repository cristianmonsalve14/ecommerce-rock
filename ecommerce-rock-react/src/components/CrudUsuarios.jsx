import React, { useState } from 'react';

const usuariosIniciales = [
  {
    id: 1,
    run: "19011022K",
    nombre: "Juan",
    apellidos: "Pérez Soto",
    correo: "juan@duoc.cl",
    tipo: "Cliente"
  },
  {
    id: 2,
    run: "20123456K",
    nombre: "Ana",
    apellidos: "Gómez Ruiz",
    correo: "ana@gmail.com",
    tipo: "Administrador"
  }
];

function CrudUsuarios() {
  const [usuarios, setUsuarios] = useState(usuariosIniciales);
  const [nuevo, setNuevo] = useState({ run: '', nombre: '', apellidos: '', correo: '', tipo: 'Cliente' });
  const [editando, setEditando] = useState(null);

  // Crear usuario
  const handleNuevoChange = e => setNuevo({ ...nuevo, [e.target.name]: e.target.value });
  const handleAgregar = e => {
    e.preventDefault();
    setUsuarios([...usuarios, { ...nuevo, id: Date.now() }]);
    setNuevo({ run: '', nombre: '', apellidos: '', correo: '', tipo: 'Cliente' });
  };

  // Editar usuario
  const handleEditar = usuario => setEditando(usuario);
  const handleEditChange = e => setEditando({ ...editando, [e.target.name]: e.target.value });
  const handleGuardar = e => {
    e.preventDefault();
    setUsuarios(usuarios.map(u => u.id === editando.id ? editando : u));
    setEditando(null);
  };

  // Eliminar usuario
  const handleEliminar = id => setUsuarios(usuarios.filter(u => u.id !== id));

  return (
    <div>
      <h3>Listado de Usuarios</h3>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>RUN</th>
            <th>Nombre</th>
            <th>Apellidos</th>
            <th>Correo</th>
            <th>Tipo</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {usuarios.map(usuario => (
            <tr key={usuario.id}>
              <td>{usuario.run}</td>
              <td>{usuario.nombre}</td>
              <td>{usuario.apellidos}</td>
              <td>{usuario.correo}</td>
              <td>{usuario.tipo}</td>
              <td>
                <button className="btn btn-sm btn-primary me-2" onClick={() => handleEditar(usuario)}>Editar</button>
                <button className="btn btn-sm btn-danger" onClick={() => handleEliminar(usuario.id)}>Eliminar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Formulario para agregar nuevo usuario */}
      <h4>Agregar Nuevo Usuario</h4>
      <form className="mb-4" onSubmit={handleAgregar}>
        <div className="row g-2">
          <div className="col">
            <input type="text" className="form-control" name="run" placeholder="RUN" value={nuevo.run} onChange={handleNuevoChange} required minLength={7} maxLength={9} />
          </div>
          <div className="col">
            <input type="text" className="form-control" name="nombre" placeholder="Nombre" value={nuevo.nombre} onChange={handleNuevoChange} required maxLength={50} />
          </div>
          <div className="col">
            <input type="text" className="form-control" name="apellidos" placeholder="Apellidos" value={nuevo.apellidos} onChange={handleNuevoChange} required maxLength={100} />
          </div>
          <div className="col">
            <input type="email" className="form-control" name="correo" placeholder="Correo" value={nuevo.correo} onChange={handleNuevoChange} required maxLength={100} />
          </div>
          <div className="col">
            <select className="form-select" name="tipo" value={nuevo.tipo} onChange={handleNuevoChange}>
              <option value="Administrador">Administrador</option>
              <option value="Cliente">Cliente</option>
              <option value="Vendedor">Vendedor</option>
            </select>
          </div>
          <div className="col-auto">
            <button type="submit" className="btn btn-success">Agregar</button>
          </div>
        </div>
      </form>

      {/* Formulario para editar usuario */}
      {editando && (
        <form className="mb-4" onSubmit={handleGuardar}>
          <h4>Editar Usuario</h4>
          <div className="row g-2">
            <div className="col">
              <input type="text" className="form-control" name="run" value={editando.run} onChange={handleEditChange} required minLength={7} maxLength={9} />
            </div>
            <div className="col">
              <input type="text" className="form-control" name="nombre" value={editando.nombre} onChange={handleEditChange} required maxLength={50} />
            </div>
            <div className="col">
              <input type="text" className="form-control" name="apellidos" value={editando.apellidos} onChange={handleEditChange} required maxLength={100} />
            </div>
            <div className="col">
              <input type="email" className="form-control" name="correo" value={editando.correo} onChange={handleEditChange} required maxLength={100} />
            </div>
            <div className="col">
              <select className="form-select" name="tipo" value={editando.tipo} onChange={handleEditChange}>
                <option value="Administrador">Administrador</option>
                <option value="Cliente">Cliente</option>
                <option value="Vendedor">Vendedor</option>
              </select>
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

export default CrudUsuarios;
