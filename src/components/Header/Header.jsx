import { Link, useLocation } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const location = useLocation();
  
  return (
    <header className="header">
      <div className="header-container">
        <Link to="/" className="logo">
          <span className="logo-icon">🎮</span>
          <span className="logo-text">Games Suggest</span>
        </Link>
        
        <nav className="nav">
          <Link 
            to="/" 
            className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}
          >
            Início
          </Link>
          <Link 
            to="/biblioteca" 
            className={`nav-link ${location.pathname === '/biblioteca' || location.pathname.startsWith('/jogo') ? 'active' : ''}`}
          >
            Biblioteca
          </Link>
          <Link 
            to="/wishlist" 
            className={`nav-link ${location.pathname === '/wishlist' ? 'active' : ''}`}
          >
            Lista de Desejos
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
