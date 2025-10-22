import Layout from '../components/Layout';
import PanelAdmin from '../components/PanelAdmin';

function AdminPanel() {
  return (
    <Layout>
      <section className="admin-section">
        <PanelAdmin />
      </section>
    </Layout>
  );
}

export default AdminPanel;
