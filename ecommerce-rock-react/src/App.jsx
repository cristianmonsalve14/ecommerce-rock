import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Carrito from './components/Carrito';
import Home from './pages/Home';
import CatalogoPage from './pages/Catalogo';
import AdminPanel from './pages/AdminPanel';
import LoginPage from './pages/Login';
import RegistroPage from './pages/Registro';
import ContactoPage from './pages/Contacto';
import NosotrosPage from './pages/Nosotros';
import BlogPage from './pages/Blog';

function App() {
  const [carrito, setCarrito] = useState([]);
  const [showCarrito, setShowCarrito] = useState(false);
  const [isAdmin, setIsAdmin] = useState(() => {
    return localStorage.getItem('isAdmin') === 'true';
  });

  useEffect(() => {
    const data = localStorage.getItem('carrito');
    if (data) setCarrito(JSON.parse(data));
  }, []);

  useEffect(() => {
    localStorage.setItem('carrito', JSON.stringify(carrito));
  }, [carrito]);

  const handleAddToCart = (producto) => {
    setCarrito(prev => {
      const existe = prev.find(item => item.id === producto.id);
      if (existe) {
        return prev.map(item =>
          item.id === producto.id
            ? { ...item, cantidad: item.cantidad + 1 }
            : item
        );
      } else {
        return [...prev, { ...producto, cantidad: 1 }];
      }
    });
  };

  const handleRemoveFromCart = (id) => {
    setCarrito(prev => prev.filter(item => item.id !== id));
  };

  const handleClearCart = () => {
    setCarrito([]);
  };

  const handleCheckout = () => {
    alert('¡Gracias por tu compra!');
    setCarrito([]);
  };

  const handleLogin = (correo, password) => {
    if (correo === 'admin@admin.com' && password === 'admin123') {
      setIsAdmin(true);
      localStorage.setItem('isAdmin', 'true');
      return true;
    }
    return false;
  };

  const handleLogout = () => {
    setIsAdmin(false);
    localStorage.removeItem('isAdmin');
  };

  return (
    <BrowserRouter>
      <div className="app-layout">
        <Navbar isAdmin={isAdmin} onLogout={handleLogout} />
        <main className="main-content">
          <Layout>
            <button
              className="btn btn-outline-warning mb-3"
              style={{ float: 'right' }}
              onClick={() => setShowCarrito(!showCarrito)}
            >
              🛒 Carrito ({carrito.reduce((acc, item) => acc + item.cantidad, 0)})
            </button>
            {showCarrito && (
              <Carrito
                carrito={carrito}
                onRemove={handleRemoveFromCart}
                onClear={handleClearCart}
                onCheckout={handleCheckout}
              />
            )}
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/catalogo" element={<CatalogoPage onAddToCart={handleAddToCart} />} />
              <Route path="/admin" element={isAdmin ? <AdminPanel /> : <Navigate to="/login" replace />} />
              <Route path="/login" element={<LoginPage onLogin={handleLogin} />} />
              <Route path="/registro" element={<RegistroPage />} />
              <Route path="/contacto" element={<ContactoPage />} />
              <Route path="/nosotros" element={<NosotrosPage />} />
              <Route path="/blog" element={<BlogPage />} />
            </Routes>
          </Layout>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;

