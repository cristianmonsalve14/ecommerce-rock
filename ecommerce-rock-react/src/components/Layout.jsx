// src/components/Layout.jsx
import './Layout.css';

function Layout({ children }) {
  return (
    <div className="layout-wrapper">
      <div className="layout-container">
        {children}
      </div>
    </div>
  );
}

export default Layout;

