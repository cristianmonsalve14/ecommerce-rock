import Layout from '../components/Layout';
import Hero from '../components/Hero';
import BlogAside from '../components/BlogAside';
import '../components/HomeLayout.css';
import { GiGuitarHead } from 'react-icons/gi';

function Home() {
  return (
    <Layout>
      <section className="home-header-box">
        <div className="home-title-row">
          <GiGuitarHead className="home-title-icon" />
          <h1 className="home-title">Bienvenido a Poleras de Rock</h1>
        </div>
        {/* Imagen animada eliminada por solicitud del usuario */}
        <div className="home-separator"></div>
        <p className="home-description">
          Bienvenido a la tienda online de poleras para fanáticos del rock. Descubre diseños exclusivos inspirados en las mejores bandas, calidad premium y novedades cada semana. ¡Exprésate con estilo y vive la música en tu outfit!
        </p>
      </section>
      <div className="home-main-layout">
        <main className="home-main-content">
          <section className="hero-section">
            <Hero />
          </section>
        </main>
        <BlogAside />
      </div>
    </Layout>
  );
}

export default Home;
