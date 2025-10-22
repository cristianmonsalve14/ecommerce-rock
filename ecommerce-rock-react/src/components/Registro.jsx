import React, { useState } from 'react';
import './Registro.css';

function Registro() {
  const [form, setForm] = useState({ nombre: '', apellidos: '', correo: '', password: '' });
  const [errores, setErrores] = useState({});
  const [enviado, setEnviado] = useState(false);

  const validar = () => {
    const errores = {};
    if (!form.nombre) errores.nombre = "El nombre es requerido";
    if (!form.apellidos) errores.apellidos = "Los apellidos son requeridos";
    if (!form.correo) {
      errores.correo = "El correo es requerido";
    } else if (!/^[\w-.]+@(duoc\.cl|profesor\.duoc\.cl|gmail\.com)$/.test(form.correo)) {
      errores.correo = "Correo no válido";
    }
    if (!form.password) {
      errores.password = "La contraseña es requerida";
    } else if (form.password.length < 4 || form.password.length > 10) {
      errores.password = "La contraseña debe tener entre 4 y 10 caracteres";
    }
    return errores;
  };

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrores({ ...errores, [e.target.name]: undefined });
  };

  const handleSubmit = e => {
    e.preventDefault();
    const val = validar();
    if (Object.keys(val).length === 0) {
      setEnviado(true);
      setForm({ nombre: '', apellidos: '', correo: '', password: '' });
    } else {
      setErrores(val);
    }
  };

  return (
    <section className="registro-section">
      <h2>Registro de Usuario</h2>
      {enviado && <div className="alert alert-success">¡Registro exitoso!</div>}
      <form className="registro-form" onSubmit={handleSubmit} noValidate>
        <label>
          Nombre
          <input type="text" className={`form-control ${errores.nombre ? 'is-invalid' : ''}`} name="nombre" value={form.nombre} onChange={handleChange} placeholder="Tu nombre" maxLength={50} required />
          {errores.nombre && <div className="invalid-feedback">{errores.nombre}</div>}
        </label>
        <label>
          Apellidos
          <input type="text" className={`form-control ${errores.apellidos ? 'is-invalid' : ''}`} name="apellidos" value={form.apellidos} onChange={handleChange} placeholder="Tus apellidos" maxLength={100} required />
          {errores.apellidos && <div className="invalid-feedback">{errores.apellidos}</div>}
        </label>
        <label>
          Correo
          <input type="email" className={`form-control ${errores.correo ? 'is-invalid' : ''}`} name="correo" value={form.correo} onChange={handleChange} placeholder="tu@email.com" maxLength={100} required />
          {errores.correo && <div className="invalid-feedback">{errores.correo}</div>}
        </label>
        <label>
          Contraseña
          <input type="password" className={`form-control ${errores.password ? 'is-invalid' : ''}`} name="password" value={form.password} onChange={handleChange} placeholder="Contraseña" maxLength={10} required />
          {errores.password && <div className="invalid-feedback">{errores.password}</div>}
        </label>
        <button type="submit" className="btn btn-warning">Registrarse</button>
      </form>
    </section>
  );
}

export default Registro;
