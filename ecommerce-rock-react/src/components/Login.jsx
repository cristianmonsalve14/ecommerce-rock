import React, { useState } from 'react';

function Login() {
  const [form, setForm] = useState({ correo: '', password: '' });
  const [errores, setErrores] = useState({});
  const [enviado, setEnviado] = useState(false);

  const validar = () => {
    const errores = {};
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
      setForm({ correo: '', password: '' });
    } else {
      setErrores(val);
    }
  };

  return (
    <section className="container py-5">
      <h2 className="text-center mb-4">Iniciar Sesión</h2>
      {enviado && <div className="alert alert-success">¡Inicio de sesión exitoso!</div>}
      <form className="mx-auto" style={{maxWidth: 500}} onSubmit={handleSubmit} noValidate>
        <div className="mb-3">
          <label className="form-label">Correo</label>
          <input type="email" className={`form-control ${errores.correo ? 'is-invalid' : ''}`} name="correo" value={form.correo} onChange={handleChange} maxLength={100} />
          {errores.correo && <div className="invalid-feedback">{errores.correo}</div>}
        </div>
        <div className="mb-3">
          <label className="form-label">Contraseña</label>
          <input type="password" className={`form-control ${errores.password ? 'is-invalid' : ''}`} name="password" value={form.password} onChange={handleChange} maxLength={10} />
          {errores.password && <div className="invalid-feedback">{errores.password}</div>}
        </div>
        <button type="submit" className="btn btn-warning">Ingresar</button>
      </form>
    </section>
  );
}

export default Login;
