import { Link } from 'react-router-dom';
import './GameCard.css';

const GameCard = ({ game, showAddToWishlist = false, onAddToWishlist }) => {
  const getStars = (nota) => {
    const stars = Math.round((nota / 100) * 5);
    return '⭐'.repeat(stars) + '☆'.repeat(5 - stars);
  };

  return (
    <div className="game-card">
      <Link to={`/jogo/${game.id}`} className="game-card-link">
        <div className="game-card-image">
          <img src={game.imagem} alt={game.titulo} loading="lazy" />
          <div className="game-card-platform">{game.plataforma}</div>
        </div>
        
        <div className="game-card-content">
          <h3 className="game-card-title" title={game.titulo}>
            {game.titulo}
          </h3>
          
          <div className="game-card-rating">
            <span className="stars">{getStars(game.nota)}</span>
            <span className="score">{game.nota}/100</span>
          </div>
          
          <p className="game-card-comment">
            {game.comentario.length > 80 
              ? `${game.comentario.substring(0, 80)}...` 
              : game.comentario}
          </p>
        </div>
      </Link>
      
      {showAddToWishlist && (
        <button 
          className="btn-add-wishlist"
          onClick={() => onAddToWishlist(game)}
          title="Adicionar à Lista de Desejos"
        >
          ➕ Lista de Desejos
        </button>
      )}
    </div>
  );
};

export default GameCard;
