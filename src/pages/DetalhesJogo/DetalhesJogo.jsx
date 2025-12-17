import { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { fetchGameById, fetchGames } from '../../data/api';
import Breadcrumb from '../../components/Breadcrumb/Breadcrumb';
import LoadingSpinner from '../../components/LoadingSpinner/LoadingSpinner';
import Button from '../../components/Button/Button';
import Alert from '../../components/Alert/Alert';
import './DetalhesJogo.css';

const DetalhesJogo = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [game, setGame] = useState(null);
  const [relatedGames, setRelatedGames] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadGame = async () => {
      try {
        setLoading(true);
        setError(null);
        
        // Carrega o jogo específico
        const gameData = await fetchGameById(id);
        setGame(gameData);

        // Carrega jogos relacionados (mesma plataforma)
        const allGames = await fetchGames();
        const related = allGames
          .filter(g => g.plataforma === gameData.plataforma && g.id !== gameData.id)
          .slice(0, 3);
        setRelatedGames(related);
        
      } catch (err) {
        setError('Jogo não encontrado');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    loadGame();
  }, [id]);

  if (loading) {
    return <LoadingSpinner message="Carregando detalhes do jogo..." />;
  }

  if (error || !game) {
    return (
      <div className="error-container">
        <Alert type="error" message={error || 'Jogo não encontrado'} />
        <Button variant="primary" onClick={() => navigate('/biblioteca')}>
          ← Voltar para Biblioteca
        </Button>
      </div>
    );
  }

  const getStars = (nota) => {
    const stars = Math.round((nota / 100) * 5);
    const fullStars = '⭐'.repeat(stars);
    const emptyStars = '☆'.repeat(5 - stars);
    return fullStars + emptyStars;
  };

  const breadcrumbItems = [
    { label: 'Início', link: '/' },
    { label: 'Biblioteca', link: '/biblioteca' },
    { label: game.titulo }
  ];

  return (
    <div className="detalhes-jogo">
      <div className="detalhes-container">
        <Breadcrumb items={breadcrumbItems} />

        <div className="game-layout">
          <div className="game-image-section">
            <div className="game-image-wrapper">
              <img 
                src={game.imagem} 
                alt={game.titulo}
                className="game-main-image"
              />
              <div className="platform-badge">{game.plataforma}</div>
            </div>
          </div>

          <div className="game-info-section">
            <h1 className="game-title">{game.titulo}</h1>
            
            <div className="game-rating-big">
              <div className="stars-display">{getStars(game.nota)}</div>
              <div className="rating-score">{game.nota}/100</div>
            </div>

            <div className="game-description">
              <h3>📝 Avaliação</h3>
              <p className="game-comment">{game.comentario}</p>
            </div>

            <div className="game-details-box">
              <h3>ℹ️ Informações</h3>
              <div className="info-row">
                <span className="info-label">🎮 Plataforma:</span>
                <span className="info-value">{game.plataforma}</span>
              </div>
              <div className="info-row">
                <span className="info-label">⭐ Nossa Nota:</span>
                <span className="info-value">{game.nota}/100</span>
              </div>
            </div>

            <div className="action-buttons">
              <Button 
                variant="secondary" 
                onClick={() => navigate('/biblioteca')}
              >
                ← Voltar para Biblioteca
              </Button>
            </div>
          </div>
        </div>

        {relatedGames.length > 0 && (
          <div className="related-section">
            <h2 className="related-title">
              Outros jogos de {game.plataforma}
            </h2>
            <div className="related-games">
              {relatedGames.map(relatedGame => (
                <Link
                  key={relatedGame.id}
                  to={`/jogo/${relatedGame.id}`}
                  className="related-card"
                >
                  <div className="related-image">
                    <img src={relatedGame.imagem} alt={relatedGame.titulo} />
                  </div>
                  <div className="related-info">
                    <h3 className="related-game-title">{relatedGame.titulo}</h3>
                    <div className="related-rating">
                      ⭐ {relatedGame.nota}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DetalhesJogo;
