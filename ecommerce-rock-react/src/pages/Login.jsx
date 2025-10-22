import Layout from '../components/Layout';
import Login from '../components/Login';
import '../components/Login.css';

function LoginPage({ onLogin }) {
  return (
    <Layout>
      <section className="login-section">
        <h2>Iniciar Sesión</h2>
        <Login onLogin={onLogin} />
      </section>
    </Layout>
  );
}

export default LoginPage;
