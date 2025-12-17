import { Link } from 'react-router-dom';
import './NotFound.css';

const NotFound = () => {
  return (
    <div className="not-found">
      <div className="not-found-content">
        <div className="not-found-icon">🎮</div>
        <h1 className="not-found-code">404</h1>
        <h2 className="not-found-title">🎮 Nível não encontrado!</h2>
        <p className="not-found-text">
          Ops! A página que você procura não existe neste universo.
        </p>
        <div className="not-found-actions">
          <Link to="/" className="not-found-btn btn-primary">
            🏠 Voltar para Início
          </Link>
          <Link to="/biblioteca" className="not-found-btn btn-secondary">
            📚 Ver Biblioteca
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
