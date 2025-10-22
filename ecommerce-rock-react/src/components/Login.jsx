import React, { useState } from 'react';
import './Login.css';

function Login({ onLogin }) {
  const [form, setForm] = useState({ correo: '', password: '' });
  const [error, setError] = useState('');

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError('');
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (onLogin) {
      const ok = onLogin(form.correo, form.password);
      if (!ok) {
        setError('Credenciales incorrectas. Intenta con admin@admin.com / admin123');
      }
    }
  };

  return (
    <section className="login-section">
      <h2>Iniciar Sesión</h2>
      <form className="login-form" onSubmit={handleSubmit}>
        <label>
          Correo
          <input type="email" name="correo" placeholder="tu@email.com" value={form.correo} onChange={handleChange} required />
        </label>
        <label>
          Contraseña
          <input type="password" name="password" placeholder="Contraseña" value={form.password} onChange={handleChange} required />
        </label>
        {error && <div style={{ color: 'red', marginBottom: '1rem' }}>{error}</div>}
        <button type="submit">Ingresar</button>
      </form>
    </section>
  );
}

export default Login;
