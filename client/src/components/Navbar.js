import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const { pathname } = useLocation();

  return (
    <header className="nav-wrapper">
      <div className="nav-inner">
        <h1 className="nav-logo">🔗 LinkVault</h1>
        <nav className="nav-buttons">
          <Link to="/" className={`nav-item ${pathname === '/' ? 'active' : ''}`}>Home</Link>
          <Link to="/add" className={`nav-item ${pathname === '/add' ? 'active' : ''}`}>Add Link</Link>
        </nav>
      </div>
    </header>
  );
}
