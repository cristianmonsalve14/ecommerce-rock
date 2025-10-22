import Layout from '../components/Layout';
import './Nosotros.css';

function NosotrosPage() {
  return (
    <Layout>
      <section className="nosotros-section">
        <h2>Sobre Nosotros</h2>
        <p className="nosotros-desc">
          Somos Poleras de Rock, una tienda apasionada por la música y la cultura rock. Nuestro objetivo es ofrecer poleras de alta calidad inspiradas en las bandas más legendarias, para que lleves tu pasión siempre contigo.
        </p>
        <div className="nosotros-equipo">
          <div className="equipo-card">
            <img src="/img/iron-maiden.jpg" alt="Equipo 1" />
            <h3>Camila</h3>
            <p>Fundadora & Diseñadora</p>
          </div>
          <div className="equipo-card">
            <img src="/img/metallica.jpg" alt="Equipo 2" />
            <h3>Benjamín</h3>
            <p>Atención al Cliente</p>
          </div>
          <div className="equipo-card">
            <img src="/img/red-hot-chili-peppers.jpg" alt="Equipo 3" />
            <h3>Valentina</h3>
            <p>Marketing & RRSS</p>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default NosotrosPage;
