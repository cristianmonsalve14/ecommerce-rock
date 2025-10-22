import React, { useState } from 'react';
import './Login.css';
import { useAuth } from './AuthContext';
import { useNavigate } from 'react-router-dom';

function Login({ onLogin }) {
  const [form, setForm] = useState({ correo: '', password: '' });
  const [error, setError] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError('');
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (!form.correo || !form.password) {
      setError('Usuario y contraseña son obligatorios');
      return;
    }
    if (onLogin) {
      const ok = onLogin(form.correo, form.password);
      if (!ok) {
        setError('Credenciales incorrectas. Intenta con admin@admin.com / admin123');
        return;
      }
    }
    // Simular usuario autenticado
    login({ correo: form.correo, nombre: form.correo.split('@')[0] });
    navigate('/blog');
  };

  return (
    <section className="login-section">
      <h2>Iniciar Sesión</h2>
      <form className="login-form" onSubmit={handleSubmit}>
        <label htmlFor="login-correo">Correo
          <input id="login-correo" type="email" name="correo" placeholder="tu@email.com" value={form.correo} onChange={handleChange} />
        </label>
        <label htmlFor="login-password">Contraseña
          <input id="login-password" type="password" name="password" placeholder="Contraseña" value={form.password} onChange={handleChange} />
        </label>
        {error && <div style={{ color: 'red', marginBottom: '1rem' }}>{error}</div>}
        <button type="submit">Ingresar</button>
      </form>
    </section>
  );
}

export default Login;
