import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Catalogo from './components/Catalogo';
import BlogAside from './components/BlogAside';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <div className="container py-5">
        <div className="row">
          <main className="col-lg-8">
            <Catalogo />
          </main>
          <BlogAside />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
